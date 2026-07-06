---
title: "create-strategy: interview through the kernel, then write STRATEGY.md"
slug: skills/create-strategy
name: create-strategy
description: >
  Interview the user through Rumelt's kernel (diagnosis, guiding policy,
  coherent action) and write a STRATEGY.md against the ratified template:
  every Situation claim tagged evidenced / hypothesis / to-validate, an
  explicit investment allocation, decision tests that actually reject
  things, pillars funding named Job Specs, explicit deferrals, data gaps
  with validation paths, and the why-this-wins argument. Runs the
  bad-strategy smell test before anything is written to disk. Use when
  writing a product strategy for a new period, standing up strategy-as-code,
  or when someone says "write our strategy", "what should we fund this
  half", "draft the H2 strategy", "put our strategy in a file", "which jobs
  get capacity". Never for mid-period changes to an active strategy: that is
  amend-durable-doc, which requires a decision record. Part of ProductOS.
---

# create-strategy: interview through the kernel, then write STRATEGY.md

**STRATEGY.md** is the 12+ month, market-driven layer: given finite capacity,
which jobs are funded this period and which are explicitly deferred. Its
spine is Rumelt's kernel: **Situation** (diagnosis) → **Strategy** (guiding
policy) → **Pillars** (coherent action) → **Why This Wins** (the argument).
It is a versioned artefact: the git diff shows *what* changed, decision
records show *why* (see [Strategy as Code](../../guides/strategy-as-code.md)).

The one rule of this skill: **every claim earns its tag, and the strategy
survives the smell test before it is written.** Most bad strategy is not
wrong, it is *fluff*: goals restated as plans, buzzwords carrying claims they
cannot cash, a list of everything with nothing deferred. The interview
exists to squeeze that out before it reaches disk.

> [!NOTE]
>
> This skill authors a **new** strategy (a new product, or a new period
> superseding the old). Changing an **active** strategy mid-period is a
> ratified event that goes through
> [amend-durable-doc](../amend-durable-doc/SKILL.md) with a decision record.

## Step 0: Ground yourself before asking anything

- The **anchors**: strategy references the vision and must not fund anything
  that crosses an invariant. The anchors stay stable while strategy changes;
  do not blur the layers.
- The **Product Spec and Job Specs**: pillars fund Job Specs by slug; know
  what exists so the strategy links rather than re-describes.
- The **previous STRATEGY.md and its decision records**, if any: a new period
  responds to the last one; deferrals and data gaps carry forward or close.
- The **template** ([templates/strategy.md](../../templates/strategy.md)) and
  its embedded bad-strategy smell test: your output shape and your final
  gate.

## Step 1: Interview through the kernel (one question at a time)

Ask **one** question, wait, reflect back, then ask the next. Do not draft
until every part is settled.

- **The challenge.** What is the specific, hard obstacle this strategy faces?
  "Grow revenue" is a goal, not a challenge. If the user answers with a
  target, ask what stands between them and it; *that* is the diagnosis. No
  crisp challenge, no strategy; say so.
- **The Situation, claim by claim.** For each claim about the market, the
  competition, or the customer: *how do you know?* The answer sets the tag:
  data you can point to is **[evidenced]** (get the link or the source name);
  a reasoned belief is **[hypothesis]** (record what it is based on); an open
  question is **[to-validate]** and goes to Data Gaps with a validation path.
  Never let a hypothesis wear an evidenced tag because it is confidently
  phrased: the tags tell readers what is load-bearing, and a mislabeled one
  quietly transfers risk to everyone downstream. Keep only load-bearing
  claims; a Situation that pads reads as diagnosis but decides nothing.
- **The thesis.** Given that situation, what is the overall move, in one
  paragraph of plain language? This is a guiding *policy*, an approach with a
  point of leverage, not a restated target. Test it: does it tell you what to
  say no to? A thesis that rejects nothing is fluff.
- **The allocation.** Where does capacity go, in percentages that sum to
  100? The percentages force the trade-off to be explicit; a strategy that
  will not commit numbers is hedging. Include the unglamorous bucket (debt /
  resilience) deliberately rather than by omission.
