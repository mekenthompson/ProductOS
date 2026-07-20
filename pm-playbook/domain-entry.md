---
title: Domain Entry
description: "The ramp protocol: how anyone in product enters a new domain, segment, or product area and gets dangerous fast"
last_reviewed: 2026-07-10
icon: "🧭"
---

# Domain Entry

Domain expertise is the more valuable leg of product (see the [Product Handbook](./product-handbook.md)), and it doesn't transfer: change segment or product area and your calibration resets, which is why judgement in a new domain is assessed on trend, not level (see [Calibration](./calibration.md)). What *does* transfer is the method for rebuilding it. This doc makes that method explicit, so ramping into a domain is a repeatable protocol the whole team runs, not a personality trait we hope to hire. The protocol is craft-agnostic: a designer, PMM, or researcher entering a domain runs the same steps, contributing their craft's sections of the customer model (see [Craft](./craft.md)).

The professions that do this for a living (barristers mastering a new industry per case, journalists going from zero to credible in six weeks, clinical psychologists formulating a new patient) all use the same moves. Steal them.

**When to run this:** joining the team, changing product areas, entering a new segment or market, or inheriting a domain in handover. Expect the full protocol to take 2–4 weeks alongside normal work.

---

## The protocol

### 1. Scope like a barrister

Don't try to learn the industry. Learn what the decisions in front of you require. Write down the 2–3 decisions you'll face in the next quarter and let them bound the reading list, the interviews, and the depth. Everything outside that boundary is deferred, not skipped.

### 2. Read everything public first

Before spending anyone's time: prior research docs, post-launch reviews, the feedback queue, win/loss notes, support ticket patterns, competitor material, industry press. The goal is to never ask an insider a question the archive already answers. Budget: 2–3 days, not 2–3 weeks.

### 3. Find the three insiders

The official channels give you the official story. The highest-yield sources are:

| Source | Why |
|---|---|
| **A churned account** | They have no reason to be polite and they know exactly where the product failed the job. The interview nobody wants to do is the one worth the most. |
| **A power user or extreme case** | Someone using the product in a way you didn't design. Extreme cases expose the job's real shape faster than ten average users. |
| **A tenured insider** | The account manager, support veteran, or (best) an ex-customer now on staff who has watched this segment for years. Debrief them like an expert witness: structured questions, until you can argue their view back to them. |

### 4. Ask the dumb questions early

Week one is when basic questions are free. Keep a running dumb-questions list and burn through it early; the same questions asked in month three cost credibility.

### 5. Triangulate everything

Every source has an agenda: sales wants the deal, the champion wants their feature, the buyer isn't the user, the churned account is settling scores. No claim enters your customer model on one source. Two independent sources minimum for anything load-bearing.

### 6. Pass the economics bar

You are not ramped until you can sketch, from memory, how your customer makes money and where your product touches it: their revenue drivers, their main costs, the metric their operator is judged on, and what a bad month looks like. If you can't do this, every prioritisation call you make is guesswork wearing a framework.

---

## The customer model: the artefact that proves the ramp

By the end of **week two**, draft (or revise) your sections of the [customer model](../templates/product-spec.md#the-customer-model) in the Product Spec: explicitly dated and labelled a hypothesis. Who hires the job and in what situation, the forces on them, what created and what perpetuates the current workaround, their economics, and what must be true for us to win.

It will be wrong. That's the point. A written model is attackable, and attackable is how it improves. Revise it on evidence and present it at the [customer-model review](./templates/ritual-review.md#customer-model-review). Each craft drafts its own sections; research grades the evidence. The model is also the handover artefact: when a domain changes hands, the customer model (with its last-revised trail) transfers the context that otherwise dies in someone's head.

---

## Staying ramped: the account panel

Ramp gets you in. Staying expert takes longitudinal exposure: the same customers, over years, watching how their decisions play out.

- Each PM owns a named **account panel of 8–10 customers** in their domain: a spread of segments and health, deliberately including at least one struggling account. The other crafts keep their own signature exposure on the same accounts where possible: design observes them, PMM interviews their wins and losses, research fields with them (see [Craft](./craft.md)).
- **Quarterly touch minimum** per account. Not a survey, a conversation or a visit; use the [Customer Call Template](./templates/customer-call.md).
- Panels persist across initiatives. Initiative research (3+ interviews per RFC) samples wider; the panel is where depth accumulates.
- The panel is where you keep passing the economics bar as the market moves.

The known failure mode of deep immersion is going native: internalising the customer's assumptions along with their knowledge, and going blind to reframes. The antidote is already in the [monthly rituals](./product-handbook.md#monthly-rituals): the competitor review is your structured exposure to how others solve the same class of job. Keep the ratio roughly 80% immersion, 20% outside exposure.

---

## Ramp checklist

- [ ] Quarter's decisions written down; scope set
- [ ] Archive read; dumb-questions list started
- [ ] Churned account interviewed
- [ ] Extreme case interviewed
- [ ] Tenured insider debriefed
- [ ] Economics sketch done from memory, checked by the tenured insider
- [ ] Week-two customer-model sections written, dated, shared
- [ ] Customer model presented at first customer-model review
- [ ] Account panel named

---

## Related

- [Product Spec: the customer model](../templates/product-spec.md#the-customer-model) -- the artefact this protocol produces.
- [Ritual Review Template](./templates/ritual-review.md#customer-model-review) -- where the customer model gets attacked.
- [Discovery](./discovery.md) -- per-initiative research; this doc is the per-domain layer underneath it.
- [Calibration](./calibration.md) -- why entering a domain resets your prediction track record, and how the ledger rebuilds it.
- [Product Handbook, First 90 Days](./product-handbook.md#first-90-days) -- where this protocol slots into onboarding.
- [Craft](./craft.md) -- the per-craft application of the protocol.
