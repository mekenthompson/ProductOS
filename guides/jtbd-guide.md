---
title: Jobs to be Done in ProductOS
description: How ProductOS applies Christensen and Moesta's Jobs to be Done to frame a job a Job Spec can carry, one that is durable, testable, and actionable by a human or an agent.
last_reviewed: 2026-07-03
icon: "📖"
---

# Jobs to be Done in ProductOS

> People don't buy products. They hire them to get a job done.
>
> Clayton Christensen, Harvard Business School

Jobs to be Done is not ours. The theory is Clayton Christensen's, the demand-side
interview and the forces that drive a switch are Bob Moesta's, and the job-story
sentence is Alan Klement's. We did not invent any of it, and this guide points you
to the originals.

What ProductOS adds is the **application**: we make a job into an executable
artifact rather than a research insight. The same job a marketer positions against
and an analyst instruments is the one an agent reads mid-task to decide what to
build, and the one a gate checks a change against. That is the claim of this page,
and the rest of it is about how to frame a job so it survives that translation into
a [Job Spec](../templates/job-spec.md).

## What we take, and from whom

Credit where it is due, because the sources are worth reading in full.

- **The job, and the hiring metaphor: Christensen.** A customer hires a product to
  make progress in a situation. The job is stable; the products they hire and fire
  to do it come and go. See *Competing Against Luck* and the HBR article below.
- **The four forces, and the interview: Moesta** (with the Re-Wired Group). Demand
  for a new solution is a tug-of-war between forces that push toward change and
  forces that hold people in place. You surface them by interviewing for the
  timeline of an actual switch, not by asking a persona what they want.
- **The job story: Klement.** The `When… I want to… so I can…` sentence that keeps
  the job separate from the solution.

Where ProductOS departs is what happens *next*. Standard JTBD ends at insight: a
readout, a deck, a shared understanding. We do not stop there. We force the job
into a Job Spec, because a job that only lives in someone's head cannot be handed
to an agent, checked by a gate, or validated before a line of code is written.

## The job story keeps the job separate from the solution

Use Klement's job story, not a user story:

> ~~As a [persona], I want [feature] so that [benefit]~~
>
> **When** [situation], **I want to** [motivation], **so I can** [outcome].

The user story starts with a persona (an assumption) and names a feature (a
solution). The job story starts with a **situation** (observable) and a
**motivation** (the real problem), and it leaves the solution open. That is what
lets one job outlive many implementations, which is the whole point of a Job Spec
that stays still while the build changes underneath it.

**Make the situation specific.** The richer the "When", the more the design is
already constrained in useful ways.

- *Weak:* When I want to see what's happening.
- *Strong:* When something fails right before a deadline and I need to know whether
  it was my change or the system, before standup.

**Keep the solution out of it.** "When I need to investigate, I want to open the
logs tab" has baked in the answer. "When I need to investigate, I want to understand
what failed and why" has not. Multiple solutions can serve the second; only one
serves the first.

The three parts map straight into the Job Spec frontmatter: the situation and
motivation become the `job`, the outcome becomes the `outcome`.

## The struggling moment is the durable core

Every Job Spec requires one concrete, present-tense trigger: *"When X happens, the
user is stuck because…"* This is the moment the current approach fails, told as a
story, not a statistic. It is the most durable thing in the spec, because the
situation that creates the job changes far more slowly than any product that serves
it. Numbers, accounts, and evidence for how often it happens drift, so they live in
[Job Links](../templates/job-links.md) and the RFC, never in the moment itself.

## The four forces decide whether the job is worth serving

This is the part standard summaries treat as a footnote and ProductOS treats as
load-bearing. Moesta's four forces are the tug-of-war behind any switch:

- **Push** of the situation: the pain with how things are now.
- **Pull** of the new way: the attraction of a better outcome.
- **Anxiety** about the new way: the fear of switching, the unknowns.
- **Habit** of the present: the comfort and sunk cost of the current approach.

Push and pull move the customer toward you. Anxiety and habit hold them where they
are. The job is only worth serving if the first pair beats the second, and the gap
between them **is the bar you have to clear**. A real job with weak push or sticky
habit is a job customers will not switch for, however well you build it.

That reading is not an aside; it becomes two sections of the Job Spec:

- The net of the forces is the **bar to beat** in *Today's alternatives*: you are
  competing with the current way of doing the job *plus* the anxiety and habit that
  keep the customer in it.
- The force you are most betting on is **The bet**: the falsifying assumption you
  validate before building. "We are betting the push is strong enough, and the
  habit weak enough, that they will switch." If that is false, stop.

