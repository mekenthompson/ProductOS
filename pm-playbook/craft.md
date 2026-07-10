---
title: Craft
description: "The universal loop for building taste and judgement across the product function, and how it applies per craft: PM, product design, product marketing, research/analyst"
last_reviewed: 2026-07-10
icon: "🛠️"
---

# Craft

Everyone in product is in the business of predicting the customer. The crafts predict different things: a PM predicts what a customer will pay for, a designer predicts what they'll succeed at, a marketer predicts what they'll respond to, a researcher predicts what the evidence will show. **Taste**, in any craft, is a calibrated model of the customer sharp enough to make those predictions before the customer can articulate them. **Craft** is the tradecraft that builds and tests that model.

The loop is identical everywhere; only the prediction type changes. This doc defines the universal loop, then the per-craft application.

---

## The universal loop

One rep = write the call down before reality answers, then check.

```
Formulation          your written model of the customer (shared, attackable)
      ↓
Prediction           a dated, falsifiable call, in your craft's terms
      ↓
Reality              ship it, test it, run it
      ↓
Score                Fired / Partial / Missed / Unscoreable → the ledger
      ↓
Revision             the broken assumption feeds back into the formulation
```

Reps compound. Someone producing constantly without written predictions gets zero reps regardless of output volume; someone doing eight scored calls a year builds a track record. This is why ten years of experience can be one year repeated ten times, and why it doesn't have to be.

### The five obligations (every craft, no exceptions)

1. **Contribute to the formulation.** The [Customer Formulation](./templates/customer-formulation.md) is a multi-author document; each craft owns its sections (see below). Your model of the customer is written, dated, and attackable, or it's a private hunch.
2. **Never make an unscored call.** Before reality answers, write what you expect and your confidence, in your craft's prediction type. Vague calls are scored Unscoreable, which is worse than wrong.
3. **Keep the 80/20 exposure ratio.** Roughly 80% longitudinal immersion in your customers, 20% structured exposure to how others solve the same class of problem. Immersion alone breeds going native; exposure alone breeds work that's brilliant and unsellable.
4. **Submit your understanding to attack.** Every craft presents at [Formulation Review](./templates/formulation-review.md) and every craft rotates through opposing counsel. The review critiques understanding, not output.
5. **Articulate every judgement.** "This is good/bad because X" is a rep. "I don't like it" is nothing. If you can't say why, you have an opinion, not taste yet.

### How improvement shows, in order

The same signals in every craft, arriving in the same order:

1. **Unscoreable rate falls** (1–2 quarters). Your predictions get sharp enough to test.
2. **Specificity rises** (audit your own ledger entries year on year). "Adoption will improve" becomes "tier-2 product-gap churn falls within two renewal cycles."
3. **Confidence calibration** (~a year of reps). Your confidence-4 calls fire more than your confidence-2 calls. This is the real measure: a person whose high-confidence calls miss is the risk, whatever their average.
4. **Hit rate** (slowest, noisiest). Judged on trend, not level, especially after a domain change.

---

## The crafts

One ledger, four prediction types, same scoring. The structural difference between crafts is **loop length**, and it's worth exploiting: pair the long-loop crafts' bets with the short-loop crafts' predictions, so every big bet has early scored checkpoints. The designer's task-success call and the researcher's cohort forecast pay out long before the PM's churn mechanism can.

| Craft | Prediction type | Loop length | Formulation sections owned | Signature exposure |
|---|---|---|---|---|
| PM | Commercial mechanism | 1–3 quarters | Jobs, forces, customer economics | Account panel; churned-account interviews; economics bar |
| Product design | Behavioural | Days–weeks | Context of use, behaviour, the acceptance edge | Comparative teardowns; dogfooding as each persona |
| Product marketing | Message / funnel | ~1 quarter | Customer language, buying committee, objection map | Win/loss interviews; live sales-call listening |
| Research / analyst | Epistemic (pre-registered) | Weeks | Evidence grading across all sections | Field-time quota; extreme-case interviews |

### Product management

As defined across this playbook. Predictions are **commercial mechanisms**: the dated claim about churn closed, module attached, win rate lifted ([RFC](../templates/rfc.md), scored at the [90-day review](./templates/post-launch-review.md)). The craft-specific disciplines are the [Domain Entry](./domain-entry.md) protocol, the economics bar, and the account panel. Failure mode: shipping volume without scored bets; the order-taker with a full roadmap and no track record.

