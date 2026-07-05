---
# title: optional (omit freely); the job: field is the primary identifier
title: Job Spec Template
description: The durable, per-job outcome contract. One per job, outcome-oriented, UAT-verifiable, and stable across any number of implementation changes. Same spine every job; depth scales to the stakes.
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
> outlives any feature, design, or implementation: the job, the outcome, and
> the way you prove it stay still while the build changes underneath. When
> the implementation changes you **narrate the retired approach** in one
> line; you never silently rewrite the job.
>
> **It answers four questions, for four readers.** Keep this in view: it is
> why each section exists.
>
> 1. *Is this job real?* (validation, before any design) The job, today's
>    alternatives, the bet.
> 2. *What does success look like?* (delivery + analytics) Measures of
>    success, the good side of Good / bad.
> 3. *What does failure look like?* (validation + analytics) The bad side,
>    the silent failure, the abandon signal.
> 4. *How do we prove it?* (engineering + agent) What the job requires,
>    Prove it, Verdict.
>
> So it drives four things downstream: the delivery verdict (human judging a
> change, agent deciding mid-task), the **product-analytics** strategy (what
> to measure and detect), the **positioning and sales** story (the job, the
> alternative you beat, the outcome you promise), and the validation call on
> whether to build at all.

> **Same spine, depth scales to the stakes.** Every job fills every section
> below, in this order, so a human and an agent always find the same headings
> in the same place. What flexes is *depth*, not structure. A Quick Win
> answers most sections in a **single line**: one bet, one alternative, one
> named indicator. A high-stakes job **expands** each into a full section
> with a Must / Won't list, a fuzz corpus, and a production-readiness bar.
> The gates never disappear; their depth tracks the stakes (the same
> Quick Win / Lightweight / Full path-tiering the verdict rule uses). If even
> the expanded body runs past one screen, implementation has leaked in: move
> it to the design artefact and link down.

> **Doc-class rule (decide from the frontmatter key alone):** `job:`
> frontmatter ⇒ this is a Job Spec, keep `job` / `outcome` / `stakes`
> stable. `serves:` / `artifact:` / `backs:` frontmatter ⇒ this is a
> design artefact that points *up*: `serves: <outcome-slug>` on a Job Spec
> names the Product Spec outcome it ladders to; `serves:` / `artifact:` on
> a ship-coupled RFC points at a Job Spec slug; `backs: <invariant-slug>`
> on a design record points at the invariant it elaborates. The how lives
> in those artefacts, not here.

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

## Today's alternatives

> The job is already getting done somehow. Name how, because that is the bar
> you actually have to beat. This is durable (it changes slowly and defines
> the job) and it is customer-side: how progress happens today, independent
> of our product. Distinct from the RFC's **Competing Solutions**, which is
> the ship-time analysis of our design against a named competitor's features
> and pricing.
>
> **Depth:** one line for a Quick Win; a short list plus the switching cost
> for a high-stakes job. Cover whichever of the three apply:
>
> - *Non-consumption* -- they tolerate it, do nothing, live with the pain.
> - *Manual / workaround* -- a spreadsheet, a process, duct tape.
> - *A rival product* -- someone else's tool.
>
> **The bar to beat.** You are not competing with nothing. You are competing
> with the current alternative *plus* the switching cost of leaving it. If
> the alternative is good enough, the job can be real and still not worth
> serving: that is the link to **The bet** below. This section is also where
> product marketing and sales start: you position against the alternative,
> and objection-handling ("why not just keep using X?") comes straight off
> it.

- **Today they:** <the alternative(s) the user hires now to make this progress>.
- **The bar:** <what makes the alternative tolerable, and what you must beat,
  including the switching cost of leaving it>.

## The bet

> The one belief this job rests on, stated so it can be killed. If this
> assumption is false, the job is not real and no design will save it, so it
> is what you validate **first**, before any RFC. Keep it durable and
> falsifiable: the *shape* of the belief, not a quantified target (the number
> that would confirm or refute it drifts to [Job Links](./job-links.md) and
> the RFC). One line, always: even a Quick Win names its bet, if only to show
> it is safe. How to gather the evidence that kills or confirms the bet is
> the craft layer's job: see [Discovery](../pm-playbook/discovery.md).

- **This job assumes:** <the belief about the user or their world the job
  depends on, e.g. "the user hits this situation often enough, and the
  current alternative hurts enough, that they would switch">. If that's
  false, don't build: <what it means for the job>.

## Measures of success

> How you will know the job is being done, and how it moves the **Signal** of
> the outcome named in `serves:`. This is the durable brief that drives
> product-analytics strategy: what to instrument and what to watch. Content
> is **mechanism plus leading indicator, named not quantified** (no numbers
> or targets; those drift). The quantified form (the target, the threshold,
> the event and dashboard) lives one layer down: the
> [Product Spec](./product-spec.md) job index carries the job metric that
> rolls into the outcome Signal, and the RFC carries the instrumentation. The
> Job Spec drives analytics *strategy*; it hands *implementation* down.
>
> **Depth:** one line for a Quick Win (name the single leading indicator);
> mechanism plus one or two indicators for a high-stakes job.

