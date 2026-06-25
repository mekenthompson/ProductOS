---
title: Product Vision
description: How to write the product vision that anchors every decision in the system
last_reviewed: 2026-06-24
icon: "🎯"
---

# Product Vision

> The product vision is the single source of truth that every other artifact ties back to. Strategy, the Product Spec, every Job Spec, every RFC — they all reference the vision either to justify a "yes" or explain a "not now." If the vision is vague, everything downstream gets vague too.

:::note[The three anchors]
The vision is the first of three anchors that hold for the whole product: **Vision** (why we build), **[Principles](./product-principles.md)** (what "built well" means), and **[Invariants](./invariants.md)** (the lines we won't cross by construction). The vision names the invariants that matter; the Invariants doc owns them. Beneath the anchors sit the **Product Spec** (one per product) and the **Job Specs** (one per job). See [Agentic Delivery](../guides/agentic-delivery.md) for how the anchors fuse into the verdict rule.
:::

This page explains how to write a product vision that's actually load-bearing for every downstream artifact. It is intentionally a **guide**, not a vision statement — the actual vision belongs to your product and your company. Replace the example section at the end with yours.

---

## What this artifact is for

The product vision answers three questions in one short document:

1. **Where do we play?** — The territory we own and the territory we don't.
2. **What do we measure?** — A small set of named outcomes (max four), each with its own readable signal. Every shipped feature should advance one of these outcomes or be challenged.
3. **Who do we build for?** — The personas whose lives we're trying to change. Name 2–4, each with a motivation, not a job title.

If those three questions aren't answered crisply, nothing downstream can help you prioritise — every idea will sound reasonable, because nothing is being excluded.

---

## How it ties into the rest of the system

| Artifact | How it uses the vision |
|---|---|
| [Product Principles](./product-principles.md) | Principles are how the vision becomes engineering and design standards. They are the vision applied at the level of individual decisions. |
| [Invariants](./invariants.md) | The third anchor. The vision *names* the lines you won't cross; the Invariants doc *owns* and enforces them. They are the kill-clause in the verdict rule. |
| Product Spec | The product-level container (one per product) ties its outcomes and job list directly back to the vision's named outcomes and their signals. |
| [Job Specs](../templates/job-spec.md) | Each durable per-job outcome doc traces to one named vision outcome and the signal it advances. |
| [RFC Template](../templates/rfc.md) | A ship-coupled RFC names which vision outcome it advances and which Job Spec it serves — confirmed in the Status table. |
| [Agentic Delivery](../guides/agentic-delivery.md) | The vision's outcomes, the Job Specs, the principles, and the invariants fuse into the **verdict rule** — the all-must-pass gate every change clears. The invariants are its kill-clause. |

If you change the vision, expect everything above to need re-anchoring. That's a feature, not a bug — vision changes are rare and consequential.

---

## What a good product vision looks like

A strong product vision has four properties:

1. **One sentence you can say out loud.** If the headline takes a paragraph, it isn't a vision — it's a strategy memo. The sentence should name the territory, the change you're making, and who benefits. Aim for under 40 words.

2. **A measurable anchor — named outcomes with signals.** The recommended form is **a small set of named outcomes (max four), each with its own readable signal** — a number or a CI-enforced invariant an engineer can check. Name the outcome, then on its own line write `Signal:` and give the specific metric or check. What's not allowed is an outcome without a signal, or a signal that's just a slogan. For funnel-shaped products where a single number captures everything (time-to-first-value, retention at 90 days, GMV-per-cohort), a single headline metric is fine — but even then, treat it as one outcome with one signal. Whatever the form, every PM should be able to recite both the outcome and its signal.

3. **Explicit scope — and explicit non-scope.** Saying what you *don't* do is harder and more useful than saying what you do. "We don't compete on storage cost" or "We don't ship a mobile app" forces alignment in a way "we do AI" never will. Some non-scope items are stronger than priorities: they are **invariants** — compliance, identity, or trust boundaries you won't cross *by construction*, however useful a feature seems. The vision *names* these; they graduate into the separate **[Invariants](./invariants.md)** anchor, which owns and enforces them. They become the kill-clause in the [verdict rule](../guides/agentic-delivery.md).

4. **Personas with motivations, not job titles.** "Operations managers" is a category. "Operations managers accountable for throughput across a multi-team org, judged monthly on error rate" is a persona. The vision should make it obvious which jobs-to-be-done you serve — each becomes a [Job Spec](../templates/job-spec.md). See [JTBD Guide](../guides/jtbd-guide.md).

A weak product vision usually fails on one of those four — most commonly #3 (no boundaries) or #2 (no headline metric).

---

## When is the vision "done"?

The vision is ready to anchor the system when **every one of these is true**:

- [ ] **One-sentence headline** — Under 40 words. Names the territory, the change, and who benefits.
- [ ] **Named outcomes with signals** — A small set of named outcomes (max four), each with its own readable signal. Defined precisely enough that an engineer could instrument it (a metric or a CI-enforced check). A single headline metric is acceptable for funnel-shaped products, but treat it as one outcome + one signal, not a substitute for naming outcomes at all.
- [ ] **Personas listed** — 2–4 personas, each with a motivation and a one-line "vision lens" describing how they experience the metric.
- [ ] **Out of scope listed** — At least three things you are *not* doing. Specific, not aspirational ("we don't do X" not "we focus on Y"). The strongest of these — the lines you won't cross *by construction* — graduate to named [invariants](./invariants.md).
- [ ] **Applied to a real decision** — Take an in-flight initiative and test it against this vision alone. If the vision didn't disambiguate the "yes" from the "not now," it isn't done.
- [ ] **PMs can recite it** — Without reading. If they can't, it isn't the operating document — it's wallpaper.

:::tip
The seventh check is the most often-skipped and the most important. A vision that nobody remembers is identical to no vision.
:::

---

## How to adapt the vision for a different product

The structure below is what works regardless of product. The *contents* obviously change.

### Step 1 — Name the outcomes and their signals first

Most teams start with a vision sentence and try to back-fit a metric. Do it the other way. Ask: **what are the two to four outcomes a user experiences when the product is working well, and how would an engineer know each one is holding?** Write those down as outcome + signal pairs. Then write the vision sentence around them.

For developer tools, time-based signals (time-to-X) tend to win because they capture both speed and clarity. For consumer products, retention or DAU/MAU ratios. For marketplaces, GMV-per-cohort or take-rate-with-NPS. Pick the signals your business actually runs on.

### Step 2 — Write the sentence

Template:

> `[Product]` is the `[category / orchestration layer / system of record]` for `[domain]`, where `[the change you're making for personas]`, so that `[customer outcome that moves the headline metric]`.

If it takes more than one of those clauses to differentiate you, the differentiation isn't strong enough yet. Iterate.

### Step 3 — Define 2–4 personas

Most products have a *creator* persona, a *consumer* persona, and a *sponsor* persona — the person who *configures* the product, the person who *uses it day to day*, and the person who *pays for it or is accountable for the outcome*. The names change; the structure rarely does.

### Step 4 — Write down what you are not

Three to five bullets. Be brutal. "We are not building X" is the highest-leverage sentence in the document, because it ends the most arguments.

### Step 5 — Stress-test against current work

Pick three in-flight projects. For each, write one sentence on how the vision justifies (or doesn't justify) the work. If two of the three feel forced, your vision is misaligned with reality. Either change the vision or stop the work — both are valid; doing neither is the dangerous path.

---

## Where to put the vision

The vision lives at `product-vision.md` (this file). It is the only anchor that is allowed to be opinionated about *what* you're building. Every other artifact is opinionated about *how* you build it.

When the vision changes, update this file first, then propagate downstream in this order:
1. `anchors/invariants.md` (if the lines you won't cross changed)
2. `anchors/product-principles.md` (if "what good looks like" changed)
3. The product-level **Product Spec** (if outcomes or the job list changed) and any affected **[Job Specs](../templates/job-spec.md)**
4. `templates/rfc.md` (the Strategic Alignment prompts in the ship-coupled RFC shape)

---

## Example: filling in this template

> The example below is intentionally short, generic, and unrelated to any specific company. It exists to show the *shape* of a finished vision, not to be copied verbatim.

### The Vision

Acme is the system of record for `[domain]`, where every `[event]` produces a trustworthy next step, so that teams spend their hours making decisions instead of reconciling state.

### Where We Play

- We own: the moment data enters the system through to the decision it informs.
- We don't own: long-term storage, advanced analytics, downstream notification routing.

### Outcomes

- **Trusted decision** — a user marks an event actioned without chasing it down.
  Signal: **Time to Trusted Decision (TTD)** — median minutes from event arrival to actioned, measured per persona, reported monthly.
- **Zero reconciliation backlog** — operators start each shift with an empty outstanding queue.
  Signal: outstanding queue depth ≤ 0 at shift start, measured daily.

### Personas

- **Configurators** — operations leaders who define how events are routed and what counts as actioned.
- **Operators** — frontline staff who act on events and need zero ambiguity about what to do next.
- **Sponsors** — VPs accountable for throughput and error rate; care about trend lines, not individual events.

### Out of scope

- We do not build BI dashboards.
- We do not own customer notifications (email/SMS).
- We do not optimise for batch / overnight workloads.

---

## Related

- **[Product Principles](./product-principles.md)** — Turning the vision into engineering standards (the second anchor).
- **[Invariants](./invariants.md)** — The lines you won't cross by construction (the third anchor); the vision names them, this doc owns them.
- **[Job Spec Template](../templates/job-spec.md)** — Where each vision outcome becomes a durable, UAT-verifiable job.
- **[Agentic Delivery](../guides/agentic-delivery.md)** — How the anchors fuse into the verdict rule every change must clear.
