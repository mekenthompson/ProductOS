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
- [`skills/uat-ux-debug`](skills/uat-ux-debug/SKILL.md) — debug a UAT/UX failure
  from the user outcome. The user-outcome counterpart to engineering debugging.
  Loop: failure → job-spec check (**KEN-57**) → UAT coverage
  (**KEN-60** / **KEN-29** probabilistic UAT) → durable UX fix.

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