- *Mechanism:* <how doing this job changes user behaviour toward the outcome>.
- *Leading indicator:* <the earliest observable sign it's working, named not
  quantified>.
- *Where the number lives:* <the Product Spec outcome Signal this rolls into;
  the RFC carries the events and thresholds>.

## Good / bad

> The load-bearing section. Paired, observable, UX-level. The left list is
> what a human sees when it is working and what an agent should steer toward.
> The right list is the anti-pattern and the agent's "never do this." Phrase
> every line as user-observable behaviour, not implementation. Keep each list
> to roughly five bullets.
>
> **Required: name the silent failure.** The "Bad" list must include at least
> one *silent* failure, not just tempting-but-wrong builds: the case where
> the user succeeds on paper, the metrics look fine, and they still never got
> the outcome. It is the failure teams miss most, because nothing alerts on
> it. Naming it here is what lets you catch it in "Prove it" and in your
> analytics, instead of in a churn report a quarter later.

**Good looks like**

- <observable success the user can see or feel>
- ...

**Bad looks like (never ship this)**

- <the tempting-but-wrong behaviour that betrays the job>
- **Silent failure:** <the user appears to succeed, the metric moves, but the
  real outcome never lands, e.g. the result is produced but not trusted, so
  nobody acts on it>.
- ...

## What the job requires

> What the product must be *able to do* to serve the job. **Must / Won't
> only** (no "Should"; that's a prioritisation call that drifts). Verb-first,
> with zero named vendor or technology nouns (a specific database, queue,
> framework, or model architecture): those go to the RFC. *Domain* vocabulary
> is the exception, the nouns that define the customer's job and outcome are
> durable and belong here, even for a data or ML product where those nouns
> ARE the job. If you can't strip a vendor or technology noun, it's an RFC
> Solution-Space line, not a requirement. Durable product non-goals ("we're
> the visibility layer, not the controller") belong here under **Won't**.
>
> **Depth:** a Quick Win may need one Must and one Won't; a high-stakes job
> expands to ~3 to 5 each. Distinct from **Good / bad** (user-observable
> behaviour) and from the RFC's **Solution Space** (this is durable and
> outcome-level; that is the ship-coupled behavioural contract).

**Must be able to**

- <verb-first capability, no proper nouns>
- ...

**Won't**

- <the durable non-goal this product refuses by design>
- ...

## Prove it

> Outcome-level acceptance, named by **job × surface**, independent of unit
> tests. Each line points at a real, runnable scenario and names the
> **invariant** it protects. This is what makes the job *UAT-verifiable*: a
> scenario exists and asserts the user-observable outcome, not internal
> state. Include a scenario for the **silent failure** named above, so "looks
> fine, isn't" is caught by construction. End with the **fuzz corpus**
> dimensions so the failure *class* (not just one instance) is covered.
>
> **Depth:** a Quick Win names one scenario and its invariant; a high-stakes
> job covers each surface and carries a fuzz corpus.

- **<job × surface>**: `<path/to/real/scenario>`. *Watch:* <user-observable
  outcome>. *Invariant:* <the property that must always hold>.
- ...

> When the outcome is probabilistic, the scenario asserts a threshold on a
> metric distribution (error within tolerance, precision above a floor),
> validated against real outcomes, not a single boolean. Drift past the
> threshold is a failure class the fuzz corpus should cover.

**Fuzz corpus:** vary `<dimensions, e.g. latency × retries × ordering ×
partial failure>`; the invariants above must hold across the corpus, not
just the happy path.

## Verdict

> One line the verdict rule can check.

- **Done when:** <the user-observable definition of done, proven by the
  scenarios above>.

## Abandon signal

> The inverse of the verdict, and the back half of **The bet**: the durable
> *class* of signal that says you named the wrong job, not that you built it
> wrong. Stated as a shape, not a threshold (the quantified trigger drifts to
> [Job Links](./job-links.md) and the RFC). This is what keeps a spec honest:
> a job you can never abandon is a job you never really tested. One line,
> always.

- **We named the wrong job if:** <the durable condition under which this spec
  is wrong about the world, e.g. "users reach the result and still don't come
  back, so the progress they wanted was not the one we named">.

## Production-readiness

> *Optional. Include only where the stakes warrant it.* The non-functional
> bar (security, reliability, availability, performance), scaled to the
> stakes. Distinct from the customer-facing "Prove it" gate above. Omit
> entirely for a soft, low-stakes job.

- *<dimension>:* <target>.

---

> **Implementation:** the how lives in `<design-artifact.md>` (frontmatter
> `serves:` this job). That artefact churns; this Job Spec outlives it.

---

## Related

- [JTBD Guide](../guides/jtbd-guide.md) -- how to frame the job story and the forces this spec is built around
- [Job Links Template](./job-links.md) -- the churny join that carries accounts and revenue, kept out of this spec
- [Agentic Delivery](../guides/agentic-delivery.md) -- how this spec sits in the verdict rule and the gates
- [Writing an RFC](../guides/writing-an-rfc.md) -- how to write the ship-coupled RFC that references this spec
- [Discovery](../pm-playbook/discovery.md) -- the craft of gathering the evidence that validates the job and its bet
