---
title: Product Handbook
description: Everything the product team needs to know, across all four crafts
last_reviewed: 2026-07-10
icon: "👥"
---

# Product Handbook

Product is a function of four crafts: product management, product design, product marketing, and research/analytics. This handbook is for all of them. It replaces the PM Handbook; where something below is craft-specific, it says so.

Product is two things: domain expertise and product discipline. Domain expertise is being an expert in your customers' jobs to be done. Product discipline is the mechanics of shipping the right stuff, properly. The two are not equal: domain expertise matters more, and it matters more every year, because agents now do the mechanics cheaply. This holds for every craft: an agent can draft the spec, the mock, the launch copy, and the analysis; what stays scarce is knowing which one is right for this customer.

The function owns a simple question: **are we spending engineering time on the highest-leverage work, and did it pay?** Answering it takes all four crafts: the expertise to know what's highest-leverage, the discipline to prove it, ship it, and score it.

Companion to the [Product Playbook](./product-playbook.md) (how the company builds product, the six-phase loop). This one is how the product team operates day to day.

---

## What product is: expertise and discipline

Two legs, and they are not equal.

**Domain expertise** is being an expert in your customers' jobs to be done: their situation, their forces, their economics, every alternative they could hire instead. Each craft holds a different facet of it: the PM holds the jobs and the money, design holds the behaviour, marketing holds the language, research holds the evidence. This is how the team builds taste, the earned sense of what is worth building, and it is built deliberately, not by osmosis:

