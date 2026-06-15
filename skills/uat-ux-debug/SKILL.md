---
name: uat-ux-debug
description: >
  Debug a UAT failure or production UX miss from the USER OUTCOME, not the
  single bug — the user-outcome counterpart to engineering debugging. Use when
  a feature technically "works" but the user's job didn't get done, when a UAT
  scenario fails, or when something shipped broken because nobody exercised it.
  Runs the loop: failure → which job/UX goal it breached → is the spec
  under-specified or did code diverge → is there test/UAT coverage → what change
  deterministically delivers the outcome (proven across a fuzz corpus, not just
  the happy path). Triggers on natural phrasings including: "why did this UX
  fail", "debug this UAT miss", "this works but the user's job didn't get done",
  "understand the root of why this was a UX debacle", "did we actually fix the
  outcome or just patch the bug", "what's the durable fix here", "solve this
  from the user outcome". Part of ProductOS (KEN-56); anchors KEN-57 (job
  spec), KEN-29 (probabilistic UAT), KEN-60 (UAT coverage).
---

# UAT-UX debug — solve from the user outcome

A failure is a **broken job promise**, and the bug is just its mechanism. If you
anchor on the bug you ship a point-patch and the failure class recurs. Anchor on
the outcome and the fix converges on the UX the job actually promised.

## Step 0 — Severity gate (decide how much pipeline to run)

Classify the failure: **hard** (visible breakage), **soft** (degraded but
works), **silent** (metrics look fine; the real failure is invisible), or
**adoption** (user quietly stops trusting/using the surface).

- **silent + adoption** → run the full pipeline below. These are the
  expensive-to-discover ones and the ones that erode the product.
- **cosmetic hard with an obvious cause** → patch it + seed the corpus (Step 3)
  and stop. Don't ritualize.

## Step 1 — Map the failure to a job-spec clause + UX goal (KEN-57)

Start from the **user-visible end-state**, not the stack trace. Name the job the
behaviour betrays, find the clause, then descend to mechanism *last*. Starting
from the trace finds the bug and misses the breach.

- What did the user actually experience / end up doing? (e.g. "got hand-fed
  shell commands by their own agent")
- Which job/outcome does that violate? Quote the clause.
- If the project has an explicit spec system, use it. (In switchroom: the
  `reference/` dir — vision pillars + JTBDs + the three principle checks:
  Docs / Defaults / Consistency. A "no" on any check is a redesign, not a
  follow-up.)

## Step 2 — Gap detection: under-specified vs diverged

The test: **does the spec permit the observed behaviour?**

- **Permitted / silent on it** → the spec is **under-specified** → the result is
  a proposed spec clause. *Absence of a clause is a first-class finding* — it's
  the most common case and the dangerous one (silence is exactly what let the
  failure ship). Don't treat "there's no clause" as a dead end; it's the output.
- **Forbidden but done anyway** → the implementation **diverged** → code fix.

A single failure is often **both** (a missing clause AND a code bug). Classify
each finding separately — they get different fixes (spec edit vs code change).

## Step 3 — UAT coverage + corpus seed (KEN-60 / KEN-29)

- Is there a UAT scenario for this **outcome**? If not, the feature shipped
  unexercised — propose one (assert the outcome, not just "no error").
- **Seed the fuzz corpus from the failure CLASS, not the instance.** Identify
  the dimensions that vary (latency, retries, double-fire, ordering, partial
  failure) and the invariants that must always hold (exactly-once, always
  reaches a terminal state, never silently degrades). Encode them as a property
  test over the corpus so the class can't silently recur.
- If you bound coverage (top-N, sampling, no-retry), **say so** — silent
  truncation reads as "covered everything."

## Step 4 — Solve from the outcome, not the point bug

Propose the change that makes the **outcome** deterministic. Then apply the
arbiter:

> **The fuzz corpus is the arbiter of "outcome-fixed" vs "bug-patched."**
> A change is outcome-true only if the UAT-for-the-outcome passes ACROSS the
> corpus, not just the happy path. If your patch is green on the happy path but
> the corpus still breaks an invariant, you patched the bug — you didn't solve
> the outcome.

Common tell: the one-line fix (bump a timeout, add a retry) clears the reported
symptom but leaves an invariant (idempotency, ordering, terminal-state)
unprotected. Add what the corpus demands.

## Output

Report, in this order:
1. **The breached job promise** (one line — the UX, not the bug).
2. **Root cause(s)**, each tagged `spec-gap` or `code-divergence`, with
   `file:line`.
3. **Coverage**: the missing UAT scenario + the corpus seed (dimensions +
   invariants).
4. **The outcome-true fix**, and an explicit note on why the obvious
   point-patch is insufficient (which invariant it leaves open).

---

## Worked example — klanker `config_propose_edit` (switchroom, 2026-06-15)

**Breached promise:** "change config from Telegram, operator just taps Approve,
no host CLI." Observed end-state: the agent hand-fed the operator
`sed … && switchroom apply`. The promise inverted into nothing-but-SSH.
Classification: **silent** (metrics green — hostd logged nothing, gateway logged
`status=ok`; the only signal was the agent's confused narration) + **adoption**
(burn the operator once and they go back to SSH forever). → full pipeline.

**Step 1:** violates "you hold the leash" (control from Telegram) and fails the
Docs + Defaults principle checks (needed to know the yaml path and `sed`).

**Step 2 — both:**
- *spec-gap*: nothing specified the agent-side contract while an approval is
  pending (must get a "card posted" ack it can see; must not re-fire; proposals
  must be idempotent; on infra failure say "I can't, here's why" — never
  silently downgrade to SSH). The silence WAS the failure mode.
- *code-divergence*: the agent MCP wire used a flat 10s for an op that blocks
  server-side up to 10 min awaiting the tap (`src/mcp/hostd/server.ts`) — timed
  out by construction; the web path used 11 min and masked it.

**Step 3:** no UAT for the outcome (it was deferred as "needs the approval
card"). Corpus seed = {approval verdict × re-fire burst size × operator tap
latency}; invariants = exactly-once apply, every caller terminal, never
double-write. Encoded as a 60-schedule property test.

**Step 4:** point-patch (10s → 11 min) passes the happy path but the corpus
double-fire still double-writes → not outcome-true. The outcome-true fix added
**idempotent proposals** (collapse identical in-flight proposals → exactly-once
apply) on top of the per-op timeout. Shipped as switchroom PR #2381.
