---
name: create-job-spec
description: >
  Interview the user to shared alignment on a job-to-be-done, then write a
  durable Job Spec against the ratified template and the product's anchors.
  Use when starting a new job spec, turning a feature request into a job,
  or pinning down what "done" means for a user outcome BEFORE any design or
  build. The rule: interview one question at a time until shared clarity.
  Do NOT write the spec until every part is agreed. Triggers on natural
  phrasings including: "write a job spec", "create a job spec",
  "let's define the job", "what's the job here", "interview me on this job",
  "we need a spec for X", "turn this feature request into a job spec", "help
  me scope this outcome". Part of ProductOS (KEN-56); authors KEN-57 (the
  job spec). Pairs with uat-ux-debug (debug against a spec) and the
  Job Spec template.
---

# create-job-spec — interview to alignment, then write the job

A **Job Spec** is the durable, per-job outcome contract, read by both a
human (judging a change) and an agent (deciding what to do mid-task). It is
outcome-oriented and never tech-specific: features, code, even the language
can change underneath it while the job stays still.

The one rule of this skill: **interview the user one question at a time
until shared clarity, and do not write the spec until everything is agreed.**
A spec written from assumptions is worse than no spec, because the whole
fleet will anchor to it.

## Step 0 — Ground yourself before asking anything

Naive questions waste the user's time. First read what already exists, so
your questions are sharp:

- The **anchors**: the vision (the *why*), the principles (the *built-well*
  standards), the invariants (the by-construction lines).
- The **product spec**: the outcomes the product delivers, and the existing
  job index. The new job will `serves:` one of those outcomes.
- The **neighbours**: any existing job spec or design artifact near this
  job, so you don't duplicate or contradict.

In switchroom this is the `reference/` directory; in another product it's
wherever the design contract lives. The Job Spec **template** is your output
shape; read it now.

## Step 1 — Interview to shared clarity (one question at a time)

Ask **one** question, wait, then ask the next. Reflect back what you heard
before moving on. Stop only when every item below is settled and the user
confirms. Lead each question with what you found in Step 0 so it's grounded,
not generic.

- **Is this a job, or a feature in disguise?** If the user arrived with a
  solution ("add a button that…"), dig to the job underneath first: *what
  are they really trying to get done, and for whom, in what situation?* A
  feature request is a problem statement, not a spec. Find the job; there is
  usually a better way to meet it than the literal request.
- **The situation and the progress wanted.** Who is hiring this, when, to
  make what progress? Specific situation beats abstract persona.
- **Which outcome does it serve?** Name the product-spec outcome it ladders
  up to (`serves:`). If it ladders to none, it may be out of scope; say so.
- **The durable outcome vs the current build.** What is the user-observable
  end state that must stay true even if you rebuild it three times? That is
  the `outcome:`. Anything tied to today's feature is implementation, not the
  job.
- **Good vs bad, observable.** What does it look like when it's working, and
  what's the tempting-but-wrong thing that betrays the job? Push for
  user-observable behaviour, not internal state. These become the
  dual-audience good/bad.
- **Which invariants must it never cross?** From the invariants anchor.
- **How would you prove it?** What real, runnable scenario (per surface)
  would show the outcome is delivered? If none exists yet, that's a coverage
  gap to name, not to fake.
- **The stakes.** What breaks, and why does it matter, if you get this
  wrong?

Do not move to Step 2 until the user has confirmed the job, the outcome, and
the serves/invariants up-anchor. When in doubt, ask; never assume.

## Step 2 — Write the Job Spec from the template

Fill the template. Keep it to **one screen**; the frontmatter carries ~80%.

- Frontmatter: `job` / `outcome` / `stakes` (user-voiced, durable) +
  `serves:` + `invariants:`.
- `## The job`: one short paragraph. If an approach was retired, narrate it
  in one line; never silently rewrite the job.
- `## Good / bad`: the merged, observable, dual-audience decision aid.
- `## Prove it`: named by job × surface, each line pointing at a **real**
  scenario and the invariant it protects, plus a fuzz-corpus seed. Mark any
  missing scenario `*(coverage gap: no runnable scenario yet)*`; honest
  gaps are a finding, not a failure.
- `## Verdict`: one line, "Done when:".
- `## Production-readiness`: only if the stakes warrant it; omit for soft
  jobs.
- Footer: point to the design artifact that carries the *how* (a doc with
  `serves:` frontmatter), if one exists. Implementation never goes in the
  Job Spec body.

## Step 3 — Self-check before handing it over

- **Outcome-oriented?** Re-read every line. If any names a flag, a file, a
  PR, or a feature, it's implementation; move it to the design artifact.
- **Durable?** Would this survive a full rewrite of the feature? If not,
  you've described the build, not the job.
- **Dual-readable?** Can an agent mid-task act on the good/bad, and can a
  human review against it? Both, or rework it.
- **Verdict-rule ready?** It `serves:` a real outcome, names its invariants,
  has a one-line verdict, and its UAT asserts the user-observable outcome.
- **One screen?** If it's longer, implementation has leaked in.

## Output

1. The Job Spec file, written to the design-contract directory (confirm the
   path with the user if it isn't obvious from Step 0), named with a
   kebab-case slug matching the neighbouring job specs (e.g.
   `know-what-my-agent-is-doing.md`).
2. The up-anchor confirmed: which outcome it serves, which invariants it
   must not cross.
3. Any coverage gaps surfaced, listed plainly as a backlog.
4. If the user arrived with a feature request, a one-line note on the job
   you found underneath it and why it's broader than the literal ask.

## The self-teaching check (dogfood this skill)

Give a fresh agent only the template, the anchors, and this skill, plus a
raw user ask. It passes if it interviews to alignment one question at a time
(without writing prematurely), digs a feature request down to its job,
produces a one-screen template-faithful spec with a valid serves/invariants
up-anchor, and flags coverage gaps instead of fabricating scenarios. If it
has to invent structure, the skill failed its own docs test. Fix the skill.
