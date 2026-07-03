---
title: "Job Spec Example: Tempo"
description: "A worked Job Spec on the current template, filled in at full-stakes depth for a real job from the Tempo strategy example: see everyone's free time at once. Shows the four-forces reading feeding the bar, the bet, and the abandon signal."
sidebar:
  order: 3
---

# Job Spec Example: Tempo

This is a worked [Job Spec](../templates/job-spec.md), filled in at full-stakes
depth, for one of the jobs funded in the [Tempo strategy example](./tempo-strategy.md):
`see-everyones-free-time-at-once`. Tempo is a fictional team-scheduling product;
its customers (FitClub, BrightSmile, CityCare) and its competitor (Gridline) are
illustrative. Read it alongside the blank [template](../templates/job-spec.md) to
see what each section looks like when it is actually answered, and alongside the
[JTBD guide](../guides/jtbd-guide.md) to see the four forces do real work: they
set the bar in *Today's alternatives*, they name *The bet*, and their inverse is
the *Abandon signal*.

The template scales. A Quick Win answers most sections in a line. This is a
high-stakes, competitively-contested job, so every section is expanded.

---

```yaml
job: see everyone's free time across all locations at once, without leaving the product
outcome: A scheduler at a multi-location operator sees a single, current free-slot view across every location and books into it directly, without phoning or messaging staff to reconcile availability first.
stakes: If the scheduler still has to leave the product to gather availability, we have not closed the gap Gridline is targeting, and multi-location accounts (our largest, most expansion-ready customers) keep one foot out the door at renewal.
serves: cross-location-visibility
invariants: [no-stale-free-slot, availability-never-leaks-across-operators]
```

## The job

A scheduler at a multi-location operator is trying to place shifts or bookings
that draw on staff across several sites. They are not asking for a prettier
calendar. They are trying to stop making phone calls. Past three locations, a
single-site view stops being enough, and the scheduler's daily friction becomes
the coordination overhead of finding who is free where.

**Struggling moment:** When a scheduler needs to fill a slot that could be
covered by staff at more than one location, they are stuck because the product
only shows one site at a time, so they leave it, call or message each site to
gather availability, and hand-build a free-slot picture in their head or a
spreadsheet.

**Job story:** When I am covering a gap across our locations, I want to see
everyone who is genuinely free right now in one place, so I can book it without
chasing people for their availability first.

## Today's alternatives

The job is already getting done, three ways, and each sets part of the bar.

- **Manual / workaround.** The scheduler phones or messages each site, then
  builds a free-slot view by hand in a spreadsheet or on paper. Slow and
  error-prone, but it works today and it is a deeply ingrained habit.
- **A rival product.** Gridline shipped cross-location availability aggregation
  in late 2025. Their UI is rougher and their integrations are thinner, but the
  core aggregation is real and already appears by name in our renewal calls.
- **Non-consumption.** Smaller or newer multi-location operators simply keep
  each site siloed and accept the double-bookings and gaps, because coordinating
  across sites feels like more effort than it is worth.

**The four forces on this switch** (from the [JTBD guide](../guides/jtbd-guide.md)):

- *Push:* the phone-and-spreadsheet routine is slow and gets things wrong past
  three sites, and the pain grows with every location added.
- *Pull:* one trusted view that lets the scheduler book without chasing anyone.
- *Anxiety:* "can I trust a view I did not build myself?" The first stale slot
  destroys that trust for good.
- *Habit:* the phone call is control. It also lets the scheduler confirm and
  negotiate in the same breath, so it is stickier than it looks.

**The bar:** you are not competing with nothing. You are competing with a habit
that already works (the phone calls) plus a competitor at rough parity on the
core capability (Gridline). Push and pull have to beat anxiety and habit, and
the deciding force is anxiety: beating the manual path means the in-product view
is trusted enough that the scheduler stops picking up the phone "just to be
sure." That trust, not the feature, is the switching cost.

## The bet

- **This job assumes** the anxiety is beatable: that at three or more locations
  cross-location availability is frequent and painful enough (strong push) that a
  scheduler will trust a correct in-product view (pull over anxiety) rather than
  keep the control of gathering it themselves by phone (habit). If schedulers
  actually prefer calling, because a call also lets them negotiate, or because
  they trust no view they did not build, then habit and anxiety win, the job is
  not real, and no amount of UI polish will move them. Validate this before
  building: show schedulers a prototype view and watch whether they stop calling,
  or call anyway.

