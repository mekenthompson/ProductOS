---
title: The Anchor Signal
description: "How to pick a signal that actually anchors a named outcome, and when to collapse to a single headline metric"
last_reviewed: 2026-07-01
icon: "📖"
---

# The Anchor Signal

The [product vision](../anchors/product-vision.md) names a small set of **outcomes (max four), each with its own Signal**: a number or a CI-enforced check an engineer can read. The **Signal** is the outcome-level named metric that drives the North Star (the product's single headline metric). This guide is about choosing those Signals well: framing each one so the rest of the system can use it, and avoiding the common ways teams pick badly.

> [!IMPORTANT]
> For a funnel-shaped product where one number captures almost everything (time-to-first-value, retention at 90 days, GMV-per-cohort), the vision may collapse to a **single headline metric**. That's the special case, not the default, but everything in this guide applies to it directly. One outcome, one Signal.

Most teams have several "important metrics." That's fine for dashboards. It's fatal for prioritisation. When *everything* is important, RICE becomes negotiation and roadmaps become wish lists. Naming a small set of outcomes, each with exactly one Signal, forces the team to make trade-offs in the open.

---

## What an anchor Signal is for

Three jobs, whether you have one Signal or four:

1. **It anchors prioritisation.** Every RFC's expected impact is expressed in the terms of a named outcome's Signal. RICE Impact uses it. If an RFC can't articulate impact on a Signal the vision names, it should be sent back.

2. **It defines "we succeeded."** The 60–90 day post-launch review tests whether the shipped feature actually moved a Signal (or moved a credible leading indicator of it). Without a Signal, "success" is whatever the team feels good about.

3. **It tells the company what you're optimising for.** The company should be able to read the outcomes and their Signals and predict your trade-offs. If they can't, the Signals are too soft or too internal.

---

## How anchor Signals connect to the rest of the system

| Where it shows up | How it's used |
|---|---|
| [Product Vision](../anchors/product-vision.md) | Names the outcomes (max four) and gives each one a Signal. |
| [Product Principles](../anchors/product-principles.md) | Principles keep each feature moving a named Signal, not a vanity number. |
| [RFC Template](../templates/rfc.md) | The Guardrails section (Quality / principle guardrails) names which outcome the RFC advances and which Signal it moves. |
| [Job Spec](../templates/job-spec.md) | Each durable per-job outcome traces to one named vision outcome and the Signal it advances. |
| [Agentic Delivery](./agentic-delivery.md) | The outcomes and their Signals feed the verdict rule, the all-must-pass gate every change clears. |
| Personas | Each persona's vision-lens question (see the [vision's persona section](../anchors/product-vision.md)) is a persona-specific reading of a Signal. |
| Roadmap | Themes are organised around the levers that move each Signal. |

---

## What a good Signal looks like

Six properties. Apply them to each Signal the vision names.

1. **One number per outcome.** Not three, not a composite index. If a Signal is a composite, name the *one* component you actually run on.

2. **A defined shape, not a raw count.** A Signal needs an obvious direction and a definition that survives scale changes. Raw counts (total users) lie about scale. Three shapes carry that direction well, and none is lesser than the others:
   - *Time-based or rate-based:* "time to X" and "X per Y" both have a built-in direction.
   - *Accuracy / quality / error:* error rate, precision and recall, % within tolerance, match quality, calibration. A product whose job is to be *right* (an ML model, a ranking, a fraud check, a data-quality gate) has an accuracy-shaped Signal, and that is its core Signal, not a consolation for lacking a time metric.
   - *Ratio / composition:* take-rate, share of a set, conversion between two named states.

   Pick the shape that matches what the customer actually hires the product for. Don't force a time metric onto a product whose outcome is accuracy.

3. **Customer-experienced.** The number should describe something the customer *feels*, not something internal. "System throughput" is internal. "Time from request to result" is felt.

4. **Decomposable into levers.** The Signal breaks cleanly into 2–4 forces a team can act on. If you can't say "this Signal is driven by A and B," you can't prioritise against it.

5. **Tied to an industry metric.** When customers and analysts ask how you measure, you can point to an industry standard (DORA, SPACE, NPS, retention cohorts, etc.) and explain the connection. Otherwise you'll struggle to benchmark.

6. **Resistant to gaming.** A team that wants to "win" on the Signal should have to actually improve customer outcomes to do it. If there's a way to move the number that wouldn't help a customer, fix the Signal.

> [!IMPORTANT]
> **A Signal must be attributable.** Don't manufacture a Signal you can't tie back to the work. When many jobs move one number, or external cycles and seasonality swamp it, you can't read a change as evidence your feature worked. Name the confounder, then prefer a leading indicator you *can* attribute over a headline number you can't. "An outcome without a Signal is a slogan" is a rule against vagueness, not a licence for false precision.

---

## When is a Signal "done"?

A Signal is ready to anchor its outcome when:

