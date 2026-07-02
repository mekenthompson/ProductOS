---
title: The Anchor Signal
description: How to pick a signal that actually anchors a named outcome — and when to collapse to a single headline metric
last_reviewed: 2026-07-01
icon: "📖"
---

# The Anchor Signal

The [product vision](../anchors/product-vision.md) names a small set of **outcomes (max four), each with its own signal** — a number or a CI-enforced check an engineer can read. This guide is about choosing those signals well: framing each one so the rest of the system can use it, and avoiding the common ways teams pick badly.

> [!IMPORTANT]
> For a funnel-shaped product where one number captures almost everything (time-to-first-value, retention at 90 days, GMV-per-cohort), the vision may collapse to a **single headline metric**. That's the special case, not the default — but everything in this guide applies to it directly. One outcome, one signal.

Most teams have several "important metrics." That's fine for dashboards. It's fatal for prioritisation. When *everything* is important, RICE becomes negotiation and roadmaps become wish lists. Naming a small set of outcomes — each with exactly one signal — forces the team to make trade-offs in the open.

---

## What an anchor signal is for

Three jobs, whether you have one signal or four:

1. **It anchors prioritisation.** Every RFC's expected impact is expressed in the terms of a named outcome's signal. RICE Impact uses it. If an RFC can't articulate impact on a signal the vision names, it should be sent back.

2. **It defines "we succeeded."** The 60–90 day post-launch review tests whether the shipped feature actually moved a signal (or moved a credible leading indicator of it). Without a signal, "success" is whatever the team feels good about.

3. **It tells the company what you're optimising for.** The company should be able to read the outcomes and their signals and predict your trade-offs. If they can't, the signals are too soft or too internal.

---

## How anchor signals connect to the rest of the system

| Where it shows up | How it's used |
|---|---|
| [Product Vision](../anchors/product-vision.md) | Names the outcomes (max four) and gives each one a signal. |
| [Product Principles](../anchors/product-principles.md) | Principles ensure each feature moves a named signal, not a vanity number. |
| [RFC Template](../templates/rfc.md) | Strategic Alignment names which outcome the RFC advances and which signal it moves. |
| [Job Spec](../templates/job-spec.md) | Each durable per-job outcome traces to one named vision outcome and the signal it advances. |
| [Agentic Delivery](./agentic-delivery.md) | The outcomes and their signals feed the verdict rule — the all-must-pass gate every change clears. |
| Personas | Each persona's vision-lens question (see the [vision's persona section](../anchors/product-vision.md)) is a persona-specific reading of a signal. |
| Roadmap | Themes are organised around the levers that move each signal. |

---

## What a good signal looks like

Six properties. Apply them to each signal the vision names.

1. **One number per outcome.** Not three, not a composite index. If a signal is a composite, name the *one* component you actually run on.

2. **Time-based or rate-based.** "Time to X" and "X per Y" both work because they have an obvious direction. Raw counts (total users) lie about scale changes.

3. **Customer-experienced.** The number should describe something the customer *feels*, not something internal. "System throughput" is internal. "Time from request to result" is felt.

4. **Decomposable into levers.** The signal breaks cleanly into 2–4 forces a team can act on. If you can't say "this signal is driven by A and B," you can't prioritise against it.

5. **Tied to an industry metric.** When customers and analysts ask how you measure, you can point to an industry standard (DORA, SPACE, NPS, retention cohorts, etc.) and explain the connection. Otherwise you'll struggle to benchmark.

6. **Resistant to gaming.** A team that wants to "win" on the signal should have to actually improve customer outcomes to do it. If there's a way to move the number that wouldn't help a customer, fix the signal.

---

## When is a signal "done"?

A signal is ready to anchor its outcome when:

