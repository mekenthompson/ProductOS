---
title: PM Handbook
description: Everything a Product Manager needs to know on this team
last_reviewed: 2026-05-12
icon: "👤"
---

# PM Handbook

PMs own a simple question: **are we spending engineering time on the highest-leverage work?**

We validate problems through our [personas](./personas.md), build the case for the right bets, and measure whether shipped work moved a named [outcome and its Signal](../anchors/product-vision.md) (where one number captures the whole product, that Signal is the single headline metric). The outcome and its Signal are the contract. Everything else is operational detail.

Companion to the [Product Playbook](./product-playbook.md) (how we build product as a company). This one is how PMs operate day to day.

---

## If You Do Only 5 Things

1. **Talk to 3+ customers per initiative**
   Ground decisions in evidence, not assumptions. Every RFC should link to real customer conversations, not sales hearsay or internal hunches.

2. **Write clear RFCs with evidence**
   Get approval before building, link to research. An RFC without evidence is an untested opinion. It doesn't earn engineering time.

3. **Complete monthly rituals**
   Dogfood, onboarding review, competitor review. If you don't use your own product (and theirs), you don't understand the problem space.

4. **Triage feedback daily**
   Process customer feedback through the [feedback workflow](./customer-feedback.md). Categorise, identify patterns, escalate critical issues. This is how signal enters the system.

5. **Measure actual vs predicted outcomes**
   Track metrics for 3–6 months post-launch. Shipping without measurement is guessing. Post-launch reviews close the loop and make the next bet smarter.

Everything else in this doc supports these five.

---

## What PMs Do

**We are:**
- Problem-solving partners who translate strategy into shipped capabilities
- Evidence-based decision makers grounding choices in customer data
- Team partners who work with (not command) Engineering and Design

**We aren't:**
- Feature brokers taking orders from sales
- Project managers tracking tickets
- Product owners dictating solutions

### Core Responsibilities

| Phase | What PMs Do | Persona Lens | Key Docs |
|-------|-------------|--------------|----------|
| **Learn** | Talk to 3+ customers, document evidence, estimate impact | Which persona has this problem? | [Handling Product Feedback](./customer-feedback.md), [Research Template](./templates/research.md) |
| **Decide** | Write RFC, RICE score, get approval | Does the solution serve the vision for this persona? | [Writing an RFC](../guides/writing-an-rfc.md), [RICE](./rice.md), [Decision Framework](./decision-framework.md) |
| **Shape + Build** | Maintain the living RFC, collaborate with Design + Engineering, validate in Preview | Does it meet all product principles? | [RFC Template](../templates/rfc.md) |
| **Launch** | Coordinate GTM, plan rollout, monitor adoption, conduct post-launch review | Are the right personas adopting? | [Delivery Standards](./delivery-standards.md), [Post-Launch Review](./templates/post-launch-review.md) |
| **Sell** | Make self-onboarding work, support sales enablement, track adoption | Can each persona find and adopt this without help? | |

---

## PM Operating Rhythm

Outcomes matter more than calendar slots. Here's what needs to happen, and roughly how often.

| Outcome | Cadence | How |
|---------|---------|-----|
| **Feedback is triaged and categorised** | Daily | Process new feedback in your tracker. Categorise, tag persona, escalate critical issues. See [Handling Product Feedback](./customer-feedback.md). |
| **Quick wins are identified and scoped** | Weekly | Review triaged feedback with your Tech Lead. Scope quick wins (≤ half a day). Ship the obvious ones. |
| **Planned work is balanced against emerging needs** | Weekly | Prioritise with Engineering. Compare new signals against current commitments. |
| **RFCs compete for engineering time** | Fortnightly | Prioritisation session. See [Decision Framework](./decision-framework.md) for how this works. |
| **You understand the product from the customer's perspective** | Monthly | Dogfooding + onboarding review + competitor review. See Monthly Rituals below. |
| **Shipped work is measured against predictions** | Post-launch | Reviews at 2 weeks, 30 days, 60–90 days. Accelerate, iterate, pivot, or stop. See [Post-Launch Review](./templates/post-launch-review.md). |

