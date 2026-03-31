# Playbook: Use tokens + themes

## Inputs

- `red-dls4ai/tokens/dist/theme.css`
- `red-dls4ai/styles/base.css`

## Steps

1) Include CSS:

- import `red-dls4ai/tokens/dist/theme.css`
- import `red-dls4ai/styles/base.css`

2) Set theme:

- Light: `<html data-theme="light">`
- Dark: `<html data-theme="dark">`

3) Prefer semantic CSS variables:

- `--ds-semantic-*` for UI code
- `--ds-primitives-*` only for building new semantic tokens
