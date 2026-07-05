---
title: Product Playbook
description: A six-phase operating model for product organisations
last_reviewed: 2026-07-06
icon: 🎚️
---

# Product Playbook

## TL;DR

Six phases, each feeding the next. The loop closes back to the start.

1. **Learn.** Start with evidence, not assumptions.
   Customer research, usage data, and post-launch measurement all feed the same pool. You can't build the right thing if you don't understand the problem.

2. **Decide.** Every idea passes three checks.
   **Signal** (strategy-aligned with real need?), **Standard** (meets our [product principles](../anchors/product-principles.md)?), **Speed** (half a day or less? flag it with your Tech Lead/PM and ship it if it aligns with priorities. More? Write an RFC, bring it to the prioritisation session). Not now ≠ bad idea. It means something else is higher leverage right now.

3. **Shape.** Define the solution and align the team.
   Write specs, align Product, Engineering, Design & GTM on scope. Roadmap with honest fidelity: this quarter is high confidence, next quarter is themes, beyond that is direction. Monthly updates, non-negotiable.

4. **Build.** Build to standard.
   Product principles aren't aspirations. They're engineering standards. Instrument before shipping. Don't ship what you can't measure.

5. **Launch.** Shipping is the beginning, not the end.
   Structured reviews at 2 weeks, 30 days, and 60–90 days, each with an explicit recommendation: accelerate, iterate, pivot, investigate, or stop. Stopping is not failure.

6. **Sell.** Built isn't sold.
   Self-onboarding for PLG, sales enablement for enterprise, a structured PoC process, and adoption tracking from discovery to purchase. What we learn here feeds straight back to Learn.

---

## The Core Idea

**Good ideas are abundant. Engineering time is scarce.**

Customers are smart, impatient, and have options. Every hour of engineering time is an hour we can't spend elsewhere. The most important product discipline: spend those hours on the highest-leverage work, then know whether it paid off. That's the whole game.

The [Product Vision](../anchors/product-vision.md) sets the direction and names the outcomes (up to four), each carrying its own Signal, the readable metric that tells you the outcome is holding. (Where a single number captures the whole product, that collapses to one headline metric, but treat it as one outcome with one Signal.) This document describes the **Product Loop**: a six-phase closed loop for how ideas become outcomes. It isn't bureaucracy. It's a shared operating system for product decisions.

![Product Loop: Learn → Decide → Shape → Build → Launch → Sell](images/product-loop.png)

The loop starts with learning and ends with learning. Everything we ship generates data. That data feeds the next decision. This is the system.

---

## The Formula

**Mental Model + Behaviour = Assets**

Assets (frameworks, dashboards, templates, cadences) are outputs, not starting points. Get the mental models and behaviours wrong and the assets become shelfware. Every section below makes this explicit: *what we believe → what we do differently → what we produce → why it matters*.

---

## Where Most Teams Start

If any of these sound familiar, this playbook is aimed at you. None of it is unusual. All of it is fixable.

**Work starts without clear vetting.** Without a shared framework, effort scatters across too many fronts.

**One path for everything.** A half-day improvement and a quarter-long initiative travel the same road. Teams either skip the process (no visibility) or force everything through a path designed for large work (slow).

**No shared product principles.** Teams make independent quality trade-offs. The customer feels the inconsistency.

**Prioritisation is a black box.** Ideas go in. Silence comes out. Trust erodes.

**Ship and move on.** Nobody measures whether shipped work achieved its goals. A feature driving adoption looks the same as one nobody uses.

**Built isn't always sold.** Features ship but don't always reach the customers who need them. Self-serve discovery is inconsistent, enterprise enablement is ad-hoc.

---

## Phase 1: Learn

> *"You can't build the right thing if you don't understand the problem."*

### Belief
Every product decision should be traceable to evidence: customer research, usage data, or structured feedback. Assumptions are starting points, not conclusions.

### Behaviour
- **Customer research and interviews** feed a shared evidence base, not individual intuition. Every problem is tagged to a [persona](./personas.md).
- **Product analytics** are consulted before proposing work (what's used, what's ignored, where do users drop off?)
- **Customer feedback** is processed systematically: patterns identified, not just loudest voices heard
- **Post-launch measurement** (from Phase 5) flows back here, closing the loop