- **Entering a domain** follows the [Domain Expertise](./domain-expertise.md) protocol, whatever your craft: scoped reading, the three insiders, triangulation, the economics bar. It produces the [customer model](../templates/product-spec.md#the-customer-model) in the Product Spec by week two: the team's working model of the customer, dated, labelled a hypothesis, revised on evidence. The model is **multi-author**: each craft owns its sections.
- **Staying expert** takes longitudinal exposure: go back to the same customers repeatedly, over years, and keep your craft's signature exposure (see [Craft](./craft.md)) alongside deliberate study of competitors and the wider market.
- **Staying honest** happens where the work is already reviewed: customer-model claims get attacked in RFC reviews and fed back at [post-launch reviews](./templates/post-launch-review.md), not in a ritual of their own.

**Product discipline** is the mechanics: RFCs backed by evidence, RICE, the verdict rule, instrumentation, measuring what shipped against what was predicted. Most of this handbook is discipline, because discipline is teachable in a way taste is not.

### Taste: a prediction skill, one loop, four crafts

Taste is not a feeling and not an aesthetic sense. It is a **prediction skill**: the ability to say in advance what the customer will accept and what it will do, and be right more often over time. That makes it buildable the way forecasters build accuracy (explicit calls, real consequences, scored outcomes, high reps) and measurable per person.

The loop is universal; the prediction type is craft-specific: PMs predict **commercial mechanisms**, designers predict **behaviour**, marketers predict **message and funnel movement**, researchers **pre-register findings and forecast metrics**. All four write the call in the working artefact before reality answers and score it at the review that artefact already gets; the scored calls, over time, are each person's track record. The build loop, the Loewy anchor, and the per-craft application live in **[Craft](./craft.md)**: read it once properly.

In ProductOS you encode taste into the [anchors](../anchors/product-vision.md) and the [specs](../templates/job-spec.md), so agents inherit your judgement instead of generic defaults. But taste never fully transfers to a document; you stay accountable for what you ask an agent to build and what it hands back. The test of real expertise: you can say *why* something is good or bad. An articulate opinion that has never been scored is still an opinion.

---

## If You Do Only 5 Things

1. **Talk to customers, in your craft's way.** PMs: 3+ conversations per initiative, and go back to the same customers repeatedly. Design: watch real usage, test with real users. PMM: win/loss interviews and live call listening. Research: field time, not just queries. Evidence, not hearsay.

2. **Never make an unscored call.** Every material bet carries a written prediction in your craft's terms, with a confidence, before reality answers. RFCs for PMs; pre-test predictions for design; funnel predictions per launch for PMM; pre-registration for research. Scored at the review the artefact already gets.

3. **Complete monthly rituals.** Dogfood, onboarding review, competitor review. If you don't use your own product (and theirs), you don't understand the problem space, whatever your craft.

4. **Keep the customer model alive.** Your craft's sections of the [customer model](../templates/product-spec.md#the-customer-model) current, revised on evidence, and open to attack in every review that leans on them.

5. **Measure actual vs predicted.** Post-launch reviews at 2 weeks / 30 days / 90 days close the loop on the work; scoring your predictions there closes it on your judgement.

---

## The crafts and what they own

Full profiles, prediction types, exposures, and failure modes per craft: **[Craft](./craft.md)**. Decision rights across the triad: [Working Together](./working-together.md). The short version:

| Craft | Owns | Predicts | Watch for |
|---|---|---|---|
| **Product management** | The problem: jobs, evidence, economics, prioritisation | Commercial mechanisms | Order-taking; volume without scored bets |
| **Product design** | The experience: flows, patterns, the acceptance edge | Behaviour (task success, TTFV) | Aesthetics detached from the job |
| **Product marketing** | The story: positioning, language, enablement, funnel | Message and funnel movement | Judged by sales applause, not deal outcomes |
| **Research / analytics** | The evidence: grading, instrumentation, forecasts | Pre-registered findings, metric forecasts | The service desk; no falsifiable calls |

**We are:** problem-solving partners who translate strategy into shipped, sold, measured capabilities; evidence-based decision makers; partners to Engineering, not commanders of it.
**We aren't:** feature brokers taking orders from sales, project managers tracking tickets, a deck factory, or a dashboard service desk.

---

## Operating Rhythm

Outcomes matter more than calendar slots. Lead owner named; everyone contributes.

| Outcome | Cadence | Lead | How |
|---------|---------|------|-----|
| **Feedback is triaged and categorised** | Daily | PM | Process the [feedback queue](./customer-feedback.md); tag persona; escalate critical. |
| **Quick wins identified and scoped** | Weekly | PM + Tech Lead | Scope ≤ half-day wins from triaged feedback; ship the obvious ones. |
| **Planned work balanced against emerging needs** | Weekly | PM + Eng | Compare new signals against commitments. |
| **RFCs compete for engineering time** | Fortnightly | PM | Prioritisation session; [Decision Framework](./decision-framework.md). |
| **The team understands the product from the customer's side** | Monthly | Every craft | Dogfooding + onboarding review + competitor review, through your craft's lens. |
| **The team's model of the customer is current** | Ongoing | Every craft | Customer model revised on evidence; broken assumptions fed back at post-launch reviews. |
| **Shipped work measured against predictions** | Post-launch | PM, with craft predictions attached | Reviews at 2wk/30d/90d; Mechanism Check scored. Design and research predictions score earlier, at their own loop length. |
| **Launches carry a message prediction** | Per launch | PMM | Positioning shipped with a predicted funnel movement and date. |

---

## First 90 Days

The spine is common to all crafts; the craft column is what differs.

| Timeline | Everyone | By craft |
|----------|----------|----------|
| **Week 1** | Accounts and access. Complete product training. Use the product: build, break, explore with agents. Informal 1:1s across the triad. Listen. | -- |
| **Week 2** | Start the [Domain Expertise](./domain-expertise.md) protocol. Draft your sections of the week-two [customer model](../templates/product-spec.md#the-customer-model): it will be wrong, that's the point. Triage your first feedback. | PM: jobs + economics sections. Design: behaviour + acceptance edge. PMM: language + buying committee. Research: evidence grading pass on everyone's sections. |
| **Week 3** | First contribution shaped with the team. | PM: RFC stub from the discovery backlog, 3+ customer calls. Design: first teardown + a pre-test behavioural prediction. PMM: sit 5 live sales calls; draft the objection map. Research: first pre-registered study. |
| **Week 4** | Complete all monthly rituals. Share your customer-model sections with the team for attack. | -- |
| **Month 2** | First scored call: a written prediction in your craft's artefact, with its scoring date set. | PM: RFC approved with mechanism + [LB] assumptions. Design: prediction scored against a usability test. PMM: launch narrative with funnel prediction. Research: pre-registration scored against findings. |
| **Month 3** | Operating independently; longitudinal exposure locked in. | PM: standing conversations with the same customers under way. Design: teardown rotation set. PMM: win/loss interview quota set. Research: field-time quota set. |

---

## How the team works

Three traits, every craft.

### 1. Evidence Over Opinion

| DO | DON'T |
|----|-------|
| Link claims to research, data, or named customers | Start with "I think customers want..." |
| Validate with multiple independent sources | Build the case on one conversation or one query |
| Use data to challenge your own ideas | Cherry-pick supporting evidence |

### 2. Ship and Learn

| DO | DON'T |
|----|-------|
| Scope for MVP and iteration; ship behind flags | Solve every edge case in V1 |
| Make the call, write the prediction, score it | Keep options open forever to stay unscoreable |
| Ship the test, the message, the analysis early | Polish past the point of learning |

### 3. Start With the Problem

| DO | DON'T |
|----|-------|
| Ask "what progress is the customer trying to make?" | Ask "do you want feature X?" |
| Reframe requests as underlying jobs | Take feature requests, design trends, or stakeholder copy notes at face value |
| Bring the problem to the triad | Bring a prescribed solution |

---

## Using AI

We use AI for **augmentation, not automation**. The rules:

1. **You own the inputs and outputs.** You must know what good looks like before asking an agent to produce it. This is exactly why the taste loop matters: an agent multiplies judgement, it doesn't substitute for it.
2. **Approved enterprise accounts only.**
3. **Learn from each other.** Shared channel; post what works.
4. **Follow the AI policy.** If it doesn't exist, write one.

**Where AI helps:** analysing research and feedback patterns; drafting RFCs, briefs, copy, and analysis for you to own; competitive analysis; exploring the product; first-pass synthesis of calls.
**Where it doesn't:** making strategy decisions; replacing customer contact; judging quality you haven't experienced yourself; scoring your own predictions.

**When agents do much of the delivery:** augment the judgement, automate the delivery, keep the gates. The anchors stay human-owned; the fresh-process reviewer and the outcome UAT are load-bearing. See [Agentic Delivery](../guides/agentic-delivery.md).

---

## Monthly Rituals

**"If you don't use your own product, you don't understand your own product."** All crafts complete all rituals. ~6–8 hours/month.

### Dogfooding
Experience the product as each persona does, through your craft's lens: PM reads the jobs and friction, design reads the flows and the edge, PMM reads the story the product tells, research reads whether the instrumentation captures what just happened. Raise ≥1 ticket tagged `ritual:dogfood`.

### Onboarding Review
End-to-end as a new Admin, monthly. Record ≤10 mins. Raise ≥1 ticket tagged `ritual:onboarding`. You must always find something to improve.

### Competitor Onboarding Review
Different competitor each month; complete their onboarding end-to-end; document standouts, gaps, opportunities; share in the team channel. Tag `ritual:competitor`. This is the outside exposure that keeps immersion from becoming going native.

Use the [Ritual Review Template](./templates/ritual-review.md) for dogfooding, onboarding, and competitor reviews.

### Ticket Tags
`ritual:dogfood`, `ritual:onboarding`, `ritual:competitor`, `ai-assisted`, `quick-win`.

---

## Working With Others

Decision rights and triad mechanics: [Working Together](./working-together.md). The anti-patterns in one line each: don't tell engineering *how* ("we need sub-50ms queries", not "use PostgreSQL"); don't take "sales needs this for a deal" as evidence ("sales hears this from 5 customers, let's validate" is); don't let any craft get overruled in its own domain without a conversation.

---

## Resources

**Start here:**
- [Craft](./craft.md): the build loop and the four craft profiles
- [Product Vision](../anchors/product-vision.md) · [Product Playbook](./product-playbook.md) · [Working Together](./working-together.md)

**Guides:**
- [Domain Expertise](./domain-expertise.md)
- [Writing an RFC](../guides/writing-an-rfc.md) · [Handling Product Feedback](./customer-feedback.md) · [RICE](./rice.md) · [Decision Framework](./decision-framework.md) · [Discovery](./discovery.md) · [Product Marketing](./product-marketing.md) · [Product Analytics](./product-analytics.md)

**Templates:**
- [RFC](../templates/rfc.md) · [Job Spec](../templates/job-spec.md) · [Post-Launch Review](./templates/post-launch-review.md) · [Research](./templates/research.md) · [Customer Call](./templates/customer-call.md)

**Operational:**
- [Delivery Standards](./delivery-standards.md) · [Release Phases](./release-phases.md)
