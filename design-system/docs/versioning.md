# Versioning (Semantic Versioning)

This repository follows **Semantic Versioning**: `MAJOR.MINOR.PATCH`.

Even while the version is still `0.x.y`, this document defines how we classify changes so history stays consistent and becomes GitHub/OSS-friendly.

## What counts as MAJOR

Changes that break existing consumers (humans, tools, or downstream AI prompts) by removing or changing meaning:

- **Token breaking changes**
  - Renaming/removing tokens (e.g. `semantic.color.bg.surface` removed/renamed).
  - Changing a token’s meaning (e.g. `bg.surface` becomes an overlay color).
  - Changing token output naming (e.g. CSS var mapping changes).
- **Schema breaking changes**
  - Removing required fields or changing required field types.
  - Tightening validation in a way that makes existing valid files invalid.
- **Contract / Pattern breaking changes**
  - Renaming/removing a contract/pattern `id`.
  - Changing required behavior semantics (e.g. keyboard/ARIA requirements).
  - Removing props/states/events or changing their meaning.
- **Rules breaking changes**
  - Introducing a new “must” invariant that would invalidate existing implementations by design.

## What counts as MINOR

Backwards-compatible feature additions:

- Adding new tokens (especially semantic tokens) without changing existing ones.
- Adding new optional fields to schemas (schema remains compatible).
- Adding new contracts/patterns.
- Adding new props/states/events that are optional and do not change existing meanings.
- Adding a new theme or theme-layer in a compatible way (e.g. `high-contrast`), without changing existing theme token meanings.

## What counts as PATCH

Backwards-compatible fixes and clarifications:

- Fix typos or improve wording in docs/contracts/patterns without changing required behavior.
- Fix build/check scripts without changing outputs or meanings.
- Adjust examples (HTML snippets) without changing the contract requirements.
- Add missing notes or links.

## Process

- Always update `CHANGELOG.md` when changing any public spec or tooling behavior.
- Prefer Git tags for releases; the `package.json` version should match release tags.

