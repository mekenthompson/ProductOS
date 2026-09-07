---
title: Project Standards
description: "How we run projects: the work breakdown, the minimum project fields, weekly updates, the Fast Path, planning cadence, and escalation"
last_reviewed: 2026-09-07
icon: "🗂️"
---

# Project Standards

**How do we run projects?** The admin layer under the [lifecycle](./lifecycle.md): how work is broken down, what every project record carries, how progress is reported, and how disagreements get settled. Read it once when you pick up your first project. Tracker-agnostic: implement the fields and labels in whichever tool your team uses.

---

## How We Break Down Work

Four levels, regardless of tracker. Most modern trackers (Linear, Jira, Shortcut, etc.) map cleanly to these. The labels differ, the shape doesn't.

### Initiatives

- **Definition:** Highest-order company objectives owned at the exec/ELT level.
- **Examples:** "Scale to support enterprise GTM," "Become the default in our category."
- **Owners:** Exec team.

### Sub-Initiatives

- **Definition:** Mutually exclusive, collectively exhaustive streams under an Initiative, made up of multiple projects.
- **Examples:** Core Reliability; Onboarding Quality; Enterprise Readiness.
- **Owners:** Exec sponsor of the sub-initiative.

### Projects

- **Definition:** Standalone units of work with a clear, shippable outcome and a planned completion date. Every project rolls up to an initiative or sub-initiative.
- **Examples:** Any deliverable that gets its own RFC.
- **Owners:** Product + Engineering leadership, named Project Lead.

### Issues (and Sub-Issues)

- **Definition:** Tasks or individual requirements within a project. Break down into sub-issues when useful.
  - Any work requiring engineering capacity is captured as an issue in your tracker.
  - Every issue has an owner.
- **Examples:** Specific implementation tasks, design tasks, GTM tasks (onboarding, training, commercials).
- **Owners:** Project Lead and project team.

---

## Project Information Standards

For all new Product & Engineering projects, use a consistent default project template in your tracker. These are the minimum fields.

### Start Date

**Definition:** Target date for the project to begin (updated to actual date once work begins)

**Owner:** Project Lead

### End Date

**Definition:** Target end date for the project based on effort required to complete the scope outlined in the RFC

**Owner:** Project Lead

### Label: Product Lever

**Definition:** Set of labels for the project that categorises the project into a product work type

**Owner:** Product (at start of Project)

### Priority

**Definition:** Priority within the delivery roadmap that is used to inform sequencing and resourcing decisions

- **Urgent:** Critical work that has immediate cost of delay considerations or protects a critical growth opportunity (e.g. required to land a prospect) and must be worked on ASAP
- **High:** Work that significantly contributes to strategic objective outcomes
- **Medium:** Work that incrementally contributes to strategic objective outcomes. It supports or enables them but doesn't, on its own, materially move the metric.
- **Low:** Work with limited or speculative growth impact. It improves quality or maintainability without materially accelerating strategic objective outcomes.

**Owner:** Product and Tech Lead

---

## Project Update Standards

Project Leads give a brief Project update at the end of each week, telling the team whether a Project is On Track, At Risk or Off Track. Keep Project status and issues up to date too.

- **On Track:** The work is progressing as planned and is expected to be completed on time and within the scope described in the RFC
- **At Risk:** The work is currently behind plan or facing issues that *could* prevent on-time or in-scope completion unless mitigating action is taken.
- **Off Track:** The work is unlikely to be completed on time or within scope without major changes. A change in timing or scope is required.

---

## Fast Path

The Fast Path exists to speed up small pieces of work with significant customer or commercial upside.

**Criteria:**

- <1 day of an individual's effort
- <2 Fast Path efforts per team per cycle
- No GTM coordination required
- Strongly aligns with product strategy & roadmap
- Tech Lead & Product Manager alignment on priority of Fast Path work

**Examples:**

- High value customer feedback
- High value PoC request from prospect

---

## Team Planning Cadence

**Fortnightly engineering team outcome planning, prioritisation and estimation**

- Product and Engineering teams run a fortnightly planning cycle
- Product and Engineering Leadership and the delivery teams align on the outcomes they're targeting for a given cycle
- Estimating tickets within the Projects then aligns everyone on what's being committed to, and improves planning accuracy over time

---

## Escalation

**If there's disagreement:**

1. **First:** Involve the two disagreeing parties (usually director level)
2. **Second:** Head of Product decides on scope/timeline
3. **Third:** Executive leadership involved only if strategic direction is affected

---

## Related

- [Delivery Standards](./delivery-standards.md): the front door to the workflow
- [Lifecycle](./lifecycle.md): the statuses a project moves through
- [Gates and Approvals](./gates.md): what has to be true to move between phase groups
- [Decision Framework](./decision-framework.md): Signal → Standard → Speed, including the paths the Fast Path sits beside
- [Writing an RFC](../guides/writing-an-rfc.md): the one document a project carries from approval to ship
