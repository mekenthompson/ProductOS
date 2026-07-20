---
title: Ritual Review Template
description: "Template for the monthly rituals: dogfooding, competitor reviews, and the customer-model review that attacks the team's understanding rather than the product"
last_reviewed: 2026-07-20
icon: "📋"
---

# Ritual Review: [Product Name] ([Date])

**Reviewer:** [PM name]
**Review type:** Dogfooding (your product) / Competitor Analysis / Customer-Model Review
**Product area:** [e.g., onboarding, core flow, billing]
**Persona lens:** User / Admin / Sponsor (for dogfooding)
**Rotation:** [Your competitor list; rotate one per month] (for competitor reviews)
**Recording:** [Link to a short walkthrough, ≤10 mins, Loom / Tella / equivalent] (for dogfooding)

---

## Onboarding Walkthrough

Walk through the onboarding end-to-end from the chosen persona's perspective (or as a new user for competitors).

| # | Step | Time | Notes / Friction |
| - | ---- | ---- | --------------- |
| 1. Sign up | | | |
| 2. First project setup | | | |
| 3. First successful run | | | |
| 4. Explore results/output | | | |
| 5. | | | |

**Total time to first value:** [Time from start to meaningful outcome]

---

## Friction Log

Where did you get stuck, confused, or frustrated?

| Step | Friction | Severity | Ticket |
| ---- | -------- | -------- | ------ |
| | | High / Medium / Low | |
| | | High / Medium / Low | |

---

## Signal Health Check

Step back from the walkthrough and read the product at Signal altitude. Once a month, check that each named [Signal](../../guides/product-analytics.md) (see [The Anchor Signal](../../guides/headline-metric.md) for what the Signal is) is still telling the truth about the outcome.

- [ ] **Holding and trending?** For each named Signal, is it at or moving toward target, or drifting away?
- [ ] **Guardrails intact?** Is any guardrail metric breaching, or creeping toward its limit?
- [ ] **One decision from the trend.** What single decision does this month's trend point to (double down, dig in, or leave it)?

---

## Standout Features

What do they do well? What surprised you? What felt smooth, clear, or delightful?

1. **[Feature/pattern]:** [Why it's notable / Why it worked]
2. **[Feature/pattern]:** [Why it's notable / Why it worked]
3. **[Feature/pattern]:** [Why it's notable / Why it worked]

---

## Gaps & Weaknesses

Where do they fall short? What was confusing, broken, or missing?

1. **[Gap]:** [What was confusing, broken, or missing]
2. **[Gap]:** [What was confusing, broken, or missing]

---

## Comparison

*(For competitor reviews only)*

| Capability | Our product | [Competitor] | Notes |
| ---------- | ----------- | ------------ | ----- |
| | | | |
| | | | |

---

## Improvement Opportunities

Top 3 things to fix or improve.

1. **[Opportunity/Improvement]:** [What you could do differently / What would be better and why]
2. **[Opportunity/Improvement]:** [What you could do differently / What would be better and why]
3. **[Opportunity/Improvement]:** [What you could do differently / What would be better and why]

**Remember:** You must always find something to improve (for dogfooding reviews).

---

## Customer-Model Review

*(For customer-model reviews only.)* Dogfooding critiques the product;
competitor review critiques the alternatives; this ritual critiques the
**understanding**: the [customer model](../../templates/product-spec.md#the-customer-model)
in the Product Spec. It borrows the clinician's case supervision (even
veterans present their model to peers, because the known failure mode is
over-attachment to your own) and the courtroom (someone's explicit job is to
expose what you don't know). Each craft presents its sections at least
quarterly.

**Presenter:** [name, craft]
**Opposing counsel:** [assigned peer -- rotates across crafts; a different craft than the presenter is the default, never their closest collaborator. Research plays counsel by default on evidence grading.]
**Model under review:** [Product Spec link, last-revised date]

**Rules of engagement:**

1. **Attack the model, not the person.** The presenter defends with evidence or concedes; conceding is a win.
2. **Opposing counsel prepares.** Reads the model and its evidence in advance; arrives with specific challenges, not vibes.
3. **Evidence outranks seniority.** A claim survives on its evidence links, not on who wrote it.
4. **Every review draws blood.** If the model leaves unchanged, the review failed: something is revised, downgraded to `[GUESS]`, or added to known unknowns, every time.

**Attack lines** (counsel works through these; attendees pile on):

- **Observation vs interpretation.** Pick two claims. Is each observed behaviour or an interpretation dressed as one? Source?
- **Single-source test.** Which load-bearing claims rest on one source, and whose agenda was that source carrying?
- **The economics test.** Presenter sketches the customer's economics from memory, live; a domain veteran grades it.
- **Three-real-customers test.** Name three actual accounts this model describes. Does it predict their last three decisions? Where does it fail?
- **The assumption most likely wrong.** Presenter nominates one unprompted; the room nominates theirs; if they differ, that gap is the finding.
- **Disconfirming evidence.** What has the presenter seen this quarter that cuts against the model? "Nothing" means they've stopped looking.
- **Going-native check.** Which of the customer's own assumptions has the presenter absorbed? What would an outsider question about how this job is done at all?
- **Cross-craft consistency.** Do the sections agree? If the economics say the operator is judged on throughput but the acceptance edge says they resist any workflow change, one is wrong, or the tension is the finding. Attacking another craft's section is the system working.

**Record:** claims that survived · claims revised or downgraded to `[GUESS]` ·
new known unknowns with owner and close-by date · the assumption most likely
wrong (presenter's vs room's) · customer model revised with a new last-revised
line.

---

## Follow-up Actions

- [ ] Ticket tagged `ritual:onboarding`, `ritual:competitor`, or `ritual:customer-model`: [description]
- [ ] Share in #product
- [ ] Share recording + top 3 (for dogfooding reviews)

---

## Related

- **Product Handbook:** [Monthly Rituals](../product-handbook.md#monthly-rituals)
- **Customer model:** [the Product Spec section](../../templates/product-spec.md#the-customer-model) the customer-model review attacks
- **Calibration:** [the ledger](../calibration.md) -- the model feeds predictions; predictions feed the ledger
- **Craft:** [the crafts in the room](../craft.md) and which sections each owns
- **Product Analytics:** [the measurement discipline](../product-analytics.md) behind the monthly Signal read
- **Projects:** [Link to related projects]
