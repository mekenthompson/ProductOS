# ProductOS

ProductOS is a product operating system: a playbook for running product —
anchored on the customer's job and its outcome — plus the **automation and
agent-executable guidance** (skills, templates, the operating contract) that
make it *run*, not just advise. That's what makes it an OS and not just PM
guidance.

ProductOS is the method, not an instance of itself. The **working example in
action is [switchroom](https://github.com/mekenthompson/switchroom)** — when
a guide here needs a worked example, it points there.

> Augment the judgment, automate the delivery. Canonical and private for now;
> a public "lite" kit is a later export. See [`PLAN.md`](./PLAN.md).

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

## Repo layout

The top level reads as the OS. The human PM craft — the playbook a person
reads — lives under [`pm-playbook/`](./pm-playbook/).

- [`anchors/`](./anchors/) — the three anchors and their how-to guides:
  [`product-vision.md`](./anchors/product-vision.md),
  [`product-principles.md`](./anchors/product-principles.md),
  [`invariants.md`](./anchors/invariants.md).
- [`guides/`](./guides/) — the OS method:
  [agentic-delivery](./guides/agentic-delivery.md) (the verdict rule + four
  parts), [jtbd-guide](./guides/jtbd-guide.md),
  [release-phases](./guides/release-phases.md). (The RFC how-to,
  [product-specs](./guides/product-specs.md), lives here too.)
- [`templates/`](./templates/) — the OS blank shapes:
  [`job-spec.md`](./templates/job-spec.md) (canonical) and
  [`rfc.md`](./templates/rfc.md).
- [`skills/`](./skills/) — agent-executable skills (see below).
- [`writeups/`](./writeups/) — the series (see below).
- [`pm-playbook/`](./pm-playbook/) — the human PM craft: the six-phase loop, the
  handbook, and the discipline guides + their templates. Start at
  [`pm-playbook/index.md`](./pm-playbook/index.md).
- [`AGENTS.md`](./AGENTS.md) — the terse, agent-executable operating contract.
  Read this to *execute* the method.

## The playbook (human PM craft)

- [`pm-playbook/index.md`](./pm-playbook/index.md) — the reading guide; start here.
- [`pm-playbook/product-playbook.md`](./pm-playbook/product-playbook.md) — the
  six-phase loop (Learn → Decide → Shape → Build → Launch → Sell).
- [`pm-playbook/pm-handbook.md`](./pm-playbook/pm-handbook.md) — the handbook.
- The discipline guides — decision-framework, delivery-standards, discovery,
  customer-feedback, rice, personas, headline-metric, lifecycle, tools-we-use —
  and the human templates under
  [`pm-playbook/templates/`](./pm-playbook/templates/) (post-launch-review, research,
  customer-call, ritual-review).

## Example skills (how to run product using ProductOS)

- [`skills/create-job-spec`](./skills/create-job-spec/SKILL.md) — interview to
  shared alignment on a job, then write a durable Job Spec. The entry point.
- [`skills/uat-ux-debug`](./skills/uat-ux-debug/SKILL.md) — debug a UX failure
  from the user outcome, not the point bug.

## The worked example in action

**[switchroom](https://github.com/mekenthompson/switchroom/tree/docs/job-spec-golden/reference)**
is the canonical instantiation: real anchors, a product spec, and 19 Job
Specs that show the method filled in and proven against a live UAT harness.
When a guide here needs a worked example, it points there.

## Writeups (the series)

- [`writeups/uat-ux-debug-klanker.md`](./writeups/uat-ux-debug-klanker.md) — a
  UX failure, debugged from the outcome (a switchroom worked example).

## Tracking

KEN-56 (ProductOS) · KEN-35 (series) · KEN-57 (Job Spec) · KEN-29
(probabilistic UAT) · KEN-60 (UAT coverage).
