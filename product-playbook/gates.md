---
title: Gates and Approvals
description: "Can I move forward? The gate checklists between phase groups (Shaping Checkpoint, Launch Readiness Check, GA sign-off, Launch Retro Check), and who approves each"
last_reviewed: 2026-09-07
icon: "✅"
---

# Gates and Approvals

**Can I move forward?** A gate is a checkpoint between phase groups in the [lifecycle](./lifecycle.md): a short list of things that must be true, and a named approver. This page is the whole list. Copy the checklist for the gate you're at into your tracker and work it down.

Every requirement applies on every path. What changes with the stakes is the **depth**: a Quick Win answers each line in a sentence, Full Spec work answers it properly. The stakes come from the [decision framework](./decision-framework.md) (Signal → Standard → Speed). The gates never disappear, their depth tracks the stakes.

Each checklist is split in two: **Always** (the line holds at any depth) and **Scaled to the stakes** (lighter for Quick Win / Lightweight, fuller for Full Spec).

---

## Gate Summary

| Gate | What It Means | Who Approves |
|------|---------------|--------------|
| [**Shaping Checkpoint**](#gate-1-shaping-checkpoint) | Green light to spec | PM + Tech Lead; Head of Product for substantial work |
| [**Launch Readiness Check**](#gate-2-launch-readiness-check) | Green light to widen past Private Preview | PM + Head of Product; PM + Tech Lead for small / quick-win work |
| [**GA sign-off**](#ga-sign-off) | Green light to make it the default for everyone | GTM Lead + PM; Head of Product for substantial work |
| [**Launch Retro Check**](#gate-3-launch-retro-check) | Did the bet pay off? | PM (performance review) |

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

> ✅ **Green light to widen past Private Preview.** Private preview is successful, critical issues resolved, ready for a wider audience.

**Always**

- [ ] Deployed to production behind a flag
- [ ] Metrics and monitoring in place
- [ ] **Outcome UAT complete:** the user's job validated end-to-end (job × surface), independent of unit tests
- [ ] **Success metrics instrumented:** events defined in code, dashboard or query exists
- [ ] **Guardrail metrics identified:** what must NOT degrade
- [ ] Critical preview tickets resolved
- [ ] **Product principles check:** "If they need the docs, we've failed" / "Batteries included, assembly optional" / "One mind built this"

**Scaled to the stakes**

- [ ] **Production-readiness validated:** security / reliability / scale / availability, to the level the stakes demand
- [ ] Architecture documented
- [ ] Demo artefacts created
- [ ] Support team trained
- [ ] Private preview feedback summarised

**Who approves:** PM + Head of Product. PM + Tech Lead for small / quick-win work.

**Outcome:** The change has been through initial customer testing, with any necessary updates made, and can move to Public Preview and then General Availability following the agreed Go to Market steps.

> 💡 Two distinct checks here, not one. The **outcome UAT** proves the user's job is done (customer-ready, Product). **Production-readiness** proves it's secure / reliable / scalable / available to the level the stakes demand (production-ready, Engineering). Unit-green ≠ outcome-validated ≠ production-ready. None implies the others. See [Agentic Delivery](../guides/agentic-delivery.md).

---

## GA sign-off

> ✅ **Green light to make it the default.** Public Preview has held at scale; the feature is ready to be on for everyone.

This is the "final GA approval" step in GTM Launch Planning, and the exit from Public Preview in [Release Phases](./release-phases.md). The hard proving happened at the Launch Readiness Check; this gate confirms the wider audience hasn't changed the answer, and that the launch is ready to be announced.

**Always**

- [ ] Public Preview exit criteria met: the adoption and stability thresholds written in the RFC's [Rollout](../templates/rfc.md) table
- [ ] No open critical issues from the Public Preview cohort
- [ ] Rollback path confirmed: the flag still turns it off, and no phase transition leaves data in a broken state
- [ ] Release notes and changelog written

**Scaled to the stakes**

- [ ] Customer documentation written
- [ ] Support team trained on the final behaviour
- [ ] Sales team trained (positioning, value)
- [ ] Launch materials ready (blog, email, social)
- [ ] Messaging current: the copy kit reflects what actually shipped (see [Product Marketing](./product-marketing.md))

**Who approves:** GTM Lead + PM. Head of Product for substantial work, the same rule as Gate 2.

**Outcome:** The project moves to Ready for Launch. On the release date the flag goes on for all customers (or ramps by percentage) and the announcement goes out.

---

## Gate 3: Launch Retro Check

> 🔄 **Did the bet pay off?** After launch, track whether the bet paid off with the structured post-launch reviews (cadence in the [template](./templates/post-launch-review.md)).

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
- [Release Phases](./release-phases.md): how widely the feature is on at each point, and the flag state
- [Decision Framework](./decision-framework.md): the path (Quick Win / Lightweight / Full Spec) that sets gate depth
- [Writing an RFC → Approval](../guides/writing-an-rfc.md#approval): RFC approval depth and SLAs by path
- [Agentic Delivery](../guides/agentic-delivery.md): the outcome-UAT and production-readiness gates in full
- [Post-Launch Review Template](./templates/post-launch-review.md): the Launch Retro Check, run three times
