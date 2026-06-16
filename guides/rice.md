---
title: RICE Assessment
description: Comparison framework for product projects
last_reviewed: 2026-05-12
icon: "📊"
---

# RICE Assessment

RICE is a framework for **comparing projects** on the same basis. Three value dimensions divided by effort to produce an ROI-based grade.

**What RICE does:**

- Apples-to-apples comparison across different project types
- Makes value-effort tradeoffs visible
- Gives prioritisation discussions a shared starting point

**What RICE doesn't do:**

- Automatically approve or reject projects
- Determine when work gets scheduled
- Override business judgment or strategic considerations

**Applies to:** Projects (not Specs)
**When to score:** During Shaping — include in Product Spec
**Owner:** PM assigned to project

---

## How It Works

Score Reach, Impact, and Confidence (1–4 each). Score Effort (1–5). Divide.

```
RICE = (Reach + Impact + Confidence) / Effort
```

Round to one decimal place.

| Score | Grade | What it means |
|-------|-------|---------------|
| **5.0+** | A | High ROI — strong value relative to effort |
| **3.0–4.9** | B | Good ROI — solid opportunity |
| **1.5–2.9** | C | Moderate ROI — uncertain value or higher effort |
| **<1.5** | D | Low ROI — limited value or expensive to deliver |

Grades describe ROI relative to other projects, not what to do with them. A C-grade project with high strategic importance may still be the right thing to build. Strategy determines what to work on. RICE helps you sequence within a strategic bucket.

---

## Dimensions

### Reach (1–4)

_How broad is the audience?_

| Score | Definition | Example |
|-------|------------|---------|
| **1** | Niche — a handful of accounts with a specific need | Specific compliance requirement |
| **2** | Segment — a defined customer segment | Enterprise-only feature |
| **3** | Broad — most accounts or a core workflow | Core day-to-day workflow |
| **4** | Universal — all accounts or all prospects | Onboarding, trial experience |

> 💡 Ask yourself: is this a niche need, a segment need, a common need, or a universal need?

---

### Impact (1–4)

_How much does this change the outcome for each affected account?_

This is about **depth**, not breadth. Reach covers how many accounts are touched. Impact covers how much it matters to each one.

| Score | Definition | Signal | Example |
|-------|------------|--------|---------|
| **1** | Nice-to-have — minor convenience | Small friction reduction, no measurable metric movement | Clearer error formatting, UI polish |
| **2** | Meaningful — measurably better workflow | Efficiency gain, improved satisfaction | Faster page loads, better in-context guidance |
| **3** | Significant — removes a blocker, prevents churn, or unlocks a new capability | Blocker removal, churn prevention, revenue impact per account | Removes top deal-blocker, prevents at-risk churn |
| **4** | Step-change — transforms the account's relationship with the product | New revenue stream, 10x improvement, market-creating | A new capability that replaces a category of third-party tools; a foundational AI workflow |

> 💡 Would the customer say "that's nice" (1), "that helps" (2), "that changes things for us" (3), or "that changes everything" (4)?

**Impact by strategic lever:**

| Lever | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| **Acquisition** | Slightly smoother trial | Faster time-to-first-value | Removes top deal-blocker | Opens a new market |
| **Retention** | Reduces a minor annoyance | Improves satisfaction measurably | Prevents likely churn | Makes switching unthinkable |
| **Expansion** | Small usage growth | Drives meaningful upsell | Unlocks a new paid capability | Creates a new revenue line |
| **Efficiency** | Saves minutes per week | Saves hours per week or cuts cost | Eliminates a significant burden | Order-of-magnitude improvement |

---

### Confidence (1–4)

_How strong is the evidence?_

| Score | Definition | Evidence looks like | Example |
|-------|------------|-------------------|---------|
| **1** | Hypothesis — team intuition, no external validation | Gut feel, analogies | "We think customers want this" |
| **2** | Directional — some signal, small sample | A few customer mentions, competitor has it | 3 support tickets, 1 customer interview |
| **3** | Strong — multiple data points converging | Multiple customer requests, pipeline data, support patterns | 10+ requests, 5 deals blocked |
| **4** | Validated — quantitative data with meaningful sample | Usage analytics, A/B results, survey with n>30 | Funnel data, NPS regression analysis |

