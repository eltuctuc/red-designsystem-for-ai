# Packaging plan

This repository is a **spec-first Design Language System**.

When you publish to npm later, the recommended split is:

- `@scope/dls-tokens`: compiled tokens outputs (`tokens/dist/*`, `styles/base.css`)
- `@scope/dls-spec`: machine-readable specs (`rules/`, `contracts/`, `patterns/`, `schemas/`)
- `@scope/dls-wc` (optional): reference Web Components implementation generated/bound to contracts (not part of v1)

This keeps prototyping fast while keeping the system framework-agnostic.

