---
title: Craft
description: "How to build craft in any product discipline: reps on the customer's job, exposure across the quality range, and predictions written before reality answers"
last_reviewed: 2026-07-20
icon: "🛠️"
---

# Craft

Everyone in product is in the business of predicting the customer. The crafts predict different things: a PM predicts what a customer will pay for, a designer predicts what they'll succeed at, a marketer predicts what they'll respond to, a researcher predicts what the evidence will show. **Taste**, in any craft, is a calibrated model of the customer sharp enough to make those predictions before the customer can articulate them. Taste is a prediction skill, not a vibe, and you build it the way any prediction skill gets built: reps, under feedback.

This doc covers the two things that build it: **how to build craft** (the build loop) and **how to build domain expertise** (the ramp, covered in full in [Domain Expertise](./domain-expertise.md)). Nothing here is a ceremony, the predictions and scoring live inside the working artefacts you already produce.

---

## How to build craft: the build loop

Three moves, run continuously. Skip any one and the other two stop compounding.

### 1. Get reps on the customer's job

You can't model a job you've only read about. Do the job yourself where that's possible. Shadow the people who do it for a living. Ride along on sales calls and listen to how the customer describes the struggle in their own words. Sit with support. And build the longitudinal version deliberately: go back to the same customers repeatedly, over years, watching how their decisions play out.

