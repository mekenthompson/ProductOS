---
title: "Decision: Gridline integration move"
description: "Mid-period reprioritisation after a competitor shipped integration depth."
sidebar:
  order: 9
date: 2026-04-22
commit: 7d1b84f3a09e2c56f71038b2e9d4c8aa503e614f
---

# Decision Record: Gridline ships integration depth; reprioritise pillar 2

---

## Context

In late March 2026, Gridline announced a native integration with a major HR and payroll platform, the same one BrightSmile uses. Their integration is narrower than ours (scheduling-only, no leave-sync or contracted-hours surfacing), but it is real and it shipped faster than we expected.

Two signals followed within three weeks. First, BrightSmile's account lead asked in a check-in call whether our integration "did anything that Gridline's didn't." Second, a pipeline deal we had been leading, a 300-person healthcare operator, selected Gridline, citing "good enough integrations and a better price." Win/loss noted "integrations were not the reason we lost; price and switching cost were." However, the deal was the first we had lost directly to Gridline.

Separately, the cross-location visibility work shipped its first milestone at the end of March: unified availability view for up to four locations. FitClub's scheduler tested it and called it "exactly what we needed." FitClub's renewal is now tracking green.

The integration differentiation hypothesis is under pressure. Gridline is not sitting still, and "we have deeper integrations" is only a defensible claim if we make that depth visible in the scheduling workflow. The initial strategy assumed we had more time to do this.

---

## Decision

We are accelerating pillar 2 (integration-enriched scheduling) by re-allocating 10% of capacity from pillar 3 (account expansion support) for the remainder of H1. The `see-approved-leave-in-availability` job is moved from "next on the list" to active funding alongside `schedule-within-contracted-hours`. The `add-a-new-location-without-starting-over` job remains funded but at reduced intensity: CityCare's expansion timeline has slipped (they confirmed in their April QBR that the third location is now a Q4 2026 target, not Q3).

The updated investment allocation for the remainder of H1:

| Pillar | Capacity (revised) |
|---|---|
| Cross-location visibility | 40% (core milestone shipped; focus narrows to polish and edge cases) |
| Integration-enriched scheduling | 35% (accelerated) |
| Account expansion support | 10% (reduced; CityCare timeline slipped) |
| Debt / resilience | 15% (increased; calendar sync issues surfaced in FitClub's testing) |

The BrightSmile "does our integration do anything theirs doesn't" question needs a direct answer, not a roadmap. We are shipping the leave-sync surfacing in May as the answer.

---

## Consequences

**Commits us to:** shipping integration depth that is visibly differentiated from Gridline's offering before BrightSmile's renewal conversation in Q3. That is now the delivery constraint for pillar 2.

**Gives up:** the account expansion support work running at its original intensity. CityCare's slip gives us cover on the timeline, but if another account hits a location-addition friction point in Q2 we have less capacity to respond quickly.

**Blind spots:** we are now racing Gridline on a front we thought we owned. The assumption that integration depth was a slow-building moat has been revised: they are building faster than the January assessment suggested. We are watching for their next integration announcement; a second major HR platform would require another allocation review. We are also not yet certain that BrightSmile's "does it do anything different" question is about features or about confidence: it may be a pricing negotiation signal we are misreading as a product question.
