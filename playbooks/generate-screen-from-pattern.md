# Playbook: Generate a screen/flow from a pattern (framework-agnostic)

## Goal

Create a prototype screen by following a DLS pattern/recipe.

## Required inputs

- Pattern JSON: `red-dls4ai/patterns/<id>/pattern.json`
- Relevant contracts listed in `uses_contracts`
- Tokens + rules as described in `playbooks/use-tokens.md`

## Output expectations

- Provide semantic structure and accessibility (landmarks, headings, labels).
- Use the listed contracts as building blocks (or inline semantic HTML equivalents).
- Include handling for loading/empty/error when the pattern requires it.

## Guardrails

- Keep it simple and prototype-friendly.
- Do not hardcode colors/spacing; use tokens.
