# ProductOS

**A product operating system.** Not just a playbook you read — the playbook
*plus* the automation and agent-executable guidance (skills, templates, an
operating contract) that make it *run*.

ProductOS is the method. The working example in action is
**[switchroom](https://github.com/mekenthompson/switchroom)**.

> Augment the judgment, automate the delivery. Private for now; a public
> "lite" kit is a later export.

---

## The hierarchy

```
Vision · Principles · Invariants        three anchors (the why / built-well / never-cross)
        ↓
Product Spec                            per product — owns the job list
        ↓
Job Specs                               per job — durable, outcome-focused, UAT-verifiable
        ↓
RFCs / PRs                              ship-coupled delivery (not a named tier)
```

**Verdict rule.** A change ships only when it advances a vision outcome **and**
satisfies its Job Spec **and** passes every principle **and** crosses no
invariant.

---

## What's here

| Folder | What it is |
|---|---|
| **`anchors/`** | The three anchors — `product-vision`, `product-principles`, `invariants` — and how to write each. |
| **`guides/`** | The OS method: `agentic-delivery` (the verdict rule + four parts), `jtbd-guide`, `release-phases`, `product-specs` (the RFC how-to). |
| **`templates/`** | The blank shapes: `job-spec.md`, `rfc.md`. |
| **`skills/`** | Agent-executable skills: `create-job-spec`, `uat-ux-debug`. |
| **`pm-playbook/`** | The human PM craft: the six-phase loop, the handbook, the discipline guides, and their templates. Start at [`pm-playbook/index.md`](./pm-playbook/index.md). |
| **`AGENTS.md`** | The terse operating contract — read this to *execute* the method. |

---

## Start here

- **Run the method (agent):** [`AGENTS.md`](./AGENTS.md) — the gate, the triggers, the reviewer checklist.
- **Write a spec:** [`templates/job-spec.md`](./templates/job-spec.md) + the [`create-job-spec`](./skills/create-job-spec/SKILL.md) skill (it interviews you, then writes it).
- **Set the why / good / lines:** [`anchors/`](./anchors/).
- **Run product day to day (human):** [`pm-playbook/index.md`](./pm-playbook/index.md).

---

## The worked example

**[switchroom](https://github.com/mekenthompson/switchroom/tree/docs/job-spec-golden/reference)** —
real anchors, a product spec, and 19 Job Specs: the method filled in and
proven against a live UAT harness. When a guide here needs an example, it
points there.