## Measures of success

- *Mechanism:* the scheduler stops leaving the product to gather availability,
  so cross-location bookings start from the unified view instead of from a phone
  call, which removes the interruption that defines the job.
- *Leading indicator:* the availability view becomes the place cross-location
  bookings originate, and "can't see across locations" support contacts fall
  among multi-location accounts.
- *Where the number lives:* the `cross-location-visibility` outcome Signal in the
  Product Spec carries the quantified target (ticket reduction, renewal health at
  FitClub and BrightSmile); the RFC carries the events and dashboards that
  instrument the two indicators above.

## Good / bad

**Good looks like**

- The scheduler opens one view and sees who is free across every location, right
  now, and books straight into it.
- A booking made from the view holds: the person shown as free actually was.
- The scheduler stops phoning sites to confirm availability before booking.
- When availability changes at one site, the view reflects it without a manual
  refresh.

**Bad looks like (never ship this)**

- A calendar that shows each location side by side but still leaves the scheduler
  to reconcile them by eye: we moved the phone calls into the product instead of
  removing them.
- The view demands setup (mapping staff to locations by hand) before it shows
  anything useful.
- **Silent failure:** the view shows a slot as free, the scheduler books it, and
  it was already taken at the source, because the view was stale. It looks like
  success (they used the view, the booking "went through") and the metrics look
  fine, but the outcome, reliable booking without a phone call, never landed. The
  scheduler learns not to trust it and quietly goes back to calling. This is the
  anxiety force winning after launch: one stale slot confirms the fear that a
  view they did not build cannot be trusted.

## What the job requires

**Must be able to**

- Show, in one view, the current availability of staff across all of a single
  operator's locations.
- Reflect a change in availability at any location quickly enough that a
  scheduler can trust the view without re-confirming by phone.
- Let the scheduler act (book or place a shift) directly from that view.

**Won't**

- Won't become the staff-communication channel: this is the availability layer,
  not a messaging tool. Reconciliation by conversation is the job we are removing,
  not one we are rebuilding.
- Won't show availability across operators: one operator's staff are never
  visible to another (see the `availability-never-leaks-across-operators`
  invariant).

## Prove it

- **Book across locations, availability screen.** A scheduler at a three-location
  account opens the unified view and fills a gap using a staff member from another
  site. *Watch:* they complete the booking without leaving the view to confirm
  availability. *Invariant:* `no-stale-free-slot`, nothing shown free is already
  booked at the source.
- **Stale-read guard (the silent failure).** A slot is booked at the source the
  instant before the scheduler acts on the unified view. *Watch:* the view
  prevents or flags the conflict; the scheduler never lands a double-booking.
  *Invariant:* `no-stale-free-slot`.
- **Isolation.** A scheduler for one operator cannot see any staff or availability
  belonging to another operator, on any surface. *Invariant:*
  `availability-never-leaks-across-operators`.

**Fuzz corpus:** vary `location count × concurrent edits at multiple sites ×
sync latency × partial site outage`; the two invariants above must hold across
the corpus, not just the single-site happy path.

## Verdict

- **Done when:** a scheduler at a multi-location account books across locations
  from the unified view without phoning a site first, and the view never lets
  them book a slot that was already taken, proven by the scenarios above.

## Abandon signal

- **We named the wrong job if:** schedulers keep phoning sites to confirm
  availability even with the unified view live and correct. That is the habit
  force proven stronger than we bet: if they will not trust any view they did not
  assemble themselves, the job is not "show me availability in one place," it is
  something about control or negotiation we have not named, and this spec is aimed
  at the wrong target.

## Production-readiness

- *Reliability:* the view degrades safely if one location's data is momentarily
  unavailable, showing that site as unknown rather than silently as free.
- *Performance:* the unified view returns current availability fast enough at the
  largest supported operator size that a scheduler treats it as live, not as a
  report they wait on.
- *Security/privacy:* availability data is scoped to a single operator by
  construction, enforced server-side, not by the client.

---

> **Implementation:** the how (data model, sync mechanism, conflict handling)
> lives in the RFC that `serves:` this job. That artifact churns; this Job Spec
> outlives it.

---

## Related

- [Job Spec Template](../templates/job-spec.md) -- the blank shape this fills in
- [Tempo Strategy (worked example)](./tempo-strategy.md) -- the strategy that funds this job
- [JTBD Guide](../guides/jtbd-guide.md) -- the job-story and four-forces framing behind the job
