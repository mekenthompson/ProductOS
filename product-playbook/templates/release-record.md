---
title: Release Record Template
description: One record per release per phase. The evidence for the Launch Readiness Check, the brief for Support and Sales, and the ledger the two-week read scores.
last_reviewed: 2026-10-05
icon: "📋"
---

# Release Record: [Feature] · [Phase]

One record per release, per phase. Copy it, fill it in, link it from the walkthrough invite. The measures come from the [Job Spec](../../templates/job-spec.md); do not restate them, link them. For a Full Spec release the RFC's [Rollout](../../templates/rfc.md) table says what each phase's audience and exit criteria are; this record says whether they were met.

**Release:** [name]
**Phase:** Private Preview / Public Preview / GA
**Path:** Quick Win / Lightweight / Full Spec
**Launch owner:** [PM, or Tech Lead where there is no PM]
**Job Spec:** [link] · **RFC or brief:** [link]
**Approver:** [Head of Product, or the delegated PM + Tech Lead]

---

## Why this phase, and why now

[One or two lines. Material or small, and which question this phase answers: holds up / solves the problem / will they pay / can the business carry it.]

---

## Measures

_Linked, not restated. If a line here is not in the Job Spec, fix the Job Spec._

- **Job to be done:** [link to the Job Spec's job statement]
- **Working looks like:** [leading indicator] from [baseline] to [target] by [DD/MM/YYYY]. Signal: [name].
- **Not working looks like:** [guardrail] crosses [threshold], or the abandon signal: [from the Job Spec]. Then we: [hold / pull / talk to every account].
- **Dashboard:** [link]

## Pricing hypothesis

- **Price point:** [e.g. per seat per month]
- **Metric and model:** [per seat / per site / per transaction / bundled]
- **Who pays:** [role at the customer]
- **Evidence so far:** [usage, willingness to pay, won and lost conversations]

---

## Launch Readiness Check

_Tick, link evidence, or write N/A and why. Lines from [Gates and Approvals](../gates.md#gate-2-launch-readiness-check)._

**It works**

- [ ] Customer path walked (outcome UAT) · evidence:
- [ ] Tests and regressions green · evidence:
- [ ] Kill switch tested (rollback proven) · evidence:

**We will know what happened**

- [ ] Measures live, baseline running · dashboard:
- [ ] Monitoring owner named · who / until:

**The business is ready**

- [ ] Support briefed and ready · who said yes:
- [ ] Sales has seen it and can sell it · who said yes:
- [ ] Marketing ready, or not needed · date / "no launch":
- [ ] Value and price validated · evidence:

**Scaled to the stakes**

- [ ] Production-readiness validated · evidence:
- [ ] Product principles check · notes:
- [ ] [other lines from the gate, as the stakes demand]

**Signed off**

- [ ] Walkthrough and approval · date / yes in writing:

---

## Switched on

- **Audience:** [named accounts / opt-in cohort / everyone]
- **On:** DD/MM/YYYY
- **Preview label showing:** [product / docs / opt-in screen] (n/a at GA)
- **Two-week read booked for:** DD/MM/YYYY

---

## Two-week read (DD/MM/YYYY)

- **Working metric:** [actual vs target]
- **Not-working signal:** [hit / not hit]
- **Pricing call:** Right / Over / Under · because:
- **Call:** Fired / Partial / Missed / Unscoreable · because:
- **Decision:** Widen / Hold / Pull · owner:

_After GA, the 30-day and 90-day reviews run from the [Post-Launch Review Template](./post-launch-review.md)._

---

## Related

- [Gates and Approvals](../gates.md): the checklist this record carries
- [Release Phases](../release-phases.md): what each phase commits us to
- [Post-Launch Review](./post-launch-review.md): the two-week read and the post-GA reviews
- [Job Spec](../../templates/job-spec.md): where the measures live