---

## First 90 Days

### Quick Start

| Timeline | Goal | Key Activities |
|----------|------|----------------|
| **Day 1–2** | Get set up | Accounts: product, issue tracker, docs, source control, comms, AI tooling. Follow your engineering onboarding doc for access. |
| **Week 1** | Learn the product and meet your team | Complete your product's internal training. Play with the product: build, break things, use AI agents to explore and ask questions. Meet your product and engineering teammates through informal 1:1s. Attend product meetings. Listen, learn, ask questions. |
| **Week 2** | Broaden context and start contributing | Connect with Design and other leadership through informal 1:1s. Process and triage your first customer feedback. Attend team meetings across your area. Find a quick-delight problem (≤ 3 hours) you can help shape with engineering and get scheduled. |
| **Week 3** | Write your first RFC stub | Pick a problem from the discovery backlog. Talk to 3+ customers using the [Customer Call Template](./templates/customer-call.md). Fill Problem + Evidence + Impact in the [RFC Template](../templates/rfc.md). Review in product team meetings to get feedback and iterate. |
| **Week 4** | Complete all monthly rituals | Dogfooding + onboarding review + competitor review. See Monthly Rituals below. |
| **Month 2** | Get first RFC approved | Finish the RFC (Solution, Scope, Success Metrics). RICE score. Submit for approval. See [Writing an RFC](../guides/writing-an-rfc.md). |
| **Month 3** | Coordinate delivery | Maintain the living RFC. Collaborate with Design + Engineering. Enter Building status. |

---

## How PMs Work

Three traits that matter most.

### 1. Evidence Over Opinion

Ground decisions in data, not intuition.

| DO | DON'T |
|----|-------|
| Link RFCs to research with ≥3 customer quotes | Start with "I think customers want..." |
| Validate with 3+ customer conversations | Build based on one customer request |
| Use data to challenge your own ideas | Cherry-pick supporting data |

### 2. Ship and Learn

Perfect is the enemy of shipped. Get it out, measure it, iterate.

| DO | DON'T |
|----|-------|
| Scope for MVP and iteration | Try to solve every edge case in V1 |
| Identify quick delights weekly | Wait for big projects to deliver value |
| Ship behind feature flags | Go straight to 100% untested |

### 3. Start With the Problem

Understand the customer's problem before proposing solutions.

| DO | DON'T |
|----|-------|
| Ask "What problem are you trying to solve?" | Ask "Do you want feature X?" |
| Reframe requests as underlying needs | Take feature requests at face value |
| Talk to 3+ customers before writing an RFC | Write an RFC from 1 conversation |

---

## Using AI

We use AI for **augmentation, not automation**. AI tools make you more effective. They don't replace your judgement.

**The rules:**

1. **You own the inputs and outputs.** AI is a resource, not a co-author. You have to know what good looks like before you ask an agent to help produce it. You're not outsourcing thinking or strategy decisions.
2. **Use approved enterprise accounts only.** Whichever AI tools your company has approved, use them through enterprise accounts, not personal accounts for work.
3. **Learn from each other.** Have a shared channel where the team posts what's working: share what works, flag what doesn't.
4. **Follow the AI policy.** Whatever your company's AI usage policy is, follow it. If it doesn't exist yet, write one.

**Where AI helps PMs:**
- Analysing customer research and feedback patterns
- Drafting RFCs (you refine and own the output)
- Competitive analysis and market research
- Exploring the product: use agents to ask questions, try new things, understand features
- Writing customer communications and summaries

**Where AI doesn't help:**
- Making strategy decisions
- Replacing customer conversations
- Judging product quality (you need to use the product yourself)

