# Strategy: <Product Name>

**Period:** <e.g. H1 2026>
**Status:** <draft / active / superseded>

> This is a STRATEGY.md file. It holds the current strategic view: which jobs are funded, which are deferred, and why. Its git history is the record of *what* changed; the `decisions/` folder holds the *why*. Read them together.
>
> Each claim in the Situation is tagged **evidenced** / **hypothesis** / **to-validate**. Those labels are not decoration — they tell you what is load-bearing and what is provisional. See [guides/strategy-as-code.md](../guides/strategy-as-code.md) for the method.

---

## Situation

> The diagnosis. The market reality, the customer state, the competitive position — the things that are true right now that this strategy responds to. Phrase each as a bolded one-liner followed by a short elaboration. Tag every claim.
>
> Tags: **[evidenced]** = data you can point to · **[hypothesis]** = reasoned belief, not yet confirmed · **[to-validate]** = open question

**<Bold one-line claim about the market or customer>** [evidenced / hypothesis / to-validate]

<Short paragraph with the substance behind the claim. Link to data or name the source. If hypothesis or to-validate, say what you're basing it on.>

**<Bold one-line claim about the competitive position>** [evidenced / hypothesis / to-validate]

<Short paragraph.>

**<Bold one-line claim about the customer or retention dynamic>** [evidenced / hypothesis / to-validate]

<Short paragraph.>

> Add or remove claim blocks as needed. Aim for the minimum number that explains the strategy: everything here should be load-bearing for the thesis below.

---

## Strategy

> The thesis: given the situation above, what is the overall move? One short paragraph — the governing logic that connects the diagnosis to the allocation.

<The thesis in plain language. Why this allocation, given this situation. What problem you are solving at the strategic level.>

### Investment allocation

> Where the capacity goes this period. The percentages are the strategic signal — they force the trade-off to be explicit. Adjust the buckets to fit your reality.

| Pillar | Capacity | Rationale |
|---|---|---|
| <Pillar name> | <X>% | <One-line why> |
| <Pillar name> | <X>% | <One-line why> |
| <Pillar name> | <X>% | <One-line why> |
| Debt / resilience | <X>% | <One-line why> |

### Decision tests

> The gate every initiative must pass to be funded this period. These are not principles (those live in the anchors) — they are the strategic criteria specific to this period's thesis.

An initiative is funded only if it:

- <Test 1 — e.g. "directly advances one of the named pillars below">
- <Test 2 — e.g. "can ship a meaningful outcome within the period">
- <Test 3 — e.g. "has an evidenced or hypothesis-level customer need in the Situation above">
- <Test 4>

> Keep the list short. If every proposed initiative passes, the tests are not doing any work.

---

## Pillars

> The funded bets. Each pillar names its thesis, the outcome you are building toward, and the Job Specs it funds. The Job Specs are the durable outcome contracts — strategy funds them; it does not replace them.

### Pillar 1: <Name>

**Thesis:** <Why this is the right bet this period. What customer or market reality it responds to.>

**Outcome / measure:** <How you will know this pillar is working. Observable, not internal. Link to a Job Spec's "Prove it" section where relevant.>

**Job Specs funded:**

> Link to the actual Job Spec file when it exists in the same repo; use a bare slug when it doesn't.

- `<job-slug>` — <one-line description>
- `<job-slug>` — <one-line description>

---

### Pillar 2: <Name>

**Thesis:** <…>

**Outcome / measure:** <…>

**Job Specs funded:**

> Link to the actual Job Spec file when it exists in the same repo; use a bare slug when it doesn't.

- `<job-slug>` — <one-line description>

---

> Add or remove pillars to match the actual allocation. Each pillar should map to a row in the investment table above.

---

## Explicit Deferrals

> What we are deliberately NOT doing this period, and why. The absence of a decision is itself a decision — make it legible. A deferral names the thing, says why it is not funded now, and says what would need to be true for it to be funded later.

| Deferred | Why not now | What would change this |
|---|---|---|
| <Job or capability> | <Concise reason — not enough evidence, not enough capacity, wrong timing> | <The signal or condition that would move this up> |
| <Job or capability> | <…> | <…> |

---

## Data Gaps

> The open hypotheses and to-validate claims from the Situation, with their validation paths. This is the section that ages fastest. It should shrink over time as gaps close — or grow honestly if new unknowns emerge.

**<Gap 1: the open hypothesis or to-validate claim>**
- What would confirm it: <the evidence or signal that would make this evidenced>
- What would falsify it: <the evidence or signal that would kill or reframe it>
- How to get it: <the action — customer interviews, usage data pull, win/loss analysis, etc.>

**<Gap 2>**
- What would confirm it: <…>
- What would falsify it: <…>
- How to get it: <…>

> If a gap closes between reviews, move the claim to **evidenced** in the Situation and note the update in the next decision record.

---

## Why This Wins

> The coherent-action argument. Given the situation and the allocation above, why does this particular set of bets produce the outcome — rather than a different allocation of the same capacity?
>
> This is not a sales pitch. It is the reasoning that should survive an adversarial challenge. A reviewer (human or agent) should be able to read this and understand the logic, find the weak points, and name what would break it.

<Two to four short paragraphs. Name the key dependencies the strategy rests on. Name what it is betting against. Name what has to be true for this to compound — and what would falsify it.>

---

> **Changes to this file:** every material update goes with a dated decision record in `decisions/`. See [Decision Record template](../templates/decision-record.md) for the format. The commit diff + the decision record together are the complete record of a strategic change.