- [ ] **It's one number, with a precise definition** an engineer could instrument.
- [ ] **It decomposes into 2–4 levers.** Each lever has at least one team accountable for it.
- [ ] **Each persona has a vision-lens reading** of it. (See the [vision's persona section](../anchors/product-vision.md).)
- [ ] **It maps to an industry-standard metric** — you can explain the relationship in one sentence.
- [ ] **You can describe a feature that moves it.** And a feature that *seems* to help but actually doesn't.
- [ ] **At least one in-flight project can be re-scored against it.** And the re-scoring changes a priority — otherwise the signal is decorative.

> [!CAUTION]
> A signal that can't change a single priority is decorative. If naming it doesn't force the team to stop doing something, it isn't anchoring anything — fix it or drop it.

---

## How to pick a signal

Run this per outcome. For a single-headline product, you run it once.

### Step 1 — List the candidates

Brainstorm 5–8 candidate signals for the outcome. Include the boring ones (monthly active users, revenue). Include the ambitious ones (time-to-first-value, NPS). Include the ones the leadership team uses in board meetings.

### Step 2 — Score each candidate against the six properties

For each candidate, ask the six questions above. Drop anything that fails three or more. Usually this gets you to 2–3 finalists.

### Step 3 — Pick the one that survives the "would the team change behaviour?" test

For each finalist, ask: *if every team aligned on this signal and was held to it, what would they stop doing?* The signal that produces the most uncomfortable "we'd stop doing X" answers is usually the right one. A signal that doesn't change behaviour isn't an anchor.

### Step 4 — Decompose into levers

Write down the 2–4 forces that move the signal. These are your roadmap themes. Each lever should map to a team or domain area. If a lever doesn't have an owner, you have an org problem to fix.

### Step 5 — Connect to industry metrics

For each finalist, write one sentence describing how it relates to DORA, SPACE, NPS, retention cohorts, MTTR — whichever framework your customers know. This is your benchmarking story.

---

## Example: "Time to Next Action" (TNA)

> One worked example of a signal for a developer-tools product. It's not the only valid choice — it's an illustration of how the framework lands.

**The signal.** TNA = median seconds between a workflow being triggered and the user (human or AI agent) taking the next action.

**Why it works:**
- One number ✓
- Time-based ✓
- Customer-experienced ✓ (the wait between trigger and next step)
- Decomposes into two levers ✓:
  1. **Faster execution** — the wall-clock time between trigger and result.
  2. **Clearer signal** — the gap between "I have a result" and "I know what to do next."
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

This same pattern — one signal, two levers, three persona lenses — adapts to most outcomes. The label changes; the structure rarely does.

---

## Other example shapes

| Product category | Plausible signal | Levers |
|---|---|---|
| Consumer subscription | Week-4 retention by cohort | Onboarding success rate; week-1 engagement |
| B2B SaaS (PLG) | Time to first value (TTFV) | Setup completion; first meaningful action |
| Marketplace | Take-rate × NPS at 90 days | Match quality; transaction completion |
| Internal tools | Operator handle time | Step count per task; error rate |
| Observability / data infra | MTTD for paged incidents | Detection coverage; alert signal-to-noise |

None of these are "the right answer" — they're plausible *shapes* for a signal in each category.

---

## What a signal is *not*

- **Not a north-star metric on its own.** A north star is usually a business outcome (revenue, growth, retention). A signal is the *product* number whose movement should drive the north star.
- **Not a balanced scorecard.** You'll have many dashboards; the signals are the handful of numbers the product org actually optimises — at most one per named outcome.
- **Not immutable.** Signals evolve as the product matures. Changing one is a big decision that requires re-anchoring downstream artifacts — but it should happen when the product genuinely moves to a new stage.

---

## Related

- **[Product Vision](../anchors/product-vision.md)** — Names the outcomes and their signals; this guide is how you pick each one.
- **[Product Principles](../anchors/product-principles.md)** — Principles ensure each feature moves a named signal.
- **[RFC Template](../templates/rfc.md)** — Strategic Alignment names the outcome and signal an RFC advances.
- **[Agentic Delivery](./agentic-delivery.md)** — How the outcomes and their signals feed the verdict rule.
