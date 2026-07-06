---
title: "amend-durable-doc: the guarded path for changing what is diff-protected"
slug: skills/amend-durable-doc
name: amend-durable-doc
description: >
  Walk a change to a durable document through the operating contract's
  drift guard. A Job Spec's job / outcome / stakes lines and an active
  STRATEGY.md are diff-protected: narrating a retired implementation
  approach is routine, but changing the outcome itself or the funded bets
  is a ratified event that requires a dated decision record, never a silent
  edit. This skill classifies the change, blocks the silent path, and
  drafts the decision record when one is required. Use when editing an
  existing Job Spec or active strategy, when someone says "update the job
  spec", "the outcome changed", "we're changing the strategy mid-period",
  "rewrite this spec", "the job is different now", "retire this approach",
  or when uat-ux-debug surfaces a spec-gap clause to add. Part of
  ProductOS; the edit-time counterpart to review-doc's authoring-time gate.
---

# amend-durable-doc: the guarded path for changing what is diff-protected

The method's durable documents only work because they stay still. A Job
Spec's `job` / `outcome` / `stakes` lines are the contract everything anchors
to; an active STRATEGY.md is the record of what is funded. The operating
contract makes both **diff-protected**: without a guard, a "durable" Job Spec
decays into a description of whatever shipped, one reasonable-looking edit at
a time.

The distinction this skill enforces:

- **Narration is routine.** The implementation changed; the job did not. Add
  one line: *"We used to do X; we changed to Y; the job underneath is
  unchanged."* No ceremony.
- **Outcome change is a ratified event.** The `job`, `outcome`, or `stakes`
  line itself changes meaning, or a strategy's funded bets move mid-period.
  This needs a dated [decision record](../../templates/decision-record.md)
  and re-ratification by the humans who own the gates. A change to those
  lines **fails review unless it cites its decision record.**

## Step 0: Ground yourself

Read the document being changed, in full, plus: its up-anchor (the outcome a
Job Spec serves; the anchors a strategy references), anything pointing *at*
it (RFCs with `serves:` this spec; pillars funding this job), and the
`decisions/` directory for prior records. A change's blast radius is
everything that points here.

## Step 1: Classify the change

Take the proposed edit and sort every part of it into one of four classes.
An edit often carries more than one; classify each separately.

1. **Body edit within the contract.** New Prove-it scenario, a sharpened
   Good/bad line, a spec-gap clause from
   [uat-ux-debug](../uat-ux-debug/SKILL.md), depth added as stakes rose. The
   `job` / `outcome` / `stakes` lines do not move. → Proceed; exit through
   review-doc.
2. **Retired-approach narration.** The build changed underneath the job. →
   Add the one-line narration; never silently rewrite sections to match the
   new build as if the old approach never existed.
3. **Outcome change (Job Spec).** The `job`, `outcome`, or `stakes` line
   changes meaning, not just wording. Test honestly: would the old Prove-it
   scenarios still prove the new line? Would an RFC written against the old
   line still be in scope under the new one? If either answer is no, it is
   an outcome change however small the diff looks. → Decision record
   required; go to Step 2.
4. **Material strategy change.** Allocation percentages move, a pillar is
   added or dropped, a deferral is un-deferred, a decision test changes, on
   an *active* strategy. → Decision record required; go to Step 2. (A whole
   new period is [create-strategy](../create-strategy/SKILL.md), which
   supersedes rather than amends.)

When the user asks for a class-3/4 change as if it were routine ("just
update the outcome line"), do not refuse and do not comply silently: explain
the guard in one line and route to Step 2. The friction is the feature; it
is what keeps "durable" meaning something.

## Step 2: For ratified changes, draft the decision record first

Interview briefly, one question at a time, for the three sections of
[templates/decision-record.md](../../templates/decision-record.md):

- **Context:** what changed in the world? A market event, a customer signal,
  an abandon-signal firing, a bet falsified. Name the signal and when it
  arrived. If the user cannot name what changed *in the world*, ask whether
  the original line was wrong from the start; that is still a valid context,
  recorded honestly.
- **Decision:** what the document now says that it did not, narrated as
  intent, matching what the diff will show.
- **Consequences:** what this commits to, what it gives up, what it is now
  blind to. Push on the give-up: an outcome change that costs nothing was
  not load-bearing, which is its own finding. For a Job Spec outcome change,
  walk the blast radius from Step 0: which RFCs, pillars, and UAT scenarios
  now need updating? List them in the record.

Name it `YYYY-MM-DD-<slug>.md`, place it in `decisions/`, and note the
`commit:` field gets the SHA after the change commits.

## Step 3: Apply the edit and exit through the gate

Apply the document change *with* its citation: the changed Job Spec or
STRATEGY.md references its decision record (and the record will carry the
commit). Then hand both to [review-doc](../review-doc/SKILL.md) as a fresh
process: it treats an uncited change to diff-protected lines as a BLOCK, so
this is where the guard proves it held. Re-ratification of the changed line
is the human owner's call, not the agent's; present the diff, the record,
and the blast radius, and stop there.

## Output

1. The classification of each part of the change (1–4), stated plainly.
2. For ratified changes: the decision record in `decisions/`, the cited
   edit, and the blast-radius list of documents needing follow-up.
3. For routine changes: the applied edit with narration where an approach
   was retired.
4. The review-doc verdict.

## The self-teaching check (dogfood this skill)

Give a fresh agent this skill and three asks against the Tempo example: add
a Prove-it scenario (class 1), note that the sync mechanism was rebuilt
(class 2), and "update the outcome, we only aggregate two locations now"
(class 3). It passes if the first two proceed without ceremony, and the
third produces a decision record with a real give-up and a blast-radius
list before any line moves. If it edits the outcome line with no record, it
failed; if it demands a decision record for the Prove-it scenario, it also
failed: a guard that fires on everything protects nothing.

## Related

- [Decision Record template](../../templates/decision-record.md) -- the record ratified changes carry
- [Job Spec template](../../templates/job-spec.md) -- the diff-protected `job` / `outcome` / `stakes` contract
- [Strategy as Code](../../guides/strategy-as-code.md) -- why strategy changes pair a diff with a why
- [review-doc](../review-doc/SKILL.md) -- the gate that verifies the citation exists
- [uat-ux-debug](../uat-ux-debug/SKILL.md) -- the upstream source of spec-gap clauses (class-1 edits)
