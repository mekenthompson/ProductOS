---
title: Copy Kit Template
description: "The COPY-KIT.md a product keeps next to its specs: positioning, pillars, wedge, proof, and boilerplate, every block traced to a product-spec outcome or a Job Spec Prove-it."
last_reviewed: 2026-07-06
icon: "📣"
---

# Copy Kit: <Product Name>

> This is a COPY-KIT.md file. It owns **how we talk about the product**: the
> positioning, the pillars, the wedge, the proof, and the boilerplate every
> customer-facing surface lifts from. It is the single source; the sales deck,
> the website, the README, and launch posts read from it rather than each
> inventing their own version.
>
> **Every block traces upward.** A pillar traces to a named product-spec
> outcome; a proof point traces to a Job Spec Prove-it line; the wedge traces
> to the alternative you beat named in *Today's alternatives*; the voice traces
> to the personas and the job story. See [guides/positioning-and-messaging.md](../guides/positioning-and-messaging.md)
> for how each trace-back works.
>
> **If this file conflicts with the spec, the spec wins and this gets fixed.**
> The copy is downstream. When a claim here can no longer be sourced to an
> outcome, an alternative, or a Prove-it, cut it.
>
> **Voice note.** Plain and direct. No hype, no superlatives you cannot prove,
> no em-dashes. Say what the product deliberately does *not* do; the honest
> non-goal is more persuasive than one more claim.

---

## Positioning statement

> The fill-in block from the [method guide](../guides/positioning-and-messaging.md).
> `unlike` is the wedge (the real alternative, not a strawman); `because` is the
> one differentiator that makes the wedge hold. If `because` restates the
> benefit, keep working.

```
For        <target customer: who hires the job, from the personas>
with       <a need: the struggling moment, from the Job Spec>
our        <product name>
is a       <category: the market shelf a buyer already understands>
that       <key benefit: the outcome you promise, in the customer's words>
unlike     <the alternative they use today, from Today's alternatives>
because    <the differentiator: why you beat that alternative>
```

---

## Tagline

> Five to eight words. The pillar you lead with, compressed. It should be
> testable against a buyer's own day, not a mood.

<The tagline.>

---

## Standfirst

> The elevator version: one or two sentences a person could say out loud in a
> hallway. The job, the outcome, and the wedge, in plain language. This is what
> a buyer repeats to a colleague, so it has to survive being said from memory.

<One to two sentences.>

---

## What it is

> The plain description, no positioning spin: what the product actually is and
> what it does, at the altitude a new buyer needs to place it on a shelf. Two to
> three sentences.

<What the product is.>

---

## The pillars

> Two to four pillars, no more. Each is a product-spec outcome said in the
> customer's language, and each names the outcome slug it traces to. A pillar
> with no outcome behind it is a feature you are trying to sell; cut it.

### Pillar 1: <name>

- **The claim:** <the outcome said to a buyer, in their words>.
- **Traces to:** `<outcome-slug>` from the product spec (inherits its Signal).

### Pillar 2: <name>

- **The claim:** <...>.
- **Traces to:** `<outcome-slug>`.

### Pillar 3: <name>

- **The claim:** <...>.
- **Traces to:** `<outcome-slug>`.

> Add or remove pillars to match the product spec's outcomes. One pillar per
> outcome is the natural shape.

---

## The wedge

> How the product is different, stated against the alternative you beat. Read
> *Today's alternatives* across the Job Specs, name the common alternative the
> buyer lives with now, and say plainly why the product removes it. Name the
> switching cost too: you are beating the alternative *plus* the cost of leaving
> it. This is the sharpest line in the kit.

- **The alternative you beat:** <the phone call, the spreadsheet, the rival tool, or non-consumption>.
- **Why we win:** <the one differentiator, sourced to a requirement or an outcome>.
- **The switching cost we clear:** <what makes the alternative sticky, and how the product overcomes it>.

---

## Proof points

> Each proof point is a Job Spec Prove-it scenario said as an outcome claim.
> Because Prove-it lines are UAT-verified at the outcome level, a proof point
> drawn from them is a promise the product is built to keep. Cite the theme the
> scenario proves; do not fabricate a statistic to dress it up.

- **<the outcome claim>** -- traces to `<job-spec Prove-it scenario>`.
- **<the outcome claim>** -- traces to `<job-spec Prove-it scenario>`.

> Example (Tempo): "Book across sites without leaving the product to confirm"
> traces to the *"Book across locations, availability screen"* Prove-it line,
> UAT-verified against the `no-stale-free-slot` invariant.

---

## Social hooks and post openers

> Opening lines for launch posts and social. Each still traces to a pillar or
> the wedge; a hook is a pillar with a sharper first sentence, not a new claim.
> Keep them concrete: lead with the struggling moment, not an announcement.

- <hook / opener>
- <hook / opener>
- <hook / opener>

---

## Boilerplate

> The one-paragraph "about" that goes at the foot of a post, a press note, or a
> partner page. Plain, factual, no superlatives. The category, who it is for,
> the outcome it delivers, in three or four sentences a stranger could quote
> without checking with you.

<The boilerplate paragraph.>

---

## Evidence discipline

> How claims are backed, so the kit stays honest as it travels.

- **Cite the theme, not a fabricated stat.** If a number is not in a spec's
  Signal or a Job Links file, do not invent one for the copy. Name the outcome
  the theme delivers instead.
- **Do not overclaim.** A claim the product cannot prove at the outcome level is
  a claim that gets you caught in a demo. If it is not in a Prove-it, it is not a
  proof point.
- **Say the non-goal.** Name what the product deliberately does not do (straight
  from the Job Spec's *Won't* list). It builds trust and pre-empts the objection.

---

## Related

- **[Positioning and Messaging](../guides/positioning-and-messaging.md)** -- the method that produces this kit and explains each trace-back.
- **[Product Spec Template](../templates/product-spec.md)** -- names the outcomes the pillars trace to.
- **[Job Spec Template](../templates/job-spec.md)** -- names the alternative the wedge beats and the Prove-it lines the proof points trace to.
