---
title: Product Analytics
description: "How to instrument a Signal and read it: the event taxonomy, leading vs lagging indicators, the reading cadence, and how analytics feeds the post-launch verdict"
last_reviewed: 2026-07-06
icon: "📈"
---

# Product Analytics

[The Anchor Signal](./headline-metric.md) is how you *pick* the number. This guide is how you *instrument and read* it: turning a named Signal into events you log, choosing indicators you can actually attribute, and setting a cadence that answers a real question each time you look.

A Signal that nobody instruments is a slogan with a definition. The [product vision](../anchors/product-vision.md) names the outcomes and their Signals; this guide is the wiring between that named number and the raw events a system emits. Get it right and the 60-90 day post-launch review reads itself. Get it wrong and you ship, then argue about whether it worked.

---

## From Signal to instrumentation

A Signal is a definition. Instrumentation is the set of events that lets you compute it. The job of this step is to decompose the Signal's definition into the smallest set of logged events that reconstruct it, and nothing more.

### Start from the definition, not the dashboard

Read the Signal's definition word by word and underline every noun that implies a countable moment. Each underlined moment is a candidate event. "Share of cross-location bookings completed inside the product" names three moments: a booking starts, a booking completes, and a booking crosses locations. Those are your events; the "share" is arithmetic on top.

Work down from the number, never up from whatever the SDK happens to emit. If you start from the events you already have, you instrument the product you built, not the outcome you named.

### Log the moment, its context, and its outcome

Every event carries three things:

- **The moment** -- a single, unambiguous thing that happened, named as object plus past-tense action (`booking.completed`, not `handleBookingClick`).
- **The context** -- the properties you will slice by later: persona, account, surface, location count, integration state. Log the slice you will *ask about*, not every field in scope.
- **The outcome tie** -- the named vision outcome and Signal this event rolls into, so an engineer reading the taxonomy can see which number each event serves.

If an event does not help compute a Signal or explain a move in one, it is telemetry, not product analytics. Keep it out of this layer so the Signal-bearing events stay legible.

### Name events so they survive scale

The taxonomy you write for ten events has to hold at a thousand. Names are the part that rots first.

| Rule | Bad | Good |
|---|---|---|
| Object first, then action, past tense | `clickedBook`, `bookingFlowStep2` | `booking.completed` |
| Describe the domain moment, not the UI element | `blue_button_tapped` | `availability.viewed` |
| One event per real moment, variants go in properties | `booking_completed_mobile`, `booking_completed_web` | `booking.completed` + `surface: mobile` |
| Stable nouns from the customer's world, not the codebase | `svc_txn_ok` | `booking.completed` |

The test: a new engineer who has never seen the product should be able to guess what `object.action` means and which Signal it feeds, without reading the emitting code. If they can't, the name is describing your implementation instead of the customer's world, and it will not survive the next rewrite.

---

## Leading vs lagging indicators

A Signal is often a **lagging** indicator: it moves weeks after the work, and many jobs and outside forces move it at once. [The Anchor Signal covers why that attribution problem is fatal](./headline-metric.md) and tells you to prefer an indicator you can attribute. This guide is how you build that attributable indicator.

### Instrument a leading indicator you can isolate

A good leading indicator sits *upstream* of the Signal on the same causal chain and is close enough to your change that you can attribute a move to it. The headline number tells you whether the outcome landed; the leading indicator tells you whether it landed *because of what you shipped*.

Three properties make a leading indicator attributable:

- **Proximate** -- it is one or two steps downstream of your change, not the whole funnel. Fewer confounders sit between the work and the number.
- **Scoped** -- you can compute it for the exact cohort your change touched (a surface, a persona, a flagged population), so the rest of the product's noise is excluded by construction.
- **Directional by definition** -- a rate or a time, not a raw count, so it does not lie about scale as the product grows.

The instrumentation move that makes this real is the **flag-scoped cohort**. Log the feature-flag state (or the exposure) as an event property, and every leading indicator can be read as exposed versus control on the same day. That is the difference between "the number went up" and "the number went up for the people who saw the change, and not for those who didn't."

### Hold a baseline before you ship

You cannot read a move without a "before". Instrument the leading indicator and let it run for at least one full cycle of the behaviour *before* the change ships, so the post-launch review has a real baseline instead of a guess. Standing the events up the day you launch is the most common way a review ends in "we can't actually tell".

---

## The reading cadence

Looking constantly is not measuring. Each read happens at an altitude, on a rhythm, and answers one question. If a read has no question, skip it.

| Altitude | Cadence | The one question it answers |
|---|---|---|
| **Health check** | Daily during a rollout, else weekly | Is anything on fire? Guardrail breach, a leading indicator falling off a cliff, events that stopped arriving. |
| **Leading indicator** | Weekly | Is the change moving the thing upstream of the Signal, for the cohort it touched? |
| **Signal** | Monthly | Is the named outcome holding and trending toward target? |
| **Signal decomposition** | Per post-launch review (2-week / 30-day / 60-90 day) | *Which lever* moved the Signal, and can we attribute it to what we shipped? |

