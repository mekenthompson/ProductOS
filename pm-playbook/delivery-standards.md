---
title: Delivery Standards
description: How to break down work, track projects, and manage delivery, tracker-agnostic
last_reviewed: 2026-05-12
icon: "📋"
---

# Delivery Standards

**From idea to shipped feature.** How to break down work, move through phases, and track delivery. This guide describes the *workflow*. The statuses and tracker fields below are conventions you implement in whichever issue tracker your team uses (Linear, Jira, Shortcut, GitHub Projects, Asana, etc.).

---

## Quick-Start Checklist

> 💡 **New to the process? Here's the 5-step version.** Each step maps to a phase below.

1. **Validate the problem (Learn):** Talk to 3+ customers. Find evidence. Check with your Head of Product.
2. **Build the business case (Decide):** Write an RFC. Score with RICE. Get RFC approved.
3. **Shape the solution (Shape):** Approved RFC lives. Align Product, Engineering, Design & GTM on scope, success/failure modes, and guardrails.
4. **Ship the feature (Build → Launch):** Build behind a flag. Preview with trusted customers. Launch to everyone.
5. **Measure and learn (Sell):** Track adoption. Review at 2 weeks, 30 days, 60-90 days. Decide next steps.

**Quick lookup:**
- Need to write an RFC? → [RFC guide](../guides/product-specs.md)
- Need a template? → [RFC Template](../templates/rfc.md)
- Want the decision framework? → [Signal → Standard → Speed](./decision-framework.md)

---

## How We Break Down Work

Four levels, regardless of tracker. Most modern trackers (Linear, Jira, Shortcut, etc.) map cleanly to these. The labels differ, the shape doesn't.

### Initiatives

- **Definition:** Highest-order company objectives owned at the exec/ELT level.
- **Examples:** "Scale to support enterprise GTM," "Become the default in our category."
- **Owners:** Exec team.

### Sub-Initiatives

- **Definition:** Mutually exclusive, collectively exhaustive streams under an Initiative, made up of multiple projects.
- **Examples:** Core Reliability; Onboarding Quality; Enterprise Readiness.
- **Owners:** Exec sponsor of the sub-initiative.

### Projects

- **Definition:** Standalone units of work with a clear, shippable outcome and a planned completion date. Every project rolls up to an initiative or sub-initiative.
- **Examples:** Any deliverable that gets its own RFC.
- **Owners:** Product + Engineering leadership, named Project Lead.

### Issues (and Sub-Issues)

- **Definition:** Tasks or individual requirements within a project. Break down into sub-issues when useful.
  - Any work requiring engineering capacity is captured as an issue in your tracker.
  - Every issue has an owner.
- **Examples:** Specific implementation tasks, design tasks, GTM tasks (onboarding, training, commercials).
- **Owners:** Project Lead and project team.

---

## The Development Lifecycle

Product delivery flows through **3 phase groups** with **3 gates**:

**Shape** (Backlog → Shaping) → *Shaping Checkpoint* → **Build** (Readying for Build → Building → In Preview) → *Launch Readiness Check* → **Go to Market** (Ready for GTM → GTM Launch Planning → Ready for Launch → Launched) → *Launch Retro Check*

Projects can also be **Cancelled**, moved by PM or GTM Lead via agreement with Product.

---

## Delivery Statuses

Implement these as statuses (or workflow states) in your tracker. The names are what matter, not the tool.

| Status | Phase Group | Who Moves Project Here | What's Happening |
|--------|------------|----------------------|------------------|
| **Backlog** | Shape | | Triaging ideas, evaluating priority |
| **Shaping** | Shape | Product Manager | Writing RFC, technical feasibility |
| **Readying for Build** | Build | Tech Lead / Project Lead | Specs written, engineering scopes effort |
| **Building** | Build | Tech Lead / Project Lead | Active development, deployed behind flag |
| **In Preview** | Build | Tech Lead / Project Lead | Soft-launch with trusted customers |
| **Ready for GTM** | Go to Market | GTM Lead | Preview successful, ready for launch planning |
| **GTM Launch Planning** | Go to Market | GTM Lead | Docs, training, launch materials in progress |
| **Ready for Launch** | Go to Market | GTM Lead | All launch assets complete, awaiting release date |
| **Launched** | Go to Market | GTM Lead | Live to all customers, tracking adoption |
| **Cancelled** | | Product Manager / GTM Lead | Stopped, won't be completed |

---

## Shape: Backlog → Shaping