**When agents do much of the delivery.** "Augmentation, not automation" governs *judgement*: the vision, the headline metric, which jobs matter, strategy. That stays yours. But agents can *own delivery* (drafting [Job Specs](../templates/job-spec.md), implementing, running design loops, running outcome UATs) **inside the four parts** of [Agentic Delivery](../guides/agentic-delivery.md). The rule: augment the judgement, automate the delivery, keep the gates as the safety rail. Two gates are load-bearing: the **fresh-process reviewer** (an agent can't grade its own work) and the **outcome UAT** (the job is proven, not assumed). The anchors stay human-owned. Agents consume them, never author them.

---

## Monthly Rituals

**"If you don't use your own product, you don't understand your own product."**

All PMs complete all three rituals monthly. Non-negotiable. ~6–8 hours/month total.

### Dogfooding

Experience the product as each persona does. Map each persona's vision-lens question to a real activity:

| Persona Lens | Activity |
|------|----------|
| **Consumer** | Use the core day-to-day flow as a Consumer would. Note where the signal is unclear or slow. |
| **Creator** | Set up the product from scratch as a Creator would. Note where setup friction is highest. |
| **Sponsor** | Review the dashboards available to Sponsors. Can you answer "are we getting better?" without help? |

Maintain an example application/account. Raise ≥1 ticket tagged `ritual:dogfood`.

### Onboarding Review

Experience onboarding as a new **Creator** would. Go through end-to-end onboarding monthly. Record a short walkthrough (Loom/Tella/equivalent, ≤10 mins). Raise ≥1 ticket tagged `ritual:onboarding`. **You must always find something to improve.**

### Competitor Onboarding Review

Different competitor each month. Complete their onboarding end-to-end. Document: what they did well, what was confusing, standout features, opportunities for your product. Raise a ticket tagged `ritual:competitor`. Share in your team's channel.

**Rotation:** maintain a list of 4–6 competitors and rotate one per month.

Use [Ritual Review Template](./templates/ritual-review.md) for both dogfooding and competitor onboarding reviews.

### Ticket Tags

- `ritual:dogfood`, `ritual:onboarding`, `ritual:competitor`: tag all ritual tickets
- `ai-assisted`: content created/edited with AI
- `quick-win`: potential quick delights found during rituals

---

## Working With Others

See [Working Together](./working-together.md) for how the product triad (product, engineering, design) collaborates.

### With Engineering

**PMs own:** Problem definition, success criteria, RFC with requirements
**Tech Leads own:** Technical approach, architecture, effort estimates, delivery
**Shared:** Scope negotiation, timeline assessment, trade-off decisions

Anti-pattern: PM says "Use PostgreSQL" → Instead say "We need sub-50ms queries"

### With Design

**PMs own:** User requirements, JTBD, personas, acceptance criteria
**Design owns:** User flows, wireframes, mockups, usability testing
**Shared:** Experience validation, edge cases, iteration from testing

### With Sales/CS

**PMs own:** Validating patterns (not one-offs), RICE scoring, transparent expectations
**Sales/CS own:** Surfacing customer needs, providing context, communicating roadmap

Anti-pattern: "Sales needs this for a deal" → Instead: "Sales hears this from 5 customers, let's validate"

---

## Resources

**Start here:**
- [Product Vision](../anchors/product-vision.md): Vision, personas, principles
- [Product Playbook](./product-playbook.md): The 6-phase operating system
- [Working Together](./working-together.md): How the product triad collaborates

**Guides:**
- [Writing an RFC](../guides/writing-an-rfc.md): How to write, approve, and deliver
- [Handling Product Feedback](./customer-feedback.md): Feedback processing
- [RICE Guide](./rice.md): Scoring framework
- [Decision Framework](./decision-framework.md): Signal → Standard → Speed

**Templates:**
- [RFC Template](../templates/rfc.md) · [Job Spec Template](../templates/job-spec.md) · [Post-Launch Review](./templates/post-launch-review.md) · [Research Template](./templates/research.md) · [Customer Call Template](./templates/customer-call.md)

**Frameworks:**
- [JTBD Guide](../guides/jtbd-guide.md)

**Operational:**
- [Delivery Standards](./delivery-standards.md): Your tracker's workflow with gates
