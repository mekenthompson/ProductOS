---
title: ProductOS vision
status: STRAWMAN — you own this anchor; edit freely, I drafted it only to react to
audience: anyone deciding whether a feature, skill, or doc belongs in ProductOS
---

# ProductOS vision

> This is a **strawman**. The vision is the one anchor the method says is
> human-owned: agents consume it, they never author it. I drafted it so you
> have something to react to instead of a blank page. Rewrite, cut, or keep.
> Once you ratify it, I cascade Principles, Invariants, and the Product Spec
> from it.

## Headline

ProductOS is the operating system a product leader runs their org on: the
method that keeps work anchored to the customer's job, plus the skills that
automate the PM work of running it, so judgment stays human and delivery runs
itself.

## Where we play

- **We own:** the PM operating layer. How product work enters (signal), gets
  specified as jobs, gets validated against outcomes, and gets learned from.
  The anchors, the job specs, and the skills that run them.
- **We don't own:** the delivery toolchain (git, CI, issue tracker), the
  analytics stack, the model runtime, or the company's strategy itself. Those
  are inputs the method points at, not things ProductOS builds.

## Headline metric

**Share of recurring PM work that runs as a versioned skill producing an
artifact, rather than by hand in a chat.** As it rises, the PM spends their
hours on judgment (which jobs matter, the taste calls) instead of the
mechanical running of the loop. (Alternative worth considering: *time from a
job identified to a ratified, UAT-verifiable Job Spec*.)

## Personas

- **The operator-PM** (you). Owns the judgment: the vision, which jobs
  matter, the taste and integrity calls. Wants the rituals to run themselves
  and to wake to artifacts, not to-dos.
- **The agent workforce.** Consumes the anchors and job specs; delivers
  drafts, builds, reviews, and UATs within the gates. Never authors the
  anchors.
- **(Later) OSS PMs and orgs** adopting the public "lite" kit alongside the
  thought-leadership series.

## Out of scope

- We do not make the strategy or the judgment calls. Those stay human.
- We do not replace the delivery lifecycle (git / PR / CI / tracker stay).
- We do not ship a model runtime, an analytics product, or a generic agent
  framework.

## Invariants (candidates — graduate to `invariants.md` on ratification)

- **Anchors are human-owned.** Agents consume the vision, principles, and
  invariants; they never author or silently rewrite them.
- **The reviewer is always a separate process.** No agent grades its own
  work.
- **Outcome UAT is binding.** "Done" means the user's job is proven on the
  real path, not that unit tests pass.
- **The job outlives the build.** When the implementation changes, narrate
  the retired approach; never silently rewrite the job.
