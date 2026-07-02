---
# title: optional (omit freely); the job: field is the primary identifier
title: Job Spec Template
description: The durable, per-job outcome contract. One per job, outcome-oriented, UAT-verifiable, and stable across any number of implementation changes.
job: <imperative, user-voiced; a job, not a feature>
outcome: <the user-observable end state, present tense>
stakes: <what breaks, and why it matters, if you get this wrong>
# serves: points at a named outcome SLUG from the Product Spec, not prose.
# Format: serves: <outcome-slug>   e.g.  serves: standing-team
# The named outcome's Signal: line is what this job ultimately moves.
serves: <outcome-slug from Product Spec>
invariants: [<named lines this job must never cross, by construction>]
---

# Job Spec: <the job, in plain words>

> [!CAUTION]
>
> The Job Spec never carries account names, ARR, renewal dates, or anything that drifts. That join lives in a separate [Job Links](./job-links.md) file that points up to this spec via `serves:`. Couple a durable thing to a moving one and you get a spec that's stale by next quarter.

> A **Job Spec** is the durable, per-job outcome contract. One per job. It
> is read by both a human (judging a change) and an agent (deciding what to
> do mid-task), and both ask it the same question: *does this advance the
> job's UX outcome without tripping an anti-pattern or breaking an
> invariant?*
>
> It is **outcome-oriented, never tech- or feature-specific.** Features,
> code, even the implementation language are free to change underneath it.
> The job, the outcome, and the way you prove it stay still. When the
> implementation changes you **narrate the retired approach** in one line;
> you never silently rewrite the job.
>
> **Doc-class rule (decide from the frontmatter key alone):** `job:`
> frontmatter ⇒ this is a Job Spec, keep `job` / `outcome` / `stakes`
> stable. `serves:` / `artifact:` / `backs:` frontmatter ⇒ this is a
> design artifact that points *up*: `serves: <outcome-slug>` on a Job Spec
> names the Product Spec outcome it ladders to; `serves:` / `artifact:` on
> a ship-coupled RFC points at a Job Spec slug; `backs: <invariant-slug>`
> on a design record points at the invariant it elaborates. The how lives
> in those artifacts, not here.
>
> **Length discipline:** aim for one screen. The frontmatter carries ~80%.
> If the body runs long, implementation has leaked in: move it to the
> design artifact and link down to it.

## The job

> One short paragraph, from the user's side. Who is hiring this, in what
> situation, to make what progress. Name what they are really trying to do,
> not the feature they asked for. If the implementation has changed, add one
> line: "We used to do X; we changed to Y; the job underneath is unchanged."
>
> **Required: the struggling moment.** State one concrete, present-tense
> trigger: *"When X happens, the user is stuck because…"* This is the durable
> narrative of the moment the current approach fails; keep it a story, not a
> stat, with no evidence links, account names, or numbers (those drift to
> [Job Links](./job-links.md) and the RFC).
>
> **Per-persona job stories.** Frame the job as a
> `When… I want to… so I can…` story (see the [JTBD Guide](../guides/jtbd-guide.md)
> for the format and the forces around it). Write **one** story if a single
> persona hires this job; add more **only** when the job genuinely differs by
> persona, not one per persona out of habit.

**Struggling moment:** When <trigger happens>, the user is stuck because
<why the current approach fails them>.

**Job story:** When <situation>, I want to <motivation>, so I can <outcome>.

## Contribution

> How this job moves the **Signal** of the outcome named in `serves:`.
> Content is **mechanism + leading indicator only** (no numbers or targets;
> see the caution above). This section states the causal mechanism and the
> earliest observable signal, both durable. The
> [Product Spec](./product-spec.md) job index carries the quantified form of
> this leading indicator (the job metric), which rolls up into the outcome's
> Signal.

- *Mechanism:* <how doing this job changes user behaviour toward the outcome>.
- *Leading indicator:* <the earliest observable sign it's working, named not
  quantified>.

## What the job requires

> What the product must be *able to do* to serve the job. **Must / Won't
> only** (no "Should"; that's a prioritisation call that drifts). State what
> the product must be able to do, verb-first, with zero named infrastructure,
> protocol, or data-type. If you can't strip the proper noun, it's an RFC
> Solution-Space line, not a requirement. Distinct from **Good / bad**
> (user-observable behaviour) and from the RFC's **Solution Space** (this is
> durable and outcome-level; that is the ship-coupled behavioural contract).
> Durable product non-goals ("we're the visibility layer, not the
> controller") belong here under **Won't**. Keep each list to ~3–5 bullets.

**Must be able to**

- <verb-first capability, no proper nouns>
- ...

**Won't**

- <the durable non-goal this product refuses by design>
- ...

## Good / bad

> The load-bearing section. Paired, observable, UX-level. The left list is
> what a human sees when it is working and what an agent should steer
> toward. The right list is the anti-pattern and the agent's "never do
> this." Phrase every line as user-observable behaviour, not implementation.
> Keep each list to roughly five bullets.

**Good looks like**

- <observable success the user can see or feel>
- ...

**Bad looks like (never ship this)**

- <the tempting-but-wrong behaviour that betrays the job>
- ...

## Prove it

> Outcome-level acceptance, named by **job × surface**, independent of unit
> tests. Each line points at a real, runnable scenario and names the
> **invariant** it protects. This is what makes the job *UAT-verifiable*: a
> scenario exists and asserts the user-observable outcome, not internal
> state. End with the **fuzz corpus** dimensions so the failure *class*
> (not just one instance) is covered.

- **<job × surface>**: `<path/to/real/scenario>`. *Watch:* <user-observable
  outcome>. *Invariant:* <the property that must always hold>.
- ...

**Fuzz corpus:** vary `<dimensions, e.g. latency × retries × ordering ×
partial failure>`; the invariants above must hold across the corpus, not
just the happy path.

## Verdict

> One line the verdict rule can check.

- **Done when:** <the user-observable definition of done, proven by the
  scenarios above>.

## Production-readiness

> *Optional. Include only where the stakes warrant it.* The non-functional
> bar (security, reliability, availability, performance), scaled to the
> stakes. Distinct from the customer-facing "Prove it" gate above. Omit
> entirely for a soft, low-stakes job.

- *<dimension>:* <target>.

---

> **Implementation:** the how lives in `<design-artifact.md>` (frontmatter
> `serves:` this job). That artifact churns; this Job Spec outlives it.

---

## Related

- [JTBD Guide](../guides/jtbd-guide.md) -- how to frame the job story this spec is built around
- [Job Links Template](./job-links.md) -- the churny join that carries accounts and revenue, kept out of this spec
- [Agentic Delivery](../guides/agentic-delivery.md) -- how this spec sits in the verdict rule and the gates
- [Writing an RFC](../guides/product-specs.md) -- how to write the ship-coupled RFC that references this spec
