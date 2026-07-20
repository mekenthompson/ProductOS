---
title: "create-rfc: interview to alignment, then write the ship-coupled RFC"
slug: skills/create-rfc
name: create-rfc
description: >
  Interview the user to shared alignment on a ship-coupled initiative, then
  write the RFC against the ratified template: JTBD-led, evidence-linked,
  failure-modes-first, guardrails from the real anchors, solution space open.
  Use when an initiative is bigger than a Lightweight brief and needs the
  Full Spec path, when turning an approved Job Spec into a delivery effort,
  or when someone says "write the RFC", "draft an RFC for this", "spec this
  initiative", "we need approval for this work", "turn this job spec into a
  delivery plan", "write this up for sign-off". The rule: interview one
  question at a time; never draft until the Job Spec is confirmed and every
  evidence link is real. Unknowns become Open Questions with owners, never
  filled-in guesses. Part of ProductOS; pairs with create-job-spec (the
  durable job this RFC serves) and review-doc (the gate it exits through).
---

# create-rfc: interview to alignment, then write the ship-coupled RFC

An **RFC** is the ship-coupled, per-initiative delivery document: one living
doc from approval through ship. It is not a spec tier of its own; it serves a
durable [Job Spec](../../templates/job-spec.md) and archives when shipped. It
answers "should we build this?" and "what must the build respect?" in one
place, and leaves *how* open.

The one rule of this skill: **interview the user one question at a time until
shared clarity, and never draft a section you cannot ground.** An RFC with
invented evidence gets approved on false pretences, and everything downstream
(the build, the rollout, the post-launch review) inherits the lie.

## Step 0: Ground yourself before asking anything

Read, in order:

- The **Job Spec** this RFC will `serves:`. If none exists, **stop and route
  to [create-job-spec](../create-job-spec/SKILL.md) first.** An RFC without a
  Job Spec restates the job from scratch and drifts from it; the method's
  whole point is that the durable job lives one layer up.
- The **anchors**: which vision outcome this advances, which principles the
  guardrails come from, which invariants the work must not cross.
- The **RFC template** ([templates/rfc.md](../../templates/rfc.md)): your
  output shape.
- Any **prior RFCs** against the same Job Spec: a retired approach is
  context the new RFC should narrate, not repeat.

Also confirm the path is right: work of half a day to two weeks is a
Lightweight brief, not an RFC; half a day is a Quick Win. Do not ceremonially
inflate small work (see [Writing an RFC](../../guides/writing-an-rfc.md)).

## Step 1: Interview to shared clarity (one question at a time)

Ask **one** question, wait, reflect back what you heard, then ask the next.
Lead each question with what you found in Step 0 so it is grounded, not
generic. Do not draft until every item below is settled and confirmed.

- **The job, confirmed.** Read the Job Spec back to the user in one line. Is
  this initiative genuinely an effort against that job, or a different job
  wearing its clothes? If it differs, the Job Spec conversation happens first.
- **The struggling moments, with evidence.** At least two specific scenarios
  where the user fails today, each with a real evidence pointer: a research
  doc, a ticket pattern, a quote source, an analytics query. **Ask for the
  link, not the summary.** If the user cannot point at evidence, record the
  moment as *hypothesis* and say plainly that the RFC's Confidence score will
  carry it; fewer than two evidenced moments means the honest move is
  discovery before drafting, and you should say that too.
- **Competing solutions, including "do nothing".** What does the user hire
  today? Why does each fail the job? If nothing here beats "do nothing",
  there is no case yet; surface that finding rather than writing around it.
- **Success, from the user's side.** The behavioural signal, the felt
  experience, and the metric movement with its interval. Push past "we
  shipped it": what does the *user* now do, feel, or decide? For Full Spec
  work, also extract the **commercial mechanism**: the specific, dated
  commercial claim the bet makes (a churn gap closed, an attach rate lifted
  by a date). Push until it is scoreable: it will be graded Fired / Partial /
  Missed / Unscoreable at the 90-day review, and vague is graded Unscoreable,
  which is worse than wrong. If the user cannot name a mechanism, say plainly
  that the bet reads as a feature in search of a reason.
- **Failure, all four modes.** Hard, soft, silent, adoption: what does each
  look like *for this initiative*, what root cause would you suspect, what
  signal detects it? The silent one is required and is the one users resist
  naming; do not move on until it is specific. Then the stop/pivot triggers:
  what condition kills this?
