---
title: Measurement Chain
description: How measurement ladders through the framework as one chain, and which artefact owns each rung
last_reviewed: 2026-07-10
icon: "🪜"
---

# Measurement Chain

![A four-rung ladder rising from a named leading indicator, through a quantified job metric, to an outcome Signal, to the North Star at the top, with instrumentation events wiring underneath every rung.](/ProductOS/img/hero-measurement-chain.png)

The Measurement Chain is the fourth anchor, beside the [Vision](./product-vision.md)
(the *why*), the [Principles](./product-principles.md) (the *built-well*
standards), and the [Invariants](./invariants.md) (the lines you won't cross by
construction). Where those three anchors each own a decision, this one owns a
*relationship*: measurement is one ladder, each rung names the next, and this
doc is the map of where every rung lives. The rungs themselves stay in the
templates and guides that define them. This anchor asserts the chain and points
to the territory, so the map and the ground can never drift apart.

The chain is real today, but it was only ever *implied*, spread across four
files by cross-link. This page makes it legible in one place: the spine, who
owns each rung, and one job traced down every rung so a reader sees a single
concrete thread.

---

## One ladder, split on purpose

The whole chain is one line:

> leading indicator (named) → job metric (quantified) → outcome Signal → North Star, with instrumentation (the events) wiring underneath.

It is split at a deliberate seam. The top rung lives in words, where strategy
lives, and the number appears one layer down, where the metric gets
instrumented. The [Job Spec](../templates/job-spec.md) names each job's leading
indicator **named, not quantified**, because targets and thresholds *"drift"*
and a durable spec must not carry a moving number. The
[Product Spec](../templates/product-spec.md) then carries the quantified form,
stating the ladder in its own words: *leading indicator (named) → job metric
(quantified) → outcome Signal → North Star.* Keeping the number out of the Job
Spec is what stops the strategy layer from going stale, and it is why a job that
cannot name a metric rolling into its outcome's Signal is a job you can't tell
is working.

---

## The Commercial Frame: the rung above the North Star

The ladder above stops at the product's North Star. The Commercial Frame is the
rung above it: the revenue-quality view the whole chain must ultimately explain.

> North Star → **net new revenue with the bucket not leaking**: NRR and GRR
> held, logo retention held, churn tagged and explained.

Three rules make it load-bearing rather than decorative:

1. **The North Star must be able to explain revenue quality.** If the North
   Star can rise while GRR or logo retention falls, the North Star is misnamed:
   it is measuring activity, not the outcome customers pay for. Fix the metric,
   not the story.
2. **Expansion never launders retention.** Track GRR and logo retention beside
   NRR. A healthy NRR built on whales expanding over a rotting logo base is a
   product fire wearing a good quarter's clothes.
3. **Churn is tagged, always.** Every churned account gets exactly one primary
   tag: `churn:product-gap` (the product failed a real job), `churn:fit`
   (wrong-fit customer; an acquisition problem, routed to sales, not the
   roadmap), `churn:commercial` (pricing/packaging/relationship), or
   `churn:unavoidable` (business closed, merged, mandated change). Untagged
   churn is unexplained leak. The tagging workflow lives in
   [Handling Product Feedback](../pm-playbook/customer-feedback.md).

Accountability splits cleanly at this rung: the **portfolio** answers to the
Commercial Frame (the product org owns product-gap churn and expansion-mechanism
health), while **individual judgement** answers one level down, to the
commercial mechanisms predicted and scored in the
[calibration ledger](../pm-playbook/calibration.md). Revenue is the scoreboard;
mechanisms are what a PM controls.

---

## Who owns each rung

Each rung is defined in exactly one place. This table is the map. Follow the
link to the section named for the how-to, which stays with the template that
owns it.

| Rung | Named or quantified | Where it lives | Section |
|---|---|---|---|
| Leading indicator | named, no number | [`../templates/job-spec.md`](../templates/job-spec.md) | "Measures of success" |
| Job metric | quantified form of that indicator | [`../templates/product-spec.md`](../templates/product-spec.md) | "The job index" |
| Outcome Signal | number + direction + target | [`../templates/product-spec.md`](../templates/product-spec.md) | "Outcomes" (each carries a Signal) |
| North Star | the top metric | [`../templates/product-spec.md`](../templates/product-spec.md) | "North Star" |
| Commercial Frame | NRR, GRR, logo retention, tagged churn | this anchor (above); tagging in [`../pm-playbook/customer-feedback.md`](../pm-playbook/customer-feedback.md) | "The Commercial Frame" |
| Instrumentation (events) | the events that compute the Signal | [`../templates/rfc.md`](../templates/rfc.md) | "Instrumentation required before private preview" |

A short gloss on each rung:

- **Leading indicator** -- the earliest observable sign the job is working,
  stated in words on the Job Spec so the durable spec carries no drifting number.
- **Job metric** -- the quantified form of that indicator, listed in the Product
  Spec's job index next to the job it belongs to.
- **Outcome Signal** -- the measurable driver an outcome contributes to the North
  Star: a number with a direction and a target.
- **North Star** -- the single metric the whole product is judged on, into which
  the outcome Signals decompose.
- **Instrumentation (events)** -- the events an RFC must ship before private
  preview, which is what actually computes the Signal.
- **Commercial Frame** -- the revenue-quality rung above the North Star:
  growth with the bucket not leaking. Defined in this anchor, above.

---

## The chain, traced: Tempo

One job, [`see-everyones-free-time-at-once`](../examples/tempo/job-spec.md),
serving the [`cross-location-visibility`](../examples/tempo/product-spec.md)
outcome, followed down every rung. Read across: the named indicator becomes a
quantified metric, which becomes a Signal, which feeds the North Star, computed
by the events at the bottom.

| Rung | Tempo value |
|---|---|
| Leading indicator | the availability view becomes the place cross-location bookings originate, and "can't see across locations" support contacts fall |
| Job metric | share of cross-location bookings that start in the unified view |
| Outcome Signal | bookings originating in the unified view, 30% → 75% |
| North Star | reconciliation-free cross-location booking rate, → 80% |
| Instrumentation (events) | `booking_originated_in_unified_view` and `reconciliation_event`; guardrail alert if booking-conflict rate > 0.1% |

The same thread, top to bottom: a phrase in the Job Spec, a metric in the job
index, a Signal on the outcome, a driver of the North Star, and the two events
that make it all countable.

---

## Related

- [Job Spec Template](../templates/job-spec.md) -- owns the leading indicator, named not quantified, in "Measures of success".
- [Product Spec Template](../templates/product-spec.md) -- owns the job metric, the outcome Signals, and the North Star.
- [RFC Template](../templates/rfc.md) -- owns the instrumentation: the events that compute the Signal before private preview.
- [Product Analytics](../guides/product-analytics.md) -- how to instrument the events and read the metrics this chain names.
- [Headline Metric](../guides/headline-metric.md) -- how to pick the North Star at the top of the ladder.
- [Calibration](../pm-playbook/calibration.md) -- how predicted commercial mechanisms are scored per PM, one level below the Commercial Frame.
- [Product Vision](./product-vision.md) -- the first anchor; it names the outcomes whose Signals this chain measures.
- [Product Principles](./product-principles.md) -- the second anchor; the built-well standards beside this one.
- [Invariants](./invariants.md) -- the third anchor; the lines you won't cross, beside this map of how you measure.
