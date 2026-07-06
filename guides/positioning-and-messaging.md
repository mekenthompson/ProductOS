---
title: Positioning and Messaging
description: "How to derive positioning and messaging from the specs you already have: pillars from outcomes, the wedge from the alternative you beat, proof from Prove-it, voice from the personas and the job"
last_reviewed: 2026-07-06
icon: "🎯"
---

# Positioning and Messaging

Messaging is not a fresh creative act. It is a **projection of the specs the framework already produces**. The [product spec](../templates/product-spec.md) names the outcomes, each [Job Spec](../templates/job-spec.md) names the job, the alternative you beat, and how you prove it. Positioning and messaging is the work of articulating that upstream material for sales and the website, not inventing new claims beside it.

That is what keeps this capability lightweight. The raw material already exists, ratified and evidence-backed. A copy kit lifts it into the language a buyer hears, and traces every line back to the spec element it came from. When the copy and the spec disagree, the spec wins and the copy gets fixed.

---

## The thesis: copy is downstream of the specs

Every piece of customer-facing copy traces back to an upstream spec element. Four trace-backs carry the whole capability:

- **Messaging pillars trace to product-spec outcomes.** Each outcome in the [product spec](../templates/product-spec.md) carries a Signal. A pillar is that outcome said in the customer's language, and it inherits the outcome's Signal as its proof of movement.
- **The positioning wedge traces to the alternative you beat.** The Job Spec's *Today's alternatives* section already names how the job gets done now: the phone call, the spreadsheet, the rival tool. The wedge is that alternative, made explicit, plus the reason you beat it.
- **Proof points trace to each Job Spec's Prove-it.** The *Prove it* section names outcome-level, UAT-verified scenarios. A proof point is a Prove-it line said to a buyer: an outcome the product is contractually built to deliver, not a claim you hope holds.
- **Voice of customer traces to the personas and the job statement.** The persona work names who hires the job; the [JTBD](../guides/jtbd-guide.md) job story names the situation and the progress they want. The words a buyer recognises are already written in the struggling moment and the job story.

If you cannot trace a line of copy to one of these four, it is decoration. Cut it or find its anchor in the spec.

---

## The positioning statement

Positioning is a single fill-in block, not a heavy framework. Fill each slot from the specs, in order:

```
For        <target customer: who hires the job, from the personas>
with       <a need: the struggling moment, from the Job Spec>
our        <product name>
is a       <category: the market shelf a buyer already understands>
that       <key benefit: the outcome you promise, in the customer's words>
unlike     <the alternative they use today, from Today's alternatives>
because    <the differentiator: why you beat that alternative>
```

Two slots do the load-bearing work. `unlike` is the wedge: name the real alternative, including the switching cost of leaving it, not a strawman. `because` is the one differentiator that makes the wedge hold. If `because` restates the benefit rather than explaining why you win, the statement is not yet doing its job.

Keep it to one block. The moment positioning needs a second framework, the spec underneath it is unclear, and that is where to go fix it.

---

## Deriving the messaging framework

The messaging framework is a mechanical read of the specs. Each part has one source.

### Pillars from outcomes

Take each product-spec outcome and write it as a pillar: the outcome in language a buyer feels, with the outcome's Signal as the movement you can point to. A product with three outcomes has three pillars, not a workshop's worth. If a pillar has no outcome behind it, it is a feature you are trying to sell, not an outcome you deliver.

### The wedge from the alternative you beat

The wedge is the alternative, named. Read *Today's alternatives* across the Job Specs, find the common alternative the buyer lives with now, and state it plainly alongside the reason your product removes it. The wedge is the sharpest line in the whole kit because it is the one a buyer can immediately test against their own day.

### Proof from Prove-it

Each proof point is a Prove-it scenario said as an outcome claim. Because Prove-it lines are UAT-verified at the outcome level, a proof point drawn from them is a promise the product is built to keep, not marketing licence. Cite the theme the scenario proves, not a fabricated number.

### Voice of customer from personas and the job

The words come from the persona and the job story, not from a thesaurus. The struggling moment gives you the pain a buyer recognises; the job story gives you the progress they are trying to make. Lift those phrasings so the copy sounds like the buyer's own description of their day.

---

## The copy kit is the single source, everything else lifts from it

