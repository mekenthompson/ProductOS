---
title: "Tempo: the Worked Example"
description: "What Tempo is, the situation it is in, and a map of every ProductOS doc filled in for it: strategy, product spec, job spec, job links, RFC, and decision records, one fictional company carried through the whole method."
sidebar:
  order: 1
---

# Tempo: the Worked Example

ProductOS is easier to trust when you can see it filled in. **Tempo** is the
fictional company we carry through every layer of the method, from a strategy down
to a single ship-coupled RFC, so each template has a worked example sitting next to
it. One company, one coherent story, every doc.

Everything here is illustrative. Tempo, its customers, its competitor, and all the
numbers are invented to make the method concrete, not to model a real business.

## What Tempo is

Tempo is team-scheduling software for **multi-location service operators**: gyms,
dental groups, care providers, anyone rostering staff across more than one site. A
scheduler at one of these operators uses Tempo to place shifts and bookings that
draw on staff spread across locations.

The company sells into the mid-market and has a handful of named accounts it lives
or dies by. Its edge is integration depth: Tempo connects to the HR, payroll, and
practice-management systems these operators already run, which a newer competitor
does not.

## The situation

Tempo's customers are outgrowing it at exactly the point they pass three
locations. Below three, a single calendar is fine. Above three, the scheduler's
day fills with coordination overhead: phoning each site to find out who is free,
then hand-building a picture in a spreadsheet.

Two things make this urgent. The core job (see everyone's free time at once) is the
one customers raise directly at renewal. And a new entrant, **Gridline**, has
shipped cross-location availability aggregation, so the gap is now competitive, not
just a nice-to-have.

## The cast

| Who | What they are | Why they matter |
|---|---|---|
| **Tempo** | The product | The company whose decisions these docs record |
| **FitClub** | 5-location gym operator, $120K | Largest account; in-quarter renewal; the anchor |
| **BrightSmile** | 4-location dental group, $60K | Open expansion; pressing on integration depth |
| **CityCare** | 3-location care provider, $35K | New pipeline; growth account if onboarding holds |
| **Gridline** | New competitor | Shipped the cross-location feature Tempo is racing to match |

## The worked example, doc by doc

Read top to bottom and you follow one decision down the whole chain: from the bet
the strategy makes, to the outcome it funds, to the durable job, to the accounts
riding on it, to the effort that ships it. The layers are the [Agentic
Delivery](../../guides/agentic-delivery.md) method; the table is Tempo in each one.

| Layer | Tempo example | What it shows |
|---|---|---|
| **Strategy** | [Tempo strategy](./STRATEGY.md) | The funded pillars, explicit deferrals, and data gaps for H1 2026, tagged by evidence level |
| **Product Spec** | [Tempo product spec](../product-spec-example.md) | The North Star, three outcomes each with a Signal, and the job index tying every job to a metric |
| **Job Spec** | [see-everyones-free-time-at-once](../job-spec-example.md) | The durable free-time job at full-stakes depth, with the gate that turns a bad build back |
| **Job Links** | [Tempo job links](../job-links-example.md) | The accounts, ARR, and renewal dates riding on that job, kept out of the durable spec |
| **RFC** | [Unified availability view](../rfc-example.md) | One ship-coupled effort to deliver the job, solution left open, guardrails firm |
| **Decision Records** | [initial H1](./decisions/2026-01-15-initial-h1-strategy.md) · [Gridline move](./decisions/2026-04-22-gridline-integration-move.md) | Why the strategy changed mid-period, the reasoning the git diff alone does not carry |

The two decision records are worth reading as a pair: the January one sets the H1
bet, and the April one revises it after Gridline ships integration depth. Together
they show a strategy that moved for a reason, which is the point of keeping the
*why* next to the *what*.

## Related

- [Agentic Delivery](../../guides/agentic-delivery.md) -- the method these layers belong to
- [Strategy as Code](../../guides/strategy-as-code.md) -- the thinking behind the strategy layer
- [JTBD Guide](../../guides/jtbd-guide.md) -- the job framing behind the Job Spec and RFC
- [Templates](../../templates/strategy.md) -- the blank shapes each example fills in