### Mental Model: Learn + Decide

Every product decision traces back to evidence. The discipline is picking the highest-leverage work for the current strategy.

### Behaviour

- Validate the problem before committing engineering time
- Tag the [persona](../anchors/product-vision.md): Creator, Consumer, or Sponsor
- Apply [Signal → Standard → Speed](./decision-framework.md) to pick the right path (Quick Win / Lightweight / Full Spec)
- Vision check: does this move a named [outcome and its Signal](../anchors/product-vision.md)? (Where one number captures the whole product, that Signal is the single headline metric.)

### What You Do

**Backlog:**
- Talk to customers (3+ minimum); see [Discovery](./discovery.md)
- Gather evidence (pain points, workarounds, urgency)
- Assess impact (how many customers, what magnitude?)
- Collect usage data and feedback patterns

**Shaping:**
- Write the [RFC](../guides/product-specs.md); use the [RFC Template](../templates/rfc.md)
- Score with [RICE](./rice.md)
- Get technical feasibility from engineering
- Review with Sales, Marketing, Product, Engineering

### Deliverables

- [RFC](../templates/rfc.md)
- RICE score with transparent reasoning
- Evidence base: [Research Template](./templates/research.md), [Customer Call Template](./templates/customer-call.md)

---

## Build: Readying for Build → Building → In Preview

### Mental Model: Build

The product is one thing. Our three product principles are engineering standards, not aspirations. If you can't measure it, don't ship it.

### Behaviour

- The RFC is the single living document: approved at the end of Shape, updated through delivery as decisions land
- [Product principles](../anchors/product-principles.md) applied as design and engineering standards, not post-hoc review criteria
- Instrumentation wired up before preview: events defined, dashboards built, guardrail metrics identified

### What You Do

**Readying for Build:**
- Update the RFC with the agreed approach as design and engineering land decisions
- Hold project kick-off
- Set up the project in your tracker with milestones
- Engineering creates build tickets and estimates

> **"Ready to Build" is a conversation, not a formal gate.** PM and Tech Lead confirm specs are clear and engineering is ready to start. No sign-off ceremony needed, just mutual confidence.

