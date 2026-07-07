---
title: Product Spec Template
description: The product-level layer between the anchors and the job specs. Names the product, its North Star, the outcomes it delivers, and the jobs it serves. Job Specs serve the outcomes named here.
status: active; the product-level layer; owns the job index
anchors: [product-vision.md, product-principles.md, invariants.md]
---

# [Product Name] product spec

> The product-level layer between the anchors (vision / principles /
> invariants) and the individual Job Specs. It says what the product is,
> the **North Star** it is judged on, the **outcomes** it delivers, how it
> **functions** at a high level, and it **owns the list of jobs** the product
> serves. Job Specs `serves:` one of the outcome slugs named here.
>
> One rung, two forms: the Job Spec names the outcome's *leading indicator* in
> words; the job index below carries its quantified form, the *job metric*;
> that rolls up into the outcome *Signal*; the Signals drive the *North Star*.
> Ladder: **leading indicator (named) → job metric (quantified) → outcome
> Signal → North Star.** The [Measurement Chain](../anchors/measurement-chain.md)
> is the anchor that owns that full leading-indicator to North-Star map. A job
> that can't name a metric rolling into its outcome's Signal is a job you can't
> tell is working.

## The product, in one line

[One sentence: what the product is, who it's for, and what it enables them to do.]

## North Star

> The single measurable metric the whole product is judged on. If it moves,
> the product is winning; if it stalls, nothing else matters. Derive it from
> the vision: the North Star is the vision made countable, not a number
> bolted on afterwards. It should decompose into the outcome Signals below:
> they are its drivers. Where an industry-standard metric fits (DORA, SPACE,
> retention, activation, NPS), anchor to it so the number reads as credible
> rather than invented.

- **Metric:** [one crisply named number]
- **Definition:** [what is counted, over what window, for whom (tight enough
  that two people compute the same figure)]
- **Now → Target:** [baseline] → [target] by [date]
- **Why this one:** [the line from the vision to this number]

## Outcomes

Every job the product serves ladders up to exactly one of these. A change
that advances none of them is out of scope. Each outcome carries one
**Signal**: a measurable driver of the North Star. These outcomes also feed
the messaging pillars: see [Positioning and Messaging](../guides/positioning-and-messaging.md).

> [!CAUTION]
>
> Keep outcomes to four or fewer: more than four means the product hasn't
> made hard choices yet. Each outcome must carry a Signal; an outcome without
> a measurable signal is a slogan.

### `[outcome-slug]` -- [short outcome name]

[2–4 sentences: what this outcome is, who it matters to, and why it's worth
pursuing. Write from the user's perspective: what does their world look like
when this outcome is realised?]

**Signal:** [a hard number with a direction and a target, the measurable
driver this outcome contributes to the North Star: "[metric], [now] →
[target] by [date]." Name it precisely enough that an engineer could
instrument it. A CI-enforced invariant ("zero X, enforced in CI") is a valid
Signal where the bar is binary.]
**Guardrail:** [optional; the counter-metric this outcome must not regress
while it chases its Signal.]

### `[outcome-slug]` -- [short outcome name]

[Description.]

**Signal:** [measurable driver, now → target.]

### `[outcome-slug]` -- [short outcome name]

[Description.]

**Signal:** [measurable driver, now → target.]

### `[outcome-slug]` -- [short outcome name]

[Description.]

**Signal:** [measurable driver, now → target.]

## How it functions, at a high level

[3–6 sentences describing how the product works at the level a new team
member needs to understand scope, not a feature list, not architecture.
What are the main moving parts and how do they relate? Runtime and
implementation detail lives in docs/; this section stays at outcome altitude.]

## The job index

The jobs this product serves, grouped by the outcome they ladder up to.
Each links its job spec and names the metric it moves: the job metric, the
quantified form of the **leading indicator named in that Job Spec**, which
rolls up to its outcome's Signal.

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]
- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]
- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md]) -- [the metric this job moves]

---

## Evidence & confidence

> *Optional. Scale to the stakes.* The evidence behind the outcomes and their
> Signals, and how much you trust it. This is the product-level bet: that these
> outcomes, once moved, deliver the North Star. Thin evidence is not a blocker,
> it just means low confidence, carried honestly into RICE. Link out, don't
> restate: see [Discovery](../pm-playbook/discovery.md), and the
> [Research](../pm-playbook/templates/research.md) and [Customer Call](../pm-playbook/templates/customer-call.md)
> templates.

- **Evidence:** <source -- what it shows>; <source -- what it shows>. Strongest
  first.
- **Confidence:** <1-4> on the [RICE Confidence scale](../pm-playbook/rice.md).
  More evidence raises it.

---

## Related

- [Product Vision](../anchors/product-vision.md) -- the anchor this spec elaborates
- [Product Principles](../anchors/product-principles.md) -- the standards each job is built to
- [Invariants](../anchors/invariants.md) -- the by-construction lines no job may cross
- [Job Spec Template](./job-spec.md) -- the durable per-job outcome contract whose `serves:` points back at an outcome here
- [Discovery](../pm-playbook/discovery.md) -- the craft of grounding a job in evidence before it earns a place in the index
