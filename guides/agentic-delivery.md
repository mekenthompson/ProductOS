---
title: Agentic Delivery
description: "How to run delivery with an agentic workforce: the four working parts (anchors, Job Specs, design loops, outcome UAT) and who owns what when agents do much of the building"
last_reviewed: 2026-07-06
icon: "🤖"
---

# Agentic Delivery

This guide is the heart of the method: how delivery runs when **an agentic workforce does much of the building**. A handful of artefacts keep humans in control of the *outcome* while agents move fast on the *implementation*.

It is written for the whole triad: **product, design, and engineering**. Engineering is not a footnote here: when agents write the code, the scarce thing is no longer engineering hours, it's **judgement and oversight**, and engineers are the ones who set the technical bar the agents build to.

> [!NOTE]
>
> Read this guide alongside [Product Vision](../anchors/product-vision.md), [Product Principles](../anchors/product-principles.md), and your [Invariants](../anchors/invariants.md) (the three anchors), and the [JTBD Guide](./jtbd-guide.md) (the job-story sentence and the Job Specs that carry it). The terse, agent-executable version of everything below lives in **[AGENTS.md](../AGENTS.md)** under "Agentic Delivery, operating contract."

![Agentic Delivery: the four disciplines (anchors, Job Specs, design loops, outcome UAT) converging on the verdict rule, which ships the change or sends it back for redesign.](/img/hero-agentic-delivery.png)

---

## The core idea

**Good ideas are abundant; now building is cheap too.** An agent can draft a spec, write the code, and run the tests in the time it used to take to schedule a kickoff. That changes what's scarce. It is no longer *capacity*. It is *knowing whether the thing is right*, and catching it when it isn't.

So the method keeps four artefacts as the constants that **don't move while the implementation churns underneath them**. Agents build fast *inside* these gates; humans own the gates.

1. **Anchors** -- the durable *why*, *good*, and *forbidden*. (Vision + principles + invariants → a verdict.)
2. **Job Specs** -- the stable outcome contract. (The job, decoupled from the build.)
3. **Design loops** -- research the unknowns, never assume; review adversarially.
4. **Outcome UAT** -- validate the job end-to-end, independent of unit tests.

> [!TIP]
>
> "Four" describes this method's anatomy, not a law for your product. A product picks its own small number of vision outcomes, principles, and invariants (see [Product Vision](../anchors/product-vision.md) and [Product Principles](../anchors/product-principles.md)). Keep those sets small; keep these four parts.

> [!NOTE]
>
> The three **anchors** (vision, principles, invariants) hold for the whole product. Beneath them, a **Product Spec**, one per product, names the product's outcomes, says how the product functions, and owns the list of jobs. Beneath that sit the **Job Specs**, one per job, durable and outcome-focused. RFCs / PRs are the ship-coupled, per-initiative delivery layer that references a Job Spec; they are not a named spec tier of their own.

---

## 1. Anchors: the durable "why," "good," and "forbidden"

Three documents, judged together, produce a verdict on any change:

- **The vision** answers *should we build this?* A small, fixed set of named outcomes every change must serve. See [Product Vision](../anchors/product-vision.md).
- **The principles** answer *did we build it well?* A short checklist of named, memorable standards, each reduced to a few yes/no check questions, applied at **every** authoring, review, and release. A "no" on any one is a **redesign, not a follow-up**. See [Product Principles](../anchors/product-principles.md).
- **The invariants** answer *are we even allowed?* The lines the product won't cross *by construction*. A change that trips an invariant is out of scope however useful it seems; this is the "what we are *not*" stated as a hard gate, not a preference.

**Engineering belongs in the anchors.** Principles are *product/UX standards and engineering standards*. Where the stakes warrant it, the non-functional bar (security, reliability, scalability, availability, performance, maintainability) is part of "did we build it well" and rides in the verdict like any other principle. An agent that ships a feature which works but leaks data, falls over under load, or can't be operated has not passed.

---

## 2. Job Specs: the stable outcome contract

Three things sit on the "what" side, and keeping them straight is load-bearing here:

