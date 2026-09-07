---
title: Lifecycle
description: "Where is my project? The three phase groups, the delivery statuses, and what happens in each: Shape → Build → Go to Market"
last_reviewed: 2026-09-07
icon: "🔁"
---

# Lifecycle

**Where is my project, and what happens next?** This page is the delivery workflow itself: the statuses a project moves through and the work that happens in each. The gates between the phase groups live on their own page, [Gates and Approvals](./gates.md); how widely the feature is switched on lives in [Release Phases](./release-phases.md).

The statuses are conventions you implement in whichever issue tracker your team uses (Linear, Jira, Shortcut, GitHub Projects, Asana, etc.). The names are what matter, not the tool.

---

## The shape of it

Product delivery flows through **3 phase groups** with **3 gates**:

**Shape** (Backlog → Shaping) → *Shaping Checkpoint* → **Build** (Readying for Build → Building → In Preview) → *Launch Readiness Check* → **Go to Market** (Ready for GTM → GTM Launch Planning → Ready for Launch → Launched) → *Launch Retro Check*

Projects can also be **Cancelled**, moved by PM or GTM Lead via agreement with Product.

---

## Delivery Statuses

| Status | Phase Group | Who Moves Project Here | What's Happening |
|--------|------------|----------------------|------------------|
| **Backlog** | Shape | | Triaging ideas, evaluating priority |
| **Shaping** | Shape | Product Manager | Writing RFC, technical feasibility |
| **Readying for Build** | Build | Tech Lead / Project Lead | Specs written, engineering scopes effort |
| **Building** | Build | Tech Lead / Project Lead | Active development, deployed behind flag |
| **In Preview** | Build | Tech Lead / Project Lead | Soft-launch with trusted customers (Private Preview) |
| **Ready for GTM** | Go to Market | GTM Lead | Preview successful, ready for launch planning |
| **GTM Launch Planning** | Go to Market | GTM Lead | Docs, training, launch materials in progress (Public Preview) |
| **Ready for Launch** | Go to Market | GTM Lead | All launch assets complete, awaiting release date |
| **Launched** | Go to Market | GTM Lead | Live to all customers (GA), tracking adoption |
| **Cancelled** | | Product Manager / GTM Lead | Stopped, won't be completed |

---

## Shape: Backlog → Shaping

### Mental Model: Learn + Decide

Every product decision traces back to evidence. The discipline is picking the highest-leverage work for the current strategy.

### Behaviour

- Validate the problem before committing engineering time
- Tag the [persona](../anchors/product-vision.md): User, Admin, or Sponsor
- Apply [Signal → Standard → Speed](./decision-framework.md) to pick the right path (Quick Win / Lightweight / Full Spec)
- Vision check: does this move a named [outcome and its Signal](../anchors/product-vision.md)? (Where one number captures the whole product, that Signal is the single headline metric.)

### What You Do

**Backlog:**
- Talk to customers (3+ minimum); see [Discovery](./discovery.md)
- Gather evidence (pain points, workarounds, urgency)
- Assess impact (how many customers, what magnitude?)
- Collect usage data and feedback patterns

**Shaping:**
- Write the [RFC](../guides/writing-an-rfc.md); use the [RFC Template](../templates/rfc.md)
- Score with [RICE](./rice.md)
- Get technical feasibility from engineering
- Review with Sales, Marketing, Product, Engineering

### Deliverables

- [RFC](../templates/rfc.md)
- RICE score with transparent reasoning
- Evidence base: [Research Template](./templates/research.md), [Customer Call Template](./templates/customer-call.md)

**Exit:** the [Shaping Checkpoint](./gates.md#gate-1-shaping-checkpoint).

---

## Build: Readying for Build → Building → In Preview

### Mental Model: Build

The product is one thing. Our three product principles are engineering standards, not aspirations. If you can't measure it, don't ship it.

### Behaviour

- The RFC is the single living document: approved at the end of Shape, updated through delivery as decisions land
- [Product principles](../anchors/product-principles.md) applied as design and engineering standards, not post-hoc review criteria
- Instrumentation wired up before preview: [events defined, dashboards built](../guides/product-analytics.md), guardrail metrics identified

### What You Do

**Readying for Build:**
- Update the RFC with the agreed approach as design and engineering land decisions
- Hold project kick-off
- Set up the project in your tracker with milestones (see [Project Standards](./project-standards.md))
- Engineering creates build tickets and estimates

> **"Ready to Build" is a conversation, not a formal gate.** PM and Tech Lead confirm specs are clear and engineering is ready to start. No sign-off ceremony needed, just mutual confidence.

**Building:**
- Engineering builds feature behind flag (flag OFF); see [Release Phases](./release-phases.md)
- Weekly progress check-ins
- Create demo artefacts (short recorded walkthroughs)
- Train support team
- Set up metrics and monitoring
- Outcome UAT in a production-like environment: validate the user's job end-to-end (job × surface), independent of unit tests (see [Agentic Delivery](../guides/agentic-delivery.md))

**In Preview:**
- Enable flag for 5-10 trusted customer accounts (Private Preview)
- Gather feedback from preview customers
- Fix critical bugs
- Monitor production stability
- Summarise Private Preview results

### Deliverables

- [RFC](../templates/rfc.md) (delivery document)
- Instrumentation: events + dashboards covering all RFC success metrics
- Architecture Decision Records (ADRs) for irreversible decisions
- Changelog Draft

**Exit:** the [Launch Readiness Check](./gates.md#gate-2-launch-readiness-check).

---

## Go to Market: Ready for GTM → GTM Launch Planning → Ready for Launch → Launched

### Mental Model: Launch + Sell

Shipping is the beginning, not the end. A feature nobody uses isn't a success, it's an unanswered question. Getting from "we built it" to "customers use it" takes deliberate effort.

### Behaviour

- Changelog entry for UX changes, support notification for everything
- GTM Lead owns transitions from Ready for GTM onward
- Structured post-launch reviews at three intervals:
  - **2 weeks:** Early signal. Is it being used? Any red flags?
  - **30 days:** Trend check. On track? Feedback patterns?
  - **60–90 days:** Full review. Data meets decision

### What You Do

**Ready for GTM → GTM Launch Planning:**
- Widen the flag to the Public Preview cohort (see [Release Phases](./release-phases.md))
- Write customer documentation
- Write release notes and changelog
- Train Sales team (positioning, value), for higher-stakes launches
- Train Support team (functionality)
- Prepare launch materials (blog, email, social), for higher-stakes launches
- Execute launch activities
- Get [GA sign-off](./gates.md#ga-sign-off)

**Ready for Launch → Launched:**
- Publish announcement and release notes
- Enable feature for broader rollout (gradual % or full)
- Monitor adoption metrics
- Respond to customer feedback
- Track self-onboarding conversion
- Measure sales enablement impact

### Deliverables

- Launch materials (scaled to the stakes of the launch)
- [Post-Launch Review](./templates/post-launch-review.md) at 2wk/30d/60-90d intervals
- Changelog updates

**Exit:** the [Launch Retro Check](./gates.md#gate-3-launch-retro-check), run through the post-launch reviews.

---

## Related

- [Delivery Standards](./delivery-standards.md): the front door to the workflow
- [Gates and Approvals](./gates.md): what has to be true to move between phase groups, and who signs off
- [Release Phases](./release-phases.md): Private Preview → Public Preview → GA, and the flag state at each
- [Project Standards](./project-standards.md): how projects are set up, tracked, and escalated
- [Decision Framework](./decision-framework.md): Signal → Standard → Speed
- [Product Loop](./product-loop.md): the 6-phase operating model this workflow sits inside
