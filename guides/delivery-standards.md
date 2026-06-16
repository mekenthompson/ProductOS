---
title: Delivery Standards
description: How to break down work, track projects, and manage delivery — tracker-agnostic
last_reviewed: 2026-05-12
icon: "📋"
---

# Delivery Standards

**From idea to shipped feature** — how to break down work, move through phases, and track delivery. This guide describes the *workflow*; the statuses and tracker fields below are conventions you implement in whichever issue tracker your team uses (Linear, Jira, Shortcut, GitHub Projects, Asana, etc.).

---

## Quick-Start Checklist

> 💡 **New to the process? Here's the 5-step version.** Each step maps to a phase below.

1. **Validate the problem (Learn)** — Talk to 3+ customers. Find evidence. Check with your SVP of Product.
2. **Build the business case (Decide)** — Write a Product Spec. Score with RICE. Get Product Spec approved.
3. **Shape the solution (Shape)** — Approved Product Spec lives. Align Product, Engineering, Design & GTM on scope, success/failure modes, and guardrails.
4. **Ship the feature (Build → Launch)** — Build behind a flag. Preview with trusted customers. Launch to everyone.
5. **Measure and learn (Sell)** — Track adoption. Review at 2 weeks, 30 days, 60-90 days. Decide next steps.

**Quick lookup:**
- Need to write a Product Spec? → [Product Specs](product-specs.md)
- Need a template? → [Product Spec Template](../templates/product-spec.md)
- Want the decision framework? → [Signal → Standard → Speed](decision-framework.md)

---

## How We Break Down Work

Four levels, regardless of tracker. Most modern trackers (Linear, Jira, Shortcut, etc.) map cleanly to these — the labels differ, the shape doesn't.

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
- **Examples:** Any deliverable that gets its own Product Spec.
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

Projects can also be **Cancelled** — moved by PM or GTM Lead via agreement with Product.

---

## Delivery Statuses

Implement these as statuses (or workflow states) in your tracker — the names are what matters, not the tool.

| Status | Phase Group | Who Moves Project Here | What's Happening |
|--------|------------|----------------------|------------------|
| **Backlog** | Shape | — | Triaging ideas, evaluating priority |
| **Shaping** | Shape | Product Manager | Writing Product Spec, technical feasibility |
| **Readying for Build** | Build | Engineering Manager / Project Lead | Specs written, engineering scopes effort |
| **Building** | Build | Engineering Manager / Project Lead | Active development, deployed behind flag |
| **In Preview** | Build | Engineering Manager / Project Lead | Soft-launch with trusted customers |
| **Ready for GTM** | Go to Market | GTM Lead | Preview successful, ready for launch planning |
| **GTM Launch Planning** | Go to Market | GTM Lead | Docs, training, launch materials in progress |
| **Ready for Launch** | Go to Market | GTM Lead | All launch assets complete, awaiting release date |
| **Launched** | Go to Market | GTM Lead | Live to all customers, tracking adoption |
| **Cancelled** | — | Product Manager / GTM Lead | Stopped, won't be completed |

---

## Shape: Backlog → Shaping

### Mental Model: Learn + Decide

Every product decision traces to evidence. The discipline is choosing the highest-leverage work for the current strategy.

### Behaviour

- Validate the problem before committing engineering time
- Tag the [persona](../product-vision.md) — Creator, Consumer, or Sponsor
- Apply [Signal → Standard → Speed](decision-framework.md) to pick the right path (Quick Win / Lightweight / Full Spec)
- Vision check: does this move the [headline metric](../product-vision.md)?

### What You Do

**Backlog:**
- Talk to customers (3+ minimum) — see [Discovery](discovery.md)
- Gather evidence (pain points, workarounds, urgency)
- Assess impact (how many customers, what magnitude?)
- Collect usage data and feedback patterns