**Building:**
- Engineering builds feature behind flag (flag OFF); see [Feature Flag Rollout](#feature-flag-rollout)
- Weekly progress check-ins
- Create demo artifacts (short recorded walkthroughs)
- Train support team
- Set up metrics and monitoring
- Outcome UAT in a production-like environment: validate the user's job end-to-end (job × surface), independent of unit tests (see [Agentic Delivery](../guides/agentic-delivery.md))

**In Preview:**
- Enable flag for 5-10 trusted customer accounts
- Gather feedback from preview customers
- Fix critical bugs
- Monitor production stability
- Summarise Private Preview results

### Deliverables

- [RFC](../templates/rfc.md) (delivery document)
- Instrumentation: events + dashboards covering all RFC success metrics
- Architecture Decision Records (ADRs) for irreversible decisions
- Changelog Draft

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
- Write customer documentation
- Write release notes and changelog
- Train Sales team (positioning, value), for higher-stakes launches
- Train Support team (functionality)
- Prepare launch materials (blog, email, social), for higher-stakes launches
- Execute launch activities
- Get final GA approval

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

---

## Gates and Approvals

### Gate 1: Shaping Checkpoint ✅

> ✅ **Green light to spec.** The problem is real, the approach is sound, and it's worth investing in.

Every requirement below applies. Scale its depth to the stakes: lighter for a Quick Win / Lightweight path, fuller for Full Spec work.

| Requirement | Notes |
|-------------|-------|
| RFC written and reviewed | Lightweight or optional for small/obvious fixes |
| Customer evidence (3+ examples) | Scale to the stakes |
| RICE scored | For Lightweight and Full Spec work |
| Technical feasibility confirmed | Always |
| Head of Product approval | Senior product sign-off for substantial work |
| **Vision check** | Does this move a named outcome and its Signal? (One number for the whole product collapses to a single headline metric.) |
| **Persona identified** | Which [persona](../anchors/product-vision.md) has this problem? |
| **Evidence supports the bet** | Not just a good idea, but validated need with research |

**Who approves:** Senior product sign-off (Head of Product) for substantial work; PM + Tech Lead for small / quick-win work.

**Outcome:** Product, Engineering & broader stakeholder group are aligned on Project Scope, Success Criteria and Priority.

---

### Gate 2: Launch Readiness Check ✅

> ✅ **Green light to ship behind flag to customers.** Private preview is successful, critical issues resolved, ready for wider audience.

Every requirement below applies. Scale its depth to the stakes: lighter for a Quick Win / Lightweight path, fuller for Full Spec work.

| Requirement | Notes |
|-------------|-------|
| Deployed to production behind flag | Always |
| Architecture documented | Scale to the stakes |
| Metrics and monitoring in place | Always |
| Outcome UAT complete (user's job validated end-to-end, job × surface, independent of unit tests) | Always |
| Production-readiness validated (security / reliability / scale / availability, to the stakes) | Depth scaled to the stakes |
| Demo artifacts created | Scale to the stakes |
| Support team trained | Scale to the stakes |
| Private preview feedback summarised | Scale to the stakes |
| Critical preview tickets resolved | Always |
| **Product principles check** | "If they need the docs, we've failed" / "Batteries included, assembly optional" / "One mind built this" |
| **Success metrics instrumented** | Events defined in code, dashboard or query exists, guardrails identified |
| **Guardrail metrics identified** | What must NOT degrade |

**Who approves:** Senior product sign-off (Head of Product) for substantial work; PM + Tech Lead for small / quick-win work.

**Outcome:** Change has gone through initial customer testing with any necessary updates made to enable it to move to Public Preview and then General Availability following agreed Go to Market steps.

> 💡 Two distinct gates here, not one. The **outcome UAT** proves the user's job is done (customer-ready, Product). **Production-readiness** proves it's secure / reliable / scalable / available to the level the stakes demand (production-ready, Engineering). Unit-green ≠ outcome-validated ≠ production-ready. None implies the others. (In the table above, depth is set to the stakes.) See [Agentic Delivery](../guides/agentic-delivery.md).

---

### Gate 3: Launch Retro Check 🔄

After launch, track whether the bet paid off with structured post-launch reviews:

- [ ] **Product performance:** Actual metrics compared to RFC predictions
- [ ] **Vision check:** Did this move a named outcome and its Signal? (One number for the whole product collapses to a single headline metric.)
- [ ] **Persona adoption:** Are the target personas using it?
- [ ] **Decision made:** Accelerate · Iterate · Pivot · Investigate · Stop

See [Post-Ship Reviews](#post-ship-reviews) for detailed guidance.

---

## Checklists for Shaping, Pre-Launch and Retro

<!-- Add screenshots of your tracker's project checklists here if useful for onboarding. -->

---

## Project Information Standards

### Product & Engineering Default Project Template

For all new Product & Engineering projects, use a consistent default project template in your tracker.

### Project Information Standards - our minimum defaults

#### Start Date

**Definition:** Target date for the project to begin (updated to actual date once work begins)

**Owner:** Project Lead

#### End Date

**Definition:** Target end date for the project based on effort required to complete the scope outlined in the Product Requirements document

**Owner:** Project Lead

#### Label - Product Lever

**Definition:** Set of labels for the project that categorises the project into a product work type

**Owner:** Product (at start of Project)


#### Priority

**Definition:** Priority within the delivery roadmap that is used to inform sequencing and resourcing decisions

- **Urgent:** Critical work that has immediate cost of delay considerations or protects a critical growth opportunity (e.g. required to land a prospect) and must be worked on ASAP
- **High:** Work that significantly contributes to strategic objective outcomes
- **Medium:** Work that incrementally contributes to strategic objective outcomes. It supports or enables them but doesn't, on its own, materially move the metric.
- **Low:** Work with limited or speculative growth impact. It improves quality or maintainability without materially accelerating strategic objective outcomes.

**Owner:** Product and Tech Lead

---

## Project Update Standards

Project Leads give a brief Project update at the end of each week, telling the team whether a Project is On Track, At Risk or Off Track. Keep Project status and issues up to date too.

- **On Track:** The work is progressing as planned and is expected to be completed on time and within the scope described in the RFC
- **At Risk:** The work is currently behind plan or facing issues that *could* prevent on-time or in-scope completion unless mitigating action is taken.
- **Off Track:** The work is unlikely to be completed on time or within scope without major changes. A change in timing or scope is required.

---

## Feature Flag Rollout

> 🚩 **All features deploy behind flags.** Every feature can be disabled via flag if critical issues arise.

| Phase | Status | Flag State | Who Can Access | Purpose |
|-------|--------|-----------|----------------|---------|
| **Build** | Building | OFF (internal override only) | Dev team only | Build and test in production |
| **Build** | In Preview | ON for specific accounts | 5-10 trusted customers | Gather feedback from friendly customers |
| **Go to Market** | GTM Launch Planning | ON for % of customers | Public preview participants | Test at scale before full GA |
| **Go to Market** | Launched | ON for all (or gradual %) | All customers | Full rollout with ability to disable |

---

## Fast Path

The Fast Path exists to speed up small pieces of work with significant customer or commercial upside.

**Criteria:**

- <1 day of an individual's effort
- <2 Fast Path efforts per team per cycle
- No GTM coordination required
- Strongly aligns with product strategy & roadmap
- Tech Lead & Product Manager alignment on priority of Fast Path work

**Examples:**

- High value customer feedback
- High value PoC request from prospect


---

## Post-Ship Reviews

After launch, track whether the bet paid off.

### Review Cadence

- **2 weeks:** Early signal. Is it being used? Any red flags?
- **30 days:** Trends. On track vs RFC metrics? Feedback patterns emerging?
- **60-90 days:** Full review vs RFC success metrics. Compare actual vs predicted. Explicit recommendation.

### Recommendation Matrix

| Recommendation | Criteria | Action |
|---|---|---|
| **Accelerate** | Exceeding targets + positive feedback | Double down: more investment, broader rollout |
| **Iterate** | On track + minor friction | Continue with adjustments |
| **Pivot** | Below targets + feedback explains why | Change approach based on learning |
| **Investigate** | Below targets + unclear why | Dig deeper before deciding |
| **Stop** | Flat adoption + no pull | Wind down, redirect engineering time |

> 💡 **Stopping is not failure.** Continuing to invest in something the data says isn't working, that's failure.

Use the [Post-Launch Review Template](./templates/post-launch-review.md) at each interval.

---

## Specs: Rules and Hierarchy

A spec turns the RFC into buildable requirements. It answers: What do we build? How does it work? How do we know it's done?

**One RFC per project. It does the work that used to be split between a PRD and a delivery spec, framed around the user's job, with explicit success/failure modes, guardrails, and an open solution space.**

### RFC

**Owner:** PM (with Design + Engineering collaboration). **Answers:** What can users do? How does it work? How do we build it?

- JTBD (Job to Be Done)
- User flows and affected personas
- Feature requirements (user-facing actions)
- Edge cases and error states
- Design coverage (flows, mockups, accessibility)
- Technical approach (architecture, API changes, performance considerations)
- Acceptance criteria (how to validate completion)

→ [RFC Template](../templates/rfc.md)

### Spec Rules

- One RFC per project. The spec is a living document; it evolves through delivery.
- Specs are approved in Draft → In Review → Approved. Changes that affect scope require re-approval.
- See the [RFC guide](../guides/product-specs.md) for the full lifecycle.
- Specs are living documents during Build: update when you learn something. Archive after ship.

---

## Recommended Team Planning Standards

**Fortnightly engineering team outcome planning, prioritisation and estimation**

- Product and Engineering teams run a fortnightly planning cycle
- Product and Engineering Leadership and the delivery teams align on the outcomes they're targeting for a given cycle
- Estimating tickets within the Projects then aligns everyone on what's being committed to, and improves planning accuracy over time

---

## Escalation

**If there's disagreement:**

1. **First:** Involve the two disagreeing parties (usually director level)
2. **Second:** Head of Product decides on scope/timeline
3. **Third:** Executive leadership involved only if strategic direction is affected

---

## Gate Summary

| Gate | What It Means | Who Approves |
|------|---------------|--------------|
| **Shaping Checkpoint** | Green light to spec | PM + Tech Lead + Head of Product |
| **Launch Readiness Check** | Ship behind flag to customers | PM + Head of Product |
| **Launch Retro Check** | Did the bet pay off? | PM (performance review) |

Gate requirements scale with the stakes. Small / quick-win work doesn't need Head of Product sign-off. See the requirement tables above.

---

## Related

- [RFC guide](../guides/product-specs.md): How RFCs are written and approved
- [Discovery](./discovery.md): How to validate problems before writing an RFC
- [Handling Product Feedback](./customer-feedback.md): Processing and routing customer feedback
- [Decision Framework](./decision-framework.md): Signal → Standard → Speed
- [Product Playbook](./product-playbook.md): The 6-phase operating model

For tool-specific guidance (how to set up custom statuses, automation rules, etc.) see your tracker's docs.
