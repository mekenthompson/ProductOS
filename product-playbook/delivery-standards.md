---
title: Delivery Standards
description: "From idea to shipped feature: the five-step version, and where the detail lives (lifecycle, gates, release phases, project standards)"
last_reviewed: 2026-10-05
icon: "📋"
---

# Delivery Standards

**From idea to shipped feature.** This page is the front door to the delivery workflow. It gives you the five-step version, then points you at the page that answers your actual question. The workflow is tracker-agnostic: the statuses and gates are conventions you implement in whichever issue tracker your team uses (Linear, Jira, Shortcut, GitHub Projects, Asana, etc.).

---

## Quick-Start Checklist

> 💡 **New to the process? Here's the 5-step version.**

1. **Validate the problem (Learn):** Talk to 3+ customers. Find evidence. Check with your Head of Product.
2. **Build the business case (Decide):** Write an RFC. Score with RICE. Get RFC approved.
3. **Shape the solution (Shape):** Approved RFC lives. Align Product, Engineering, Design & GTM on scope, success/failure modes, and guardrails.
4. **Ship the feature (Build → Launch):** Build behind a flag. Run the Launch Readiness Check, then preview with trusted customers. Run it again to widen, again to launch to everyone.
5. **Measure and learn (Sell):** Read the measures two weeks after each phase: widen, hold or pull. After GA, review at 30 and 60-90 days. Decide next steps.

---

## The shape of it

Three phase groups, three gates:

**Shape** (Backlog → Shaping) → *Shaping Checkpoint* → **Build** (Readying for Build → Building → In Preview) → *Launch Readiness Check* → **Go to Market** (Ready for GTM → GTM Launch Planning → Ready for Launch → Launched) → *Launch Retro Check*

**Shipping code is not a release. A release is when a customer gets a different experience.** Every customer-visible change ships behind a flag and widens through named release phases (Private Preview → Public Preview → GA), with the Launch Readiness Check run before each one. Gate depth scales with the stakes of the work, set by the [decision framework](./decision-framework.md); the gates themselves never disappear.

The page is the standard; the habit is what makes it real. Three things happen on every release without being asked: someone walks the customer path live, someone writes the [release record](./templates/release-record.md), and someone comes back two weeks later and scores the call.

---

## Which page do I need?

| Your question | Page |
|---|---|
| Where is my project, and what happens in each status? | [Lifecycle](./lifecycle.md) |
| Can I move forward? What has to be true, and who signs off? | [Gates and Approvals](./gates.md) |
| How widely is the feature on, and how do I widen it safely? | [Release Phases](./release-phases.md) |
| How do we set up, track, and escalate projects? | [Project Standards](./project-standards.md) |
| Where do I record the checks, the evidence and the two-week score? | [Release Record](./templates/release-record.md) |
| Did the bet pay off? | [Post-Launch Review](./templates/post-launch-review.md) |
| What goes in the RFC, and how is it approved? | [Writing an RFC](../guides/writing-an-rfc.md) · [RFC Template](../templates/rfc.md) |
| Which path does this work take (Quick Win / Lightweight / Full Spec)? | [Decision Framework](./decision-framework.md) |

---

## Related

- [Product Loop](./product-loop.md): the 6-phase operating model this workflow sits inside
- [Discovery](./discovery.md): how to validate problems before writing an RFC
- [Handling Product Feedback](./customer-feedback.md): processing and routing customer feedback
- [Product Analytics](./product-analytics.md): the measurement discipline behind the gates

For tool-specific guidance (how to set up custom statuses, automation rules, etc.) see your tracker's docs.