> 💡 Could you convince a skeptic with the evidence you have?

---

### Effort (1–5)

_How much work to deliver? Bigger effort = lower RICE score._

| Score | Team commitment | Example |
|-------|----------------|---------|
| **1** | ~1 week — small change | UI tweak, config update |
| **2** | ~2 weeks — focused feature | New webhook event type |
| **3** | ~1 month — significant feature | Analytics MVP |
| **4** | ~3 months — major initiative | Auth system overhaul |
| **5** | ~6 months — platform-level change | New compute backend |

> 💡 How many sprints does this realistically tie up a squad?

---

## Examples

| Project | R | I | C | Value | E | Score | Grade |
|---------|---|---|---|-------|---|-------|-------|
| Docs restructure | 4 | 2 | 4 | 10 | 1 | **10.0** | A |
| Trial limit changes | 3 | 3 | 4 | 10 | 3 | **3.3** | B |
| Analytics MVP | 3 | 3 | 3 | 9 | 3 | **3.0** | B |
| Greenfield AI feature | 2 | 4 | 1 | 7 | 4 | **1.8** | C |
| Niche integration | 1 | 1 | 2 | 4 | 3 | **1.3** | D |

---

## Special Cases

### TBD / Unknown

If any dimension is unknown, mark as **TBD**. Grade cannot be calculated until all dimensions are scored.

### Strategic Bucket Allocation

RICE ranks projects **within** strategic buckets, not across them. Your annual strategy document defines this year's strategic levers and capacity allocations.

**Strategic levers:**
- **Acquisition** — Land and convert new customers
- **Retention** — Keep customers, reduce churn
- **Expansion** — Grow revenue from existing customers
- **Efficiency** — Reduce costs, improve velocity

A B-grade retention project may beat an A-grade acquisition project if the retention bucket is under-invested. Strategy drives allocation. RICE drives sequencing within each bucket.

### High Effort, High Value

A project can score C on RICE despite having high absolute value — because RICE measures ROI (value per unit of effort). A 6-month platform project with universal reach and high impact will still have moderate ROI per sprint. That doesn't mean it's wrong to build. Strategy and investment buckets handle those decisions. RICE helps you sequence the work within a bucket so you ship the highest-ROI items first.

### Low Confidence

If Confidence is 1 or 2, the grade carries more uncertainty:

- **Low confidence + high grade (A/B):** Strong potential, but assumptions need testing
- **Low confidence + low grade (C/D):** May not be worth the effort to validate further
- **High confidence + any grade:** Scoring is well-grounded

Low confidence doesn't automatically mean "don't proceed" — it means "here's the risk profile." Some strategic bets are worth taking despite uncertainty.

---

## RICE Explanation

Every project must include a RICE Explanation that:

1. **Justifies Impact** — Which strategic lever? What's the magnitude of effect per account? What's the evidence?
2. **Explains Confidence** — What data supports this? What's missing?
3. **Notes assumptions** — What must be true for this score to hold?

**Example (acquisition):**

> Impact 3 (significant): Removes a top-3 deal blocker cited by Sales. Accounts blocked by this can't complete evaluation — it's binary, they buy or they don't. 15 active opportunities in pipeline waiting on this. Lever: Acquisition → Paid Conversion.
>
> Confidence 3: Multiple customer requests + pipeline data. Would be 4 if we had quantitative trial drop-off data.

**Example (retention):**

> Impact 2 (meaningful): Improves a frequently-used page's performance at scale. Affected accounts save 5–10 minutes per user per day during triage. Two accounts are evaluating alternatives partly because of this. Lever: Retention.
>
> Confidence 3: Customer interviews + support ticket volume. Would be 4 with usage analytics on page load times.

---

## When to Score

| Phase | RICE Status |
|-------|-------------|
| **Discovery** | Optional — rough estimate helps early comparison |
| **Definition** | Recommended — all dimensions scored for Product Spec |
| **Delivery** | Reference — update if scope changes significantly |
| **Shipped** | Retrospective — compare predicted vs actual |

Score before Product Spec approval when possible. The score is input to the decision, not a gate.

**Re-score triggers:**

- Major scope change
- New evidence that changes Confidence
- Quarterly portfolio review
