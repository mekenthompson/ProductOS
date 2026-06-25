---
title: Invariants
description: How to define your invariants — the third anchor; the lines you won't cross by construction
last_reviewed: 2026-06-17
icon: "🚧"
---

# Invariants

Invariants are the third anchor, beside the [Vision](./product-vision.md)
(the *why*) and the [Principles](./product-principles.md) (the *built-well*
standards). They are the lines your product **will not cross by
construction** — the *"are we even allowed / is this still us"* gate in the
[verdict rule](../guides/agentic-delivery.md).

This is a **guide**: it tells you what a good invariant looks like and how to
write your own. The invariants themselves belong to your product. For a
worked set, see the example in action below.

---

## Invariants are not principles

A principle is a quality standard you *check a change against*, and two
principles can be in tension so you trade them off. An invariant is
different: it is a hard line you don't trade, however useful a feature seems.
A change that breaks a principle is a redesign; a change that breaks an
invariant is **out of scope, full stop**.

Most invariants are compliance, identity, trust, or safety boundaries —
things that, if crossed, mean you're no longer building the same product (or
you're breaking a law, a policy, or a promise).

---

## What a good invariant looks like

1. **A line, not a preference.** It reads as "we will never X," not "we
   prefer Y." If a strong enough business case could flip it, it's a
   principle, not an invariant.
2. **A by-construction test.** Each invariant carries one yes/no question a
   reviewer (human or agent) can apply to any change: *does this cross the
   line?* If the answer can't be made mechanical, sharpen it.
3. **Few.** Like principles, a handful. If you have fifteen, most are
   principles or guardrails wearing the wrong hat.
4. **Named.** Each gets a short slug so a [Job Spec](../templates/job-spec.md)
   can declare the invariants it must never cross in its frontmatter.

---

## How to write yours

1. **Start from the vision's non-scope.** The strongest "we do not do X"
   lines in your [vision](./product-vision.md) are invariant candidates —
   the ones that are boundaries by construction, not just current priorities.
2. **Add the compliance / trust / identity boundaries.** What would put you
   outside a policy, a regulation, or your core promise to the user? Those
   are invariants whether or not the vision named them.
3. **Write the by-construction test for each.** One question, mechanical.
4. **Name each with a slug** and collect them in one anchor doc (e.g. an
   `invariants.md` in your design-contract directory) that Job Specs
   reference.

---

## The example in action

ProductOS does not hold its own invariants — it's the method. The worked
example is **switchroom** (the canonical instantiation), whose invariants
are a good model of the shape: `claude-native`, `no-self-escalation`,
`on-leash`, `single-tenant`, `telegram-only`,
`chat-is-the-single-source-of-truth`. Each is a by-construction line
with a one-question test, and each switchroom Job Spec names the invariants
it must never cross. See switchroom's `reference/invariants.md` and its job
specs for the pattern.

---

## Related

- [Product Vision](./product-vision.md) — the first anchor; it *names* the
  invariants that matter.
- [Product Principles](./product-principles.md) — the second anchor; standards
  you check against (and trade off), distinct from invariants you don't.
- [Agentic Delivery](../guides/agentic-delivery.md) — how the anchors fuse into the
  verdict rule (the invariant clause is the kill-clause).
