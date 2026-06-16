# Plan: the spec hierarchy and the skills that run it

Status: ratified with Ken 2026-06-16. Phases 1–2 complete (reviewer
APPROVE); Phase 3 in progress (`create-job-spec` shipped).

## What we are building

A decision framework, written down, that keeps humans and agents
directionally accurate when they design, build, review, debug, and validate
product. It does not guarantee success. It keeps work anchored to the
customer's job and its UX outcome while features, code, and even the
implementation language churn underneath.

The end state has two halves that share DNA:

1. **The method**, reusable and public (product-playbook), plus the
   thought-leadership and skills that make it provable (productos).
2. **The instantiation**, switchroom's `reference/` dir, where the method is
   lived rather than described.

A PM, in this model, is an expert in the customer's jobs to be done. They
keep iterating how the customer achieves each job through the product. The
skills below let a model interview the PM until shared alignment on a job,
then design / review / debug / UAT against that job, anchored up to the
product spec and the anchors above it.

## The ratified hierarchy

Top is most durable and most abstract; bottom is most concrete.

```
Vision        why we exist, territory, who it's for, what it isn't
Principles    what "built well" means: named standards + check questions
Invariants    lines we won't cross by construction (a distinct third anchor)
   │
Product Spec  one per product: the outcomes + how it functions at a high
              level; the container that owns its job list
   │
Job Specs     one per job: outcome-focused, UAT-verifiable, read by both
              humans and agents
```

### Naming, settled

- **Product Spec** = product-level (the product, its outcomes, the jobs it
  owns). This is *not* the playbook's old "Product Spec".
- **Job Spec** = the durable per-job doc. Renames the playbook's "JTBD doc".
- Ship-coupled, per-initiative work lives in **RFCs / PRs / Linear**, not a
  named spec tier. The playbook's old ship-coupled "Product Spec" demotes to
  an RFC.
- **Invariants** is promoted to its own anchor doc, out of the Vision. The
  playbook today folds non-negotiables into the Vision; we separate them.

## What makes a good Job Spec

One artifact, two readers, same question: *does this advance the job's UX
outcome without tripping an anti-pattern or breaking an invariant?* That is
why one short doc can serve both a human reviewing a change and an agent
deciding what to do mid-task. We do not write an agent half and a human
half. We write outcome-level good/bad that both can act on.

Design properties, from Ken:

1. **Short enough to load.** Both a human and an agent have bounded
   attention. One screen. Frontmatter carries ~80%. Per-doc restatements of
   the principle checks and the vision outcomes are deleted; they live once,
   in the anchors, referenced by a single `serves:` line.
2. **Outcome-oriented, never tech- or feature-bound.** Every line is
   user-observable. The job survives feature changes, code rewrites, even a
   language port. The mechanism is the doc-class rule: a `job:` doc is a
   durable Job Spec; a `serves:` / `artifact:` doc is a churny design
   artifact under it. When the build changes you narrate the retired
   approach; you never silently rewrite the job.
3. **Decision-usable and provable.** It names what it anchors to (`serves:`,
   `invariants:`), pairs good vs bad as observable UX, points every UAT line
   at a real runnable scenario plus the invariant it protects, and ends with
   a one-line verdict.

The ratified template is `templates/job-spec.md`.

## Critique of switchroom's current job specs

The `reference/*.md` JTBDs are strong and already most of the way there
(job/outcome/stakes frontmatter, signs, anti-patterns, UAT prompts). The
gap is consistent and fixable:

- **They drift into design artifacts.** `know-what-my-agent-is-doing.md` is
  the clearest case: it carries three layers of implementation (the reaction
  state machine, flag names, PR numbers, file paths, emoji states). That is
  the *how*, and it belongs in `conversational-pacing.md` (which already
  exists as the `serves:` design artifact). The Job Spec should be the
  durable UX contract that survived the card-to-pacing change, not a
  re-description of the current build.
- **No machine-readable up-anchor.** The job names its outcome and
  invariants in prose, scattered through "how the principles judge it" and
  "how this serves the four outcomes". We make it `serves:` + `invariants:`
  frontmatter and delete the restatements.
- **Good/bad is split and human-only.** "Signs it's working" and
  "anti-patterns" are two sections written for a reviewer. We merge them into
  one paired good/bad that an agent can also use as a live decision aid.
- **UAT is prose, not wired.** The UAT prompts are good descriptions, but
  nearly every one maps to a real file in `telegram-plugin/uat/scenarios/`.
  We point at the real scenario and name the invariant it protects, so
  "UAT-verifiable" means a test exists.
- **Length.** The longest job docs run several screens. The rewrite targets
  one.

## The phased plan

### Phase 1 — Golden Job Spec + template (done)

- `productos/templates/job-spec.md` — the ratified template. **Done.**
- `switchroom/reference/know-what-my-agent-is-doing.md` — rewritten as the
  golden example against the template.
- `switchroom/reference/product-spec.md` — minimal Product Spec scaffold
  (the four outcomes + how the product functions + the job index), extracted
  from `vision.md`, so the golden job has something to anchor to.
- This plan, with the critique above.

### Phase 2 — Instantiate the switchroom hierarchy (done)

- Split `vision.md` into Vision (the why) + the Product Spec (outcomes + how
  it functions).
- Extract a standalone `invariants.md` (subscription-honest, access-model,
  single-tenant, on-leash/no-heartbeat, Telegram-only).
- Refactor the remaining `reference/` job specs to the template.
- Update `reference/README.md` and the CLAUDE.md design-contract section.

### Phase 3 — Skills (the method as tooling, in progress)

- `create-job-spec` (done) — interviews the user one question at a time
  until shared alignment, then writes the Job Spec against the template and
  anchors. Codifies the interview pattern used to ratify this plan.
- `review` / `uat` against-spec skills — judge a change against its job
  spec (good/bad + verdict rule + invariants) and run the outcome UAT.
  Remaining.
- `uat-ux-debug` already exists and slots in as the debug skill.

### Phase 4 — Reconcile the playbook + decide the repo boundary

- Update product-playbook to this two-tier naming, and add Invariants as a
  third anchor.
- Decide how the three homes share DNA without leaking private content:
  switchroom `reference/` (private, instantiated), product-playbook (public,
  reusable method), productos (thought-leadership + skills). Options brought
  to Ken at that point, not guessed now.
- Account for the AutoGrab work-context tenant vs the personal one.

## Open decisions (flagged, not blocking Phase 1)

- The three-repo boundary and what is public vs private (Phase 4).
- Whether `feel-like-a-colleague` becomes the second golden example to prove
  the template fits a soft, behavioural, fleet-wide job.