- A **job story** is a *sentence* -- `When [situation], [persona] wants to [motivation], so they can [outcome]`. It lives inside a spec and is the framing tool taught in the [JTBD Guide](./jtbd-guide.md). ("JTBD," Jobs To Be Done, is the framework; the job story is how it shows up in a doc.)
- A **Job Spec** is a *standing document*, one per job, that captures the job / outcome / stakes (laddering up via `serves:`), the required **struggling moment**, its **Contribution** to the outcome it serves (mechanism plus the named leading indicator), **What the job requires** (the Must / Won't capabilities), the good / bad signs, the **Prove it** acceptance scenarios, and a one-line **Verdict**. It is **durable**: it outlives any single RFC, feature, or implementation. Use the [Job Spec template](../templates/job-spec.md).
- A **Product Spec** is the *per-product* layer above the jobs: it names the product's outcomes, says how the product functions, and **owns the list of jobs**. Each Job Spec ladders up to one of the Product Spec's outcomes, and each outcome carries a measurable **Signal**. One rung, two forms: the Job Spec names the outcome's **leading indicator** in words; the Product Spec's job index carries its quantified form, the **job metric**; that rolls up into the outcome **Signal**; the Signals drive the **North Star** (the product's single headline metric). The ladder runs leading indicator (named) → job metric (quantified) → outcome Signal → North Star. (Don't confuse this with an **RFC**, the ship-coupled, per-initiative delivery doc below it.) Use the [Product Spec template](../templates/product-spec.md); for a worked example, see [switchroom's `reference/product-spec.md`](https://github.com/switchroom/switchroom/blob/main/reference/product-spec.md).

The whole point of the standing Job Spec is that **the feature and the tech are free to evolve underneath while the job stays still.** When the implementation changes, you do not silently rewrite the job. You **narrate the retired approach** ("we used to do X; we changed it because Y; the job underneath is unchanged") and keep the `job` / `outcome` / `stakes` stable. That narration is what lets the next agent (or person) trust the doc.

**Outcome-drift backstop.** The `job` / `outcome` / `stakes` lines are diff-protected. Narrating a retired *implementation approach* is normal and encouraged; that is the doc working as intended. Changing the *outcome itself* is a different act. It is not a silent edit and never rides along in a delivery commit: it is a ratified event that needs a recorded decision and re-ratification, the same discipline STRATEGY.md already demands of a strategy change. Without that rule a "durable" Job Spec quietly decays into a description of whatever shipped, which is the exact failure the standing doc exists to prevent. Make it mechanical: a change to those three lines fails review unless it cites its decision record.

**Engineering reads the Job Spec as the brief**, the *what* and *why*, and owns the *how* (architecture, data model, non-functional approach), which it works out in the ship-coupled [RFC](./writing-an-rfc.md). Where a job has real engineering stakes, the Job Spec carries an optional engineering acceptance section, the **Production-readiness** section: the non-functional targets the build must hit, beside the customer-facing signs.

---

## 3. Design loops: research, never assume; review adversarially

Work starts from a Job Spec, not a blank page. The loop:

1. **Name the unknowns and research them.** Enumerate what you don't know, technical and product, and *find out*, rather than guessing and hoping. An assumption that turns out wrong is the cheapest bug to prevent and the most expensive to discover in production. Engineering unknowns (will it scale? is this safe? what fails first?) get spikes, not optimism.
2. **Build it, with tests that pin the behaviour.** A change lands with a test that fails before and passes after. Pick the test shape to the work: example tests for ordinary modules, property/fuzz tests for state machines and pure functions.
3. **Review adversarially, with a fresh process.** This is the part most teams skip and the part that matters most when an agent wrote the code.

> [!CAUTION]
>
> The reviewer must be a **separate process** (a different agent with fresh context, or a human) that did not write the change. It returns an explicit verdict: APPROVE / REQUEST_CHANGES / BLOCK, and cites a specific location for every blocker. Iterate until APPROVE. Do not let an automated merge fire before the reviewer has approved. A green test suite is necessary, not sufficient.

**Engineering leads the loop for implementation.** Engineers *direct and oversee* the agentic workforce: they frame the task, set the technical bar, and own the fresh-process review as quality control, especially for agent-written code, where plausible-but-wrong is the failure mode to hunt. The agents do the typing; the engineering judgement stays human.

---

## 4. Outcome UAT: validate the job, not the diff

Unit and feature tests prove the code does what the author *intended*. They do not prove the **user's job got done**. That is a separate, binding, pre-ship gate:

- **Named by job × surface**, not by implementation -- so the scenario survives any number of internal rewrites. The scenario *is* the constant you keep re-proving against as models, features, and code change underneath.
- **Exercises the real end-to-end path** and asserts the *user-observable outcome* (and timing), not internal state.
- **Proven on every surface the job can reach.** A single-surface proof hides surface-specific bugs.

> The release isn't done when the unit tests are green. It's done when the **outcome** is proven. Tagging, publishing, and rolling out are necessary but not sufficient.

Three distinct gates, and **none implies the others**:

| Gate | Question | Owner |
|---|---|---|
| Unit / feature tests | Does the code do what the author intended? | Whoever wrote it (agent or human) |
| **Outcome UAT** (customer-ready) | Did the user's job actually get done, well, on the real path? | Product defines; the delivery agent runs it |
| **Production-readiness** (engineering acceptance) | Is it secure, reliable, scalable, available, operable, to the level the stakes demand? | Engineering signs off |

The loop is **build → validate the outcome → improve**. Not "ship when unit tests pass."

---

## The verdict rule

The anchors, the Job Spec, and the gates fuse into one decision. A change ships only when **all** of these are true:

1. It **advances a named vision outcome** (it's in scope at all).
2. It **satisfies its Job Spec** (it does the user's job), proven by the outcome UAT.
3. It **passes every principle check**: product *and* engineering standards. (A "no" is a redesign.)
4. It **crosses no invariant**: the lines you won't cross by construction (see [Product Vision](../anchors/product-vision.md) and your invariants).

Anything else is out of scope, **however clever it seems.** The four clauses are orthogonal: the vision says *is it ours to build*, the Job Spec says *did it do the job*, the principles say *did we build it well*, the invariants say *are we even allowed*. All must pass independently.

### Scale the gates to the path

The verdict rule is all-must-pass, but "pass" is proportional. A Quick Win
passes with a Tech Lead's nod and an outcome sanity check. A payments change
runs every gate at full depth. The gates never disappear, their *depth* tracks
the stakes. This is what stops the method reading as a speed tax. An internal
decision-framework layer tiers the paths (Quick Win / Lightweight / Full Spec)
by size and stakes.

![One rule, gates that scale: the verdict rule runs on every path, but its depth tracks the stakes across Quick Win, Lightweight, and Full Spec.](/img/verdict-gates-scale.png)

**Minimum gate depth.** Lightening a tier lightens *evidence depth* (a Tech
Lead's nod instead of a load test), never the clause count. The invariant clause
is always binary and fully checked at every tier: there is no light invariant
check, because an invariant either holds or it doesn't.

---

## How each discipline uses this

- **Product** owns the anchors' *why* and the Job Specs: which outcomes the vision serves, which jobs matter, what "the job is done" means. Product defines the outcome UAT and decides *customer-ready*.
- **Design** owns the experience inside the solution space and is in the room when the job is framed, not brought in to polish afterward. Design's consistency concerns are principle checks, not opinions.
- **Engineering** owns the *how*: architecture, the non-functional bar, and the technical unknowns the loop must research. Engineering runs the fresh-process review, **directs and oversees the agentic workforce**, and decides *production-ready*. Engineering's standards are anchors too.

Nobody dictates another's domain. Product doesn't pick the data store; engineering doesn't wave away a real customer problem as "too complex" without proposing an alternative.

---

## When agents do the delivery: who owns what

The shift from a human team to an agent-assisted one does **not** move ownership of the anchors. It moves ownership of *execution*.

- **Agents own delivery execution within the gates** -- drafting Job Specs, implementing, running the design loop, running the outcome UAT.
- **Humans own the gates and the judgement** -- the vision, the principles, the invariants, the ratification of the job statement, and the engineering oversight. Agents *consume* the anchors; they never author them.
- **The adversarial reviewer is always a separate process.** An agent reviewing its own change is not a review.

The stance is **"augmentation, not automation"**: **augment the judgement, automate the delivery, and keep the four parts as the safety rail.** (Of the anchors, the invariants are the firmest line; agents never relax an invariant to land a change.)

---

## Stakes scale with the work

The same four parts run a weekend hobby project and a regulated, always-on production system. What changes is **depth**, not shape.

- At the **low-stakes** end, a personal, single-user tool built almost entirely by agents, oversight is light, the non-functional bar is low, and the outcome UAT can be a handful of real round-trips. The method still pays off, because the anchors and the Job Specs are what keep a one-person, agent-built project coherent instead of a pile of clever diffs.
- At the **high-stakes** end, many users, real money, uptime and security obligations, human engineering expertise and oversight become the gate, the non-functional bar rises sharply, and production-readiness gets real teeth (load tests, security review, failure drills).

Don't run a payments system the way you'd run a weekend project. But run both with the same four parts, dialling oversight and the engineering bar to the stakes. The method is the constant; the rigour scales.

---

## The self-teaching check (dogfood this guide)

This guide has done its job only if someone, or some agent, can *execute* the method from it alone. Use this as a repeatable check whenever the guide changes:

> Give a fresh agent **only ProductOS** (no other context) and a sample job, e.g. *"a new user gets their first useful result without reading documentation."* Ask it to run one full design loop. **Do not tell it there are "four parts."** It passes if it, using only the method's own templates and triggers:
> 1. names which vision outcome the job serves and applies the verdict rule as an all-must-pass gate (including the invariant clause);
> 2. writes a Job Spec from the [template](../templates/job-spec.md), with a non-empty acceptance-scenario section (and engineering acceptance criteria where the stakes warrant);
> 3. describes the design loop and correctly identifies the reviewer as a *separate process that cannot grade its own work*, and how an engineer directs and oversees a delivery agent;
> 4. writes an outcome UAT named by *job × surface, independent of unit tests*, and distinguishes it from the production-readiness gate.

If the agent has to invent structure or reach outside the method, the guide failed its own **docs test**. Fix the guide and re-run, don't paper over it. (This is the method applied to the method.)

---

## Glossary

- **Job Spec** -- the canonical term for a standing, per-job outcome document, in template order: the job / outcome / stakes (laddering up via `serves:`), the required struggling moment, its **Contribution** to the outcome it serves (mechanism plus named leading indicator), **What the job requires** (Must / Won't capabilities), the good / bad signs, the **Prove it** acceptance scenarios, and a one-line **Verdict**. *(Older synonyms "JTBD doc" and "red doc" are retired; don't use them.)*
- **Product Spec** -- the per-product doc above the jobs: names the product's outcomes, says how the product functions, and owns the list of jobs. *(Not to be confused with an RFC, the ship-coupled delivery doc.)*
- **RFC** -- the ship-coupled, per-initiative delivery doc (RFC / PR), which references a Job Spec. Not a named spec tier of its own. See [Product Specs / RFC guide](./writing-an-rfc.md).
- **Anchor** -- the vision, principles, and invariants, judged together to produce a verdict.
- **Invariant** -- a line the product won't cross by construction; the firmest anchor.
- **Verdict rule** -- the all-must-pass gate above (outcome ∧ Job Spec ∧ principles ∧ no invariant crossed).
- **Design loop** -- research-the-unknowns → build-with-tests → fresh-process adversarial review → iterate to APPROVE.
- **Fresh-process review** -- review by a separate process that did not author the change; never the author.
- **Outcome UAT** -- a pre-ship gate that validates the user's job end-to-end on the real path, independent of unit tests.
- **Production-readiness** -- engineering's acceptance gate: secure, reliable, scalable, available, operable to the level the stakes demand.

---

## For agents

The terse, executable version of this method, the verdict rule as a gate, the per-activity triggers, and the reviewer checklist, is in **[AGENTS.md](../AGENTS.md)** under "Agentic Delivery, operating contract." Read *that* to execute the method; read *this* to understand it.

---

## Related

- [Product Vision](../anchors/product-vision.md) -- the anchor that says *should we build this* (and carries the invariants)
- [Product Principles](../anchors/product-principles.md) -- the anchor that says *did we build it well*
- [JTBD Guide](./jtbd-guide.md) -- the job-story sentence; [Job Spec template](../templates/job-spec.md) -- the standing outcome doc
- [Invariants](../anchors/invariants.md) -- the third anchor; the kill-clause in the verdict rule
- [Worked Example](./worked-example.md) -- one job carried through this exact loop, watch the verdict rule turn an agent back and then let it through
- [Product Specs / RFC guide](./writing-an-rfc.md) -- how an RFC references a Job Spec and gets an adversarial review
- [Product Analytics](./product-analytics.md) -- how a moved Signal becomes the evidence the verdict rule checks
