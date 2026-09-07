---
title: Release Phases
description: How a feature moves from behind a flag to everyone (Private Preview → Public Preview → GA), each with its audience, flag state, and entry/exit criteria
last_reviewed: 2026-09-07
icon: "🚦"
---

# Release Phases

A feature doesn't go from "built" to "everyone" in one step. It moves through
named **release phases**, each with a defined **audience**, **flag state**,
and **entry / exit criteria**. Every feature ships behind a flag, so every
phase is reversible: if something breaks, turn the flag off.

This is tracker-agnostic: the phase names are what matter, not the tool.
Release phase is *how widely it's on*. That's a separate thing from the work's
**stakes / [path](./decision-framework.md)**, which drive *how much GTM
investment, approval depth, and gate rigour* the release gets. The gates
themselves, with their checklists and approvers, live in
[Gates and Approvals](./gates.md); this page owns the phases.

---

## Audience + flag state, at a glance

| Phase | Lifecycle status | Flag state | Who can access | Purpose |
|---|---|---|---|---|
| Behind the flag | Building | OFF (internal override) | Dev team only | Build + test in production |
| **Private Preview** | In Preview | ON for specific accounts | 5–10 trusted customers | Feedback from friendly users, low blast radius |
| **Public Preview** | GTM Launch Planning | ON for a % / opted-in | Preview cohort | Test at scale before GA |
| **GA** | Launched | ON for all (or gradual %) | All customers | Full rollout, still disable-able |

---

## The phases

### 0. Behind the flag (internal)

- **Audience:** the dev team only (internal override).
- **Flag:** OFF.
- **Purpose:** build and test in a production environment without exposing
  anything. Wire up [instrumentation](../guides/product-analytics.md) here
  (events, dashboards, guardrail metrics) *before* anyone outside the team
  sees it.
- **Exit:** the outcome UAT passes (the user's job is validated end-to-end,
  job × surface, independent of unit tests) and production-readiness is met
  to the stakes. See [Agentic Delivery](../guides/agentic-delivery.md).

### 1. Private Preview

- **Audience:** 5–10 trusted customer accounts (hand-picked, friendly).
- **Flag:** ON for those specific accounts.
- **Purpose:** real feedback from real users on the real path, with low blast
  radius. Fix critical bugs, watch production stability, and confirm the
  outcome holds outside the building.
- **Exit:** private-preview feedback summarised, critical tickets resolved,
  stability holding, then the
  [Launch Readiness Check](./gates.md#gate-2-launch-readiness-check).

### 2. Public Preview

- **Audience:** a percentage of customers, or opted-in / self-selected ones.
- **Flag:** ON for the preview cohort.
- **Purpose:** test at scale before committing to everyone: load, edge
  cases, adoption signal, support volume. This is where you learn whether it
  works for a broad base, not just the friendly accounts.
- **Exit:** adoption and stability thresholds met, no critical issues, then
  [GA sign-off](./gates.md#ga-sign-off).

### 3. General Availability (GA)

- **Audience:** all customers (often via a gradual % ramp).
- **Flag:** ON for all (still disable-able).
- **Purpose:** full rollout, announced. The feature is now the default.
- **After GA:** maintain the flag for a stabilisation window; run the
  [post-launch reviews](./templates/post-launch-review.md) at 2 weeks /
  30 days / 60–90 days and make the explicit call (accelerate / iterate /
  pivot / investigate / stop).

---

## Widening the audience

Moving past Private Preview is a real checkpoint, not a flag flip: the
**Launch Readiness Check**. Its checklist and approver are on one page,
[Gates and Approvals](./gates.md#gate-2-launch-readiness-check). Don't widen
until it's closed. Moving past Public Preview has its own, lighter check,
[GA sign-off](./gates.md#ga-sign-off).

The per-initiative version of this table, with *this* release's audiences,
exit criteria, and rollback, is the Rollout section of the
[RFC](../templates/rfc.md). Feature-flag on/off is one release shape, not the
only one; see [Writing an RFC → Rollout](../guides/writing-an-rfc.md#rollout)
for staged, shadow, and champion-challenger shapes.

---

## Rollback

Every phase is behind a flag, so the rollback is always the same: **turn the
flag off.** A phase transition must never leave data in a broken state. Prefer
changes that are reversible within the phase.

---

## Related

- [Gates and Approvals](./gates.md): the checklists and approvers between
  phases.
- [Lifecycle](./lifecycle.md): the delivery statuses each phase maps to.
- [Delivery Standards](./delivery-standards.md): the front door to the
  workflow these phases sit inside.
- [RFC Template → Rollout](../templates/rfc.md): the per-initiative rollout
  table where a team records the audience, exit criteria, and rollback for
  each phase of *this* release.
- [Post-Launch Review](./templates/post-launch-review.md): the reviews that
  run after GA.
- [Agentic Delivery](../guides/agentic-delivery.md): the outcome-UAT and
  production-readiness gates that guard the move past Private Preview.
- [Product Analytics](./product-analytics.md): the measurement discipline
  behind wiring up instrumentation before you widen the audience.
- [Product Marketing](./product-marketing.md): the messaging that must be
  current before GA.
