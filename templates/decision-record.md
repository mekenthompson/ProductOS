---
date: <YYYY-MM-DD>
commit: <git SHA of the STRATEGY.md change this record accompanies>
title: <short slug — what changed, in plain words>
---

# Decision Record: <title>

> One record per material strategy change. Lives in `decisions/`. Links to the commit that updated STRATEGY.md. Together they are the complete record: the diff shows *what* changed; this shows *why*.

---

## Context

> What changed in the world that triggered this strategy update. A market event, a customer signal, a competitor move, a data point that came in — the external reality that made the previous view insufficient or wrong.

<Short paragraphs. Be specific. Name the signal, name when it arrived, name what it changed about your understanding. This is the evidence or observation that forced the decision.>

---

## Decision

> What we are now doing differently, in plain language. What the updated STRATEGY.md says that the previous version did not.

<What we changed and why. One clear paragraph. This should match what a reader would see in the git diff, narrated as intent.>

---

## Consequences

> What this commits us to, what we give up, and what we are now blind to. The honest accounting.

**Commits us to:** <what we are now doing that we cannot easily un-do — the capacity allocated, the direction set, the bets placed>

**Gives up:** <what we are no longer funding or pursuing that we previously were — or what we are deferring that someone will notice>

**Blind spots:** <what we are now less likely to see because of this direction — what would prove us wrong that we should still watch for>

---

> **Convention:** name this file `YYYY-MM-DD-<slug>.md` and place it in `decisions/`. The `commit:` frontmatter field links it to the STRATEGY.md commit it accompanies. If you write the record before committing, fill in the SHA after.
