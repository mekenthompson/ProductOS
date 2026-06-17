# ProductOS — plan and strategy

Status: 2026-06-17. This repo is the canonical, private **ProductOS**: a
product operating system — the method plus the automation and
agent-executable guidance (anchors, Job Specs, templates, skills, the
operating contract) that make delivery run, not just advise. **switchroom is
the working example in action; ProductOS does not instantiate itself.** A
public "lite" export is a later, gated step.

The human PM craft (the six-phase loop, the discipline guides) lives in a
**separate `pm-playbook` repo**. ProductOS is independent of it — pm-playbook
may reference ProductOS, never the reverse.

## What ProductOS is

A method is guidance a human reads. An OS is guidance that *runs*. ProductOS
is the agentic-delivery method (anchored on the customer's job) **plus**: the
skills that automate the PM work (drafting specs, debugging from the outcome,
…), the templates the skills produce, and `AGENTS.md` — the agent-executable
operating contract. The split it rests on: **augment the judgment, automate
the delivery.** The vision, the principles, which jobs matter, the taste, stay
human; drafting/reviewing/UAT can run as skills.

## The hierarchy (the method's spine)

```
Vision / Principles / Invariants   (three anchors)
        → Product Spec             (per product, owns the job list)
        → Job Specs                (per job, durable, UAT-verifiable)
        → RFCs / PRs               (ship-coupled delivery, not a named tier)
```

Verdict rule (4 clauses): advances a vision outcome ∧ satisfies its Job Spec
∧ passes every principle ∧ crosses no invariant.

Naming settled (vs the prior vocabulary): **Job Spec** = the durable
per-job doc (was "JTBD doc"); ship-coupled work = **RFC/PR** (the old
"Product Spec"); **Product Spec** now means the product-level layer that owns
the jobs; **Invariants** is the third anchor (was folded into the vision).

## What's done (built + reviewed)

- The method, reconciled to the hierarchy:
  the anchors (product-vision, product-principles, invariants), the method
  guides (agentic-delivery, jtbd-guide, product-specs), the templates
  (`job-spec.md` canonical, `rfc.md`), and `AGENTS.md`.
- The human PM craft split out into the standalone **`pm-playbook` repo**;
  ProductOS made independent of it (no references back).
- Example skills: `create-job-spec` (author a Job Spec by interview) and
  `uat-ux-debug` (debug from the outcome).
- The working example: **switchroom** — real anchors + product spec + 19 Job
  Specs, proven against a live UAT harness. (A job-portfolio audit added 4
  jobs and surfaced a coverage-gap backlog; switchroom's `reference/` is the
  reference instantiation.)

## Skill roadmap — the PM work to automate (the OS layer), by phase

Each phase is a cluster of human-PM work to turn into skills. Shipped marked;
the rest is the backlog. We build a skill when the job is real and recurring,
not to fill a slot.

- **Learn** — discovery synthesis; feedback → jobs clustering.
- **Decide** — prioritise (RICE within strategy buckets); Signal/Standard/Speed.
- **Shape** — `create-job-spec` (**shipped**); RFC authoring.
- **Build** — design loop (research → build-with-tests → fresh-process review).
- **Launch** — post-launch review (2wk / 30d / 60–90d).
- **Debug (cross-cutting)** — `uat-ux-debug` (**shipped**).

## Remaining

1. **Public "lite" export** — strip the private/working-example specifics,
   publish the method + example skills alongside the thought-leadership
   series. Gated on explicit go.
2. **switchroom coverage-gap backlog** — write the missing outcome UATs for
   the jobs whose outcome isn't yet proven (the subscription-honest trio,
   idempotent-update version-advance, onboarding/delivery/webhook e2e).

## Conventions

- Keep ProductOS product-agnostic. No company- or tooling-specific names in
  the method docs; switchroom is the only worked example, referenced by name.
- The anchors are human-owned: agents consume vision/principles/invariants;
  they never author them.
