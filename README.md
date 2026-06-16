# ProductOS

Operating system for building product the way it should be built — anchored on
**user outcomes**, not features or bugs. The thought-leadership series (spine:
**KEN-35**) turns the day-to-day practice into reusable skills and writeups.

> Anchor project: **KEN-56** (ProductOS).

## Principles in play

- **User-failure-as-first-class.** Every failure is one of four kinds — *hard*
  (visible), *soft* (degraded), *silent* (metrics look fine), *adoption* (user
  quietly stops trusting it). Silent and adoption failures are the ones that
  kill products, because nothing red lights up.
- **Solve from the outcome, not the point bug.** The bug is a mechanism; the
  failure is a broken job promise. Fix the promise.
- **The fuzz corpus is the arbiter.** A change is outcome-true only if the
  UAT-for-the-outcome passes across the corpus, not just the happy path.

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
