---
title: Post-Launch Review Template
description: Measure outcomes, close the loop, decide what's next
last_reviewed: 2026-07-10
icon: "📋"
---

# Post-Launch Review: [Feature/Project Name]

**RFC:** [PRJ-XXX Project Name](<paste RFC link>)
**Shipped:** [Date]
**Review type:** 2-week / 30-day / 90-day
**Reviewer:** [Reviewer name]

---

## What We Shipped

[1-2 sentences. What went live? Link to changelog, announcement, or PR.]

**Persona(s) served:** User / Admin / Sponsor

---

## What We Predicted vs What Happened

_Pull metrics from the RFC Success section. Fill in actuals._

| Metric | Predicted | Actual | Delta |
|--------|-----------|--------|-------|
| | | | |
| | | | |

**Guardrails:** _Did anything degrade that shouldn't have?_

---

## Vision Check

**Did this move a named outcome and its Signal from the [product vision](../../anchors/product-vision.md)?** (Where one number captures the whole product, that Signal is the single headline metric.)

> How the reading is built: see the [Product Analytics guide](../../guides/product-analytics.md).

- [ ] **Direct movement?** [Evidence: the outcome's Signal itself shifted, in the right direction, by a measurable amount]
- [ ] **Leading indicator?** [Evidence: a known leading indicator of the Signal moved]
- [ ] **Persona-specific check?** [Each affected persona's vision-lens question improved?]

If none of these improved, why not? What would need to change?


---

## Mechanism Check *(90-day review)*

_The RFC made a commercial mechanism prediction. Score it against what actually happened._

**Predicted mechanism (from RFC):** [paste verbatim]

| Score | Pick one |
|---|---|
| **Fired** | Mechanism happened, predicted direction, attributably |
| **Partial** | Moved materially less than predicted, or via a different path |
| **Missed** | Didn't fire, or fired the wrong way |
| **Unscoreable** | Too vague to score, or attribution impossible. _Worse than Missed: it means the bet was never testable._ |

**Score:** [Fired / Partial / Missed / Unscoreable]

**Which load-bearing assumption broke?** _(Partial/Missed only. This line is where the learning is; feed it back into the [customer model](../../templates/product-spec.md#the-customer-model) in the Product Spec.)_

**Attribution note:** _(external factors, seasonality, confounders that qualify the read)_

- [ ] **Prediction scored.** The review is not complete until the score is written.

---

## Adoption

**Who is using it?**

- Number of accounts / users actively using the feature
- Adoption curve: growing, flat, or declining?
- Which persona(s) adopted? Which didn't?

**Who isn't using it, and why?**

- Discovery problem? (They don't know it exists)
- Onboarding problem? (They tried and got stuck)
- Value problem? (They tried and it didn't help)
- Trust problem? (They don't believe the signal)

---

## What We Heard

_Customer feedback, support tickets, sales conversations since launch._

| Source | Signal | Persona |
|--------|--------|---------|
| | | |
| | | |

---

## Recommendation

| Option | Criteria | When to choose |
|--------|----------|----------------|
| **Accelerate** | Exceeding targets + positive feedback | Double down: more investment, broader rollout |
| **Iterate** | On track + minor friction | Continue with targeted adjustments |
| **Pivot** | Below targets + feedback explains why | Change approach based on what we learned |
| **Investigate** | Below targets + unclear why | Dig deeper before deciding; more data needed |
| **Stop** | Flat adoption + no pull | Wind down. Redirect engineering time. |

**Our recommendation:** [Accelerate / Iterate / Pivot / Investigate / Stop]

**Reasoning:** [2-3 sentences. What evidence drives this recommendation?]

**Next actions:**
- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

---

## Review Cadence

| Review | When | Focus |
|--------|------|-------|
| **2-week** | 2 weeks post-launch | Early signal. Is it being used? Any red flags? Quick fixes needed? |
| **30-day** | 30 days post-launch | Trend check. Adoption trajectory. Feedback patterns emerging. |
| **90-day** | 60-90 days post-launch | Full review. Data meets decision. Accelerate/Iterate/Pivot/Investigate/Stop. |

_Schedule all three reviews when you ship, not after. Add calendar invites at launch time._

---

**Stopping is not failure.** Failure is continuing to invest in something the data says isn't working.

---

## Related

- [Craft](../craft.md) -- the build loop the Mechanism Check closes
- [Product Spec: the customer model](../../templates/product-spec.md#the-customer-model) -- where broken assumptions get fed back
