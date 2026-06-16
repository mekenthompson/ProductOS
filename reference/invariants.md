---
title: ProductOS invariants
status: graduated from the vision's candidate list — edit if any read off
audience: anyone designing, building, or reviewing ProductOS
---

# ProductOS invariants

The third anchor, beside [`vision.md`](vision.md) (the *why*) and
[`principles.md`](principles.md) (the *built-well* standards). Invariants are
not principles you trade off. They are lines we won't cross by construction:
the *"is this still ProductOS"* gate. Breaking one is out of scope, full
stop.

## `anchors-human-owned`

The vision, principles, and invariants are authored and ratified by the
human. Agents consume them and deliver against them; they never author or
silently rewrite them.

- **By-construction test:** does this let an agent set or change an anchor
  without the human ratifying it? If yes, it is out.

## `reviewer-separate-process`

Quality is judged by a process that did not produce the work. An agent
reviewing its own change is not a review.

- **By-construction test:** is the reviewer the same context that authored
  the change? If yes, it is out.

## `outcome-uat-binding`

"Done" means the user's job is proven on the real path, by an outcome UAT,
independent of unit tests. Green unit tests are necessary, never sufficient.

- **By-construction test:** does this call something done without the
  outcome being proven end-to-end? If yes, it is out.

## `job-outlives-the-build`

The job, outcome, and stakes stay stable while the implementation churns.
When the build changes, the retired approach is narrated, never the job
silently rewritten.

- **By-construction test:** does this rewrite a job's `job` / `outcome` /
  `stakes` to match a new implementation, instead of narrating the change?
  If yes, it is out.
