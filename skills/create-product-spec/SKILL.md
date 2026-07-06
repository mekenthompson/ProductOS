---
title: "create-product-spec: interview to the North Star, outcomes, and job index"
slug: skills/create-product-spec
name: create-product-spec
description: >
  Interview the user to shared alignment on the product-level layer, then
  write the Product Spec: the North Star derived from the vision, at most
  four outcomes each carrying a measurable Signal, how the product functions
  at outcome altitude, and the job index. Use when standing up a new product
  in the method, when adopting ProductOS on an existing product (Step 4 of
  Adopting), or when someone says "write the product spec", "define our
  outcomes", "what's our North Star", "set up the metric ladder", "name the
  outcomes this product delivers", "create the job index". The rules: the
  North Star is the vision made countable, not a number bolted on; an
  outcome without a Signal is a slogan and is refused; more than four
  outcomes means hard choices haven't been made, and the interview makes
  them. Part of ProductOS; sits between the anchors and the Job Specs.
---

# create-product-spec: interview to the North Star, outcomes, and job index

The **Product Spec** is the layer between the anchors and the Job Specs: it
names the North Star, the outcomes (each with a Signal), how the product
functions, and it owns the job index. Every Job Spec `serves:` an outcome slug
named here, so getting this document wrong misaligns everything beneath it.

The one rule of this skill: **interview one question at a time, and refuse
the two failure modes this layer invites**: a North Star bolted on without a
line from the vision, and outcomes that are slogans because no one could name
their Signal.

## Step 0: Ground yourself before asking anything

- The **vision anchor**: the North Star must be derivable from it. If no
  vision exists, stop; the anchors are human-owned and come first (see
  [Adopting](../../guides/adopting.md), Step 3).
- The **principles and invariants**: outcomes must be pursuable without
  crossing them.
- Any **existing Job Specs**: the job index must account for them.
- The **template** ([templates/product-spec.md](../../templates/product-spec.md)):
  your output shape, including the metric ladder it teaches: *leading
  indicator (named) → job metric (quantified) → outcome Signal → North Star.*

## Step 1: Interview to shared clarity (one question at a time)

Ask **one** question, wait, reflect back, then ask the next. Do not draft
until every item is settled and confirmed.

- **The product, in one line.** What is it, for whom, enabling what? If the
  user cannot say it in a sentence, the rest will not hold; work here first.
- **The North Star, derived.** Start from the vision: what is the countable
  form of the change the vision promises? Then pin the definition tight
  enough that two people compute the same figure: what is counted, over what
  window, for whom. Then baseline → target by date. Ask *why this one*: the
  answer is the line from the vision, and it goes in the doc. If the user
  proposes a metric with no line to the vision, say so; a plausible industry
  metric that does not cash the vision's claim is the bolt-on this skill
  refuses. Where a standard metric genuinely fits (retention, activation,
  DORA), prefer it: credible beats invented.
- **The outcomes, four or fewer.** What are the distinct user-world states
  this product delivers? For each: who it matters to, what their world looks
  like when it is realised, written from the user's side. When the user
  offers a fifth, make the trade-off explicit: which of the five is really a
  job under another, and which is deferred? More than four means hard
  choices have not been made, and making them *is this interview*.
- **A Signal per outcome, or the outcome is refused.** For each outcome: the
  measurable driver it contributes to the North Star, with a now → target,
  named precisely enough that an engineer could instrument it. A CI-enforced
  invariant ("zero X, enforced in CI") is a valid Signal where the bar is
  binary. If the user cannot name a Signal, the outcome does not go in as a
  slogan; it goes to a parking list with the honest note that it is not yet
  an outcome, it is an aspiration. Ask for the **guardrail** too: what must
  this outcome not regress while chasing its Signal?
- **How it functions, at altitude.** Three to six sentences a new team
  member needs for scope: the moving parts and how they relate. If the user
  descends into architecture, lift it: runtime detail lives in docs/, not
  here.
- **The job index.** Which jobs (existing Job Specs, or known jobs awaiting
  specs) ladder to which outcome? Each carries its job metric: the
  quantified form of the leading indicator its Job Spec names, rolling up to
  the outcome's Signal. A job that cannot name a metric rolling into its
  outcome's Signal is a job you cannot tell is working; flag it rather than
  inventing a number. Jobs without specs are listed as gaps for
  [create-job-spec](../create-job-spec/SKILL.md), not fabricated.
- **Evidence and confidence.** What evidence backs the bet that these
  outcomes, moved, deliver the North Star? Link it and score Confidence
  honestly on the RICE scale; thin evidence is low confidence, not a
  blocker.

## Step 2: Write the Product Spec from the template

Fill [templates/product-spec.md](../../templates/product-spec.md): the
one-liner, North Star (metric, definition, now → target, why this one),
outcomes (each `[outcome-slug]` with description, Signal, optional
guardrail), how it functions, the job index grouped by outcome, and
Evidence & confidence.

Rules that hold while writing:

- Every Signal has a number, a direction, and a date, and traces to something
  the user gave you. No target appears because it sounded ambitious.
- Outcome slugs are kebab-case and stable: Job Specs will point at them for
  years. Choose them with the user.
- The ladder is intact end to end: each indexed job names a metric, each
  metric rolls to a Signal, each Signal drives the North Star.

## Step 3: Hand it to the gate

Hand the draft to [review-doc](../review-doc/SKILL.md) as a fresh process and
give the user the verdict. The reviewer will check the ladder and the slugs;
iterate to APPROVE before Job Specs start pointing at this document.

## Output

1. The Product Spec file, written where the design contracts live (confirm
   the path with the user).
2. The outcome slugs listed: the stable names Job Specs will `serves:`.
3. The parking list: proposed outcomes refused for want of a Signal, and
   jobs indexed without specs, as an honest backlog.
4. The review-doc verdict.

## The self-teaching check (dogfood this skill)

Give a fresh agent this skill, the template, and a vision anchor, plus a user
who proposes six outcomes, two of them Signal-less. It passes if it
interviews one question at a time, derives the North Star from the vision
rather than accepting a bolt-on, gets to four or fewer outcomes by making the
trade-offs explicit, parks the Signal-less ones instead of writing slogans,
and ships an intact metric ladder. If the output contains an outcome without
a Signal, it failed.

## Related

- [Product Spec template](../../templates/product-spec.md) -- the output shape this skill writes to
- [Headline Metric](../../guides/headline-metric.md) -- what a Signal is and how it drives the North Star
- [create-job-spec](../create-job-spec/SKILL.md) -- writes the Job Specs the index points at
- [review-doc](../review-doc/SKILL.md) -- the fresh-process gate this spec exits through
- [Adopting ProductOS](../../guides/adopting.md) -- Step 4, where this skill runs
