# Playbook: Use tokens + themes

## Inputs

- `tokens/dist/theme.css`
- `styles/base.css`

## Steps

1) Include CSS:

- import `tokens/dist/theme.css`
- import `styles/base.css`

2) Set theme:

- Light: `<html data-theme="light">`
- Dark: `<html data-theme="dark">`

3) Prefer semantic CSS variables:

- `--ds-semantic-*` for UI code
- `--ds-primitives-*` only for building new semantic tokens

