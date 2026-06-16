# ProductOS

The executable operating system a product leader runs their org on: the
method that keeps work anchored to the customer's job, plus the skills that
automate the PM work of running it. The canonical, private home of the
method (the executable evolution of the product-playbook); the public "lite"
kit and the thought-leadership series (spine: **KEN-35**) are later exports.

> Anchor project: **KEN-56** (ProductOS). Augment the judgment, automate the
> delivery. See [`PLAN.md`](PLAN.md) for the strategy and roadmap.

## Design contract

ProductOS is defined by its own method. The anchors live in
[`reference/`](reference/):

- [`reference/vision.md`](reference/vision.md) — the why (human-owned).
- [`reference/principles.md`](reference/principles.md) — the built-well
  standards.
- [`reference/invariants.md`](reference/invariants.md) — the lines we won't
  cross.
- [`reference/product-spec.md`](reference/product-spec.md) — the outcomes,
  how it functions, and the job/skill index.

Each PM job ProductOS automates becomes a Job Spec ([template](templates/job-spec.md))
delivered by a skill.

## Contents

### Skills (invocable)
- [`skills/create-job-spec`](skills/create-job-spec/SKILL.md) — interview the
  user to shared alignment on a job, then write a durable Job Spec
  (**KEN-57**) against the template and anchors. Interview one question at a
  time; do not write until everything is agreed. The entry point to the
  method.
- [`skills/uat-ux-debug`](skills/uat-ux-debug/SKILL.md) — debug a UAT/UX failure
  from the user outcome. The user-outcome counterpart to engineering debugging.
  Loop: failure → job-spec check (**KEN-57**) → UAT coverage
  (**KEN-60** / **KEN-29** probabilistic UAT) → durable UX fix.

### Templates
- [`templates/job-spec.md`](templates/job-spec.md) — the ratified Job Spec
  shape: dual-audience (human + agent), one screen, `serves:`/`invariants:`
  up-anchor, merged good/bad, UAT wired to real scenarios + fuzz corpus,
  verdict. See [`PLAN.md`](PLAN.md) for the spec hierarchy it sits in.

### Writeups (the series)
- [`writeups/uat-ux-debug-klanker.md`](writeups/uat-ux-debug-klanker.md) —
  "A UX failure, debugged from the outcome." The first worked example: an admin
  agent's config-edit-from-chat collapsed into hand-fed shell commands. Used as
  the narrative spine for the `uat-ux-debug` skill.

## Issue anchors

| Anchor | Meaning |
| --- | --- |
| KEN-56 | ProductOS (project) |
| KEN-35 | Product OS thought-leadership series (spine) |
| KEN-57 | Job spec — the stated job/UX outcome a change must serve |
| KEN-29 | Probabilistic UAT — fuzz the failure class so it can't silently recur |
| KEN-60 | UAT coverage — a scenario per outcome |
