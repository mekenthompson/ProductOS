---
title: Learning Accounts
description: "A small set of deliberately over-served customers run as the product's research function, with a hard generalisation rule"
last_reviewed: 2026-07-10
icon: "🧵"
---

# Learning Accounts

The couture houses ran bespoke work at a loss because fitting fifty real clients taught them what to mass-produce for millions. The forward-deployed engineering model is the software version: embed with a customer, build close to their need, and harvest what generalises back into the platform. Both die the same way when run badly: the bespoke work becomes the business, and the platform starves.

A **learning account** is a customer we deliberately over-serve, explicitly as R&D. The margin on the account is irrelevant; the yield is understanding we can't get any other way. This doc is how to run the tier without it degrading into unbillable custom dev.

---

## The hard rule

> **Nothing built for a learning account ships to the platform unless it generalises to the segment. If it can't generalise, it gets priced as services or killed.**

Every piece of learning-account work is tagged at inception: **generalises** (a segment job, this account is the first instance), **services** (account-specific, commercially priced as such), or **experiment** (we don't know yet; a decision date is set, and at that date it becomes one of the other two). No fourth category. Untagged work is the drift.

---

## Selecting accounts

Three to five per product area. More dilutes the attention that makes the tier work.

**Choose accounts that are:**
- **Representative of a segment you're betting on**, not just large or loud. The learning must transfer.
- **Willing to be studied.** Access to their operators and their numbers, not just their champion. This is the price of the over-service; make it explicit in the arrangement.
- **A spread**, including at least one demanding or struggling account. Comfortable accounts teach less.

**Avoid:**
- Accounts whose main appeal is revenue. That's a key account, a different (sales-owned) motion.
- Accounts whose job is genuinely unlike the segment's. You'll learn a lot that transfers nowhere.

Review the roster every six months. Graduating an account out is normal: when the learning yield drops, rotate.

---

## Running the tier

- **One PM owns each learning account**, and it sits inside their [account panel](./domain-entry.md#staying-ramped-the-account-panel). The PM, not the AM, owns the learning agenda.
- **Expert-witness debriefs, monthly.** Structured sessions with the account's operators: the PM questions until they can argue the customer's view back to them. Captured with the [Customer Call Template](./templates/customer-call.md), fed into the PM's sections of the [customer model](../templates/product-spec.md#the-customer-model).
- **Requests skip no gates.** Learning-account requests still pass Signal → Standard → Speed. What the tier buys is priority attention and depth of contact, not a bypass around the [Decision Framework](./decision-framework.md).
- **The generalisation review.** Quarterly, per product area: walk the list of learning-account work and its tags. Anything tagged **experiment** past its decision date gets forced to a tag. Anything tagged **generalises** must name the [Job Spec](../templates/job-spec.md) it now serves. This review is what keeps the hard rule real.

---

## What the tier yields

- **First instances of segment jobs**, seen early and in full context, before they show up as feedback-queue patterns.
- **Ground truth for the customer model.** The account's operators and economics are where a PM's model gets tested against reality between customer-model reviews.
- **Honest failure data.** An over-served account that still won't adopt something is the strongest disconfirming evidence available; log it in the [calibration ledger](./calibration.md) like any other outcome.

---

## Failure modes to watch

| Failure | Smell | Correction |
|---|---|---|
| **Custom-dev drift** | Work shipping tagged "generalises" that only this account uses 90 days later | Retag as services; charge or kill; tighten the generalisation review |
| **Whale capture** | Roadmap themes tracing to one account's requests | Check every generalises-tag against 2+ non-learning accounts' evidence |
| **Comfort selection** | All accounts happy, yield falling | Rotate in a struggling or demanding account |
| **Sales repurposing** | Tier used as a retention lever for at-risk revenue | That's a key-account motion; move the account out of the tier |

---

## Related

- [Domain Entry](./domain-entry.md) -- the account panel this tier sits inside.
- [Decision Framework](./decision-framework.md) -- learning-account requests pass the same gates.
- [Product Spec: the customer model](../templates/product-spec.md#the-customer-model) -- where the debriefs land.
- [Calibration](./calibration.md) -- learning-account outcomes are scored like any other.
- [Handling Product Feedback](./customer-feedback.md) -- the wide funnel this tier complements; the tier is depth, the queue is breadth.
