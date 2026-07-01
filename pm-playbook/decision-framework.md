---
title: "Decision Framework: Signal → Standard → Speed"
description: How to decide the right path for any piece of work
last_reviewed: 2026-05-12
icon: "📖"
---

# Decision Framework

**"One path for everything is no path at all."**

Every idea, request, or problem that reaches a PM needs an answer to one question: **what's the right path for this work?**

Not everything needs an RFC. Not everything is a quick win. The path should match the size and risk — not force everything through the same process.

---

## Three Paths

| | Quick Win | Lightweight | Full Spec |
|---|---|---|---|
| **Size** | ≤ half a day of engineering | Half a day – 2 weeks | > 2 weeks |
| **Process** | Flag with EM/PM, then ship | 1-page brief | Full RFC |
| **Approval** | EM/PM alignment | PM + Tech Lead | Head of Product sign-off |
| **Documentation** | Changelog if UX. Support notification always. | Problem, Solution, Acceptance Criteria, Metrics, Persona | RFC ([template](../templates/rfc.md)), RICE score |
| **Feature flag** | Optional | Yes | Yes |
| **Post-launch review** | No | 2-week check-in | 2wk / 30d / 90d reviews |

---

## The Decision Tree

Start here when any work arrives — from customer feedback, an engineer's idea, a sales request, or your own discovery.

### Step 1: Signal

Does this work have a reason to exist right now?

- **Strategy-aligned?** Does it connect to a current strategic lever?
- **Validated need?** Is there evidence beyond one person's opinion? (Customer feedback, usage data, support tickets, competitive gap)
- **What happens if we don't?** If the answer is "nothing," question whether this is the right use of engineering time.

If Signal is weak, park it. Capture the idea in your issue tracker with context, but don't invest further until evidence strengthens.

### Step 2: Standard

Does the proposed approach pass each of your [product principles](../anchors/product-principles.md)? Run the check questions for each principle against the proposed solution.

If Standard fails, redesign the approach before investing engineering time. A fast solution that violates principles creates more work later.

### Step 3: Speed

How big is the work? This determines the path.

**≤ half a day → Quick Win**
Flag it with your EM or PM. If it aligns with the team's current priorities, get on with it. No RFC needed, but use good judgment — each team has a limited budget for Quick Wins per sprint so we stay focused on strategic work. Changelog if it changes UX. Notify support always. Tag it `quick-win` in your tracker.

**Half a day – 2 weeks → Lightweight**
Write a 1-page brief (see template below). Get PM + Tech Lead sign-off. Ship behind a feature flag. Do a 2-week check-in after launch.

**> 2 weeks → Full Spec**
Write a full [RFC](../templates/rfc.md) with RICE score. Get Head of Product sign-off. Follow the full delivery process. (The RFC references the relevant [Job Spec](../templates/job-spec.md) — the durable outcome contract that outlives this initiative.)

---

## Lightweight Brief Template

Use this for work between half a day and 2 weeks. One page. No fluff.

```
## [Title]

**Persona:** Creator / Consumer / Sponsor
**Size:** [estimated days]
**Approved by:** [PM name] + [Tech Lead name]

### Problem
[2-3 sentences. Who has this problem? When? What's the evidence?]

### Solution
[What we're building. Keep it concrete.]

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### Metrics
[How we'll know it worked. 1-2 metrics with baselines.]

### Vision Check
How does this move a named outcome (and its signal) from the [product vision](../anchors/product-vision.md)?
```

---

## Examples

> Generic illustrations — the shape of each path, not a specification of yours.

### Quick Win: Clearer error message on a common failure

**Signal:** 12 support tickets in the last month. Customers see a generic failure message with no actionable explanation.
**Standard:** Passes all principles — the current error message violates the "self-teaching" standard.
**Speed:** 3 hours of engineering. One error string and a link to a relevant settings page.
**Path:** Quick Win. Ship it. Changelog entry. Support notified.

### Lightweight: Template gallery for a common setup

**Signal:** Creators spend 2–3 hours setting up patterns every team needs. 5 customer interviews confirm this. Strategy lever: Acquisition / faster time-to-first-value.
**Standard:** Batteries included — templates should give Creators a running start.
**Speed:** ~1 week of engineering. New UI surface with 5–10 curated templates.
**Path:** Lightweight brief. PM + Tech Lead approve. Ship behind flag. 2-week check-in.

### Full Spec: New native capability replacing a third-party tool

**Signal:** Top-3 deal blocker. 15 deal opportunities waiting on the native capability. Strategy lever: Expansion. RICE Grade B.
**Standard:** Must feel like part of the core product, not a bolted-on module.
**Speed:** ~2 months of engineering. New data flow, UI surfaces, API endpoints.
**Path:** Full Spec. RICE scored. Head of Product approval. RFC. Full delivery process.

---

## Common Questions

**What if I'm not sure about the size?**
Talk to your Tech Lead in the weekly scoping session. Sizing is a 5-minute conversation, not a week of analysis. If the Tech Lead says "I'm not sure," that usually means it's bigger than a lightweight — write the RFC.

**What about urgent customer issues?**
Urgent doesn't change the path — it changes the priority. A 3-day fix for a churning customer is still a Lightweight brief, but it goes to the top of the queue. The PM + Tech Lead approve same-day. Escalation to the Head of Product if needed.

**What about platform/infrastructure work?**
Same three paths. Tech debt, reliability improvements, and dependency upgrades use the same decision tree. The evidence is different (incidents, performance data, security advisories instead of customer interviews), but Signal → Standard → Speed still applies.

**Can a Quick Win grow into a Lightweight?**
Yes. If you start a Quick Win and realise it's bigger than expected, stop and write the brief. Don't scope-creep a Quick Win into an undocumented 5-day project.

**Who decides which path?**
The PM, informed by the Tech Lead's sizing. If there's disagreement, the PM decides the path (it's a process decision, not a technical one). If the Tech Lead thinks the PM is under-sizing, that's a conversation worth having before committing.

---

## Related

- [Product Playbook](./product-playbook.md) — The 6-phase operating model (this framework is Phase 2: DECIDE)
- [Product Vision](../anchors/product-vision.md) — Vision and personas
- [RFC Guide](../guides/product-specs.md) — Full Spec path guidance (writing a ship-coupled RFC)
- [RICE Assessment](./rice.md) — Scoring for Full Spec path

---

## Strategic Buckets

Strategy determines which buckets get capacity. RICE determines priority **within** those buckets. This keeps strategy driving allocation, not RICE gaming.

Each bucket gets a capacity allocation (e.g., 40% Growth, 30% Enterprise, 20% Platform, 10% DX). Buckets and allocations come from your annual strategy document and are revisited at least yearly.

---

## RICE Scoring

RICE = (Reach + Impact + Confidence) / Effort. Score 1–4 for value dimensions, 1–5 for effort. Grades A through D. See [RICE Assessment](./rice.md) for scoring details.

**Key rules:**
- **Update RICE after scoping** — effort estimates change. Re-score.
- **Don't optimise for RICE** — optimise for strategy, then let RICE rank within it.
- **Kill low-confidence work** — if Confidence is 1, do more discovery first.
- **Revisit deferred items quarterly** — priorities shift.

**Full guide:** [RICE Prioritisation](./rice.md)
