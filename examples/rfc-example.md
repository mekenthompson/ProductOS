---
title: "RFC Example: Tempo"
description: "A worked, ship-coupled RFC for Tempo's unified cross-location availability view: the job, how schedulers fail today, success and failure modes, guardrails, and a staged rollout, with the solution left open."
sidebar:
  order: 6
---

# RFC Example: Tempo

This is a worked [RFC](../templates/rfc.md) for a single ship-coupled effort at
Tempo: the unified cross-location availability view. It delivers against the
standing [Job Spec](./job-spec-example.md) for `see-everyones-free-time-at-once`
and advances the `cross-location-visibility` outcome in the
[Product Spec](./product-spec-example.md).

Read it alongside the blank [template](../templates/rfc.md). It leaves the *how*
open on purpose: the RFC sets the job, the success and failure modes, and the
guardrails, and lets the team invent the solution inside them. Names, numbers, and
dates are illustrative.

---

## Status

| Field | Value |
|---|---|
| **Status** | Building |
| **Owner** | Priya Nair, PM (Scheduling) |
| **Approver** | Head of Product |
| **Approval date** | 2026-02-12 |
| **Advances outcome** | `cross-location-visibility` |
| **Serves job spec** | [`see-everyones-free-time-at-once`](./job-spec-example.md) |
| **Tracker** | `TEMPO-412` (issue tracker) |

---

## TL;DR

1. A scheduler at a multi-location operator wants to see who is free across every
   site in one place and book into it, without phoning around to reconcile
   availability first.
2. Success is that cross-location bookings start from a unified view the scheduler
   trusts, and the reconciliation-free booking rate climbs toward the North Star.
3. The hard constraint: nothing shown as free may already be taken at the source.
   A stale slot is worse than no view at all.

---

## The Job

> **When** a scheduler is covering a gap that staff at more than one location
> could fill, **they want to** see everyone who is genuinely free right now in one
> place, **so they can** book it without chasing people for their availability
> first.

This job has a standing [Job Spec](./job-spec-example.md); it is the durable home
of the job. This RFC is one ship-coupled effort against it.

**Primary persona:** the scheduler at a multi-location operator.
**Secondary persona(s) affected:** location managers whose local availability
feeds the unified view.

See the [JTBD Guide](../guides/jtbd-guide.md) for the job-story and four-forces
framing behind this.

---

## How Users Fail Today

1. **Phone-and-spreadsheet reconciliation -- the core struggle**
   - *Situation:* a scheduler at a five-location operator needs to fill a shift
     that any of three sites could cover.
   - *What the user is trying to do:* find who is free across those sites right now.
   - *Where it breaks:* Tempo shows one location at a time, so there is no single
     view to read.
   - *Current workaround:* they phone or message each site and hand-build a
     free-slot picture in a spreadsheet.
   - *Evidence:* five discovery interviews at FitClub and BrightSmile in Q4 2025.

2. **Stale hand-built views cause double-bookings**
   - *Situation:* the scheduler books from the spreadsheet they assembled an hour
     ago.
   - *Where it breaks:* availability moved at the source in the meantime, so the
     booking collides with one already made locally.
   - *Current workaround:* a confirmation phone call "just to be sure", which
     defeats the point of having a view.
   - *Evidence:* "can't see across locations" support contacts up 40% over two
     quarters, concentrated at 3+ location accounts.

3. **The competitor now does this**
   - *Situation:* renewal and pipeline conversations increasingly name Gridline's
     cross-location aggregation.
   - *Where it breaks:* Tempo has no answer in the product, only on the roadmap.
   - *Evidence:* Gridline named in three of the last eight renewal calls,
     including FitClub's.

---

## Competing Solutions

| Solution | Limitation (why it fails the job) |
|---|---|
| Gridline cross-location view | Aggregation is real but rough; thin integrations, and no enrichment with leave or contracted hours |
| Manual phone-and-spreadsheet | Works, but slow, error-prone, and the view is stale the moment it is built |
| **Do nothing** | Cedes the core multi-location job to Gridline at exactly the accounts we most need to retain |

---

## User Success Modes

- **Behavioural signal** -- the scheduler completes a cross-location booking from
  the unified view without leaving it to confirm availability. Observable in
  product analytics as a booking that originates in the view with no intervening
  "left to reconcile" event.
- **Felt experience** -- when asked, the scheduler describes the view as one they
  trust enough to stop making confirmation calls.
- **Headline-metric movement** -- moves the reconciliation-free cross-location
  booking rate toward 80%, and the `cross-location-visibility` Signal (bookings
  originating in the unified view) from 30% toward 75%.
- **Leading indicators (≤ 2 weeks post-launch)** -- share of cross-location
  bookings starting in the view is rising; "can't see across locations" support
  contacts are falling at multi-location accounts.

---

## User Failure Modes

| Failure mode | What the user experiences | Root cause we'd suspect | Detection signal |
|---|---|---|---|
| **Hard failure** | The view will not load, or shows only one location. | Aggregation query timing out at large operators. | View load errors; p95 latency alert. |
| **Soft failure** | The view shows every location side by side but still leaves the scheduler to reconcile by eye. | We moved the phone calls into the product instead of removing them. | Bookings still preceded by a reconciliation event; no drop in confirmation calls. |
| **Silent failure** | The view shows a slot free, the scheduler books it, and it was already taken at the source. | Stale read: the view lagged a source change. | Booking-conflict rate above 0.1%; the `no-stale-free-slot` guard firing after the fact. |
| **Adoption failure** | Schedulers never open the unified view and keep phoning. | The view is buried, or setup friction blocks first use. | Low view-open rate among multi-location accounts. |

