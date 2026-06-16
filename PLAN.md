# ProductOS — plan and strategy

Status: 2026-06-16. Foundation built and reviewed (spec hierarchy + template
+ two skills, instantiated in switchroom). Strategic direction set: this repo
becomes the canonical, private **ProductOS**. This doc is the plan; the
product-os Vision/Principles/Invariants are **yours to ratify** (see
`reference/vision.md`, drafted as a strawman).

## What ProductOS is

The executable operating system a product leader runs their org on. The
[product-playbook](../product-playbook) is the *prose* version of the method;
ProductOS is the *executable* version: the same method (vision → principles →
invariants → product spec → job specs) plus the **skills that automate the PM
work of running it**. It is the daemon layer for product management itself,
the work a PM does by hand turned into version-controlled skills.

The split the whole thing rests on: **augment the judgement, automate the
delivery.** The vision, the principles, which jobs matter, the taste, stay
human. Drafting specs, running design loops, reviewing, running UAT, can run
as skills. Humans own the anchors; agents consume them, never author them.

## The decided shape

- **One canonical, private repo.** This repo (`productos`) is promoted to the
  canonical ProductOS. It absorbs the product-playbook method (migrated in and
  evolved) and already holds the skills + writeups + the Job Spec template.
- **Private first.** Dogfooded on switchroom now, AutoGrab soon. The public
  "lite ProductOS" (the OSS kit alongside the thought-leadership series) is a
  later **export**, gated on your explicit call.
- **switchroom/`reference/` is the first instantiation.** The lived proof:
  switchroom's own vision/principles/invariants/product-spec/job-specs. It
  stays in the switchroom repo and never leaks into the public export.
- **Defined by its own method.** ProductOS gets its own Vision, Principles,
  Invariants, and Product Spec, and every PM process it automates becomes a
  Job Spec with a skill that delivers it. We built the machine; ProductOS is
  the first product built by it.

## The foundation already built (done, reviewed)

- The five-layer hierarchy: Vision / Principles / Invariants (anchors) →
  Product Spec (per product, owns the job list) → Job Specs (per job).
- The naming, settled: **Product Spec** = product-level; **Job Spec** = the
  durable per-job doc (renames the playbook's "JTBD doc"); ship-coupled work
  = **RFCs/PRs**, not a named tier.
- `templates/job-spec.md` — the dual-audience, one-screen Job Spec template.
- Instantiated across switchroom: 3 anchors + product spec + 15 job specs,
  net −147 lines, all UAT wired to real scenarios. (Surfaced a 7-item UAT
  coverage-gap backlog as a byproduct.)
- Skills: `create-job-spec` (author) and `uat-ux-debug` (debug), both
  reviewed.

## Skill roadmap — PM work to automate, by phase

The backbone is the six-phase loop. Each phase is a cluster of human-PM work
to turn into skills. Shipped marked; the rest is the backlog.

- **Learn** — discovery synthesis (interview notes → research doc);
  feedback → JTBD clustering (tickets → jobs, not feature wishlists).
- **Decide** — prioritise (RICE within strategy buckets); Signal/Standard/
  Speed triage.
- **Shape** — `create-job-spec` (**shipped**); product-spec authoring;
  roadmap fidelity bands.
- **Build** — design loop (research unknowns → build-with-tests →
  fresh-process review); review-against-spec (largely the verdict rule, so a
  thin skill or folded into create-job-spec's self-check, not sprawl).
- **Launch** — post-launch review (2wk / 30d / 60–90d → accelerate / iterate
  / pivot / investigate / stop).
- **Debug (cross-cutting)** — `uat-ux-debug` (**shipped**).
- **Sell** — lighter for personal use; adoption tracking, enablement.

Each becomes a Job Spec for ProductOS first (what's the PM's job, what's the
good/bad outcome), then a skill that delivers it. We don't build a skill
because the loop has a slot; we build it when the job is real and recurring.

## Consolidation + migration plan (sequenced; on your go)

1. **Ratify the ProductOS anchors.** You own these. Start from the strawman
   `reference/vision.md`; I cascade Principles / Invariants / Product Spec
   from your ratified vision.
2. **Migrate the playbook method in.** Bring product-playbook's guides +
   templates into ProductOS and evolve them.
3. **Reconcile the vocabulary** (the contested rename — your call): the
   playbook's "JTBD doc" → Job Spec; its ship-coupled "Product Spec" → RFC;
   add Invariants as a third anchor. Pervasive but mechanical once decided.
4. **Wire the skills to the method** and write a Job Spec per roadmap item as
   the backlog is pulled.
5. **Public-lite export**, later, gated on your explicit ok: strip private
   content, publish alongside the series.

## Open / gated

- **The vocabulary rename** (step 3): your call before I execute it.
- **Publishing anything public**: held until you say.
- **Repo dir name** (`productos` vs `product-os`): cosmetic; the product is
  "ProductOS" regardless. Rename on request.
- **switchroom branches** (`docs/job-spec-golden`, this repo's
  `feat/spec-hierarchy-plan`): unmerged, per your design-review gate.
