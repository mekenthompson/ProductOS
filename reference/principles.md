---
title: ProductOS principles
status: derived from the ratified vision — edit if any read off
audience: anyone judging whether a skill, doc, or feature is good enough to ship in ProductOS
---

# ProductOS principles

The engineering-and-design standards that turn the [vision](vision.md) into
day-to-day quality gates. Applied to every skill, template, and doc. A "no"
on any check is a redesign, not a follow-up.

## 1. "Augment the judgment, automate the delivery"

The split the whole product rests on. Judgment stays human: the vision,
which jobs matter, the taste and integrity calls. Delivery can run as skills:
drafting, building, reviewing, running UAT. A skill that quietly makes a
judgment call has crossed the line.

**Check questions:**
- Does this leave the human owning the anchors and the taste calls?
- Is the thing being automated *delivery*, not *judgment*?
- When it hits a judgment-laden point, does it stop and ask rather than
  decide for the human?

**Examples:**
- ✅ `create-job-spec` interviews until the human aligns, then drafts. It
  never declares the job itself.
- ❌ A skill that auto-ranks the roadmap and commits it without the human's
  strategy call.

## 2. "Outcome over mechanism"

Everything anchors to the customer's job and its UX outcome, not the feature
or the tool. Artifacts stay durable across feature, code, even language
change.

**Check questions:**
- Is this defined by the user-observable outcome, or by an implementation?
- Would it survive a full rebuild of the feature underneath it?
- Does it name the job, not the requested feature?

**Examples:**
- ✅ A Job Spec whose good/bad and UAT survived the card→pacing rewrite
  untouched.
- ❌ A spec that re-describes the current build and has to be rewritten the
  moment the feature changes.

## 3. "It runs itself, and proves itself"

A recurring ritual becomes a versioned skill that produces an artifact and is
validated by outcome UAT, not a one-off chat. Built is not proven.

**Check questions:**
- Does this run as a re-runnable skill, or is it tribal knowledge in a
  transcript?
- Is its output validated against the user outcome, not just produced?
- Is there a fresh-process review before it's trusted?

**Examples:**
- ✅ `uat-ux-debug` seeds a fuzz corpus so the failure class can't silently
  recur.
- ❌ A "done" call based on green unit tests, with the user's job never
  exercised.

## 4. "Self-teaching"

The docs test, applied to the method. A fresh agent or PM can execute it from
the docs alone, without inventing structure or reaching outside.

**Check questions:**
- Could a fresh agent run this from the doc with no other context?
- Does the doc carry its own triggers and templates?
- If it has to invent structure, is that a doc bug to fix rather than paper
  over?

**Examples:**
- ✅ The Job Spec template + `create-job-spec` let a fresh agent author a
  spec unaided.
- ❌ A method that only works if the person who wrote it is in the room.

---

> Principles judge the job specs; they don't replace them. A change can do
> the user's job (its Job Spec) and still fail a principle (built badly).
> Both must pass, with the [vision](vision.md) outcome and the
> [invariants](invariants.md), in the verdict rule.
