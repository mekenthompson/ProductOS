---
title: Headline Metric
description: How to pick the single number that anchors the playbook
last_reviewed: 2026-05-12
icon: "📖"
---

# The Headline Metric

The headline metric is the **single number** named in the [product vision](../product-vision.md) that goes up (or down) when the vision is being realised. It's the question every Product Spec has to answer: *does this move the headline?*

Most teams have several "important metrics." That's fine for dashboards. It's fatal for prioritisation. When everything is important, RICE becomes negotiation and roadmaps become wish lists. Picking *one* headline forces the team to make trade-offs in the open.

This guide is about choosing that one number, framing it so the rest of the playbook can use it, and avoiding the common ways teams pick badly.

---

## What the headline metric is for

Three jobs:

1. **It anchors prioritisation.** Every Product Spec's expected impact is expressed in headline-metric terms. RICE Impact uses it. If a Product Spec can't articulate impact on the headline, it should be sent back.

2. **It defines "we succeeded."** The 60–90 day [post-launch review](../templates/post-launch-review.md) tests whether the shipped feature actually moved the headline (or moved a credible leading indicator of it). Without a headline, "success" is whatever the team feels good about.

3. **It tells the company what you're optimising for.** The company should be able to read the headline and predict your trade-offs. If they can't, the metric is too soft or too internal.

---

## How the headline metric connects to the rest of the playbook

| Where it shows up | How it's used |
|---|---|
| [Product Vision](../product-vision.md) | One sentence after the vision: "We measure ourselves on `[metric]`." |
| [Product Spec Template](../templates/product-spec.md) | Strategic Alignment names which headline lever the Product Spec pulls. |
| [RICE](rice.md) | Impact is scored in headline-metric units. |
| Personas | Each persona's [vision-lens question](personas.md) is a persona-specific version of the headline. |
| [Post-Launch Review](../templates/post-launch-review.md) | The 60–90 day question is "did this move the headline?" |
| Roadmap | Themes are organised around levers on the headline. |

---

## What a good headline metric looks like

Six properties:

1. **One number.** Not three. Not a composite index. If it's a composite, name the *one* component you actually run on.

2. **Time-based or rate-based.** "Time to X" and "X per Y" both work because they have an obvious direction. Raw counts (total users) lie about scale changes.

3. **Customer-experienced.** The number should describe something the customer *feels*, not something internal. "System throughput" is internal. "Time from request to result" is felt.

4. **Decomposable into levers.** The metric breaks cleanly into 2–4 forces a team can act on. If you can't say "this metric is driven by A and B," you can't prioritise.

5. **Tied to an industry metric.** When customers and analysts ask how you measure, you can point to an industry standard (DORA, SPACE, NPS, retention cohorts, etc.) and explain the connection. Otherwise you'll struggle to benchmark.

6. **Resistant to gaming.** A team that wants to "win" on the metric should have to actually improve customer outcomes to do it. If there's a way to move the number that wouldn't help a customer, fix the metric.

---

## When is the headline metric "done"?

Ready to use as the anchor when:

- [ ] **It's one number, with a precise definition** an engineer could instrument.
- [ ] **It decomposes into 2–4 levers.** Each lever has at least one team accountable for it.
- [ ] **Each persona has a vision-lens version** of the metric. (See [Three Personas](personas.md).)
- [ ] **It maps to an industry-standard metric** — you can explain the relationship in one sentence.
- [ ] **You can describe a feature that moves it.** And a feature that *seems* to help but actually doesn't.
- [ ] **At least one in-flight project can be re-scored against it.** And the re-scoring changes a priority — otherwise the metric is decorative.

---

## How to pick yours

### Step 1 — List the candidates

Brainstorm 5–8 candidate headline metrics. Include the boring ones (monthly active users, revenue). Include the ambitious ones (time-to-first-value, NPS). Include the ones the leadership team uses in board meetings.

### Step 2 — Score each candidate against the six properties

For each candidate, ask the six questions above. Drop anything that fails three or more. Usually this gets you to 2–3 finalists.

### Step 3 — Pick the one that survives the "would the team change behaviour?" test

For each finalist, ask: *if every team aligned on this metric and was held to it, what would they stop doing?* The metric that produces the most uncomfortable "we'd stop doing X" answers is usually the right one. A metric that doesn't change behaviour isn't a headline.

### Step 4 — Decompose into levers

Write down the 2–4 forces that move the metric. These are your roadmap themes. Each lever should map to a team or domain area. If a lever doesn't have an owner, you have an org problem to fix.

### Step 5 — Connect to industry metrics

For each finalist, write one sentence describing how your metric relates to DORA, SPACE, NPS, retention cohorts, MTTR — whichever framework your customers know. This is your benchmarking story.

---

## Example: "Time to Next Action" (TNA)

> This is one worked example of a headline metric for a developer-tools product. It is not the only valid choice — it's an illustration of how the framework lands.

**The metric.** TNA = median seconds between a workflow being triggered and the user (human or AI agent) taking the next action.

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

This same pattern — one metric, two levers, three persona lenses — adapts to most products. The label changes; the structure rarely does.

---

## Other example shapes

| Product category | Plausible headline | Levers |
|---|---|---|
| Consumer subscription | Week-4 retention by cohort | Onboarding success rate; week-1 engagement |
| B2B SaaS (PLG) | Time to first value (TTFV) | Setup completion; first meaningful action |
| Marketplace | Take-rate × NPS at 90 days | Match quality; transaction completion |
| Internal tools | Operator handle time | Step count per task; error rate |
| Observability / data infra | MTTD for paged incidents | Detection coverage; alert signal-to-noise |

None of these are "the right answer" — they're plausible *shapes* for the headline metric in each category.

---

## What the headline is *not*

- **Not a north star metric on its own.** A north star is usually a business outcome (revenue, growth, retention). The headline is the *product* metric whose movement should drive the north star.
- **Not a balanced scorecard.** You'll have many dashboards; the headline is the one number the product org optimises.
- **Not immutable.** Headlines evolve as the product matures. Changing the headline is a big decision that requires re-anchoring downstream artifacts — but it should happen when the product genuinely moves to a new stage.

---

## Related

- [Product Vision](../product-vision.md) — The vision names the headline.
- [Three Personas](personas.md) — Each persona has a vision-lens question derived from the headline.
- [Product Principles](product-principles.md) — Principles ensure each feature moves the headline.
- [Decision Framework](decision-framework.md) — Signal-Standard-Speed uses the headline as the success measure.
