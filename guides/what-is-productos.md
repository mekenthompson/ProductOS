---
title: What is ProductOS
description: "The two-minute explainer: what ProductOS is, the problem it solves, the shape it takes, and the one rule that decides what ships."
last_reviewed: 2026-07-10
icon: "🧭"
---

# What is ProductOS

![ProductOS: layered markdown next to your code. Each layer carries its decision down the chain, into the verdict rule that ships the change or sends it back.](/ProductOS/img/hero-productos.png)

ProductOS is a product operating system written in markdown and kept next to
your code. Layered documents that carry each decision down the chain, so
judgement stays in the loop while agents do the building. There is nothing to
install: you adopt it by copying the shapes into your own repo.

This page is the front door. Read it end to end and you will understand what
ProductOS is and why it exists, before you read a single how-to.

---

## The problem: building got cheap, judgement got scarce

An agent can draft the spec, write the code, and run the tests before the
kickoff is even booked. Capacity used to be the constraint. It isn't any more.

The bottleneck moved to judgement. Does everyone touching the work, human or
agent, have the context to make the right call? And does someone catch it when
they don't? When building is nearly free, the scarce thing is deciding what is
worth building and knowing when the work has drifted off the point.

ProductOS exists to keep that judgement in the loop at agent speed, rather than
losing it the moment the machine starts producing faster than a person can
review.

---

## What ProductOS is

ProductOS is a set of layered markdown documents kept next to your code. Each
layer carries its own decision down the chain: the strategy says which jobs are
funded, the anchors say what the product is and won't cross, the Job Spec says
what a single job must achieve, the RFC says how this change ships. Every layer
inherits the context of the one above it, so the decision made at the top is
still visible at the point where the code gets written.

It is reference-only. There is no installer, no CLI, no service to run. You copy
the shapes into your own repo and fill them in with your product's real vision,
principles, and jobs. The method is the value, not any tooling around it.

---

## The shape

The documents form a hierarchy, each one narrower and closer to the code than
the last:

```
STRATEGY.md            which jobs are funded now, which are deferred
anchors/               the why, the built-well, the never-cross
  product-vision.md
  product-principles.md
  invariants.md
product-spec.md        names the outcomes, owns the job list
jobs/<job>/job-spec.md durable, outcome-focused, UAT-verifiable
rfcs/<change>.md       ship-coupled delivery, references a Job Spec
```

Strategy sits beside the anchors as a sibling: the anchors stay stable while
strategy shifts with the market. Beneath them, the product spec names the
outcomes and owns the job list. Each Job Spec is the durable contract for a
single job, and each RFC is the ship-coupled delivery doc that points back up to
its Job Spec. Read top to bottom, the chain answers: why, built how well, for
which job, shipped as what.

---

## The one rule

Everything comes down to a single verdict rule. A change ships only when it:

1. advances a named vision outcome (it's in scope at all);
2. satisfies its Job Spec (it does the user's job), proven by its outcome UAT;
3. passes every principle check, product and engineering standards both;
4. crosses no invariant (the lines you won't cross by construction).

Anything else is out of scope, however clever. Agents build fast inside these
gates; humans own the gates. The rule scales to the stakes: a quick win ships on
a Tech Lead's nod, a payments change runs every gate at full depth.

---

## Two layers, one direction

ProductOS is two layers, both live now.

- **The delivery OS** -- the anchors, Job Specs, the verdict rule, design loops,
  outcome UAT, and the agent-executable skills that carry the method end to end.
- **The Product Playbook** -- the human craft layer for the whole product
  function (product management, product design, product marketing,
  research/analytics): the six-phase operating loop, discovery, the decision
  framework, RICE, personas, and the judgement system: the build loop in
  [Craft](../pm-playbook/craft.md), with every craft's predictions
  written and scored inside the working artefacts, and the shared
  [customer model](../templates/product-spec.md#the-customer-model) each
  craft contributes to.

The dependency runs one way. The craft layer may reference the OS; the OS
crosses back only over a handful of named bridges (path-tiering, evidence,
measurement: see the layering note in [AGENTS.md](../AGENTS.md)). You can run
the delivery OS on its own, and reach for the Playbook when you want the human
craft that feeds it.

---

## Where to next

Understanding first, then the paths onward.

- **Ready to see it run?** Read the [Worked example](./worked-example.md): one
  job carried from a half-formed request through a ratified Job Spec, a design
  loop, and an outcome UAT, with the gate turning the work back once before it
  lets it through.
- **Ready to adopt?** Read the [Adopting guide](./adopting.md): read the method,
  copy the shapes into your own repo, write your anchors and first Job Spec, and
  wire up your agent, in roughly an afternoon.