### Assets
- Customer research repository: [Research Template](./templates/research.md), [Customer Call Template](./templates/customer-call.md)
- Product analytics dashboards (adoption, engagement, drop-off)
- [Customer feedback processing workflow](./customer-feedback.md)
- Post-launch review data feeding back into evidence base

### Why It Matters
Without learning, we're guessing. With it, we're placing informed bets. That advantage compounds over time.

---

## Phase 2: Decide

> *"Good ideas are abundant. Engineering time is scarce."*

### Belief
Not every good idea deserves engineering time right now. The discipline is choosing the highest-leverage work for the current strategy. Filtering out bad ideas is the easy part.

### Behaviour
Three checks, every time, **Signal → Standard → Speed**:

1. **Signal.** Does it align with current strategy and the [product vision](../anchors/product-vision.md)?
   Is there a real, validated customer need? Which [persona](./personas.md) has this problem? What happens if we don't?

2. **Standard.** Does the proposed solution meet our [product principles](../anchors/product-principles.md)?
   Run the principle check questions against the proposed solution. If you can't answer "yes" to each, the standard isn't met yet.

3. **Speed.** How big is it?
   - **≤ half a day:** Flag it with your Tech Lead or PM. If it aligns with current priorities, ship it. No RFC needed, but each team has a limited Quick Win budget per sprint. Changelog if UX, notify support always.
   - **> half a day:** Write an RFC with RICE score. Bring it to the prioritisation session.

The prioritisation session is where RFCs compete for engineering time. RICE ranks items *within* strategic investment buckets, not across them: a B-grade bet in a high-priority bucket may beat an A-grade item in a lower-priority one. This keeps strategy driving allocation, not RICE gaming.

Every decision gets communicated back to the proposer with reasoning. **"Not now because X"** is a complete, respectful answer. Silence is not.

### Assets
- [Signal → Standard → Speed decision framework](./decision-framework.md): three paths: Quick Win, Lightweight, Full Spec
- [Product principles](../anchors/product-principles.md) with check questions
- Quick win path (≤ half a day, no RFC, Tech Lead/PM alignment)
- RFC path: [Writing RFCs](../guides/writing-an-rfc.md), [RFC Template](../templates/rfc.md), [RICE scoring](./rice.md)
- Prioritisation session cadence (fortnightly or monthly, aligned to your sprint)

### Why It Matters
Speed comes from clarity, not skipping steps. When everyone knows the criteria, decisions get faster and better. Transparent decisions build trust.

---

## Phase 3: Shape

> *"Shape the solution before committing the team."*

### Belief
Shaping is where alignment happens. The RFC got the "yes". Now the team needs to agree on scope, approach, and delivery plan. Roadmaps should make promises proportional to what we actually know. Pretending otherwise (vague when we should be specific, specific when we should be honest) destroys credibility.

### Behaviour
- **Write the [RFC](../templates/rfc.md):** a single, living document framed around the user's job, with success and failure modes, guardrails, and a solution space (constraints, not prescriptions)
- **Align the team:** Product, Engineering, Design & GTM agree on scope, approach, and priority before build starts
- **This quarter (0–3 months): HIGH fidelity.** Specific dates, named owners, hard commitments. Misses are explained, not quietly adjusted.
- **Next quarter (3–6 months): MEDIUM fidelity.** Themes, initiatives, approximate timing. Refined monthly as decisions land.
- **6–12+ months: LOW fidelity.** Strategic direction by quarter. Not feature-specific. Honest about what we don't know yet.
- **Monthly updates are non-negotiable.** Track this quarter against commitments, sharpen next quarter, adjust long-term for strategy shifts. Note what drove changes.
- **Internal and external roadmaps tell the same story** at different detail levels. Internal: full picture, all bands, reasoning, trade-offs. External: commitments and themes. Never a different narrative.

### Assets
- [RFC](../templates/rfc.md): delivery contract for build phase
- Three-band roadmap (high / medium / low fidelity)
- Monthly roadmap update cadence
- Internal roadmap (full detail)
- External roadmap (commitments + themes subset)