### Product design

Predictions are **behavioural**: "first-attempt task success on this flow exceeds 80% unmoderated", "time-to-first-value drops below 10 minutes", "this pattern reads without the tooltip." Design has the fastest loop in the function: a usability test scores a prediction in days, so a designer can accumulate more calibration reps per year than anyone, **if** the prediction is written before the test. Make pre-test prediction a standing rule.

The craft-specific concept is the **acceptance edge** (most advanced yet acceptable): the designer's job is designing up to the edge of what the persona will accept and not past it, so their formulation sections state where that edge sits ("this segment tolerates novelty in workflow, none in the numbers they report upward"). Post-launch, those edge calls are scoreable.

Failure mode: taste as aesthetics detached from the job; portfolio-beautiful, adoption-flat. Measured on: predicted vs actual task success and activation, TTFV deltas on shipped flows, and whether stated edge calls held.

### Product marketing

Predictions are **message and funnel**: "this positioning lifts stage-1-to-2 conversion in [segment]", "this narrative appears verbatim in win interviews within a quarter", "sales adopts this battle card unprompted." Every launch narrative ships with a predicted funnel movement and a date, logged and scored like an RFC.

PMM owns the customer's **language**: the buying-committee model, the objection map, and the voice-of-customer lines in the formulation. Their churned-account equivalent is the **loss interview**, same logic, the highest-yield conversation is the one nobody wants. Set a quota for live sales-call listening, not a sample.

Failure mode: the consultant loop; judged on whether sales likes the deck rather than whether the message wins deals, which builds fluency and zero judgement. Measured on: conversion and win-rate predictions fired, message pull-through (positioning language appearing in customers' own mouths), enablement adoption.

### Research / analyst

Predictions are **epistemic**, in two forms. **Pre-registered findings:** "before I run these churn interviews, I expect tier-2 accounts to cite workflow gaps over price, confidence 3." Pre-registration is the anti-narrative device: it makes it impossible to quietly fit the story to the data afterwards. **Metric forecasts:** "this cohort's 90-day retention lands 60–65%." Research should be the best-calibrated craft in the building; this is literally forecasting.

Research owns **evidence grading** across the whole formulation: the observation-vs-interpretation line and the single-source flags on everyone's sections, which makes them opposing counsel by default at Formulation Review. The craft-specific exposure rule is a field-time quota: watch real usage, don't only query it; an analyst who has never sat with the customer builds elegant models of the wrong variable.

Failure mode: the service desk; answering whatever question arrives without ever making a falsifiable call. Ten years of dashboards, no track record. Measured on: forecast calibration in the literal sense, and **decision influence**: bets killed, resized, or redirected traceable to their disconfirming findings. Research that never changes a decision is decoration, whatever its rigour.

---

## How the crafts hold together

- **The formulation is the shared object.** PM writes economics and jobs, design writes behaviour and the acceptance edge, PMM writes language and buying dynamics, research grades all of it. One document, four hands, one revision log.
- **Formulation Review is cross-craft.** A designer attacking the PM's economics, or a researcher flagging the PMM's single-source claim, is the system working, not a boundary violation.
- **One ledger.** Four prediction types on one Fired/Partial/Missed/Unscoreable scale (see [Calibration](./calibration.md)). Per-person calibration is comparable across crafts because the scale is.
- **One commercial frame.** The portfolio answers to [revenue quality](../anchors/measurement-chain.md) collectively; the crafts differ only in which mechanism they own on the way there.

---

## Related

- [Product Handbook](./product-handbook.md) -- the team handbook this doc's loop runs inside.
- [Calibration](./calibration.md) -- the ledger, extended with the four prediction types.
- [Customer Formulation Template](./templates/customer-formulation.md) -- the multi-author shared object.
- [Formulation Review Template](./templates/formulation-review.md) -- cross-craft attack.
- [Domain Entry](./domain-entry.md) -- the ramp protocol; applies to any craft entering a new domain.
- [Working Together](./working-together.md) -- triad decision rights; this doc covers judgement-building, that one covers ownership.
