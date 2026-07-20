---
title: Product Analytics
description: "The measurement discipline for a product org: what the team owes at each stage, what good and bad look like, and how a Signal gets stood up and read in practice"
last_reviewed: 2026-07-06
icon: "📈"
---

# Product Analytics

Measurement is not a phase at the end. It is a running accountability that starts when you write the spec and does not stop until you have closed the loop on whether the thing worked.

This page is the **operating layer**: how measurement fits into how the team actually runs, what the team is on the hook for, and what "good" looks like. It is deliberately more day-to-day than the method guide.

> **Two layers, one split.** The [Product Analytics guide](../guides/product-analytics.md) is the **method**: how to instrument a Signal and read it (event taxonomy, leading indicators, cadence). This page is the **discipline**: what the product org owes, who owns what, and the rhythm it runs on. When you need to build the instrumentation, go to the guide. When you need to know what you are accountable for, stay here. And to *pick* the Signal in the first place, start with [The Anchor Signal](../guides/headline-metric.md).

---

## What the team is accountable for

Measurement has three stages, and you owe something concrete at each. Skipping the early ones is what produces a launch nobody can grade.

| Stage | What you owe | The failure if you skip it |
|---|---|---|
| **Spec** | Name the Signal the work moves and the leading indicator you will read. Write it into the [Job Spec](../templates/job-spec.md) Measures of Success and the RFC. | You ship, then invent a metric to justify it after the fact. |
| **Launch** | The events are live and a baseline is running *before* the flag flips. The flag state is logged so you can read exposed versus control. | No "before", so no way to read the "after". |
| **Post-launch** | Run the [reviews](./templates/post-launch-review.md) on schedule. Bring the reading, attribute the move, make the call. | The feature drifts, unmeasured, until someone asks in a QBR. |

The through-line: **you owe a readable answer to "did this move the outcome?" before you start, not after.** If you cannot say at spec time how you would know, that is a discovery gap, not a launch problem.

---

## What good looks like

A team that measures well and a team that ships and forgets are easy to tell apart. The difference is visible before launch, not after.

**A team that measures well:**

- Every funded piece of work names the Signal it moves, in Signal terms, at spec time.
- The dashboard exists and shows a baseline *before* the feature ships.
- Post-launch reviews are on the calendar the day the work ships, not scheduled in a panic when someone asks.
- A launch that did not move its Signal gets an honest "iterate / pivot / stop", not a quiet re-framing into a metric that did move.
- The number is scoped to the change, so "it worked" means "it worked for the people we changed things for".

**A team that ships and forgets:**

- Success is described in activity ("we shipped six things this quarter"), not outcomes.
- Metrics get chosen after launch, retrofitted to whatever looks good.
- Dashboards measure the whole product, so no single change can ever be attributed.
- Reviews happen only when a leader asks, and the answer is "adoption is growing" with no baseline behind it.
- A flat Signal is explained away rather than acted on.

The tell is the retrofit. **If the metric is chosen after the launch, the team is measuring to justify, not to learn.**

---

## Implementation: how it runs in practice

### Who owns the dashboard

The **PM owns the Signal and its reading**: what it means, whether it moved, what to do about it. The PM does not have to build the pipeline, but they own the answer. Engineering owns the events being emitted correctly and the taxonomy staying clean as the product grows. Where the triad has a data or analytics partner, they own the pipeline and the query layer; they do not own the interpretation. One named person is accountable for the number, or it is nobody's.

### The review rhythm

Measurement rides on rhythms the playbook already runs, so it does not become a separate ceremony:

- **[Ritual review](./templates/ritual-review.md)** (monthly): the standing look at how the product feels, where the Signal's health check and its trend get read at Signal altitude.
- **[Post-launch review](./templates/post-launch-review.md)** (2-week / 30-day / 60-90 day): the per-launch loop that reads the leading indicator, then the Signal, then attributes the move and makes the call.

Schedule all three post-launch reviews when you ship, not after. An unscheduled review is a review that does not happen.

### How a Signal gets stood up

1. **Pick it** with [The Anchor Signal](../guides/headline-metric.md): one number per outcome, decomposable into levers.
2. **Instrument it** with the [Product Analytics guide](../guides/product-analytics.md): decompose the definition into `object.action` events, log the flag state, tie each event to the outcome.
3. **Baseline it** before the change ships, for at least one full cycle of the behaviour.
4. **Put it on a rhythm** so each read answers one question at the right altitude.

### When analytics work is "enough"

The mirror of discovery's "how much is enough". You have done enough when:

- The Signal decomposes into events you can point at, and a baseline is running.
- One attributable leading indicator is live, scoped to the change.
- The post-launch reviews are on the calendar.

You have done **too much** when you are instrumenting events for questions no decision depends on, or building bespoke dashboards nobody reads on a cadence. Measurement takes days of setup, not weeks. If it is taking weeks, you are instrumenting the product instead of the Signal.

---

## How this fits the rest of the playbook

Measurement is the thread that ties the loop together, not a standalone discipline:

- **[Discovery](./discovery.md)** decides *what* to measure. The Signal and its leading indicator come from the JTBD work: the mechanism by which doing the job changes behaviour, and the earliest observable sign it is working.
- **[Decision Framework](./decision-framework.md) and [RICE](./rice.md)** express impact *in Signal terms*. An RFC that cannot state its expected impact on a named Signal should be sent back. RICE Impact is a claim about a Signal, and Confidence rises when you have the analytics to back it.
- **[Release phases](./release-phases.md)** set *when* you read. Private and public preview are where the leading indicator earns its baseline, exposed versus control, before a GA that would swamp attribution.
- **[Delivery Standards](./delivery-standards.md)** put the measurement gate in the workflow, so "instrumented and baselined" is a launch requirement, not an afterthought.

The split to keep in view: this page is the operating layer, the [guide](../guides/product-analytics.md) is the method, and [The Anchor Signal](../guides/headline-metric.md) is how you pick the number both of them work on.

---

## Related

- **[Product Analytics guide](../guides/product-analytics.md)** -- the method: how to instrument a Signal and read it.
- **[The Anchor Signal](../guides/headline-metric.md)** -- how to pick the Signal this discipline measures.
- **[Discovery](./discovery.md)** -- where what-to-measure comes from: the JTBD mechanism and leading indicator.
- **[Decision Framework](./decision-framework.md)** -- where impact gets expressed in Signal terms and matched to a path.
- **[Post-Launch Review](./templates/post-launch-review.md)** -- the loop where the reading meets the decision.
- **[Ritual Review](./templates/ritual-review.md)** -- the monthly rhythm the Signal's trend rides on.
</content>