### Why It Matters
Shaping up front prevents rework. When Product, Engineering, Design & GTM align before build starts, you get fewer mid-build surprises, better estimates, and stronger launch readiness. Sales can make promises because product is making promises and keeping them.

---

## Phase 4: Build

> *"The product is one thing, not a collection of features."*

### Belief
Product principles aren't aspirations for some future state. They're engineering standards. Every PR, every design review, every release meets them. The product should feel like one person built the whole thing.

### Behaviour
- Product principles applied as **design and engineering standards**, not post-hoc review criteria
- **Instrumentation before shipping:** if you can't measure it, don't ship it. Define success criteria in the RFC, wire up analytics before launch.
- Existing lifecycle and gates remain unchanged: this framework adds a front door and a feedback loop, not a replacement for delivery process

### Assets
- Product principles as PR/design review checklist
- Instrumentation requirements in [RFC Template](../templates/rfc.md)
- Success metrics defined before build starts
- [Delivery Standards](./delivery-standards.md): Operational workflow with gate checklists

### Why It Matters
Consistency makes a product feel trustworthy. Instrumentation makes the feedback loop possible. Without both, we're shipping blind into an inconsistent experience.

---

## Phase 5: Launch

> *"Shipping is the beginning, not the end."*

### Belief
The real work starts after launch. Shipping is when we start learning whether our bet paid off. A feature that shipped but nobody uses isn't a success. It's an unanswered question.

### Behaviour
- **Changelog entry for UX changes.** Support notification for everything.
- **Structured post-launch reviews** at three intervals:
  - **2 weeks:** Early signal. Is it being used? Any red flags?
  - **30 days:** Trend check. On track? Feedback patterns emerging?
  - **60–90 days:** Full review. Data meets decision.
- At full review, every shipped feature gets an **explicit recommendation:**

| Recommendation | Criteria | Action |
|---|---|---|
| **Accelerate** | Exceeding targets + positive feedback | Double down: more investment, broader rollout |
| **Iterate** | On track + minor friction | Continue with adjustments |
| **Pivot** | Below targets + feedback explains why | Change approach based on what we learned |
| **Investigate** | Below targets + unclear why | Dig deeper before deciding |
| **Stop** | Flat adoption + no pull | Wind down. Redirect engineering time. |

**Stopping is not failure.** Continuing to invest in something the data says isn't working, that's failure.