Two rules keep the cadence honest:

- **Match the altitude to the decision.** A daily glance at a monthly Signal invites you to over-read noise as trend. Read the Signal at Signal cadence; read leading indicators when a fresh change could plausibly have moved them.
- **A read with no decision attached is a habit, not a measurement.** Before opening a chart, name what you would *do* differently depending on what it shows. If nothing, close the tab.

---

## How analytics feeds the post-launch review

The 60-90 day post-launch review is where instrumentation pays off. Its Vision Check asks whether a named outcome and its Signal moved, with a fallback to a leading indicator when the headline number is confounded. That fallback only exists if you built the leading indicator early.

The review reads the layers you instrumented in order:

1. **Direct movement.** Did the Signal itself shift, in the right direction, by a measurable amount? This is the lagging read, and it is often confounded.
2. **Leading indicator.** Did the attributable, flag-scoped indicator move for the exposed cohort? This is what lets you claim the change *caused* the move when the headline number is noisy.
3. **Persona-specific check.** Did each affected persona's vision-lens reading improve? Slice the same events by persona.

That ordered read is what feeds the **delivery verdict**. [Agentic Delivery](./agentic-delivery.md) makes moving a named Signal (or a credible leading indicator of it) part of the all-must-pass gate. Analytics is what turns "we think it worked" into evidence the verdict rule can check. Without the instrumentation, the verdict is guesswork. With it, the verdict has evidence behind it.

---

## When is instrumentation "done"?

Instrumentation is ready when:

- [ ] **Every Signal decomposes into logged events** that reconstruct it, and no more. You can point at the events and derive the number by hand.
- [ ] **At least one attributable leading indicator is instrumented** per Signal, scoped so you can read it for the cohort your change touches.
- [ ] **The flag or exposure state is an event property**, so exposed versus control is a slice, not a separate pipeline.
- [ ] **A baseline is running** before the change ships, covering at least one full cycle of the behaviour.
- [ ] **Every event names the outcome and Signal it feeds**, so the taxonomy is self-documenting.
- [ ] **Each event has a stable `object.action` name** a new engineer could guess, with variants pushed into properties.
- [ ] **A reading cadence is written down**, with the question each altitude answers, before launch, not after.

> [!CAUTION]
> Instrumentation that cannot answer "did *our change* move it?" is decorative. If every event you log measures the whole product and none can be scoped to the change you shipped, you have a dashboard, not an analytics strategy. Add the cohort scope or you will never close a post-launch review with evidence.

---

## A worked slice: instrumenting a Tempo Signal

> One worked decomposition, using the `cross-location-visibility` outcome from the [Tempo product spec](../examples/tempo/product-spec.md). It shows the shape, not the only valid choice.

**The Signal.** Share of cross-location bookings that originate in the unified availability view. (Now to target: 30% to 75%.)

**The moments in that definition.** A booking starts, a booking crosses locations, a booking completes, and the booking either did or did not originate in the unified view. Those become the events.

| Event | Key properties | Why it is logged |
|---|---|---|
| `availability.viewed` | `account_id`, `persona`, `surface`, `scope: single-location \| cross-location`, `flag_state` | The upstream moment: did the scheduler open the unified view at all? |
| `booking.started` | `account_id`, `origin: unified-view \| per-location-calendar \| external`, `flag_state` | Captures **where the booking began**, the crux of the Signal's "originate in the view". |
| `booking.completed` | `account_id`, `location_count`, `origin`, `persona`, `flag_state` | The lagging moment. `location_count >= 2` marks it cross-location. |
| `booking.reconciled_externally` | `account_id`, `origin` | The anti-signal: the scheduler left the product to phone or message a site. Guards against gaming the Signal. |

**Computing the Signal.** Of `booking.completed` events with `location_count >= 2`, the share whose `origin: unified-view`. Pure arithmetic on the events above.

**The attributable leading indicator.** `booking.started` with `origin: unified-view`, as a rate over all `booking.started`, sliced by `flag_state`. It sits one step upstream of completion and can be read exposed versus control on the day of a rollout, so a move attributes to the change long before the monthly Signal confirms it.

**The reading cadence.** Watch `booking.reconciled_externally` daily during rollout (guardrail). Read the unified-view start rate weekly, exposed versus control. Read the Signal itself monthly. Decompose it at each post-launch review to confirm the unified-view lever, not seasonality, moved the number.

This same pattern, decompose the definition into moments, log the origin and the anti-signal, scope a leading indicator by flag, holds for any Signal. The events change; the structure rarely does.

---

## Related

- **[The Anchor Signal](./headline-metric.md)** -- how to pick the Signal this guide instruments and reads.
- **[Product Vision](../anchors/product-vision.md)** -- names the outcomes and Signals that instrumentation ties back to.
- **[Job Spec Template](../templates/job-spec.md)** -- the Measures of Success section is the durable brief that drives what you instrument here.
- **[Agentic Delivery](./agentic-delivery.md)** -- how a moved Signal (or an attributable leading indicator) feeds the verdict rule.
</content>
</invoke>
