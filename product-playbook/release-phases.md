---
title: Release Phases
description: "What counts as a release, why we release in phases, and the three phases (Private Preview → Public Preview → GA) with the audience, flag state, commitments and exit criteria of each"
last_reviewed: 2026-10-05
icon: "🚦"
---

# Release Phases

**Shipping code is not a release. A release is when a customer gets a different experience.** Not when the code merges, not when it reaches production behind a flag. The moment the flag goes on, for one account or for all of them.

A feature doesn't go from "built" to "everyone" in one step. It moves through named **release phases**, each with a defined **audience**, **flag state**, **commitments** and **exit criteria**. Every customer-visible change ships behind a flag, so every phase is reversible: if something breaks, turn the flag off.

Release phase is *how widely it's on*. That's a separate thing from the work's **stakes / [path](./decision-framework.md)**, which drive *how deep the gate goes*. The gate itself, the [Launch Readiness Check](./gates.md#gate-2-launch-readiness-check), runs before every phase; this page owns the phases.

---

## What counts as a release

![The release line. Left of it, normal engineering process: bug fixes, incident fixes, maintenance and refactors, code in production but switched off. Right of it, a release: a flag on for one account, an opt-in preview, on by default, a step in the customer's job changing, a new product. Turning the flag on is what crosses the line.](/img/release-line.svg)

| Not a release (engineering process, no gate) | A release (this page and the gate apply) |
|---|---|
| Bug fix | Flag on for one account, even a pilot |
| Incident fix | Opt-in preview |
| Maintenance and refactors | On by default |
| In production, switched off | A step in the customer's job changes |
| | A new product |

If you cannot tell which side something sits on, it is on the right.

---

## Why we release in phases

We release in phases so we learn fast and only promise customers what we have already proven. Each phase answers a question before we commit to more.

| Question | Readiness | What answers it |
|---|---|---|
| **Does it hold up?** | Technical | Controlled, widening usage finds the problems design and research could not: real data, real volumes, real workflows. Found at ten accounts, not a thousand. |
| **Does it solve the problem?** | Product | Phased adoption gives qualitative and quantitative feedback while the answer can still change. It validates or kills the hypotheses in the [Job Spec](../templates/job-spec.md). |
| **Will customers pay for it?** | Value and pricing | Is the value big enough that people change how they do their job? Was the price point, metric and model right? Preview is where we find out. GA is the most expensive moment to learn we got it wrong. |
| **Can the business carry it?** | Commercial and support | Sales, Marketing and Support get a working product to demo and learn, early enough to change what ships. Launch collateral uses real screenshots. Support knows the limits before the first ticket. |
| **Can we undo it, and are we only promising what we have proven?** | Trust | Small blast radius. A kill switch that has been flipped, not just built. Commitments that match the phase, so a pilot never becomes a promise nobody planned. The other four depend on this one. |

> 💡 **The page is the standard. The habit is what makes it real.** Three things happen on every release without being asked: someone walks the customer path live, someone writes the [release record](./templates/release-record.md), and someone comes back two weeks later and scores the call. Do that for a year and releasing becomes boring and hard to get wrong.

![The habit, one loop per phase: Decide (owner, type, Job Spec measures, price hypothesis), Prove (gate lines ticked, evidence in the record), Walk through (approver, live, on the real customer path, yes in writing), Switch on (the agreed audience, no wider), Learn (two weeks: working or not against the plan, score the call). Then widen, hold or pull, and decide again.](/img/release-loop.svg)

---

## The release path

![The release path. Build, then three phases left to right: Private Preview, Public Preview, General Availability. Before each phase is the same gate, the Launch Readiness Check. Exposure widens from nobody, to a handful of accounts, to anyone who opts in, to every customer. A kill switch at every phase returns to Build with customer data intact.](/img/release-path.svg)

The same gate runs before each phase. What changes is how strict "done" is at each run, and how wide the audience gets.

| Phase | Lifecycle status | Flag state | Who can access | Phase objective |
|---|---|---|---|---|
| Behind the flag | Building | OFF (internal override) | Dev team only | Build and test in production. Define the job, the measures and the price hypothesis first. |
| **Private Preview** | In Preview | ON for specific accounts | 5–10 trusted customers | Prove it works and does the job for real accounts. Write the pricing hypothesis. |
| **Public Preview** | GTM Launch Planning | ON for a % / opted-in | Preview cohort | Prove it holds at scale and that customers will pay. Get the business ready. |
| **GA** | Launched | ON for all (or gradual %) | All customers | Deliver the commitment. Score the call. |

---

## What each phase commits us to

Each phase is a commercial commitment, not a technical label. Read your row before you talk to a customer.

| | Private Preview | Public Preview | GA |
|---|---|---|---|
| **The line** | Named accounts. No price, no SLA. Sales can talk about it, not sell it. | Optional. Any customer can opt in. Sales can demo it and show indicative pricing, not contract on it. | On by default. Supported, sold, and commercially committed. |
| **Support** | **No SLA.** Best effort, business hours. Issues go straight to the PM. | **No SLA.** Supported, limits documented, escalation agreed. Response and fix times not committed. | **Standard SLA.** In the runbooks and the help centre. |
| **Labelled in product** | **Preview** label next to the feature name and on every help page. Customers know it is in preview, may not be perfect, and is not SLA supported. | **Preview** label, same places. The opt-in screen says it in words. | No label. Standard product, standard docs. |
| **Sales can** | Talk with the named accounts only. Pricing hypothesis written, not shown. No contract. | Demo it. Show the indicative price and ask for intent: a verbal yes, a letter of intent. No contract. | Sell it and contract on it. Price, metric and model locked in the price list. |
| **Marketing** | Nothing public. Collect real screenshots and stories. | Soft: in-product and existing-customer comms. No campaign. | Launch. Campaign and collateral built from the real product. |
| **Pull it** | Same day. | With notice to opted-in customers. | Only as an incident. |

---

## The phases

### 0. Behind the flag (internal)

- **Audience:** the dev team only (internal override).
- **Flag:** OFF.
- **Purpose:** build and test in a production environment without exposing anything. Wire up [instrumentation](../guides/product-analytics.md) here (events, dashboards, guardrail metrics) *before* anyone outside the team sees it. Write the pricing hypothesis (price point, metric, model, who pays).
- **Exit:** the first run of the [Launch Readiness Check](./gates.md#gate-2-launch-readiness-check). Outcome UAT passed, production-readiness met to the stakes, the kill switch flipped, the measures live and baselined.

### 1. Private Preview

- **Audience:** 5–10 trusted customer accounts (hand-picked, friendly).
- **Flag:** ON for those specific accounts.
- **Purpose:** real feedback from real users on the real path, with low blast radius. Fix critical bugs, watch production stability, and confirm the outcome holds outside the building.
- **Move on when:** the customer path is proven live; named accounts use it to do the job; the leading indicator is moving and the guardrails are quiet; the [two-week read](./templates/post-launch-review.md#the-two-week-read-per-phase) says widen. Then the second run of the Launch Readiness Check.

### 2. Public Preview

- **Audience:** a percentage of customers, or opted-in / self-selected ones.
- **Flag:** ON for the preview cohort.
- **Purpose:** test at scale before committing to everyone: load, edge cases, adoption signal, support volume, willingness to pay. This is where you learn whether it works for a broad base, not just the friendly accounts, and whether the price is right.
- **Move on when:** usage and feedback hold at volume; pricing evidence backs the hypothesis or has changed it; Support is not drowning; the two-week read says widen. Then the third run of the Launch Readiness Check.

### 3. General Availability (GA)

- **Audience:** all customers (often via a gradual % ramp).
- **Flag:** ON for all (still disable-able). Preview label removed.
- **Purpose:** full rollout, announced. The feature is now the default.
- **After GA:** maintain the flag for a stabilisation window; run the [post-launch reviews](./templates/post-launch-review.md) at 2 weeks / 30 days / 60–90 days and make the explicit call (accelerate / iterate / pivot / investigate / stop).

---

## Which phases does my work run?

The [path](./decision-framework.md) sets how deep the gate goes. The size of the customer change sets how many phases you run.

- **Material change (Full Spec):** a new product, or the steps of a customer's job change. All three phases, three runs of the gate.
- **Small change (Quick Win, Lightweight):** customers will see it, but the steps of the job do not change. Straight to GA with one run of the gate, scaled to the stakes.
- **Lightweight work that changes the steps of a customer's job** runs a Private Preview first.
- If you cannot tell small from material, it is material.

The per-initiative version of this, with *this* release's audiences, exit criteria, commitments and rollback, is the Rollout section of the [RFC](../templates/rfc.md). Feature-flag on/off is one release shape, not the only one; see [Writing an RFC → Rollout](../guides/writing-an-rfc.md#rollout) for staged, shadow, and champion-challenger shapes.

---

## Rollback

Every phase is behind a flag, so the rollback is always the same: **turn the flag off.** The flag is flipped off and back on in production before the first customer sees it, not just built. A phase transition must never leave data in a broken state. Prefer changes that are reversible within the phase.

---

## Related

- [Gates and Approvals](./gates.md): the Launch Readiness Check that runs before every phase, the stop rules, and who approves.
- [Release Record](./templates/release-record.md): one record per release per phase; the evidence for the gate and the ledger the two-week read scores.
- [Lifecycle](./lifecycle.md): the delivery statuses each phase maps to.
- [Delivery Standards](./delivery-standards.md): the front door to the workflow these phases sit inside.
- [RFC Template → Rollout](../templates/rfc.md): the per-initiative rollout table.
- [Post-Launch Review](./templates/post-launch-review.md): the two-week read per phase, and the 30 / 90-day reviews after GA.
- [Agentic Delivery](../guides/agentic-delivery.md): outcome UAT and production-readiness in full.
- [Product Analytics](./product-analytics.md): the measurement discipline behind wiring up instrumentation before you widen the audience.
- [Product Marketing](./product-marketing.md): the messaging that must be current before GA.
