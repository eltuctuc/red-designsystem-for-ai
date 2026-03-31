# Playbook: Generate a component from a contract (framework-agnostic)

## Goal

Implement a UI component in the current project based on a DLS contract.

## Required inputs

- Contract JSON: `design-system/contracts/<id>/contract.json`
- Tokens CSS: `design-system/tokens/dist/theme.css`
- Rules: `design-system/rules/rules.json`

## Output expectations

- Use semantic HTML first (`button`, `a`, `input`, `table`, etc.).
- Implement keyboard + ARIA requirements from the contract.
- Style with CSS variables (`--ds-semantic-*`) and keep focus-visible ring.
- Include a minimal example usage snippet (HTML) and note any tradeoffs.

## Guardrails

- Do not invent new token names; use existing semantic tokens.
- Do not remove focus styles; respect reduced motion.
- If contract requires complex ARIA (combobox/tabs/dialog), follow the contract exactly.

