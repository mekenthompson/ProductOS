---
title: "Product Spec Example: Tempo"
description: "A worked product spec for Tempo: the North Star, three outcomes with Signals, and the job index that ties each funded job to the metric it moves."
sidebar:
  order: 4
---

# Product Spec Example: Tempo

This is a worked [Product Spec](../../templates/product-spec.md) for **Tempo**, the
fictional team-scheduling product used across these examples. It sits one rung
below the [Tempo strategy](./strategy/STRATEGY.md) and one rung above the
[Job Spec](./job-spec.md): the strategy funds the pillars, this spec names
the outcomes and the jobs, and each Job Spec `serves:` one outcome named here.

Read it alongside the blank [template](../../templates/product-spec.md). Numbers are
illustrative; Tempo, its customers (FitClub, BrightSmile, CityCare) and its
competitor (Gridline) are fictional.

---

## The product, in one line

Tempo is team-scheduling software for multi-location service operators (gyms,
dental groups, care providers) that lets one scheduler staff every location from
a single view, without leaving the product to find out who is free.

## North Star

- **Metric:** Reconciliation-free cross-location booking rate.
- **Definition:** of all bookings in a week that draw on staff from two or more
  locations, the share completed inside Tempo with no external reconciliation
  (no "left the product to phone or message a site" event), measured across
  multi-location accounts.
- **Now → Target:** 45% → 80% by 30 June 2026.
- **Why this one:** the vision is a scheduler who staffs by *seeing*, not by
  phoning around. This number is that vision made countable. When it rises,
  schedulers are trusting the product instead of working around it; when it
  stalls, nothing else we ship matters.

## Outcomes

Every job Tempo serves ladders up to exactly one of these three outcomes. Each
carries a Signal: a measurable driver of the North Star.

### `cross-location-visibility` -- see and book across every location at once

A scheduler at a multi-location operator sees one current free-slot view across
all their sites and books straight into it, instead of phoning each location to
reconcile availability by hand. This is the core job at scale and the gap
Gridline is targeting.

**Signal:** share of cross-location bookings that originate in the unified
availability view, 30% → 75% by 30 June 2026.
**Guardrail:** booking-conflict rate (a slot shown free that was already taken)
stays at or below 0.1%; the `no-stale-free-slot` invariant makes the view worth
trusting.

### `integration-enriched-scheduling` -- availability that already knows the constraints

A scheduler sees availability enriched with the signals that actually decide it,
approved leave and contracted hours, without switching to the HR or payroll
system. This is Tempo's differentiation play: integration depth Gridline does not
have.

**Signal:** at accounts with an active HR or payroll integration, share of
bookings made against the enriched view, 0% → 50% by 30 June 2026.
**Guardrail:** enriched signals never block a booking on stale integration data;
an unavailable source degrades to "unknown", not to a hard stop.

### `painless-location-addition` -- grow without starting over

A customer adding a location has it scheduling-operational in Tempo within one
working day, carrying over existing configuration and staff rather than rebuilding
from scratch. This is the job that keeps expansion revenue from stalling.

**Signal:** median time-to-operational for a newly added location, 5 working days
→ 1 working day by 30 June 2026.
**Guardrail:** adding a location never alters availability or bookings at the
operator's existing locations.

## How it functions, at a high level

Tempo connects each location's roster and, where the operator has them, its HR,
payroll, and practice-management systems. It reconciles those sources into a
single availability layer that a scheduler reads and books against. The layer is
the product's centre of gravity: everything else (the per-location calendars, the
enriched signals, the location-onboarding flow) exists to keep that layer current
and trustworthy. Runtime and data-model detail lives in the RFCs and `docs/`, not
here; this spec stays at outcome altitude.

## The job index

The jobs Tempo serves, grouped by the outcome they ladder up to. Each names the
job metric: the quantified form of the leading indicator its Job Spec names, which
rolls into that outcome's Signal.

### cross-location-visibility

- [`see-everyones-free-time-at-once`](./job-spec.md) -- share of
  cross-location bookings that start in the unified view (the outcome Signal
  itself; this is the load-bearing job)

### integration-enriched-scheduling

- `schedule-within-contracted-hours` -- share of bookings auto-checked against
  contracted hours before they are confirmed
- `see-approved-leave-in-availability` -- leave conflicts caught in the view
  before a booking is made, not after

### painless-location-addition

- `add-a-new-location-without-starting-over` -- median time-to-operational for a
  new location

> Only `see-everyones-free-time-at-once` has a published [Job Spec
> example](./job-spec.md) in this repo. The other three are the jobs the
> [Tempo strategy](./strategy/STRATEGY.md) funds; they are listed here to
> show a complete job index, spanning all three outcomes.

---

## Related

- [Product Spec Template](../../templates/product-spec.md) -- the blank shape this fills in
- [Tempo Strategy (worked example)](./strategy/STRATEGY.md) -- the strategy that funds these outcomes
- [Job Spec Example: Tempo](./job-spec.md) -- a job that `serves:` the `cross-location-visibility` outcome named here
- [Invariants](../../anchors/invariants.md) -- the by-construction lines every Tempo job is built to respect
