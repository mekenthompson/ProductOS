---
title: "Tempo Strategy (worked example)"
description: "The filled STRATEGY.md for Tempo: funded jobs, deferrals, and the coherent-action argument, tagged by evidence level."
sidebar:
  order: 2
---

# Strategy: Tempo

**Period:** H1 2026
**Status:** active

> This is a STRATEGY.md file. It holds the current strategic view for Tempo — the team-scheduling product whose customers include FitClub, BrightSmile, and CityCare. Its git history is the record of *what* changed; the `decisions/` folder holds the *why*. Read them together.
>
> Tags: **[evidenced]** = data you can point to · **[hypothesis]** = reasoned belief, not yet confirmed · **[to-validate]** = open question

---

## Situation

**Multi-location operators are outgrowing their current scheduling tools at the point they pass three locations.** [evidenced]

FitClub (5 locations), BrightSmile (4 locations), and CityCare (3 locations and growing) all raised this directly in renewal conversations. The common failure mode: at two locations, a single calendar view was adequate. At three or more, the coordination overhead of seeing who is free across the whole team becomes the scheduler's primary daily friction. Support ticket volume for "can't see across locations" has grown 40% in the last two quarters.

**Schedulers don't want a better calendar — they want to stop making phone calls.** [evidenced]

The core job — "see everyone's free time at once" — is not a visibility request. It is an interruption-reduction request. Five interviews across FitClub and BrightSmile in Q4 2025 converged on the same behaviour: schedulers are currently reconciling availability by calling or messaging staff directly, then manually building a free-slot view. The product's gap is not that it shows the wrong information; it is that it requires the scheduler to leave the product to gather it.

**A new entrant, Gridline, is targeting our mid-market segment with a cross-location aggregation feature.** [evidenced]

Gridline launched cross-location availability aggregation in November 2025. They have begun appearing in competitive conversations: mentioned by name in three of our last eight renewal calls, including FitClub's. Their UI is rougher than ours and they lack our integration depth, but the core availability-aggregation capability is real and working.

**Schedulers at larger accounts are willing to pay a premium for a "team view" if it is genuinely automated.** [hypothesis]

Based on FitClub's expansion conversation and a pricing sensitivity question in two BrightSmile calls, we believe there is willingness to pay 15–20% more for a plan tier that includes a real-time multi-location team view. We have not tested pricing directly.

**Our integration footprint is a defensible moat, but only if we surface it in the scheduling workflow.** [hypothesis]

We have deeper integrations than Gridline — payroll, HR, and practice management system connections that they do not have. We believe schedulers would value seeing availability enriched with those signals (e.g. contracted hours, leave status). We have not validated whether this is a differentiator in purchase decisions or just a nice-to-have.

**CityCare is on a growth trajectory that will make them a significant account within 12 months.** [to-validate]

CityCare is currently $35K ARR and in early expansion talks as they open a third location. Their CEO mentioned a fourth location as an 18-month goal. If that trajectory holds, they become a $60–80K account. We have not validated the expansion timeline or whether the trajectory is funded.

---

## Strategy

Multi-location scheduling is the segment we are best positioned to own and the one our largest customers need most. Gridline's entry has compressed the window. The move for H1 2026 is to close the core product gap — genuine cross-location availability aggregation — while beginning to differentiate on integration depth, which Gridline cannot easily replicate. We are not trying to win every job this period; we are protecting and deepening the multi-location wedge.

### Investment allocation

| Pillar | Capacity | Rationale |
|---|---|---|
| Cross-location visibility | 50% | The core gap; Gridline's entry makes this urgent |
| Integration-enriched scheduling | 25% | The defensible differentiator; can't be easily copied |
| Account expansion support | 15% | CityCare and similar growth accounts need onboarding depth |
| Debt / resilience | 10% | Calendar sync reliability has been a recurring support driver |

### Decision tests

An initiative is funded only if it:

- Directly advances one of the three named pillars above
- Has a clear link to the customer friction described in the Situation (evidenced or strong hypothesis)
- Can ship a meaningful customer-observable outcome within the period — not just internal scaffolding
- Does not require us to build a capability Gridline already has at parity before we have differentiated our own

---

## Pillars

### Pillar 1: Cross-location visibility

**Thesis:** The "see everyone's free time at once" job is the primary scheduler pain at multi-location accounts and the gap Gridline is directly targeting. Closing it is both defensive and the highest-value thing we can do for our largest customers this period.

**Outcome / measure:** Schedulers at multi-location accounts can see a unified availability view across all locations without leaving the product. Measured by: reduction in "can't see across locations" support tickets; FitClub and BrightSmile renewal health; scheduler session length on the availability screen (proxy for manual workaround elimination).

**Job Specs funded:**
- `see-everyones-free-time-at-once` — unified cross-location availability view; the scheduler's core job at scale