Analytics tells you *what* (adoption is low). Customer feedback tells you *why* (onboarding is confusing). Together they tell you *what to do* (redesign onboarding, don't add features).

### Assets
- [Post-Launch Review template](./templates/post-launch-review.md): structured review at 2 weeks / 30 days / 60–90 days
- Accelerate-or-pivot decision matrix (above)
- Product analytics dashboards per feature
- Review recommendations feeding back to Learn

### Why It Matters
This closes the loop. Decisions → Commitment → Delivery → Measurement → Learning → Decisions. Without measurement, the loop stays open and we're guessing again.

---

## Phase 6: Sell

> *"Built isn't sold. Customers need a clear path from discovery to adoption."*

### Belief
A shipped feature that customers can't find, don't understand, or can't adopt on their own is an incomplete investment. Getting from "we built it" to "customers use it" takes deliberate effort.

### Behaviour
- **Self-onboarding flows (PLG):** Can each [persona](./personas.md) discover and adopt new capabilities without talking to anyone? If any persona can't self-serve, that's a product gap, not a sales gap.
- **Sales enablement:** Positioning, demos, and competitive differentiation materials ship alongside (or shortly after) the feature itself. Sales shouldn't reverse-engineer value propositions from changelogs.
- **Structured PoC/PoV process:** Enterprise evaluation follows a repeatable playbook: scoped, time-boxed, with clear success criteria. Not ad-hoc, not different every time.
- **Adoption tracking:** Discovery → trial → purchase (or activation), tracked end to end. Where in the funnel are we losing people?
- **Feedback to Learn:** Adoption data, deal win/loss reasons, and PoC outcomes feed directly back into the evidence base for future decisions.

### Assets
- Self-onboarding flow standards
- Sales enablement materials (positioning, battle cards, demo scripts)
- PoC/PoV playbook (repeatable enterprise evaluation process)
- Adoption funnel tracking (discovery → trial → purchase)
- Sell-to-Learn feedback loop

### Why It Matters
A big signup-to-first-value drop-off tells you something important. You can build the best product in your category and still waste engineering time if customers can't get from signup to value. Sell isn't an afterthought. It's how the investment pays off.

---

## What This Means for the Business

### Engineering
Your time is protected. The framework vets work before it reaches you: no more "why are we building this?" halfway through a sprint. Post-ship measurement means we stop investing in things that aren't working and double down on things that are. Less context-switching, more leverage.

### Sales
Reliable roadmap dates this quarter, with monthly refresh. Evidence from post-ship measurement gives you credibility in customer conversations. PoC process is repeatable, not improvised. You can make promises because product is making promises and keeping them.

### Support
Advance notice of all changes via changelog and direct notification. Roadmap gives you prep time for what's coming. Analytics catches low adoption early, before it becomes a wave of support tickets.

### Marketing
Product principles aren't just internal language. They're credible positioning because they're real. Predictable roadmap means confident launch planning. Post-ship data provides proof points for case studies and content.

### Leadership
Full decision-to-outcome transparency. Trace from strategy → roadmap → shipped feature → measured outcome → next decision. Monthly checkpoints without ad-hoc status requests. Misses are visible and explained, not hidden.

---

## What This Playbook Is Not

**Not a replacement for the delivery lifecycle.** Whatever ticketing, code review, and release process you have, keep it. This framework adds a front door (how work enters) and a feedback loop (how we learn from what shipped). The middle is unchanged.

**Not a substitute for strategy.** Strategy tells you which bets matter *this year*. This framework tells you how to evaluate and execute *always*. Strategy changes yearly. The loop is durable.

**Not process for process' sake.** The quick-win path (≤ half day) is lightweight: flag it with your Tech Lead/PM and go. The RFC path has *clearer* process. The measurement loop is new, and it's the part that makes everything else worthwhile.

**Not something you build all at once.** Mental models and behaviours come first. Assets follow. You don't need a dashboard to start asking "how will we measure this?" You don't need a template to start writing an RFC. Start with the thinking. The tools catch up later.

---

## Closing

The Product Loop is a closed loop: Learn → Decide → Shape → Build → Launch → Sell → Learn again. Every phase generates information that makes the next cycle better. Every decision is traceable. Every outcome is measured.

**Transparency in trade-offs builds trust.** You'll say no more often, but you'll say why. You'll ship less that doesn't matter and more that does. You'll know, with data, not gut feel, whether what you shipped was worth the engineering time.

The product is one thing, not a collection of features. This is how you build it like one thing.

Learn. Decide. Shape. Build. Launch. Sell. Then learn again.

---

## Playbook Assets

Everything below is a reference asset produced by this framework. Read them when you need them, not before.

| When you need to... | Use this |
|---------------------|----------|
| Understand the vision and personas | [Product Vision](../anchors/product-vision.md) |
| See the product's North Star, outcomes, and job index | [Product Spec](../templates/product-spec.md) |
| Decide the right path for work | [Decision Framework](./decision-framework.md) |
| Write an RFC | [RFC Guide](../guides/writing-an-rfc.md) + [RFC Template](../templates/rfc.md) |
| Score a project | [RICE Guide](./rice.md) |
| Process feedback | [Handling Product Feedback](./customer-feedback.md) |
| Document research | [Research Template](./templates/research.md) + [Customer Call Template](./templates/customer-call.md) |
| Understand delivery workflow | [Delivery Standards](./delivery-standards.md) |
| Run a post-launch review | [Post-Launch Review](./templates/post-launch-review.md) |
| Write job stories | [JTBD Guide](../guides/jtbd-guide.md) |
| Write a durable per-job outcome doc | [Job Spec Template](../templates/job-spec.md) |
| Deliver with an agentic workforce | [Agentic Delivery](../guides/agentic-delivery.md) |
| Understand your role (PM) | [PM Handbook](./pm-handbook.md) |
| Understand how the triad works | [Working Together](./working-together.md) |
