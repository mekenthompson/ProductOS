# A UX failure, debugged from the outcome

*ProductOS series (KEN-35) · worked example for the `uat-ux-debug` skill ·
2026-06-15*

## The hour that looked like a bug and was actually a broken promise

An admin agent — call it the operator's ops bot — was asked to make a small
config change: grant another agent a capability by adding it to a list in the
config file. The product has a feature exactly for this: the agent proposes the
change, the operator gets a Telegram card, taps **Approve**, and it applies. No
SSH, no editor, no yaml. That's the whole promise: *you hold the leash from your
phone.*

What actually happened over the next hour:

- The agent's proposal "timed out" every time.
- It assumed the call failed and **re-fired** — repeatedly.
- The operator's chat filled with near-identical approval cards. "Which one do I
  tap?" They tapped several. Sent screenshots. "I did… is this done yet?"
- The change landed **twice** (a duplicate list entry).
- Finally the agent gave up on its own feature and pasted the operator a raw
  shell command to run by hand: `sed … && switchroom apply`.

If you debug this as an engineer, you find *a bug* (a wrong timeout) and fix it.
If you debug it as a product person, you find that **the job's core promise
inverted** — "no shell" became "nothing but shell" — and the timeout is just how
it happened. Those are different fixes. Only one of them stops it recurring.

## Step 1 — Name the breached promise, not the stack trace

Start from what the **user experienced**: they got hand-fed shell commands by
their own assistant. Which job does that betray? "Control from chat, no host
CLI." Against the product's own principle checks it fails two: *can you use it
without docs?* (no — you needed to know the file path and `sed`) and *does it
work with zero config?* (no — it fell back to a shell).

Descend to mechanism only now: the agent-facing call used a **10-second** wire
timeout, but the operation **blocks server-side for up to 10 minutes** waiting
for a human to tap the card. Ten seconds against a ten-minute human decision —
it timed out *by construction*. The feature had, in effect, never worked
end-to-end from an agent; a different code path (the web dashboard, with an
11-minute timeout) had quietly masked it.

## Step 2 — Two findings, two kinds

A single failure is usually both an implementation bug and a spec hole. Tag them
separately, because they need different fixes:

- **Code divergence:** the timeout. The implementation contradicted the op's
  own design (an approval-gated, human-paced operation).
- **Spec gap (the important one):** *nothing in the spec said what the agent
  should do while an approval is pending.* It didn't say "you'll get a 'card
  posted' acknowledgement you can see." It didn't say "do not re-fire." It
  didn't say "a duplicate proposal must be idempotent." It didn't say "on a real
  failure, say so honestly — never silently downgrade to asking for a shell
  edit." That **silence was the failure mode.** The implementation was free to
  fail this way because nothing forbade it.

The most common — and most dangerous — finding in product debugging is *the
clause that doesn't exist.* Absence of a spec isn't a dead end; it's the result.

## Step 3 — Coverage, and seeding the corpus

Was there a test for this **outcome**? No — it had been deferred as "needs the
approval card to drive." That deferral is exactly why a guaranteed-fail timeout
sat there undetected. The lesson: *a feature that has never been exercised
end-to-end against a real, slow human is a feature that has never shipped.*

Then the move that makes it durable (KEN-29): seed the fuzz corpus from the
failure **class**, not the one incident. The class here is "an approval-gated
action under variable human tap latency, possibly re-fired." The dimensions that
vary: the operator's verdict (approve / deny / never-taps), how many times the
agent re-fires, and the tap delay. The invariants that must hold on **every**
schedule: the action applies **exactly once**, every caller reaches a terminal
state (never hangs), and a re-fire never double-writes. Encode that as a
property test over the corpus and the class can't silently come back.

## Step 4 — The fix, and the arbiter that tells you it's the right one

The tempting fix is the one-liner: bump the timeout from 10 seconds to 11
minutes. It turns the reported symptom green. **It is not the fix.**

Here is the principle the whole skill turns on:

> **The fuzz corpus is the arbiter of "outcome-fixed" versus "bug-patched."**
> A change is outcome-true only if the test for the *outcome* passes across the
> corpus — not just the happy path.

Run the timeout-only patch against the corpus and the *double-fire* schedule
still double-writes. Green on the happy path, broken on the class. So the
outcome-true fix is the timeout **plus** making proposals **idempotent**:
identical in-flight proposals collapse onto a single approval card and apply
exactly once. Now the corpus is green across every schedule — and the operator
can tap as slowly, or the agent re-fire as clumsily, as reality demands, and the
change still lands once, from chat, with no shell in sight.

## The throughline

The shift this example teaches: from *"we fixed the bug the agent hit"* to
*"the UX this job promised is now deterministic, and the class of failure behind
it is fenced off."* That is the difference between maintenance and product.

---

*Mechanics, for the curious:* shipped as switchroom PR #2381 — per-op wire
timeout (the approval op gets a window that outlasts the human) and daemon-side
idempotent proposals, with a 60-schedule property test as the corpus seed. The
generalizable part isn't the code; it's the four steps above.