---

### Pillar 2: Integration-enriched scheduling

**Thesis:** Our integration depth into HR and payroll systems is an asset Gridline does not have. If we surface that data in the scheduling workflow — contracted hours, approved leave, role constraints — we become genuinely harder to replace. This is the differentiation play, not the catch-up play.

**Outcome / measure:** Schedulers can see availability enriched with leave status and contracted hours without switching to HR or payroll systems. Measured by: adoption of the enriched view at FitClub and BrightSmile (both have HR integrations active); mentions in sales conversations as a differentiator.

**Job Specs funded:**
- `schedule-within-contracted-hours` — respecting contracted hours as a hard constraint in availability
- `see-approved-leave-in-availability` — surfacing approved leave as a first-class signal in the scheduler view

---

### Pillar 3: Account expansion support

**Thesis:** CityCare and accounts like them are at the inflection point — growing into multi-location scheduling complexity, willing to expand, but at risk of churn if onboarding the new location is painful. Smooth location-addition is the job that keeps expansion revenue.

**Outcome / measure:** A customer adding a new location can have it fully operational in the scheduling product within one working day. Measured by: CityCare expansion health; time-to-operational for new locations across all expansion accounts.

**Job Specs funded:**
- `add-a-new-location-without-starting-over` — location addition flow that carries over existing configuration and staff

---

## Explicit Deferrals

| Deferred | Why not now | What would change this |
|---|---|---|
| Mobile scheduler app | Strong customer interest but mobile use is secondary to desktop for schedulers; building it well would consume 30–40% of capacity we need on the core gap | Mobile emerges as a primary usage surface in session data, or a significant account names it as a renewal blocker |
| AI-generated schedule suggestions | The underlying availability data is not clean enough to generate trustworthy suggestions; a wrong AI suggestion erodes trust faster than the feature gains it | Availability data quality reaches a threshold where suggestion accuracy is reliably above 90% in testing |
| Self-serve billing and plan upgrades | Important infrastructure, not urgent; none of our at-risk accounts are blocked on billing self-serve | Customer support time on billing exceeds 15% of total support volume, or a significant deal is lost due to friction in the upgrade path |

---

## Data Gaps

**Pricing sensitivity for a multi-location team-view tier** [hypothesis]
- What would confirm it: a structured pricing conversation with FitClub and BrightSmile at renewal; willingness to pay 15% more stated directly
- What would falsify it: both accounts decline to upgrade at a 10% price increase, or name price as a concern unprompted
- How to get it: include a pricing sensitivity question in the Q2 renewal QBRs; consider a small cohort pricing test with 3–5 accounts in the pipeline

**Integration depth as a purchase differentiator** [hypothesis]
- What would confirm it: integration depth mentioned unprompted in win/loss interviews; lost deals where Gridline was chosen include "they have what we need" language that excludes integrations
- What would falsify it: win/loss data shows no mention of integrations in competitive decisions; BrightSmile or FitClub deprioritises the enriched view after we ship it
- How to get it: add integration-specific questions to win/loss calls for the next two quarters; instrument adoption of the enriched view post-launch

**CityCare expansion timeline** [to-validate]
- What would confirm it: CityCare signs an expansion order for a third location by Q3 2026; the CEO re-confirms the fourth-location plan in a call
- What would falsify it: CityCare delays expansion beyond 12 months, or the funding context changes materially
- How to get it: quarterly check-in call with CityCare account lead; ask directly about timeline and funding in the next QBR

---

## Why This Wins

The allocation bets on the segment where we have the strongest relationships and the highest switching costs — multi-location operators who have invested in our HR and payroll integrations. Gridline's entry is a real threat on the core availability job, but they are entering from scratch on integrations. If we close the availability gap and then differentiate on integration depth, we move the competition to terrain where we have a two-year head start.

The 50% allocation to cross-location visibility is large because it has to be. The job is the one Gridline is directly targeting, and the customer interviews are unambiguous about its priority. A smaller allocation risks shipping a half-measure that satisfies neither the customers nor the competitive moment.

The account expansion pillar is the compounding bet. CityCare is the archetype of a customer who will grow into significant ARR if onboarding is not the reason they stall. The investment is modest (15%) because the job is scoped — location addition, not a full re-architecture — and the return is concentrated in accounts already in motion.

> [!CAUTION]
>
> This strategy is wrong if: the pricing hypothesis does not hold (lower expected revenue dilutes the logic for heavy availability investment), or Gridline ships integration depth faster than we expect (compresses the differentiation window). Those are the signals to watch. They are both in the Data Gaps section.

---

> **Changes to this file:** every material update goes with a dated decision record in `decisions/`. See [Decision Record template](../../templates/decision-record.md) for the format. The commit diff + the decision record together are the complete record of a strategic change.
