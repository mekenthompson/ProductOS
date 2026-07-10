---
title: Calibration
description: "The calibration ledger: how prediction hit rate turns judgement into a track record, across every product craft"
last_reviewed: 2026-07-10
icon: "🎯"
---

# Calibration

Taste is a prediction skill, not a perception skill. The test of judgement, in any product craft, is whether you can say in advance what the customer will accept and what it will do, and be right more often over time. The [post-launch review](./templates/post-launch-review.md) already scores each feature. This doc adds the missing aggregation: **per person, over time, across all four crafts**. Individual reviews close the loop on the work; the ledger closes the loop on the person's judgement.

Without a ledger, ten years of experience can be one year repeated ten times. With one, judgement becomes a track record you can develop, review, and promote on.

---

## One ledger, four prediction types

Every craft logs its calls on the same scale. The prediction type differs; the scoring doesn't. Full craft profiles: [Craft](./craft.md).

| Craft | Prediction type | Logged at | Scored at |
|---|---|---|---|
| PM | Commercial mechanism ("tier-2 product-gap churn falls within two renewal cycles") | RFC approval | 90-day post-launch review |
| Product design | Behavioural ("first-attempt task success > 80% unmoderated") | Before the test or launch | Test result / 2-week review |
| Product marketing | Message / funnel ("stage-1→2 conversion lifts in segment X by [date]") | Launch narrative sign-off | Funnel read at the stated date |
| Research / analyst | Pre-registered finding or metric forecast ("cohort 90-day retention lands 60–65%") | Before the study runs | When the data lands |

Loop lengths differ by design: design and research entries score in days or weeks, PMM in about a quarter, PM in one to three. Pair long-loop bets with short-loop predictions so every big bet has early scored checkpoints.

## What gets logged

Every **Full Spec** RFC, any **Lightweight** brief with a mechanism prediction, every pre-test design prediction, every launch narrative, and every pre-registered study gets one ledger entry at commitment. For an RFC:

| Field | Source |
|---|---|
| RFC / brief link | The document |
| Predicted commercial mechanism | RFC User Success Modes, "Commercial mechanism" line |
| Signal / metric prediction | RFC "Headline-metric movement" line |
| Load-bearing assumptions | RFC Bets & Risks, the ones marked load-bearing |
| Confidence | RFC Confidence (RICE scale, 1–4) |
| Score-by date | The 90-day review date, scheduled at launch |
| Owner | The person who made the call, whatever their craft |

The ledger is a single shared table (tracker project, spreadsheet, or a `calibration/` folder of one-line records; pick one and keep it boring). Non-RFC entries carry the same fields with their craft's document linked (test plan, launch narrative, pre-registration) in place of the RFC. It must be visible to the whole product team. A private ledger calibrates nothing.

---

## How entries get scored

At the 90-day post-launch review, the reviewer scores the entry:

| Score | Meaning |
|---|---|
| **Fired** | The predicted mechanism happened, in the predicted direction, attributably. |
| **Partial** | Mechanism moved but materially less than predicted, or via a different path than claimed. |
| **Missed** | Mechanism did not fire, or fired in the wrong direction. |
| **Unscoreable** | Prediction was too vague to score, or attribution is impossible. **This is a worse score than Missed.** |

Two more fields at scoring time:

- **Which assumption broke.** For Partial and Missed, name the load-bearing assumption that turned out wrong. This is where the learning is; a miss with a named broken assumption is a good outcome.
- **Ledger updated** is a checkbox on the post-launch review. A review isn't complete until the entry is scored.

---

## Reading the ledger

Per person, rolling 12 months, comparable across crafts because the scale is shared:

- **Hit rate:** Fired / (Fired + Partial + Missed). Unscoreable excluded from the denominator and reported separately, because a high Unscoreable count is its own finding.
- **Calibration:** compare confidence to outcomes. Someone whose confidence-4 calls fire and confidence-2 calls are coin flips is well calibrated even at a modest hit rate. Someone whose confidence-4 calls miss is the real risk.
- **Trend:** is calibration improving? For anyone under two years in a domain or a craft, this is the KPI, not the raw rate.

---

## How it's used, and how it isn't

**Used in:** quarterly performance conversations, promotion cases in every craft (a promotion case cites the ledger, not vibes), and deciding who takes the biggest bets. The person with the best-calibrated confidence-4 record gets the confidence-4 problems.

**Not used as:** a leaderboard, a punishment for misses, or a reason to only take safe bets. The norms below exist to stop the ledger corrupting the behaviour it measures.

### Norms

1. **Early hit rates will be mediocre. That's expected.** A new person, craft, or domain resets calibration. Judged on trend, not level, for the first year.
2. **Missed-and-learned beats vague-and-safe.** A Missed with a named broken assumption is worth more than an Unscoreable. Score reviews should say this out loud.
3. **Sandbagging is the named anti-pattern.** Predicting tiny, certain effects to inflate hit rate. Defence: confidence is logged, and a portfolio of nothing but confidence-4 micro-predictions is visible and gets called in review. Ambition is discussed alongside accuracy.
4. **Attribution honesty.** If external factors swamped the signal, score Unscoreable and say why, don't claim the win. The [Signal attributability rule](../guides/headline-metric.md) applies here with full force.
5. **The ledger scores the prediction, not the person's worth.** One bad quarter is noise. The rolling 12-month view is the unit of assessment.

---

## Why commercial mechanisms, not just Signals

Revenue is the final scoreboard, but revenue is lagging and contaminated: this quarter's number is mostly last year's decisions plus sales execution. So the ledger scores the **mechanism**: the specific, dated commercial claim a PM controls ("this closes the workflow gap driving tier-2 churn", "this makes the second module attachable at renewal"). Mechanisms are attributable within a quarter or two; topline revenue is not. The same logic sets each craft's prediction type: score what the person controls at the loop length where it's attributable. Hold the portfolio to revenue quality (see the [Commercial Frame](../anchors/measurement-chain.md)); hold individual judgement to the craft's mechanism.

---

## Related

- [Post-Launch Review](./templates/post-launch-review.md) -- where entries get scored; the "Mechanism check" section feeds this ledger.
- [RFC Template](../templates/rfc.md) -- where predictions and load-bearing assumptions are written; approval creates the ledger entry.
- [Measurement Chain](../anchors/measurement-chain.md) -- the Commercial Frame the mechanisms ladder into.
- [Domain Entry](./domain-entry.md) -- calibration resets when the domain changes; this is how you rebuild it fast.
- [RICE](./rice.md) -- the confidence scale the ledger logs.
- [Craft](./craft.md) -- the universal loop and the four prediction types in full.
