# Divider (`divider`)

Visual separator between sections or items.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `orientation` | `string` | no | `"horizontal"` | Divider direction. |
| `label` | `string` | no |  | Optional label in the divider. |

## States

- (none)

## A11y

### Keyboard
- Divider is not interactive.

### ARIA
- Use <hr> for semantic horizontal separators when appropriate.
- If divider is purely decorative, it can be aria-hidden.

## Invariants

### Must
- Divider must not be the only way to convey grouping; use headings/spacing too.

### Should
- Use subtle contrast for dividers.

### Must not
- Do not overuse dividers; prefer whitespace for separation.

## Token usage
- `semantic.color.border.default` → Line color (Use default border for dividers.)

## Examples

### HR reference

```html
<hr />
```