- **Guardrails, from the real anchors.** Walk the actual principles and
  invariants from Step 0 and ask which apply and what the check question is
  for each. Never write a generic guardrail ("must be performant"); every one
  is either a named principle, a named invariant, or a concrete
  performance/trust line with a threshold the user gave you.
- **The envelope, not the blueprint.** What MUST the solution do (outcomes),
  what MUST it NOT do, and, named explicitly, what is *free to vary*? If the
  user starts prescribing components or data models, reflect it back: is that
  a real constraint, or today's best guess that design should be free to
  beat?
- **Bets, risks, rollout shape.** What are we assuming *about the customer*
  that, if wrong, makes the RFC wrong? Mark each assumption **[LB]**
  (load-bearing) or **[S]** (supporting), and for every [LB] get the 90-day
  disproof: what evidence would show it is wrong. Where the Product Spec has a filled
  [customer model](../../templates/product-spec.md#the-customer-model),
  the [LB] assumptions should trace to it; flag any that trace to neither.
  Then the rollout shape (staged, shadow, champion-challenger, flag), and what
  instrumentation must exist before preview.
- **RICE, scored honestly.** Walk Reach, Impact, Confidence, Effort with the
  user. Confidence is bounded by the evidence gathered above, not by
  enthusiasm.

Anything still unknown at the end is an **Open Question with a named
resolver**, and you say so. An RFC with honest open questions is approvable;
an RFC with quietly invented answers is not.

## Step 2: Write the RFC from the template

Fill [templates/rfc.md](../../templates/rfc.md) exactly: Status table, TL;DR
(three sentences), The Job (link the Job Spec; do not restate it), How Users
Fail Today, Competing Solutions, User Success Modes, User Failure Modes (all
four, plus anti-patterns and stop/pivot triggers), Guardrails, Solution
Space, Evidence (three bullets max, linked out, with the Confidence score),
Bets & Risks (the key assumptions check, [LB]/[S] marked), Rollout, Open Questions.

Rules that hold while writing:

- Every evidence bullet links out; nothing is pasted in or paraphrased from
  memory.
- Every number in the document traces to something the user gave you or a
  linked source. No number appears because it sounded right.
- The Solution Space stays an envelope. If a MUST names a component, lift it
  back to the outcome it was standing in for.
- Frontmatter carries the doc class: `serves: <job-spec-slug>` (or `backs:
  <invariant-slug>` for a design record; if the user is writing standing
  architectural rationale rather than delivering a job, that is the variant
  they want).

## Step 3: Hand it to the gate

Do not self-certify. Hand the draft to
[review-doc](../review-doc/SKILL.md) as a **fresh process**, and give the
user the verdict with the findings. Iterate to APPROVE before the RFC enters
In Review with a human approver. The reviewer checks what you cannot see from
inside: whether your sections are answered or merely occupied.

## Output

1. The RFC file, written next to its Job Spec (confirm the path with the
   user), named with a kebab-case slug.
2. The up-anchor stated: which outcome it advances, which Job Spec it serves.
3. The open questions listed with owners: the honest unknowns.
4. The scoring handoff: remind the user that on approval the commercial
   mechanism, the [LB] assumptions, and the Confidence score are the
   prediction the RFC commits to, scored at the 90-day
   [post-launch review](../../product-playbook/templates/post-launch-review.md).
   An approved RFC whose mechanism never gets scored is an unscored bet.
5. The review-doc verdict, and what (if anything) is still blocking APPROVE.

## The self-teaching check (dogfood this skill)

Give a fresh agent this skill, the template, the Tempo example set, and a
vague feature ask ("we should add cross-location search"). It passes if it
routes to the Job Spec first, interviews one question at a time without
drafting, refuses to invent evidence (recording hypotheses as hypotheses),
names all four failure modes with a specific silent one, keeps the Solution
Space free of blueprint, and exits through review-doc. If it produces a
complete-looking RFC from the vague ask alone, it failed.

## Related

- [RFC template](../../templates/rfc.md) -- the output shape this skill writes to
- [Writing an RFC](../../guides/writing-an-rfc.md) -- lifecycle, paths, and approval
- [create-job-spec](../create-job-spec/SKILL.md) -- the durable job this RFC serves; run it first if the Job Spec is missing
- [review-doc](../review-doc/SKILL.md) -- the fresh-process gate this RFC exits through
- [RICE](../../product-playbook/rice.md) -- the scoring the Full Spec path carries
