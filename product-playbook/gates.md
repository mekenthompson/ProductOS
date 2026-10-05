---
title: Gates and Approvals
description: "Can I move forward? The Shaping Checkpoint, the Launch Readiness Check that runs before every release phase, the stop rules, the Launch Retro Check, and who approves each"
last_reviewed: 2026-10-05
icon: "✅"
---

# Gates and Approvals

**Can I move forward?** A gate is a checkpoint in the [lifecycle](./lifecycle.md): a short list of things that must be true, and a named approver. This page is the whole list. Copy the checklist for the gate you're at into the [release record](./templates/release-record.md) and work it down.

Every requirement applies on every path. What changes with the stakes is the **depth**: a Quick Win answers each line in a sentence, Full Spec work answers it properly. The stakes come from the [decision framework](./decision-framework.md) (Signal → Standard → Speed). The gates never disappear, their depth tracks the stakes.

Each checklist is split in two: **Always** (the line holds at any depth) and **Scaled to the stakes** (lighter for Quick Win / Lightweight, fuller for Full Spec).

---

## Gate Summary

| Gate | What It Means | When it runs | Who Approves |
|------|---------------|---|--------------|
| [**Shaping Checkpoint**](#gate-1-shaping-checkpoint) | Green light to spec | Once, before build | PM + Tech Lead; Head of Product for substantial work |
| [**Launch Readiness Check**](#gate-2-launch-readiness-check) | Green light to put it in front of customers, or in front of more of them | Before every [release phase](./release-phases.md): Private Preview, Public Preview, GA | Head of Product. Delegated to PM + Tech Lead once earned (below) |
| [**Launch Retro Check**](#gate-3-launch-retro-check) | Did the bet pay off? | Two weeks after each phase; 30 and 90 days after GA | PM (performance review) |

---

## Gate 1: Shaping Checkpoint

> ✅ **Green light to spec.** The problem is real, the approach is sound, and it's worth investing in.

**Always**

- [ ] Technical feasibility confirmed with engineering
- [ ] **Vision check:** this moves a named outcome and its Signal (where one number captures the whole product, that Signal is the single headline metric)
- [ ] **Persona identified:** which [persona](../anchors/product-vision.md) has this problem
- [ ] **Evidence supports the bet:** a validated need with research behind it, not just a good idea

**Scaled to the stakes**

- [ ] [RFC](../guides/writing-an-rfc.md) written and reviewed (lightweight or optional for small / obvious fixes)
- [ ] Customer evidence, 3+ examples
- [ ] [RICE](./rice.md) scored (Lightweight and Full Spec work)

**Who approves:** PM + Tech Lead. Head of Product sign-off for substantial work.

**Outcome:** Product, Engineering and the broader stakeholder group are aligned on project scope, success criteria and priority. The project moves to Readying for Build.

---

## Gate 2: Launch Readiness Check

> ✅ **Green light to change what a customer experiences.** Turning a flag on for one account is a release, so this gate runs before Private Preview, again before Public Preview, and again before GA. Same list every time. An unticked line means stop: tick it, link the evidence, or write N/A and why.

**Always**

*It works*

- [ ] **Customer path walked.** Outcome UAT passed: the user's job done end to end (job × surface), on the real path, independent of unit tests. For a preview, the Preview label is showing in the product and the docs. Result in the record.
- [ ] **Tests and regressions green.** The suite passes and nothing that already worked has broken.
- [ ] **Kill switch tested.** Rollback proven: the flag flipped off and back on in production, no customer data broken either way.

*We will know what happened*

- [ ] **Measures live.** The Job Spec's [Measures of success](../templates/job-spec.md) name the Signal and leading indicator; the events fire on the real customer path; a baseline is running; the dashboard is linked in the record. Working looks like: the leading indicator moving toward its target. Not working looks like: a guardrail crossing its threshold, or the Job Spec's abandon signal firing.
- [ ] **Monitoring owner named.** A person and a date in the record. They watch it from switch-on to the two-week read.

*The business is ready*

- [ ] **Support briefed and ready.** Walkthrough done, limits and escalation known, Support lead says yes.
- [ ] **Sales has seen it and can sell it.** Seen it working, knows who it is for and the limits, knows exactly what this phase lets them commit to (see [commitments](./release-phases.md#what-each-phase-commits-us-to)).
- [ ] **Marketing ready, or not needed.** Materials and date agreed, built from the real product, or "no launch" in writing.
- [ ] **Value and price validated.** Before a preview: the hypothesis is written (price point, metric, model, who pays). Before GA: preview evidence backs it or has changed it (usage, willingness to pay, won and lost conversations).

*Signed off*

- [ ] **Walkthrough and approval.** The approver has seen it live, on the real customer path, with the lines above ticked. Yes in writing.

**Scaled to the stakes**

- [ ] **Production-readiness validated:** security / reliability / scale / availability, to the level the stakes demand
- [ ] **Product principles check:** each [principle](../anchors/product-principles.md) run against the shipped behaviour
- [ ] Architecture documented
- [ ] Demo artefacts created
- [ ] Preview feedback summarised (second and third runs)
- [ ] Release notes, changelog and customer documentation written (third run)
- [ ] Messaging current: the copy kit reflects what actually shipped (third run; see [Product Marketing](./product-marketing.md))

**Done gets stricter.** The line is the same at every run; the bar moves with the commitment.

| Line | Before Private Preview | Before GA |
|---|---|---|
| Customer path walked | The PM, on a real account | Someone outside the build team, on a real account |
| Measures live | Events firing, baseline started | Leading indicator read across the preview cohort, guardrails quiet |
| Support briefed | Issues route to the PM | Trained, in the runbooks and help centre |
| Sales can sell it | Knows what *not* to say | Trained on positioning, value and price |
| Value and price | Hypothesis written | Evidence in, price locked |

**Who approves:** Head of Product, every run. A team earns delegated sign-off on small releases (Quick Win, Lightweight) through a run of clean release records and honest two-week scores; the Head of Product decides when, and says so in writing. Material (Full Spec) releases stay with the Head of Product.

**Outcome:** the flag goes on for the phase's audience and no wider. Named accounts, the opt-in cohort, or everyone, as the [release phase](./release-phases.md) says. The two-week read is in the calendar before the flag flips.

> 💡 Three distinct proofs inside this gate, none implies the others. **Outcome UAT** proves the user's job is done (customer-ready, Product). **Production-readiness** proves it's secure / reliable / scalable / available to the level the stakes demand (production-ready, Engineering). **Measures live** proves you will be able to read whether it worked. Unit-green ≠ outcome-validated ≠ production-ready ≠ measurable. See [Agentic Delivery](../guides/agentic-delivery.md) and [Product Analytics](./product-analytics.md).

---

## Stop rules

We do not release when:

- Any Launch Readiness line is unticked and has no evidence or written N/A.
- The kill switch has been built but not flipped in production.
- Customer data could be changed or lost by switching on or off.
- Support says no, or nobody owns monitoring.
- The measures cannot be read in product analytics on the real path.
- Sales has committed to something the release phase does not allow, including an SLA on a preview.
- A preview is switched on without the Preview label in the product and the docs.
- The pricing hypothesis is not written before a preview, or the evidence is not in before GA.
- The approver has not seen it live. A recording or a demo environment is not the real path.

Stopping is cheap at preview and expensive at GA. That is the whole reason the phases exist.

---

## Gate 3: Launch Retro Check

> 🔄 **Did the bet pay off?** Two weeks after each phase, read the measures and decide whether to widen. After GA, run the full post-launch reviews and decide whether to keep investing.

**The two-week read (every phase)**

- [ ] **Working or not,** against the Job Spec's Measures of success: leading indicator vs target, guardrails, abandon signal
- [ ] **Pricing evidence** recorded (previews)
- [ ] **Call scored:** Fired / Partial / Missed / Unscoreable, with the reason
- [ ] **Decision made:** Widen · Hold · Pull

**The post-GA reviews (30 and 60–90 days)**

- [ ] **Product performance:** actual metrics compared to RFC predictions
- [ ] **Vision check:** did this move a named outcome and its Signal?
- [ ] **Persona adoption:** are the target personas using it?
- [ ] **Mechanism scored** (90-day review): the RFC's commercial mechanism graded Fired / Partial / Missed / Unscoreable
- [ ] **Decision made:** Accelerate · Iterate · Pivot · Investigate · Stop

**Who approves:** PM, as a performance review of the bet rather than a permission to proceed.

Use the [Post-Launch Review Template](./templates/post-launch-review.md) at each interval; it carries the review cadence and the recommendation matrix. Stopping is not failure. Continuing to invest in something the data says isn't working, that's failure.

---

## If there's disagreement

A gate that won't close is settled by the [escalation path](./project-standards.md#escalation): the two parties first, then Head of Product on scope and timeline, then executive leadership only if strategic direction is affected.

---

## Related

- [Lifecycle](./lifecycle.md): the statuses these gates sit between
- [Release Phases](./release-phases.md): what counts as a release, why we phase, how widely the feature is on at each point, and what each phase commits us to
- [Release Record](./templates/release-record.md): where the checklist, the evidence and the two-week score live
- [Decision Framework](./decision-framework.md): the path (Quick Win / Lightweight / Full Spec) that sets gate depth
- [Writing an RFC → Approval](../guides/writing-an-rfc.md#approval): RFC approval depth and SLAs by path
- [Agentic Delivery](../guides/agentic-delivery.md): the outcome-UAT and production-readiness gates in full
- [Post-Launch Review Template](./templates/post-launch-review.md): the two-week read and the Launch Retro Check
