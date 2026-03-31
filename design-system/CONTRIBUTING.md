# Contributing

## Principles

- **Specs are the source of truth**: tokens, rules, contracts and patterns should be machine-readable and validated.
- **Prefer standards**: use semantic HTML and WAI-ARIA patterns; avoid custom roles unless required.
- **Prototype-friendly**: contracts/patterns define constraints and invariants, not one fixed implementation.

## Naming

- IDs are **kebab-case** and stable (`button`, `dropdown-menu`, `data-browsing`).
- Token paths are **dot-separated** and stable (`semantic.color.bg.surface`).
- New tokens should be **semantic-first**; primitives are allowed but should not be used directly by app code.

## Versioning impact

Before merging, decide whether the change is **major**, **minor** or **patch** per `docs/versioning.md` and update `CHANGELOG.md`.

## Checks

Run (when available):

```bash
npm run check
```