**Shaping:**
- Write the [Product Spec](product-specs.md) — [Product Spec Template](../templates/product-spec.md)
- Score with [RICE](rice.md)
- Get technical feasibility from engineering
- Determine launch tier (T1/T2/T3/T4) — see [Launch Tiers](#launch-tiers)
- Review with Sales, Marketing, Product, Engineering

### Deliverables

- [Product Spec](../templates/product-spec.md)
- RICE score with transparent reasoning
- Evidence base — [Research Template](../templates/research.md), [Customer Call Template](../templates/customer-call.md)

---

## Build: Readying for Build → Building → In Preview

### Mental Model: Build

The product is one thing. Our three product principles are engineering standards, not aspirations. If you can't measure it, don't ship it.

### Behaviour

- The Product Spec is the single living document — approved at the end of Shape, updated through delivery as decisions land
- [Product principles](product-principles.md) applied as design and engineering standards, not post-hoc review criteria
- Instrumentation wired up before preview — events defined, dashboards built, guardrail metrics identified

### What You Do

**Readying for Build:**
- Update the Product Spec with the agreed approach as design and engineering land decisions
- Hold project kick-off
- Set up the project in your tracker with milestones
- Engineering creates build tickets and estimates

> **"Ready to Build" is a conversation, not a formal gate.** PM and Tech Lead confirm specs are clear and engineering is ready to start. No sign-off ceremony needed — just mutual confidence.

**Building:**
- Engineering builds feature behind flag (flag OFF) — see [Feature Flag Rollout](#feature-flag-rollout)
- Weekly progress check-ins
- Create demo artifacts (short recorded walkthroughs)
- Train support team
- Set up metrics and monitoring
- Outcome UAT in a production-like environment — validate the user's job end-to-end (job × surface), independent of unit tests (see [Agentic Delivery](agentic-delivery.md))

**In Preview:**
- Enable flag for 5-10 trusted customer accounts
- Gather feedback from preview customers
- Fix critical bugs
- Monitor production stability
- Summarise Private Preview results

### Deliverables

- [Product Spec](../templates/product-spec.md) (delivery document)
- Instrumentation — events + dashboards covering all Product Spec success metrics
- Architecture Decision Records (ADRs) for irreversible decisions
- Changelog Draft

---

## Go to Market: Ready for GTM → GTM Launch Planning → Ready for Launch → Launched

### Mental Model: Launch + Sell

Shipping is the beginning. A feature nobody uses isn't a success — it's an unanswered question. The path from "we built it" to "customers use it" requires deliberate effort.

### Behaviour

- Changelog entry for UX changes, support notification for everything
- GTM Lead owns transitions from Ready for GTM onward
- Structured post-launch reviews at three intervals:
  - **2 weeks:** Early signal — is it being used? Any red flags?
  - **30 days:** Trend check — on track? Feedback patterns?
  - **60–90 days:** Full review — data meets decision

### What You Do

**Ready for GTM → GTM Launch Planning:**
- Write customer documentation
- Write release notes and changelog
- Train Sales team (positioning, value) — T1/T2
- Train Support team (functionality)
- Prepare launch materials (blog, email, social) — T1/T2
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

- Launch materials (tier-dependent) — see your Launch Tier definitions (T1–T4) — maintained alongside your GTM team
- [Post-Launch Review](../templates/post-launch-review.md) at 2wk/30d/60-90d intervals
- Changelog updates

---

## Gates and Approvals

### Gate 1: Shaping Checkpoint ✅

> ✅ **Green light to spec.** This confirms the problem is real, the approach is sound, and it's worth investing in.

| Requirement | T1/T2 | T3 | T4 |
|-------------|-------|-----|-----|
| Product Spec written and reviewed | ✅ | ✅ | Lightweight / optional |
| Customer evidence (3+ examples) | ✅ | ✅ | Nice to have |
| RICE scored | ✅ | ✅ | — |
| Technical feasibility confirmed | ✅ | ✅ | ✅ |
| Launch tier assigned | ✅ | ✅ | ✅ |
| SVP of Product approval | ✅ | ✅ | — |
| **Vision check** | Does this move the headline metric? | | |
| **Persona identified** | Which [persona](../product-vision.md) has this problem? | | |
| **Evidence supports the bet** | Not just a good idea, but validated need with research | | |

**Who approves:** PM + Tech Lead + SVP of Product (T1/T2/T3). PM + Tech Lead (T4).

**Outcome:** Product, Engineering & broader stakeholder group are aligned on Project Scope, Success Criteria, Product GTM Tier and Priority.

---

### Gate 2: Launch Readiness Check ✅

> ✅ **Green light to ship behind flag to customers.** Private preview is successful, critical issues resolved, ready for wider audience.

| Requirement | T1/T2 | T3 | T4 |
|-------------|-------|-----|-----|
| Deployed to production behind flag | ✅ | ✅ | ✅ |
| Architecture documented | ✅ | ✅ | — |
| Metrics and monitoring in place | ✅ | ✅ | ✅ |
| Outcome UAT complete (user's job validated end-to-end, job × surface, independent of unit tests) | ✅ | ✅ | ✅ |
| Production-readiness validated (security / reliability / scale / availability, to the stakes) | ✅ | ✅ | scaled |
| Demo artifacts created | ✅ | Nice to have | — |
| Support team trained | ✅ | ✅ | — |
| Private preview feedback summarised | ✅ | ✅ | — |
| Critical preview tickets resolved | ✅ | ✅ | ✅ |
| **Product principles check** | "If they need the docs, we've failed" / "Batteries included, assembly optional" / "One mind built this" | | |
| **Success metrics instrumented** | Events defined in code, dashboard or query exists, guardrails identified | | |
| **Guardrail metrics identified** | What must NOT degrade | | |

**Who approves:** PM + SVP of Product (T1/T2/T3). PM + Tech Lead (T4).

**Outcome:** Change has gone through initial customer testing with any necessary updates made to enable it to move to Public Preview and then General Availability following agreed Go to Market steps.

> 💡 Two distinct gates here, not one. The **outcome UAT** proves the user's job is done (customer-ready, Product); **production-readiness** proves it's secure / reliable / scalable / available to the level the stakes demand (production-ready, Engineering). Unit-green ≠ outcome-validated ≠ production-ready — none implies the others. (In the table above, "scaled" = depth set to the launch tier's stakes.) See [Agentic Delivery](agentic-delivery.md).

---

### Gate 3: Launch Retro Check 🔄

After launch, track whether the bet paid off with structured post-launch reviews:

- [ ] **Product performance** — Actual metrics compared to Product Spec predictions
- [ ] **Vision check** — Did this move the headline metric?
- [ ] **Persona adoption** — Are the target personas using it?
- [ ] **Decision made:** Accelerate · Iterate · Pivot · Investigate · Stop

See [Post-Ship Reviews](#post-ship-reviews) for detailed guidance.

---

## Checklists for Shaping, Pre-Launch and Retro

<!-- Add screenshots of your tracker's project checklists here if useful for onboarding. -->

---

## Project Information Standards

### Product & Engineering Default Project Template

For all new Product & Engineering projects, use the Product & Engineering Default Project Template:

![Project Template](https://prod-files-secure.s3.us-west-2.amazonaws.com/318b9acb-3315-4210-b900-ba18807fabb7/0c0dfc6b-637d-43ae-852d-f7cb6eb4105f/image.png)

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

![Product Lever Labels](https://prod-files-secure.s3.us-west-2.amazonaws.com/318b9acb-3315-4210-b900-ba18807fabb7/b75f2d83-a5ec-4bf5-be47-acfc04505a7b/image.png)

#### Label - Product GTM Tier

**Definition:** Determine which product changes get what level of GTM awareness and attention

**Owner:** Product, GTM and Sales (at start of Project)

![Product GTM Tier Labels](https://prod-files-secure.s3.us-west-2.amazonaws.com/318b9acb-3315-4210-b900-ba18807fabb7/068b0043-6c22-4ea6-a2ad-21b3ae6a6a72/image.png)

See your Launch Tier definitions (T1–T4) — maintained alongside your GTM team for full tier criteria.

#### Priority

**Definition:** Priority within the delivery roadmap that is used to inform sequencing and resourcing decisions

- **Urgent** — Critical work that has immediate cost of delay considerations or protects a critical growth opportunity (e.g. required to land a prospect) and must be worked on ASAP
- **High** — Work that significantly contributes to strategic objective outcomes
- **Medium** — Work that incrementally contributes to strategic objective outcomes - it supports or enables strategic objective outcomes but does not, on its own, materially move the metric.
- **Low** — Work with limited or speculative growth impact that improves quality or maintainability without materially accelerating strategic objective outcomes

**Owner:** Product and Engineering Manager

---

## Project Update Standards

Project Leads will need to provide a brief Project update at the end of each week letting the team know if a Project is On Track, At Risk or Off Track. They should also ensure Project status and issues are up to date.

- **On Track:** The work is progressing as planned and is expected to be completed on time and within the scope described in the Product Spec
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

The Fast Path exists to accelerate the delivery of small pieces of work that will have significant customer or commercial upside.

**Criteria:**

- <1 day of an individual's effort
- <2 Fast Path efforts per team per cycle
- No GTM coordination required
- Strongly aligns with product strategy & roadmap
- Engineering Manager & Product Manager alignment on priority of Fast Path work

**Examples:**

- High value customer feedback
- High value PoC request from prospect

![Fast Path Diagram](https://prod-files-secure.s3.us-west-2.amazonaws.com/318b9acb-3315-4210-b900-ba18807fabb7/957304cc-9c68-4284-a754-a59e9ca263dd/image.png)

---

## Post-Ship Reviews

After launch, track whether the bet paid off.

### Review Cadence

- **2 weeks** — Early signal. Is it being used? Any red flags?
- **30 days** — Trends. On track vs Product Spec metrics? Feedback patterns emerging?
- **60-90 days** — Full review vs Product Spec success metrics. Compare actual vs predicted. Explicit recommendation.

### Recommendation Matrix

| Recommendation | Criteria | Action |
|---|---|---|
| **Accelerate** | Exceeding targets + positive feedback | Double down — more investment, broader rollout |
| **Iterate** | On track + minor friction | Continue with adjustments |
| **Pivot** | Below targets + feedback explains why | Change approach based on learning |
| **Investigate** | Below targets + unclear why | Dig deeper before deciding |
| **Stop** | Flat adoption + no pull | Wind down, redirect engineering time |

> 💡 **Stopping is not failure.** Continuing to invest in something the data says isn't working — that's failure.

Use the [Post-Launch Review Template](../templates/post-launch-review.md) at each interval.

---

## Specs: Rules and Hierarchy

A spec translates the Product Spec into buildable requirements. It answers: What do we build? How does it work? How do we know it's done?

**One Product Spec per project. It does the work that used to be split between a PRD and a delivery spec — framed around the user's job, with explicit success/failure modes, guardrails, and an open solution space.**

### Product Spec

**Owner:** PM (with Design + Engineering collaboration) — **Answers:** What can users do? How does it work? How do we build it?

- JTBD (Job to Be Done)
- User flows and affected personas
- Feature requirements (user-facing actions)
- Edge cases and error states
- Design coverage (flows, mockups, accessibility)
- Technical approach (architecture, API changes, performance considerations)
- Acceptance criteria (how to validate completion)

→ [Product Spec Template](../templates/product-spec.md)

### Spec Rules

- One Product Spec per project. The spec is a living document — it evolves through delivery.
- Specs are approved in Draft → In Review → Approved. Changes that affect scope require re-approval.
- See [Product Specs](product-specs.md) for the full lifecycle.
- Specs are living documents during Build — update when you learn something. Archive after ship.

---

## Launch Tiers

Tiers define **marketing investment**, not product maturity.

| Tier | What It Means | Approval Depth | GTM Activities |
|------|---------------|---------------|----------------|
| **T1 — Major Release** | New product line, game changer | Executive steering, board consideration | Full GTM campaign, press, customer events, exec briefings |
| **T2 — Product Evolution** | Significant new capability | SVP of Product + VP Engineering | Coordinated launch, blog post, targeted outreach, sales enablement |
| **T3 — Feature Enhancement** | Meaningful improvement | PM + Tech Lead + Design | Standard docs & announcement, release notes, changelog |
| **T4 — Usability Fix** | Small improvement, obvious fix | No formal Product Spec required | Changelog only |

See your Launch Tier definitions (T1–T4) — maintained alongside your GTM team for full tier criteria.

---

## Recommended Team Planning Standards

**Fortnightly engineering team outcome planning, prioritisation and estimation**

- Product and Engineering teams operate to a fortnightly planning cycle
- Product and Engineering Leadership and the delivery teams align on the outcomes they are targeting for a given cycle
- Estimation of tickets within the Projects can then be used to help align on work being committed to and enable ongoing improvements to planning accuracy

---

## Escalation

**If there's disagreement:**

1. **First:** Involve the two disagreeing parties (usually director level)
2. **Second:** SVP of Product decides on scope/timeline
3. **Third:** CPO involvement only if strategic direction affected

---

## Gate Summary

| Gate | What It Means | Who Approves |
|------|---------------|--------------|
| **Shaping Checkpoint** | Green light to spec | PM + Tech Lead + SVP of Product |
| **Launch Readiness Check** | Ship behind flag to customers | PM + SVP of Product |
| **Launch Retro Check** | Did the bet pay off? | PM (performance review) |

Gate requirements scale with launch tier — T4 doesn't need SVP sign-off. See tier-specific tables above.

---

## Related

- [Product Specs](product-specs.md) — How Product Specs are written and approved
- [Discovery](discovery.md) — How to validate problems before writing a Product Spec
- [Handling Product Feedback](customer-feedback.md) — Processing and routing customer feedback
- [Decision Framework](decision-framework.md) — Signal → Standard → Speed
- [Product Playbook](../product-playbook.md) — The 6-phase operating model

For tool-specific guidance (how to set up custom statuses, automation rules, etc.) see your tracker's documentation.