- [ ] **It's one number, with a precise definition** an engineer could instrument.
- [ ] **It decomposes into 2–4 levers.** Each lever has at least one team accountable for it.
- [ ] **Each persona has a vision-lens reading** of it. (See the [vision's persona section](../anchors/product-vision.md).)
- [ ] **It maps to an industry-standard metric** -- you can explain the relationship in one sentence.
- [ ] **You can describe a feature that moves it.** And a feature that *seems* to help but actually doesn't.
- [ ] **At least one in-flight project can be re-scored against it.** And the re-scoring changes a priority -- otherwise the Signal is decorative.

> [!CAUTION]
> A Signal that can't change a single priority is decorative. If naming it doesn't force the team to stop doing something, it isn't anchoring anything, fix it or drop it.

---

## How to pick a Signal

Run this per outcome. For a single-headline product, you run it once.

### Step 1: List the candidates

Brainstorm 5–8 candidate Signals for the outcome. Include the boring ones (monthly active users, revenue). Include the ambitious ones (time-to-first-value, NPS). Include the ones the leadership team uses in board meetings.

### Step 2: Score each candidate against the six properties

For each candidate, ask the six questions above. Drop anything that fails three or more. Usually this gets you to 2–3 finalists.

### Step 3: Pick the one that survives the "would the team change behaviour?" test

For each finalist, ask: *if every team aligned on this Signal and was held to it, what would they stop doing?* The Signal that produces the most uncomfortable "we'd stop doing X" answers is usually the right one. A Signal that doesn't change behaviour isn't an anchor.

### Step 4: Decompose into levers

Write down the 2–4 forces that move the Signal. These are your roadmap themes. Each lever should map to a team or domain area. If a lever doesn't have an owner, you have an org problem to fix.

### Step 5: Connect to industry metrics

For each finalist, write one sentence describing how it relates to DORA, SPACE, NPS, retention cohorts, MTTR, whichever framework your customers know. This is your benchmarking story.

---

## Example: "Time to Next Action" (TNA)

> One worked example of a Signal for a developer-tools product. It's not the only valid choice, it's an illustration of how the framework lands.

**The Signal.** TNA = median seconds between a workflow being triggered and the user (human or AI agent) taking the next action.

**Why it works:**
- One number ✓
- Time-based ✓
- Customer-experienced ✓ (the wait between trigger and next step)
- Decomposes into two levers ✓:
  1. **Faster execution** -- the wall-clock time between trigger and result.
  2. **Clearer signal** -- the gap between "I have a result" and "I know what to do next."
- Industry tie-in ✓: TNA is the inner feedback loop of DORA's Lead Time for Changes; the recovery half is the inner loop of MTTR.
- Resistant to gaming ✓: faking TNA would require either suppressing results (visible regression) or pretending users acted faster (impossible).

**What it forces the team to stop doing:**
- Stop shipping features that add steps to existing workflows.
- Stop shipping error messages that don't tell the user what to do next.
- Stop adding configuration knobs by default.

**Persona lenses:**
- Creators: time from "we need this" to "people are using it."
- Consumers: time from "something happened" to "I know what to do."
- Sponsors: time from "how is the team doing?" to an answer they trust.

This same pattern, one Signal, two levers, three persona lenses, adapts to most outcomes. The label changes; the structure rarely does.

---

## Other example shapes

| Product category | Plausible Signal | Levers |
|---|---|---|
| Consumer subscription | Week-4 retention by cohort | Onboarding success rate; week-1 engagement |
| B2B SaaS (PLG) | Time to first value (TTFV) | Setup completion; first meaningful action |
| Marketplace | Take-rate × NPS at 90 days | Match quality; transaction completion |
| Internal tools | Operator handle time | Step count per task; error rate |
| Observability / data infra | MTTD for paged incidents | Detection coverage; alert signal-to-noise |

None of these are "the right answer", they're plausible *shapes* for a Signal in each category.

---

## What a Signal is *not*

- **Not a north-star metric on its own.** A north star is usually a business outcome (revenue, growth, retention). A Signal is the *product* number whose movement should drive the north star.
- **Not a balanced scorecard.** You'll have many dashboards; the Signals are the handful of numbers the product org actually optimises -- at most one per named outcome.
- **Not immutable.** Signals evolve as the product matures. Changing one is a big decision that requires re-anchoring downstream artefacts -- but it should happen when the product genuinely moves to a new stage.

---

## Related

- **[Product Vision](../anchors/product-vision.md)** -- Names the outcomes and their Signals; this guide is how you pick each one.
- **[Product Principles](../anchors/product-principles.md)** -- Principles keep each feature moving a named Signal.
- **[RFC Template](../templates/rfc.md)** -- the Guardrails section (Quality / principle guardrails) names the outcome and Signal an RFC advances.
- **[Agentic Delivery](./agentic-delivery.md)** -- How the outcomes and their Signals feed the verdict rule.
