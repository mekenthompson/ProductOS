---
title: ProductOS product spec
status: derived from the ratified vision — owns the job/skill index
anchors: [vision.md, principles.md, invariants.md]
---

# ProductOS product spec

> The product-level layer between the anchors and the individual job specs.
> What ProductOS delivers, how it functions, and the list of PM jobs it
> automates. Each job `serves:` one outcome and is delivered by a skill.

## The product, in one line

The executable operating system a product leader runs their org on: the
method that keeps work anchored to the customer's job, plus the skills that
automate the PM work of running it.

## Outcomes

Every skill and job ladders up to one of these. (They line up with the
thought-leadership spine: kernel/decisions, daemons, integrity/UAT,
syscall/taste.)

- **`anchored-decisions`** — work stays anchored to the customer's job and
  its UX outcome, so decisions are directionally accurate instead of
  vibes-led.
- **`runs-itself`** — recurring PM rituals run as versioned skills that
  produce artifacts; the PM wakes to artifacts, not to-dos.
- **`provable-quality`** — what ships is proven against the outcome and
  fresh-reviewed, never assumed from green unit tests.
- **`judgment-amplified`** — the PM's hours go to judgment and taste, with
  the mechanical running of the loop off their plate.

## How it functions, at a high level

ProductOS is a **design contract** (the five-layer hierarchy: vision /
principles / invariants → product spec → job specs) plus **skills** that
consume it. The human owns and ratifies the anchors; skills deliver within
the gates (fresh-process review + outcome UAT). It is **instantiated per
product**: switchroom is the first instantiation, AutoGrab next. The public
"lite" kit is a later export of the method and skills, with private
instantiations stripped out.

## The job index

The PM jobs ProductOS automates, grouped by outcome. Each becomes a Job Spec
(authored when the job is real and recurring) delivered by a skill. Shipped
marked; the rest is the backlog, mapped to the six-phase loop.

### anchored-decisions
- `create-job-spec` — author a Job Spec from a fuzzy ask, by interview. **shipped**
- discovery-synthesis — interview notes → research doc. *(planned, Learn)*
- feedback-to-jtbd — tickets → jobs, not a feature wishlist. *(planned, Learn)*
- prioritise — RICE within strategy buckets. *(planned, Decide)*

### runs-itself
- post-launch-review — 2wk / 30d / 60–90d → accelerate / iterate / pivot / stop. *(planned, Launch)*
- ritual digests — scheduled rollups that produce artifacts. *(planned)*

### provable-quality
- `uat-ux-debug` — debug a UX failure from the outcome, seed the corpus. **shipped**
- review-against-spec — judge a change against its Job Spec + the verdict rule. *(planned, Build; thin — largely the verdict rule)*
- outcome-uat-runner — run the job × surface scenarios. *(planned, Build)*

### judgment-amplified
- options-framing — surface the decision and the trade-offs for the human to call. *(planned, Decide/Shape)*
- multi-model triangulation — cross-check facts; disagreement is the confidence flag. *(planned, Learn)*

> We write a Job Spec and build its skill when the job is real and recurring,
> not to fill a slot in the loop.