**Anti-patterns to watch:**
- *Looks like success, isn't:* view-open counts rise while confirmation calls do
  not fall, so the view is a second thing to check, not a replacement.
- *Looks like failure, isn't:* time spent on the availability screen drops because
  the scheduler now books in seconds instead of assembling a spreadsheet.

**When to stop or pivot:**
- *Pivot trigger:* 60 days post-GA, schedulers open the view but the
  reconciliation-free rate has not moved at 3+ location accounts.
- *Stop trigger:* schedulers keep phoning to confirm even when the view is live
  and correct (the `see-everyones-free-time-at-once` abandon signal), meaning the
  job is about control, not visibility.

---

## Guardrails

**Quality / principle guardrails** (see [Product Principles](../anchors/product-principles.md)):
- The view must be trustworthy by default. Check question: would a scheduler book
  from it without a confirmation call?
- The product removes coordination work, it does not relocate it. Check question:
  did we delete a phone call, or move it on-screen?

**Performance / reliability guardrails:**
- The unified view returns current availability fast enough at the largest
  supported operator that a scheduler treats it as live, not as a report.
- If one location's data is momentarily unavailable, the view shows that site as
  unknown, never silently as free.

**Trust / safety guardrails:**
- Availability is scoped to a single operator, enforced server-side, not by the
  client.

**Invariant guardrails** (see [Invariants](../anchors/invariants.md)):
- `no-stale-free-slot` -- nothing shown as free may already be booked at the
  source. One-question test: can the view ever surface a slot that is taken?
- `availability-never-leaks-across-operators` -- one operator's staff are never
  visible to another. One-question test: could operator A ever see operator B's
  availability, on any surface?

**Out of scope (we will not do this, even if asked):**
- Turning the view into a staff-messaging channel.
- Cross-operator availability sharing.
- AI-suggested schedules (deferred at the strategy level until availability data
  quality is proven).

---

## Solution Space

**The solution MUST:**
- Present current availability across all of one operator's locations in a single
  view.
- Reflect a source change fast enough that a scheduler trusts the view without
  re-confirming.
- Let the scheduler book or place a shift directly from the view.
- Degrade a temporarily unavailable location to "unknown", not to "free".

**The solution MUST NOT:**
- Show a slot as free that is already taken at the source (the `no-stale-free-slot`
  invariant).
- Expose any availability across operator boundaries.

**Free to vary (design and engineering choose):**
- How availability is aggregated and cached (push, pull, materialised view).
- Conflict-detection mechanism at the point of booking.
- Whether the view is a new surface or an expansion of the existing calendar.
- UI layout, grouping, and filtering patterns.

---

## Evidence

- Q4 2025 scheduler discovery -- n=5 interviews at FitClub and BrightSmile; the
  job is interruption-reduction, not a prettier calendar.
- Support trend -- "can't see across locations" contacts up 40% over two quarters,
  concentrated at 3+ location accounts.
- Renewal calls -- Gridline named in three of the last eight, including FitClub's.

---

## Bets & Risks

**We're betting that:**
1. A trusted in-product view beats the control of gathering availability by phone.
   If wrong, this RFC is wrong.
2. We can keep the view current enough that schedulers stop making confirmation
   calls.
3. Integration depth will let us differentiate this view from Gridline's over time.

**Top risks:**

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Stale reads cause a visible double-booking | Med | High | Conflict check at booking time; the `no-stale-free-slot` guard; private preview on real data before GA |
| Aggregation too slow at the largest operators | Med | Med | Load-test at max supported size before public preview; degrade gracefully |
| Schedulers do not trust any view they did not build | Low | High | Watch the abandon signal in private preview; pivot if confirmation calls persist |

---

## Rollout

Release shape: staged rollout on real data, because the risk is trust and the only
honest test is whether schedulers stop phoning. See
[Writing an RFC](../guides/product-specs.md#rollout) for the shapes.

| Phase | Audience | State | Exit criteria | Rollback |
|---|---|---|---|---|
| Private preview | FitClub + BrightSmile | ON for opted-in | Zero stale-slot bookings observed; schedulers report they stopped confirming by phone | Flag OFF, no data left behind |
| Public preview | Opted-in multi-location accounts | ON for self-selected | View-origin booking share rising; no critical conflicts | Flag OFF, notify opted-in |
| GA | All multi-location accounts | ON by default | Held 30 days; reconciliation-free rate moving | Flag OFF, post-mortem |

**Instrumentation required before private preview:**
- [ ] Event: `booking_originated_in_unified_view` -- measures the view-origin share
- [ ] Event: `reconciliation_event` -- detects a scheduler leaving to confirm
- [ ] Dashboard: cross-location booking origin + booking-conflict rate + view p95
- [ ] Guardrail alert: booking-conflict rate triggers above 0.1%

---

## Open Questions

- What counts as "fresh enough" for a source change to appear in the view? -- `[Eng spike]`
- Do we surface leave and contracted-hours enrichment in v1 or fast-follow? -- `[Leadership decision]`
- Baseline reconciliation-free rate at 3+ location accounts before launch -- `[Data pull]`
- Will FitClub run a two-week private preview on live scheduling? -- `[Customer validation]`

---

## Related

- [RFC Template](../templates/rfc.md) -- the blank shape this fills in
- [Job Spec Example: Tempo](./job-spec-example.md) -- the durable job this RFC delivers against
- [Product Spec Example: Tempo](./product-spec-example.md) -- the outcome this RFC advances
- [RFC guide](../guides/product-specs.md) -- how to write this document
- [JTBD Guide](../guides/jtbd-guide.md) -- framing the job and the forces around it

---

**Last Updated:** 2026-02-12
