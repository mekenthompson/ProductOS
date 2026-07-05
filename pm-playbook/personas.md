---
title: Personas
description: "How to write personas that are load-bearing: who hires the job, what good and bad look like, and how they tie back to the Job Spec"
last_reviewed: 2026-07-02
icon: "📖"
---

# Personas

A persona names *who* is hiring a job. It's the human on the other side of the [Job Spec](../templates/job-spec.md): the person in a situation, trying to make progress. Get the persona sharp and the job writes itself. The outcome, the stakes, and the good/bad lines all fall out of "who is this for and what are they really trying to do?" Get it vague and every downstream artefact inherits the fog.

This guide is about how to *write* a persona, not a fixed set to copy. There's no canonical list. What matters is that each persona you write is specific enough to be load-bearing: it predicts behaviour, it disambiguates an RFC, and it makes a trade-off visible instead of hiding it.

> [!IMPORTANT]
> A persona only earns its place when it changes a decision. If it never gets cited in a real Job Spec, RFC, or trade-off, it's decoration, so cut it.

---

## What a persona is for

A persona earns its place when it changes a decision. Concretely, a good persona:

- **Feeds the Job Spec.** The "who is hiring this, in what situation" line in a [Job Spec](../templates/job-spec.md) *is* the persona. If you can't name the persona, the job story is guessing.
- **Disambiguates an RFC.** Every RFC names its primary persona. If two personas look equally plausible, the persona descriptions aren't sharp enough yet.
- **Surfaces trade-offs.** When a change helps one persona at another's expense, naming both is what turns an accident into a decision.

If a persona does none of these, it's just a demographic sketch that never gets cited in a real decision. That's the decoration to cut.

---

## What good and bad look like

Personas follow the same discipline as the Job Spec's [Good / bad](../templates/job-spec.md) section: paired, observable, specific. A persona is written well when it reads like a motivation you could predict behaviour from, badly when it reads like a job title with a headshot.

**Good looks like**

- **A motivation, not a title.** "Ops manager accountable for throughput, judged monthly on error rate": the accountability predicts what they'll click, ignore, and complain about.
- **One sentence on the outcome they need:** the progress they're making, not a feature list. If it takes more than a sentence, you've merged two personas.
- **An explicit buy / don't-buy position.** It's clear whether this persona chooses the product, is handed it, or signs the cheque. That single fact reshapes the whole job.
- **A stated situation or trigger.** *When* they reach for the product (the moment that starts the job), not a static description of their role.
- **Testable against a real named customer.** You can point at three actual people and say "that's this persona."

> [!CAUTION]
> **Bad looks like (never ship these).**

- **A demographic card.** "Sarah, 34, marketing manager, likes efficiency." Nothing here predicts a single decision.
- **A role with no accountability.** "Developer" or "admin" is a category, not a persona; it doesn't tell you what they're judged on.
- **A features wishlist dressed as a person.** If the "needs" section is a backlog, you've described the product, not the human.
- **A persona nobody can find.** If you can't map it to a real customer contact, it's a hypothesis: label it as one or drop it.
- **One persona per feature.** Personas multiply to justify scope. Two-to-four that recur beat a dozen that appear once.

---

## Writing one

**1. Start from the job, not the org chart.** Ask who is trying to make progress, and in what situation. The persona is the answer to "who is hiring this job." A role ("procurement lead") becomes a persona when you add the accountability and the trigger ("procurement lead who has to justify spend at quarter-end and gets audited on it").

**2. Name what they're judged on.** The single sharpest thing you can add. What predicts a persona's behaviour is rarely their title; it's the metric or the boss they answer to. This is also what tells you which good/bad lines matter to them.

**3. Write the outcome in one sentence.** The progress they get, present tense, no features. If you need a list, you're describing two personas or a product tour.

**4. Fix their relationship to the money.** Do they choose the product, get handed it, or fund it? A user who didn't choose the tool judges it differently from the person who signed the contract. Make this explicit: it's the fact most often left implicit and most often load-bearing.

**5. Stress-test against three real customers.** Named people, not hypotheticals. Map each contact to a persona. Clean mapping = done. A contact that maps to "none of the above" means either a missing persona or a customer outside your ICP, both useful answers.

**6. Make it load-bearing.** A persona only earns its keep when it's cited. Put a primary-persona field on the RFC template. Slice adoption by persona. When a review surfaces a trade-off, name the persona on each side. A persona that never gets referenced quietly rots.

---

## How many, and the trade-off test

Two to four. One is too few to surface a trade-off; five is too many to hold in your head during a decision.

The test for whether your personas are real: look at the last three things you shipped. Can you say which persona each one served, *at the expense of* which other? If every feature appears to serve everyone equally, the personas are too vague to be doing any work; sharpen them until the trade-offs show.

A common and legitimate shape is a split between the person who *sets up* a product, the person who *uses* it day-to-day, and the person who *funds* it: three different humans with three different definitions of "working." But that's one useful pattern, not a required template. Some products have one persona; some have four. Write the ones your product actually has, and only the ones that change a decision.

One persona shape isn't a person at all. For API-shaped products, the one hiring the job can be an integrating system: another service calling your API at scale, with its integration constraint (a latency budget, a rare input it must handle, graceful degradation under load) standing in for the human situation. This isn't a rival persona doctrine, just the same "who is hiring the job, in what situation" discipline applied when the customer is a machine. The core [JTBD Guide](../guides/jtbd-guide.md#the-one-hiring-the-job-is-not-always-a-person) owns this shape; write the job story the same way, with the calling system as the persona.

---

## Related

- **[Job Spec](../templates/job-spec.md)**: the persona is the "who is hiring this" line; the Job Spec is where a sharp persona pays off.
- **[RFC Template](../templates/rfc.md)**: every RFC names its primary persona.
- **[JTBD Guide](../guides/jtbd-guide.md)**: Jobs to be Done, the motivation framing personas hang on. See the [four forces](../guides/jtbd-guide.md#the-four-forces-decide-whether-the-job-is-worth-serving) (push, pull, anxiety, habit) for what actually moves a persona to switch, and the [machine/API-consumer shape](../guides/jtbd-guide.md#the-one-hiring-the-job-is-not-always-a-person) for when the persona is a system.
