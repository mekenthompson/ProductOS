---
title: "review-doc: the fresh-process document reviewer"
slug: skills/review-doc
name: review-doc
description: >
  Review a ProductOS document (Job Spec, RFC, Product Spec, Strategy,
  decision record) as the SEPARATE, fresh-process reviewer the operating
  contract demands: never the author. Returns APPROVE / REQUEST_CHANGES /
  BLOCK with a file:line citation for every finding. Checks template
  fidelity, altitude, groundedness (every claim traces to evidence or is
  labelled), and up-anchor integrity (serves:/backs: slugs resolve). Use
  after ANY document is drafted or changed, before it is treated as ratified.
  Triggers on natural phrasings including: "review this spec", "review this
  RFC", "is this job spec ready", "check this doc against the template",
  "does this strategy hold up", "gate this document", "run the reviewer",
  "can this be ratified". Part of ProductOS; the document counterpart to the
  code-review gate in the operating contract. Every create-* skill hands its
  output to this skill.
---

# review-doc: the fresh-process document reviewer

The operating contract is blunt: **dispatch a separate fresh-process reviewer,
never the author; it rubber-stamps.** This skill is that reviewer, for
documents. It exists because the failure mode of agent-written docs is not
absence, it is *plausible slop*: a spec with every heading present and every
section quietly fabricated. A reviewer that only checks shape approves slop.
This one checks shape, altitude, and truth.

> [!IMPORTANT]
>
> **Never review a document you authored in this same process.** If you drafted
> it (or a skill you ran drafted it), hand this SKILL.md and the document to a
> fresh process with no conversational context beyond the pointers in Step 0.
> An author reviewing its own work confirms its own assumptions; that is the
> rubber stamp this skill exists to prevent.

## Step 0: Identify the doc class, then ground yourself

Read the frontmatter key first; it tells you what you are reviewing and which
checklist applies:

| Frontmatter key | Doc class | Template to check against |
|---|---|---|
| `job:` | Job Spec (durable) | [templates/job-spec.md](../../templates/job-spec.md) |
| `serves:` (on an RFC shape) | Ship-coupled RFC | [templates/rfc.md](../../templates/rfc.md) |
| `backs:` | Design record backing an invariant | [templates/rfc.md](../../templates/rfc.md) |
| North Star / outcomes / job index | Product Spec | [templates/product-spec.md](../../templates/product-spec.md) |
| Situation / Pillars / Deferrals | Strategy | [templates/strategy.md](../../templates/strategy.md) |
| `date:` + `commit:` | Decision record | [templates/decision-record.md](../../templates/decision-record.md) |

Then load the grounding set: the **template** for the class, the **anchors**
(vision, principles, invariants), the **product spec** (for outcome slugs and
the job index), and any document this one points at (`serves:`, `backs:`, a
cited Job Spec or decision record). You cannot judge an up-anchor you have
not read.

## Step 1: Run the four checks

Work through all four for every document. Record each finding as it surfaces,
with `file:line`.

### 1. Template fidelity

Every section of the class template is present, in order, and **answered, not
occupied**. A heading with placeholder prose under it is a finding. Depth must
match the stakes (a Quick Win answers in a line; a high-stakes doc expands),
but the gates never disappear: a Job Spec with an empty `## Prove it`, a
missing silent failure in Good / bad, or no Abandon signal fails regardless
of stakes. An RFC with fewer than two evidenced struggling moments, or fewer
than the four named user-failure modes, fails. A strategy with untagged
Situation claims or an empty Deferrals table fails.

### 2. Altitude

Each layer has a working altitude, and leakage is the most common defect:

- **Job Spec:** no feature names, flags, files, vendors, or technology nouns;
  no numbers, dates, account names, or ARR (those live in Job Links and the
  RFC). If any line would not survive a full rewrite of the feature, it is
  implementation and it leaks.
- **RFC:** the Solution Space describes an envelope (MUST / MUST NOT / free to
  vary), never a blueprint. Prescribed components, layouts, or data models are
  findings.
- **Product Spec:** outcome altitude; runtime and architecture belong in docs/.
- **Strategy:** funds jobs, does not restate them; pillars link to Job Specs
  rather than re-describing them.

