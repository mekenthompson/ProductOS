# ProductOS

The evolution of a product playbook into an operating system. It's still a
playbook — how to run product, anchored on the customer's job and its
outcome — but it also carries the **automation and agent-executable
guidance** (skills, templates, the operating contract) that make it *run*,
not just advise. That's the difference between PM guidance and an OS.

ProductOS is the method, not an instance of itself. The **working example in
action is [switchroom](https://github.com/mekenthompson/switchroom)** — when
a guide here needs a worked example, it points there.

> Augment the judgment, automate the delivery. Canonical and private for now;
> a public "lite" kit is a later export. See [`PLAN.md`](PLAN.md).

## The hierarchy

```
Vision / Principles / Invariants   (three anchors)
        → Product Spec             (per product, owns the job list)
        → Job Specs                (per job, durable, UAT-verifiable)
        → RFCs / PRs               (ship-coupled delivery, not a named tier)
```

Verdict rule (4 clauses): a change ships only when it advances a vision
outcome ∧ satisfies its Job Spec ∧ passes every principle ∧ crosses no
invariant.

## The method

- [`index.md`](index.md) — the reading guide; start here.
- [`product-playbook.md`](product-playbook.md) — the six-phase loop
  (Learn → Decide → Shape → Build → Launch → Sell).
- The three anchor how-to guides: [`product-vision.md`](product-vision.md),
  [`guides/product-principles.md`](guides/product-principles.md),
  [`guides/invariants.md`](guides/invariants.md).
- [`guides/`](guides/) — how to write each artifact:
  [agentic-delivery](guides/agentic-delivery.md) (the verdict rule + four
  parts), [jtbd-guide](guides/jtbd-guide.md),
  [decision-framework](guides/decision-framework.md),
  [product-specs](guides/product-specs.md) (the RFC guide), personas, rice,
  and more.
- [`templates/`](templates/) — blank shapes:
  [`job-spec.md`](templates/job-spec.md) (canonical), [`rfc.md`](templates/rfc.md),
  post-launch-review, research, customer-call, ritual-review.
- [`AGENTS.md`](AGENTS.md) — the terse, agent-executable operating contract.
  Read this to *execute* the method.

## Example skills (how to run product using ProductOS)

- [`skills/create-job-spec`](skills/create-job-spec/SKILL.md) — interview to
  shared alignment on a job, then write a durable Job Spec. The entry point.
- [`skills/uat-ux-debug`](skills/uat-ux-debug/SKILL.md) — debug a UX failure
  from the user outcome, not the point bug.

## The worked example in action

**[switchroom](https://github.com/mekenthompson/switchroom/tree/docs/job-spec-golden/reference)**
is the canonical instantiation: real anchors, a product spec, and 19 Job
Specs that show the method filled in and proven against a live UAT harness.
When a guide here needs a worked example, it points there.

## Writeups (the series)

- [`writeups/uat-ux-debug-klanker.md`](writeups/uat-ux-debug-klanker.md) — a
  UX failure, debugged from the outcome (a switchroom worked example).

## Tracking

KEN-56 (ProductOS) · KEN-35 (series) · KEN-57 (Job Spec) · KEN-29
(probabilistic UAT) · KEN-60 (UAT coverage).