Reps on the job are what fill your sections of the [customer model](../templates/product-spec.md#the-customer-model): who hires the job, in what situation, under what forces. A model built from dashboards alone is an elegant model of the wrong variable.

### 2. Exposure across the quality range

Immersion in your own product teaches you your own product. Judgement needs the full range: use competitors' products regularly, including the bad ones. See what terrible looks like and what great looks like in this class of problem, so your internal scale has both ends anchored. Comparative teardowns, win/loss interviews, and the monthly competitor review are the structured versions of this.

Alongside immersion in your own customers, keep studying competitors and the wider market. Immersion alone breeds going native; exposure alone breeds work that's brilliant and unsellable. You need both, and immersion should dominate.

### 3. Write the call down before reality answers, then score it

One rep = a prediction written before the outcome, then checked against it. **A prediction written after the outcome is a story, not a rep.**

```
Customer model       your written model of the customer (shared, attackable)
      ↓
Prediction           a dated, falsifiable call, in your craft's terms
      ↓
Reality              ship it, test it, run it
      ↓
Score                the prediction checked against what actually happened
      ↓
Revision             the broken assumption feeds back into the customer model
```

Reps compound. Someone producing constantly without written predictions gets zero reps regardless of output volume; someone doing eight scored calls a year builds a track record. This is why ten years of experience can be one year repeated ten times, and why it doesn't have to be. A call too vague to score is worse than a wrong one, because it gave you no rep.

The predictions live where the work already lives, not in a parallel process: the commercial mechanism in the [RFC](../templates/rfc.md), scored at the [post-launch review](./templates/post-launch-review.md); the pre-test prediction in the test plan; the funnel prediction in the launch narrative; the pre-registration in the study. No standing table, no separate process: the artefact carries the prediction, the review scores it.

### The proof this loop works: Loewy

Raymond Loewy, the industrial designer behind half of mid-century America, is the loop personified: decades of reps in one domain, deliberate exposure to the full quality range of the field, and constant contact with real customer reactions. Out of that he distilled **MAYA**, "most advanced yet acceptable" (*Never Leave Well Enough Alone*, 1951): customers reject what departs too far from the familiar, so the job is designing up to the edge of what the persona will accept and not past it. Fifty years later the psychologists confirmed him empirically: aesthetic preference peaks where novelty and typicality are jointly maximised (Hekkert, Snelders & van Wieringen, *British Journal of Psychology*, 2003).

The **acceptance edge** moves by segment and by domain: one persona tolerates novelty in the workflow and none in the numbers they report upward. Knowing where the edge sits for *your* persona is what taste is: a calibrated prediction of the customer's acceptance, built from reps. Write your edge calls into the customer model, post-launch they're scoreable.

### How improvement shows, in order

1. **Predictions get sharp enough to test** (1–2 quarters). Fewer calls that reality can't grade.
2. **Specificity rises** (audit your own scored predictions year on year). "Adoption will improve" becomes "tier-2 product-gap churn falls within two renewal cycles."
3. **Hit rate** (slowest, noisiest). Judged on trend, not level, especially after a domain change.

---

## The build loop per craft

Every craft runs the same loop off the same shared customer model; what differs is the prediction type and the **loop length**. The difference is worth exploiting: pair the long-loop crafts' bets with the short-loop crafts' predictions, so every big bet has early scored checkpoints.

| Craft | Prediction type | Loop length | Customer-model sections owned | Signature reps and exposure |
|---|---|---|---|---|
| PM | Commercial mechanism | 1–3 quarters | Jobs, forces, customer economics | Repeat visits to the same accounts; churned-account interviews; sales-call ride-alongs; economics bar |
| Product design | Behavioural | Days–weeks | Context of use, behaviour, the acceptance edge | Comparative teardowns; using competitors' products; dogfooding as each persona |
| Product marketing | Message / funnel | ~1 quarter | Customer language, buying committee, objection map | Win/loss interviews; live sales-call listening |
| Research / analyst | Epistemic (pre-registered) | Weeks | Evidence grading across all sections | Field-time quota; extreme-case interviews |

### Product management

Predictions are **commercial mechanisms**: the dated claim about churn closed, module attached, win rate lifted, written in the [RFC](../templates/rfc.md) and scored at the [90-day review](./templates/post-launch-review.md). Reps come from going back to the same accounts over time, churned-account interviews, and riding along on sales calls; the economics bar ([Domain Expertise](./domain-expertise.md)) is the floor. Failure mode: shipping volume without scored bets; the order-taker with a full roadmap and no track record.

### Product design

Predictions are **behavioural**: "first-attempt task success on this flow exceeds 80% unmoderated", "time-to-first-value drops below 10 minutes", "this pattern reads without the tooltip." Design has the fastest scored loop in the function: a usability test scores a prediction in days, so a designer can accumulate more calibration reps per year than anyone, **if** the prediction is written before the test. Make pre-test prediction a standing rule.

Design owns the **acceptance edge** in the customer model: where MAYA sits for each persona. Failure mode: taste as aesthetics detached from the job; portfolio-beautiful, adoption-flat.

### Product marketing

Predictions are **message and funnel**: "this positioning lifts stage-1-to-2 conversion in [segment]", "this narrative appears verbatim in win interviews within a quarter." Every launch narrative ships with a predicted funnel movement and a date, scored when the funnel read lands. PMM owns the customer's **language**: the buying-committee model, the objection map, the voice-of-customer lines. Their churned-account equivalent is the loss interview; set a quota for live sales-call listening, not a sample. Failure mode: the consultant loop, judged on whether sales likes the deck rather than whether the message wins deals.

### Research / analyst

Predictions are **epistemic**: pre-registered findings ("before these churn interviews, I expect tier-2 accounts to cite workflow gaps over price, confidence 3") and metric forecasts ("this cohort's 90-day retention lands 60–65%"). Pre-registration is the anti-narrative device: it makes it impossible to quietly fit the story to the data afterwards. Research owns **evidence grading** across the whole customer model, which makes them the default challenger of weak claims in RFC and post-launch reviews. The exposure rule is a field-time quota: watch real usage, don't only query it. Failure mode: the service desk; ten years of dashboards, no track record.

---

## How to build domain expertise

Craft transfers between domains, domain taste doesn't. Change segment or product area and your calibration resets: the acceptance edge sits somewhere new, the economics are different, and your old hit rate is evidence about the old domain. What transfers is the method for rebuilding it.

- **The entry protocol is [Domain Expertise](./domain-expertise.md):** scope to the quarter's decisions, read the archive, find the churned account, the extreme case, and the tenured insider, ask the dumb questions in week one, triangulate everything, and pass the economics bar. It produces the week-two customer model, the artefact that proves the ramp.
- **Staying expert is longitudinal:** go back to the same customers repeatedly, and keep studying competitors and the wider market, per the build loop above.
- **Calibration resets on domain change, and that's expected.** For anyone under two years in a domain, judgement is assessed on **trend, not level**: are the predictions getting sharper, is specificity rising?

---

## How the crafts hold together

- **The customer model is the shared object.** PM writes economics and jobs, design writes behaviour and the acceptance edge, PMM writes language and buying dynamics, research grades all of it. One section, four hands, one last-revised line.
- **Attacking the model is cross-craft, and happens where the work is reviewed.** A designer attacking the PM's economics in an RFC review, or a researcher flagging the PMM's single-source claim at a post-launch review, is the system working, not a boundary violation.
- **One discipline.** Four prediction types, one rule: the call is written in the working artefact before reality answers, and scored against what happened at the review that artefact already gets.
- **One commercial frame.** The portfolio answers to [revenue quality](../anchors/measurement-chain.md) collectively; the crafts differ only in which mechanism they own on the way there.

---

## Related

- [Domain Expertise](./domain-expertise.md) -- the entry protocol; how domain expertise gets built and kept.
- [Post-Launch Review](./templates/post-launch-review.md) -- where the RFC's commercial mechanism prediction gets scored.
- [Product Handbook](./product-handbook.md) -- the team handbook this doc's loop runs inside.
- [Product Spec: the customer model](../templates/product-spec.md#the-customer-model) -- the multi-author shared object.
- [Working Together](./working-together.md) -- triad decision rights; this doc covers judgement-building, that one covers ownership.