### 3. Groundedness

The anti-slop check. For **every** number, quote, evidence link, and named
source in the document, ask: *where did this come from?*

- Evidence links must resolve to something real. A link you cannot verify is
  flagged `unverifiable`, not assumed fine.
- Claims must carry their honest label: a Strategy claim is **evidenced**,
  **hypothesis**, or **to-validate**, and a stated Confidence score must match
  the evidence actually cited (Confidence 3 with one anecdote is a finding).
- A specific number with no source is presumed fabricated until traced.
  Fabrication is a **BLOCK**, not a REQUEST_CHANGES: a wrong document that
  reads as authoritative is worse than no document, because the whole fleet
  anchors to it.
- Honest gaps pass. `*(coverage gap: no runnable scenario yet)*` or a
  to-validate tag is the system working. The defect is confident invention,
  never admitted uncertainty.

### 4. Up-anchor integrity

The hierarchy only works if the pointers hold:

- `serves:` on a Job Spec names an outcome slug that **exists** in the Product
  Spec; `serves:` on an RFC names a real Job Spec; `backs:` names a real
  invariant.
- Named invariants exist in the invariants anchor, verbatim.
- The job index and the Job Specs agree (every indexed job exists; every job
  ladders to exactly one outcome).
- A change to a Job Spec's `job` / `outcome` / `stakes` lines, or a material
  STRATEGY.md change, cites its decision record. Those lines are
  diff-protected by the operating contract; a silent rewrite is a **BLOCK**.
  (Authoring-time review of a *new* doc skips this; it applies to changes. See
  [amend-durable-doc](../amend-durable-doc/SKILL.md).)

## Step 2: Return the verdict

One of three, using the operating contract's vocabulary:

- **APPROVE** -- every check passes. Say so plainly; do not invent findings to
  look thorough. A reviewer that always requests changes is as useless as one
  that always approves.
- **REQUEST_CHANGES** -- fixable defects. Every finding cites `file:line`,
  names which of the four checks it fails, and says what passing looks like.
- **BLOCK** -- fabricated evidence, a crossed invariant, a silent rewrite of
  diff-protected lines, or a doc pointing at anchors that do not exist. These
  are not polish items; the document must not be treated as ratified in any
  form until resolved.

Order findings most-severe first. Iterate with the author to APPROVE; do not
let anything downstream (an RFC citing the spec, a build citing the RFC)
proceed on an unratified document.

## Output

```
Verdict: APPROVE | REQUEST_CHANGES | BLOCK

Findings (most severe first):
1. [BLOCK] <file>:<line> -- <check failed> -- <what is wrong> -- <what passing looks like>
2. [CHANGE] <file>:<line> -- ...

Checked: template fidelity ✓/✗ · altitude ✓/✗ · groundedness ✓/✗ · up-anchor ✓/✗
Grounding set read: <the template, anchors, and pointed-at docs you actually read>
```

The `Grounding set read` line is not decoration: a reviewer that did not read
the up-anchors could not have checked them, and saying what you read keeps
you honest about what you verified versus assumed.

## The self-teaching check (dogfood this skill)

Seed a known-good document with five defects (a fabricated evidence link, a
missing silent failure, an implementation noun in a Job Spec, a `serves:`
slug that resolves nowhere, an untagged strategy claim) and hand a fresh agent
only this skill and the grounding set. It passes if it finds all five with
citations, and separately APPROVES the unseeded original without inventing
false blockers. Both halves matter: recall without precision is noise.

## Related

- [AGENTS.md](../../AGENTS.md) -- the operating contract and reviewer checklist this skill implements for documents
- [create-job-spec](../create-job-spec/SKILL.md) -- authors the Job Specs this skill gates
- [create-rfc](../create-rfc/SKILL.md) -- authors the RFCs this skill gates
- [amend-durable-doc](../amend-durable-doc/SKILL.md) -- the edit-time guard for diff-protected lines
- [uat-ux-debug](../uat-ux-debug/SKILL.md) -- reviews shipped *behaviour* against the docs; this skill reviews the docs themselves