The copy kit is the one place the product's language lives. Sales decks, the website, the README, launch posts, and social hooks are **downstream surfaces**: they lift from the kit, they do not each invent their own version of the story.

This is the same single-source-of-truth discipline the analytics layer uses for its Signal. One artefact owns the definition; every surface reads from it.

> When a surface and the copy kit disagree, the copy kit wins and gets fixed. If a deck has a sharper line than the kit, that is not licence for the deck to drift; it is a signal to pull the sharper line back into the kit so every surface gets it. A surface that quietly rewrites the story is how a product ends up saying four different things in four rooms.

The kit itself stays downstream of the specs. So the full chain is one-directional: outcomes and jobs feed the copy kit, and the copy kit feeds every customer-facing surface. Fixes flow back up the same chain: a drifting deck gets corrected against the kit, and a kit that overclaims gets corrected against the spec.

---

## The copy kit is ready when...

- [ ] **Every pillar names the product-spec outcome it traces to**, and inherits that outcome's Signal.
- [ ] **The positioning statement is filled end to end**, with a real `unlike` alternative and a `because` that explains the win rather than restating the benefit.
- [ ] **The wedge names the actual alternative** the buyer uses today, including the switching cost, not a strawman.
- [ ] **Every proof point cites a Job Spec Prove-it scenario**, so it is a promise the product is built to keep.
- [ ] **The voice reads like the persona's own words**, lifted from the struggling moment and the job story.
- [ ] **Every claim traces upward**: no line of copy exists that cannot be pointed back to an outcome, an alternative, a Prove-it, or a persona.
- [ ] **The kit is the single source**, and the downstream surfaces (deck, site, README, posts) are known to lift from it rather than restate it.

> [!CAUTION]
> A copy kit that reads well but traces to nothing is the failure mode. If a pillar has no outcome, a proof point has no Prove-it, or a differentiator has no requirement behind it, you have written a brochure, not a projection of the specs. The tell is a claim nobody can source: when someone asks "where does this line come from?" and the answer is "it sounded good", cut it.

---

## A worked slice: a copy kit for Tempo

> One worked projection, using the [Tempo product spec](../examples/tempo/product-spec.md) and the [Tempo Job Spec](../examples/tempo/job-spec.md). Tempo is the fictional team-scheduling product used across these examples. It shows the shape, not the only valid wording.

**The positioning statement.**

```
For        a multi-location service operator whose scheduler staffs several sites
with       a need to fill cross-location gaps without phoning each site to find who is free
our        Tempo
is a       team-scheduling product
that       lets one scheduler see and book across every location from a single, current view
unlike     the phone-and-spreadsheet routine they reconcile by hand today
because    Tempo reconciles every location's availability into one trusted layer, so a slot shown free actually is
```

**One messaging pillar, traced.** The pillar *"Staff every location from a single view"* traces to the `cross-location-visibility` outcome in the [Tempo product spec](../examples/tempo/product-spec.md). It inherits that outcome's Signal: the share of cross-location bookings that originate in the unified availability view (30% to 75%). The pillar is the outcome said to a buyer. The Signal is how you know it is landing.

**One proof point, traced.** The proof point *"Book across sites without leaving the product to confirm"* traces to the Prove-it line **"Book across locations, availability screen"** in the [Tempo Job Spec](../examples/tempo/job-spec.md): a scheduler at a three-location account fills a gap from the unified view without leaving it to confirm availability, and nothing shown free is already booked at the source. Because that scenario is UAT-verified against the `no-stale-free-slot` invariant, the proof point is a promise Tempo is built to keep, not a claim bolted on for a deck.

The same read holds for any product. Project the outcomes into pillars, the alternative into the wedge, the Prove-it lines into proof, the personas into voice. The words change; the trace-backs do not.

---

## Related

- **[Copy Kit Template](../templates/copy-kit.md)** -- the fill-in artefact this guide's method produces, kept next to the specs.
- **[Product Spec Template](../templates/product-spec.md)** -- names the outcomes and Signals the messaging pillars trace to.
- **[Job Spec Template](../templates/job-spec.md)** -- names the alternative you beat and the Prove-it lines the wedge and proof points trace to.
- **[Product Vision](../anchors/product-vision.md)** -- the anchor whose outcomes and personas the positioning and voice ultimately draw from.
- **[Product Analytics](./product-analytics.md)** -- the same single-source discipline applied to the Signal a pillar inherits.
