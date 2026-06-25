---
title: [Product Name] product spec
status: active — the product-level layer; owns the job index
anchors: [vision.md, principles.md, invariants.md]
---

# [Product Name] product spec

> The product-level layer between the anchors (vision / principles /
> invariants) and the individual job specs. It says what the product is,
> the **outcomes** it delivers, how it **functions** at a high level, and it
> **owns the list of jobs** the product serves. Job specs `serves:` one of
> the outcome slugs named here.

## The product, in one line

[One sentence: what the product is, who it's for, and what it enables them to do.]

## Outcomes

Every job the product serves ladders up to exactly one of these. A change
that advances none of them is out of scope.

### `[outcome-slug]` — [short outcome name]

[2–4 sentences: what this outcome is, who it matters to, and why it's worth
pursuing. Write from the user's perspective — what does their world look like
when this outcome is realised?]

**Signal:** [the specific, measurable check that tells you this outcome is
holding — a metric, a ratio, or a CI-enforced invariant. Name it precisely
enough that an engineer could instrument it. Example: "median time from X to
Y, measured per persona, reported monthly."]

### `[outcome-slug]` — [short outcome name]

[Description.]

**Signal:** [measurable check.]

### `[outcome-slug]` — [short outcome name]

[Description.]

**Signal:** [measurable check.]

### `[outcome-slug]` — [short outcome name]

[Description.]

**Signal:** [measurable check.]

> Keep outcomes to four or fewer. More than four means the product hasn't
> made hard choices yet. Each outcome must carry a Signal; an outcome without
> a signal is a slogan.

## How it functions, at a high level

[3–6 sentences describing how the product works at the level a new team
member needs to understand scope — not a feature list, not architecture.
What are the main moving parts and how do they relate? Runtime and
implementation detail lives in docs/; this section stays at outcome altitude.]

## The job index

The jobs this product serves, grouped by the outcome they ladder up to.
Each links its job spec.

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md])
- [`[job-slug].md`]([path/to/job-slug.md])

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md])
- [`[job-slug].md`]([path/to/job-slug.md])

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md])

### [outcome-slug]

- [`[job-slug].md`]([path/to/job-slug.md])

---

## Related

- [Product Vision](../anchors/product-vision.md) — the anchor this spec elaborates
- [Product Principles](../anchors/product-principles.md) — the standards each job is built to
- [Invariants](../anchors/invariants.md) — the by-construction lines no job may cross
- [Job Spec Template](./job-spec.md) — the durable per-job outcome contract