- **The decision tests.** What must be true of an initiative for it to be
  funded this period? Then the check: would each proposed initiative the user
  currently has in mind *pass*? If everything passes, the tests are not doing
  any work; tighten them until they reject something real, and name what
  they reject.
- **The pillars.** For each funded bet: the thesis (what reality it responds
  to), the observable outcome or measure, and the Job Specs it funds, by
  slug. If a pillar funds a job with no Job Spec, that is a named gap for
  [create-job-spec](../create-job-spec/SKILL.md), not a reason to invent
  one. Each pillar maps to a row in the allocation table.
- **The deferrals, explicitly.** What are you deliberately NOT doing, why not
  now, and what would change it? This is the section users most resist and
  the one that makes the strategy legible. A strategy with an empty deferral
  table has not made choices; do not leave this section until it has real
  entries someone will be unhappy about.
- **The data gaps.** Every hypothesis and to-validate claim from the
  Situation lands here with: what would confirm it, what would falsify it,
  and how to get it. A gap without a falsification condition is not a gap,
  it is a hope.
- **Why this wins.** The coherent-action argument: why *this* set of bets
  with *this* capacity produces the outcome, rather than a different
  allocation of the same capacity. Ask for the dependencies it rests on and
  what would break it. It must survive an adversarial read; write it so a
  reviewer can find the weak points, because one will look.

## Step 2: Run the bad-strategy smell test, then write

Before writing, walk the template's four checks with the user, honestly:

- [ ] **No fluff** -- every Situation and Strategy line survives a
  plain-language rewrite.
- [ ] **Faces the challenge** -- the Situation names a specific, hard
  obstacle.
- [ ] **Strategy, not a goal** -- the Strategy section gives a chosen
  approach, not just a target.
- [ ] **Clean objectives** -- the pillars are a focused few, each more
  achievable than the raw challenge.

If any line fails, go back to the interview; the file is not yet a strategy.
Then fill [templates/strategy.md](../../templates/strategy.md) exactly:
period and status in the header, tagged Situation, thesis, allocation table,
decision tests, pillars with funded Job Spec slugs, deferrals, data gaps,
Why This Wins, and the smell test checked at the bottom.

If this strategy supersedes a previous one, mark the old file superseded and
write the accompanying [decision record](../../templates/decision-record.md)
(context, decision, consequences) in `decisions/`, linking the commit.

## Step 3: Hand it to the gate

Hand the draft to [review-doc](../review-doc/SKILL.md) as a fresh process.
The reviewer will hit the tags, the empty-deferral smell, and the pillar →
Job Spec links; iterate to APPROVE, then the strategy goes to the humans who
ratify it. Strategy is ratified by people, not by agents: your job ends at a
clean, honest draft.

## Output

1. `STRATEGY.md`, written to the strategy directory (confirm the path), plus
   a decision record in `decisions/` if this supersedes an active strategy.
2. The claim ledger: every Situation claim with its tag and source, so the
   ratifying humans can see what is load-bearing at a glance.
3. The gaps: Job Specs the pillars fund that do not exist yet, and the data
   gaps with their validation paths, as an honest backlog.
4. The review-doc verdict.

## The self-teaching check (dogfood this skill)

Give a fresh agent this skill, the template, and a user whose opening ask is
"our strategy is to grow ARR 3x by being the best platform". It passes if it
refuses that as a goal-not-strategy, interviews to a specific challenge, tags
every claim honestly (downgrading confident-but-sourceless ones), forces
real deferrals, and runs the smell test before writing. If the output's
Situation contains an untagged claim or the deferral table is empty, it
failed.

## Related

- [Strategy template](../../templates/strategy.md) -- the output shape, including the smell test
- [Strategy as Code](../../guides/strategy-as-code.md) -- the method: versioned strategy plus decision records
- [Decision Record template](../../templates/decision-record.md) -- written when a strategy is superseded or materially changed
- [amend-durable-doc](../amend-durable-doc/SKILL.md) -- the guarded path for changing an active strategy
- [review-doc](../review-doc/SKILL.md) -- the fresh-process gate this draft exits through