## What they hire today: name the real competition

Ask what the customer hires *now* to make this progress, and be honest that it is
usually not the obvious rival. JTBD names three, and all three belong in the Job
Spec's *Today's alternatives*:

- **Non-consumption.** They do nothing, tolerate the pain, or keep the problem
  small enough to ignore. Often your biggest competitor.
- **A manual workaround.** A spreadsheet, a process, a chain of messages. It works,
  which is exactly why it is hard to beat.
- **A rival product.** The named competitor, which is the alternative teams
  overweight because it is the one they can see.

Your solution has to beat whichever of these the customer actually uses, including
the switching cost of leaving it. This is also where product marketing starts: you
position against the alternative, and sales objection-handling ("why not just keep
using the spreadsheet?") comes straight off it.

## From the forces to the bet, and to the abandon signal

Framing the job this way gives the Job Spec its validation spine for free.

- **The bet** is the forces reading stated so it can be killed: the assumption about
  push, pull, anxiety, or habit that the job depends on. You validate it first,
  before any design, by watching whether real people in the situation actually
  switch.
- **The abandon signal** is that same reading proven wrong by reality: if the
  customer reaches the outcome and still goes back to the old way, the forces were
  not what you thought, and the job you named was not the job they have.

A job you can frame but cannot falsify is a job you have not understood yet.

## The one hiring the job is not always a person

The persona framing assumes a human in a moment. Sometimes the one hiring the job
is an integrating system: another service calling your API at scale, not a person
at a screen. That is a recognised persona shape, not an exception. The struggling
moment is still real, just expressed in integration terms. The machine consumer is
stuck when a call is too slow for its own latency budget, returns nulls for a rare
input it must handle, or fails to degrade under load instead of erroring the whole
request. Write the job story the same way, with the calling system as the persona
and its integration constraint as the situation, so API-shaped products have a home
here rather than being forced into a human frame that does not fit.

## How a framed job flows into the Job Spec

This mapping is the ProductOS-specific part, and the reason the framing effort pays
off. Each JTBD concept lands in a named Job Spec section:

| JTBD concept | Job Spec section |
|---|---|
| Job story (situation, motivation, outcome) | `job` and `outcome` frontmatter |
| The struggling moment | The job (struggling moment) |
| Four forces, net gap | Today's alternatives (the bar to beat) |
| Competing solutions (non-consumption, manual, rival) | Today's alternatives |
| The force you bet on | The bet |
| Forces proven wrong by reality | Abandon signal |
| Functional, emotional, social dimensions | Good / bad, and the outcome |

## Capture jobs by interviewing for the switch

Moesta's method is to interview for the timeline of a real decision, not to ask a
persona what it wants. You cannot ask a persona about its anxieties.

Listen for the struggling moment, the situation around it, and the forces that
pushed the person to act or held them back. Record their actual words, not your
interpretation. Useful prompts:

- "Walk me through the last time you had to do this."
- "What was going on that made you look for a solution?"
- "What did you try before this, and what did you do instead?"
- "What almost stopped you from switching?"
- "What would you do if this did not exist?"

## Common mistakes

- **Starting from the solution.** "I want a feature that…" skips the job. Start with
  "When…".
- **Framing by persona instead of situation.** The same person has different jobs in
  different moments. Situations are observable; demographics are not.
- **Vague situations.** Without time pressure, emotion, and constraint, you cannot
  design anything specific.
- **Ignoring the forces.** If you never name the anxiety and the habit, you will
  ship something better than nothing and lose to something good enough.
- **One job per feature.** Features serve several jobs. Map the jobs first, then
  connect them to solutions.

## Sources

- [Know Your Customers' Jobs to Be Done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done) -- Clayton Christensen, HBR
- *Competing Against Luck* -- Christensen, Hall, Dillon, Duncan (the theory in full)
- *Demand-Side Sales 101* -- Bob Moesta (the interview and the four forces)
- [Replacing the User Story with the Job Story](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27) -- Alan Klement
- [When Coffee and Kale Compete](http://www.whencoffeeandkalecompete.com/) -- Alan Klement (free book)

## Related

- [Job Spec template](../templates/job-spec.md) -- the standing per-job doc the framed job flows into
- [Job Spec example](../examples/tempo/job-spec.md) -- a job carried from story to full spec
- [Writing an RFC](./writing-an-rfc.md) -- the ship-coupled delivery doc that opens with the job
- [Agentic Delivery](./agentic-delivery.md) -- how the standing Job Spec anchors agent-delivered work
