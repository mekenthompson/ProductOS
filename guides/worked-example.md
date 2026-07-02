---
title: Worked Example
description: "One job carried from raw request to shipped, so you can watch the verdict rule turn an agent back and then let it through"
last_reviewed: 2026-07-02
icon: "🧪"
---

# Worked Example

This page runs one job through the whole loop, start to finish, so you can watch the gate turn an agent back once and then let it through after a redesign.

The rest of the site asserts the human-plus-agent loop. This page shows it running on a small, believable job. Nothing here is linked to a repo; the point is to see the moving parts hit each other.

---

## The request

It lands in a channel, half-formed, the way real work does:

> "People kick off a big export and then just sit there refreshing the page. Can we ping their team when it's done? Slack, email, whatever. It's annoying."

That is a feature-shaped wish attached to a real frustration. The first move is not to build it. It is to find the job under it.

---

## The human ratifies the job

An agent does not get to decide what the job is or which outcome it serves. A human sets and ratifies that. Here is the ratified statement:

- **Job:** *Know a long-running job finished without watching it.*
- **Outcome:** the person who started the export, and their team, learn it is done within seconds of completion, on a surface they already watch.
- **Stakes:** if the notice is late, wrong, or missing, people either babysit the tab (wasting the exact time the feature was meant to give back) or act on stale data because they assumed it was still running.
- **serves:** `unattended-work` (the Product Spec outcome that says people can start something long and walk away).

The agent consumes this. It never authors it. Everything below is execution inside a gate the human set.

---

## The agent drafts the Job Spec

The agent fills the Job Spec from the template. The load-bearing fields:

- **Struggling moment:** when a user starts an export that runs for minutes, they are stuck, because the only way to know it finished is to keep the tab open and refresh. So they either watch it or forget about it and come back late.
- **Contribution (mechanism plus leading indicator):** on completion, push a notice to the surface the team already watches. *Leading indicator:* share of long-running jobs whose owner takes their next action within one minute of completion, up.
- **What the job requires:**
  - **Must:** deliver a completion notice to the job's owner and their team within seconds of the job finishing, on at least one surface they already use.
  - **Won't:** notify anyone who is not on the job's team, and won't put job contents or output into the notice body.
- **Prove it (one scenario):** a user starts an export, closes the tab, and does something else. When the export finishes, the team channel shows a completion notice within ten seconds, and it names the job and its owner and nothing about the job's contents.

---

## The design loop and the outcome UAT

The agent researches the unknowns (which delivery surface is reliable, what the completion event looks like, how retries behave), builds it with tests that pin the behaviour, and sends it to a fresh-process reviewer.

Then it writes the **outcome UAT**, named by job and surface, not by the diff:

> **Job x team-channel surface.** Start an export, close the browser. On completion, assert the team channel receives a notice within ten seconds that names the job and owner. Before the change, no notice arrives and the assertion fails. After, it arrives and passes.

Fails before, passes after. That is the constant it keeps re-proving as the code changes underneath.

---

## The verdict rule, evaluated

The change reaches the gate. Four clauses, each independent, each yes or no:

| Clause | Question | Verdict |
|---|---|---|
| Vision outcome | Does it advance `unattended-work`? | **Yes.** People can start a long job and leave. |
| Job Spec | Does it do the job, proven by the outcome UAT? | **Yes.** The UAT passes on the team-channel surface. |
| Principles | Did we build it well, product and engineering? | **Yes.** Review is clean, tests pin the behaviour. |
| Invariants | Does it cross a line we won't cross? | **No, it crosses one.** |

The invariant clause fails. The product carries an invariant: **least-surprise recipients** -- no message reaches anyone the sender did not clearly address. The first build resolved "their team" to the workspace default channel (here, a chat workspace; your product's equivalent is whatever shared surface has a broadcast-default), which for many workspaces is `#general`. A private export firing a notice into a company-wide channel crosses that line.

The reviewer blocks with the specific reason, not a vague note:

> **BLOCK.** Crosses the `least-surprise-recipients` invariant. "Their team" is resolved to the workspace default channel (`#general` in most workspaces), so a completion notice for a private export broadcasts to people the owner never addressed. The Won't in the Job Spec says exactly this: notify no one outside the job's team. Redesign, not a follow-up.

The agent is turned back. Three clauses passing does not ship it. The gate is all-must-pass.

---

## The redesign

The agent fixes the one clause that failed, and only that.

- Recipient resolution changes: "their team" now means the members of the job's own project, delivered to that project's channel or to the owner's direct message, never a workspace-wide default. If a project has no channel, it falls back to a direct message to the owner, not to a broadcast.
- The outcome UAT gains one assertion: the notice reaches only the job's team, and a user outside that team receives nothing.

Re-evaluated:

- **Vision outcome:** yes, unchanged.
- **Job Spec:** yes, the UAT still passes, now including the no-outsider assertion.
- **Principles:** yes, review is clean.
- **Invariant:** **no line crossed.** Recipients are addressed, not broadcast.

All four pass. A human signs off on the outcome as customer-ready. It ships.

---

## What this shows

- The gate is real and mechanical. Three green clauses and one red is a block, with a named reason, not a debate.
- Agents own execution inside the gates: the Job Spec draft, the build, the design loop, the outcome UAT. They do that work in full.
- Humans own ratification and the invariant line. The agent never relaxed the invariant to land the change; it redesigned to clear it.

---

## Related

- [Agentic Delivery](./agentic-delivery.md) -- the method this page runs one job through
- [Job Spec template](../templates/job-spec.md) -- the standing outcome contract the agent drafted here
- [Invariants](../anchors/invariants.md) -- the anchor that supplied the clause that turned the agent back
