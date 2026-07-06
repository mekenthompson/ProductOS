---
title: "UAT-UX debug: solve from the user outcome"
slug: skills/uat-ux-debug
name: uat-ux-debug
description: >
  Debug a UAT failure or production UX miss from the USER OUTCOME, not the
  single bug. It is the user-outcome counterpart to engineering debugging. Use when
  a feature technically "works" but the user's job didn't get done, when a UAT
  scenario fails, or when something shipped broken because nobody exercised it.
  Runs the loop: failure → which job/UX goal it breached → is the spec
  under-specified or did code diverge → is there test/UAT coverage → what change
  deterministically delivers the outcome (proven across a fuzz corpus, not just
  the happy path). Triggers on natural phrasings including: "why did this UX
  fail", "debug this UAT miss", "this works but the user's job didn't get done",
  "understand the root of why this was a UX debacle", "did we actually fix the
  outcome or just patch the bug", "what's the durable fix here", "solve this
  from the user outcome". Part of ProductOS; pairs with the Job Spec, and
  the probabilistic-UAT and UAT-coverage practices.
---

# UAT-UX debug: solve from the user outcome

A failure is a **broken job promise**, and the bug is just its mechanism. If you
anchor on the bug you ship a point-patch and the failure class recurs. Anchor on
the outcome and the fix converges on the UX the job actually promised.

## Step 0: Severity gate (decide how much pipeline to run)

Classify the failure: **hard** (visible breakage), **soft** (degraded but
works), **silent** (metrics look fine; the real failure is invisible), or
**adoption** (user quietly stops trusting/using the surface).

- **silent + adoption** → run the full pipeline below. These are the
  expensive-to-discover ones and the ones that erode the product.
- **cosmetic hard with an obvious cause** → patch it + seed the corpus (Step 3)
  and stop. Don't ritualize.

## Step 1: Map the failure to a job-spec clause + UX goal

Start from the **user-visible end-state**, not the stack trace. Name the job the
behaviour betrays, find the clause, then descend to mechanism *last*. Starting
from the trace finds the bug and misses the breach.

- What did the user actually experience / end up doing? (e.g. "got hand-fed
  shell commands by their own agent")
- Which job/outcome does that violate? Quote the clause.
- If the project has an explicit spec system, use it. (In switchroom: the
  `reference/` dir, with vision pillars + JTBDs + the three principle checks:
  Docs / Defaults / Consistency. A "no" on any check is a redesign, not a
  follow-up.)

## Step 2: Gap detection: under-specified vs diverged

The test: **does the spec permit the observed behaviour?**

- **Permitted / silent on it** → the spec is **under-specified** → the result is
  a proposed spec clause. *Absence of a clause is a first-class finding*: it's
  the most common case and the dangerous one (silence is exactly what let the
  failure ship). Don't treat "there's no clause" as a dead end; it's the output.
- **Forbidden but done anyway** → the implementation **diverged** → code fix.

A single failure is often **both** (a missing clause AND a code bug). Classify
each finding separately; they get different fixes (spec edit vs code change).

## Step 3: UAT coverage + corpus seed

- Is there a UAT scenario for this **outcome**? If not, the feature shipped
  unexercised. Propose one (assert the outcome, not just "no error").
- **Seed the fuzz corpus from the failure CLASS, not the instance.** Identify
  the dimensions that vary (latency, retries, double-fire, ordering, partial
  failure) and the invariants that must always hold (exactly-once, always
  reaches a terminal state, never silently degrades). Encode them as a property
  test over the corpus so the class can't silently recur.
- If you bound coverage (top-N, sampling, no-retry), **say so**. Silent
  truncation reads as "covered everything."

## Step 4: Solve from the outcome, not the point bug

Propose the change that makes the **outcome** deterministic. Then apply the
arbiter:

> [!IMPORTANT]
>
> **The fuzz corpus is the arbiter of "outcome-fixed" vs "bug-patched."**
> A change is outcome-true only if the UAT-for-the-outcome passes ACROSS the
> corpus, not just the happy path. If your patch is green on the happy path but
> the corpus still breaks an invariant, you patched the bug. You didn't solve
> the outcome.

Common tell: the one-line fix (bump a timeout, add a retry) clears the reported
symptom but leaves an invariant (idempotency, ordering, terminal-state)
unprotected. Add what the corpus demands.

## Output

Report, in this order:
1. **The breached job promise** (one line: the UX, not the bug).
2. **Root cause(s)**, each tagged `spec-gap` or `code-divergence`, with
   `file:line`.
3. **Coverage**: the missing UAT scenario + the corpus seed (dimensions +
   invariants).
4. **The outcome-true fix**, and an explicit note on why the obvious
   point-patch is insufficient (which invariant it leaves open).

---

## Worked example: one-tap payout confirmation

**Breached promise:** "request a payout in the app, tap Confirm once, the funds
move exactly once." Observed end-state: the Confirm tap spun, appeared to fail,
and the app told the user to retry, so they tapped again. The promise inverted
into "confirm, doubt it worked, retry, hope it didn't double-send."
Classification: **silent** (metrics green: the payment service logged
`status=ok` on each call, the client logged a timeout; the only signal was the
user's second tap) + **adoption** (make someone fear a double payout once and
they stop trusting one-tap forever). → full pipeline.

**Step 1:** violates "you confirm once and trust it" and fails the Feedback +
Consistency principle checks (the user got no durable "received, in flight"
state they could see).

**Step 2, both:**
- *spec-gap*: nothing specified the client-side contract while a confirmation
  is in flight (must show a "request received" state it can see; must not
  silently re-submit; repeated confirms must be idempotent; on backend delay
  say "still working," never present it as a failure). The silence WAS the
  failure mode.
- *code-divergence*: the client used a flat 10s timeout for an operation the
  payment service can take minutes to settle; timed out by construction, while
  the server-side path allowed far longer and masked it.

**Step 3:** no UAT for the outcome (it was deferred as "needs the live payment
rail"). Corpus seed = {confirm result × retry burst size × settlement
latency}; invariants = exactly-once payout, every request reaches a terminal
state, never double-send. Encoded as a property test over the corpus.

**Step 4:** point-patch (10s → several-minute timeout) passes the happy path
but the corpus retry-burst still double-sends → not outcome-true. The
outcome-true fix added **idempotent payout requests** (collapse identical
in-flight confirms → exactly-once settlement) on top of the longer per-request
timeout. Shipped behind a staged rollout.

---

## Related

- [Agentic Delivery](../../guides/agentic-delivery.md) -- the outcome-UAT gate this skill debugs against
- [Job Spec Template](../../templates/job-spec.md) -- the job-spec clauses Step 1 maps failures to
- [amend-durable-doc](../amend-durable-doc/SKILL.md) -- how a proposed spec clause (a Step 2 `spec-gap` finding) gets applied: body edits proceed; outcome changes need a decision record
