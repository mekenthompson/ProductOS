---
title: Adopting ProductOS
description: "Adopt ProductOS in an afternoon: read the method, copy the shapes into your own repo, write your anchors, and run the loop"
last_reviewed: 2026-07-05
icon: "🚪"
---

# Adopting ProductOS

I run product with this. It is not a package you install, it's a method you
read, then copy into your own repo and fill in. This page is the one place
that says how, start to finish, in roughly an afternoon.

> [!NOTE]
>
> **Reference-only.** There is no installer, no CLI, no scaffolding command.
> You read the guides, copy the shapes you need into your own repo, and fill
> them in with your product's real vision, principles, and jobs. That is the
> whole mechanic.

---

## Who this is for

Someone who wants to clone this repo, point their coding agent at it, and be
running the method against a real product before the week is out. If that's
you, work through the five steps below in order. Each one builds on the last.

---

## Step 1: Read the method

Start with **[Agentic Delivery](./agentic-delivery.md)**: the verdict rule and
the four working parts (anchors, Job Specs, design loops, outcome UAT). That
page is the heart of the system, everything else is detail underneath it.

Then read **[Worked Example](./worked-example.md)**: one job carried from a
half-formed request through a ratified Job Spec, a design loop, and an outcome
UAT, with the gate turning an agent back once before it lets the work through.
Watching one job run the whole loop makes the verdict rule concrete before you
try to write your own.

Budget half an hour for both. Don't skip to templates before you've read the
verdict rule, the templates make a lot more sense once you have.

---

## Step 2: Copy the shapes into your own repo

This is a **copy-and-fill method, not a package**. There's nothing to `npm
install` or `pip install`. You take the blank shapes and the operating
contract pattern, drop them into your own repo, and fill them in with your
product's specifics.

Copy these templates from `templates/`:

- [`job-spec.md`](../templates/job-spec.md), the durable per-job outcome contract
- [`product-spec.md`](../templates/product-spec.md), the per-product layer that owns the job index
- [`job-links.md`](../templates/job-links.md), the churny per-job join (accounts, ARR, renewals)
- [`rfc.md`](../templates/rfc.md), the ship-coupled delivery doc
- [`strategy.md`](../templates/strategy.md), the STRATEGY.md spine
- [`decision-record.md`](../templates/decision-record.md), a dated record of a strategy change

And copy the **[`AGENTS.md`](../AGENTS.md)** operating-contract pattern: the
terse, agent-executable version of the method (the gate, the triggers, the
reviewer checklist), adapted to name your own anchors and templates instead
of this repo's.

---

## Step 3: Write your three anchors

Every artifact downstream ties back to three documents, and they're yours to
write, not to inherit:

- **[Vision](../anchors/product-vision.md)**, the why: where you play, what you measure, who you build for.
- **[Principles](../anchors/product-principles.md)**, the built-well: a short, checkable list of standards, product and engineering both.
- **[Invariants](../anchors/invariants.md)**, the never-cross: the lines your product won't cross by construction.

Each of those pages is a how-to-write-it guide, not a filled example. Read
the guide, then write the real thing for your product. This is the one step
in this whole page that stays human-owned: an agent consumes the anchors, it
never authors them.

---

## Step 4: Write your product spec and your first Job Spec

With the anchors in place, name your product's outcomes and its first job.

- Use the **[`product-spec.md`](../templates/product-spec.md)** template to name the North Star, the outcomes (each with a Signal), and start the job index.
- Use the **[create-job-spec](../skills/create-job-spec/SKILL.md)** skill to write your first Job Spec. It interviews you one question at a time until you and the agent share clarity on the job, the outcome, and the stakes, then it writes the spec. It will not write anything until that agreement exists, a spec written from assumptions is worse than no spec at all.

---

## Step 5: Point your agent at your AGENTS.md and run the loop

Once your `AGENTS.md`, your anchors, your product spec, and your first Job
Spec exist, point your coding agent at your `AGENTS.md` and let it run: draft
the RFC, build against the design loop, run the outcome UAT.

Before anything ships, hand the **[reviewer checklist](../AGENTS.md#agentic-delivery-operating-contract)**
to a separate, fresh-process reviewer, never the author. It returns APPROVE,
REQUEST_CHANGES, or BLOCK, citing file and line for every blocker. Iterate
until APPROVE; don't let an automated merge fire before it.

That's the whole loop, running on your product instead of this repo's.

---

## Proof it holds up on a real product

Two places to crib from once you're filling in your own copies:

- **[switchroom's `reference/`](https://github.com/switchroom/switchroom/tree/main/reference)** is the filled-in example: real anchors, a real product spec, and 20+ Job Specs, proven against a live UAT harness. When you're unsure what a filled section should look like, this is the source to read.
- **`examples/tempo/`** in this repo carries the same shapes filled in for Tempo, a fictional team-scheduling product: a [product spec](../examples/tempo/product-spec.md), a [Job Spec](../examples/tempo/job-spec.md), [Job Links](../examples/tempo/job-links.md), an [RFC](../examples/tempo/rfc.md), and a full [strategy example](../examples/tempo/strategy/README.md). Fictional, so it's safe to read end to end without knowing switchroom's business.

Between the two, you should have a filled version of every template to hold
next to the blank one you just copied.
