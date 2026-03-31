# Alert (`alert`)

Inline message to inform users about a status (info/success/warning/danger). Not transient; used inside page flow.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"info"` | Status intent. |
| `title` | `string` | no |  | Short summary. |
| `dismissible` | `boolean` | no | `false` | Whether the alert can be dismissed. |

## States
- `dismissed`: Alert hidden after dismissal.

## A11y

### Keyboard
- If dismissible, dismiss button is reachable via Tab and operable with Enter/Space.

### ARIA
- Use role="alert" for critical/danger messages that must be announced immediately.
- Use role="status" for non-urgent informational messages.

## Invariants

### Must
- Alert must be understandable without relying on color alone (icon + text).
- Actions (if present) must be clear and limited.

### Should
- Keep copy concise and actionable.

### Must not
- Do not use alerts as a replacement for form field errors (use inline-error/form-field).

## Token usage
- `semantic.color.state.info.bg` → Info background (Use state tokens for variants (info/success/warning/danger).)
- `semantic.color.state.info.fg` → Info text/icon (Ensure contrast in both themes.)
- `semantic.radius.surface` → Container radius (Use surface radius for alert container.)

## Examples

### Status role reference

```html
<div role="status"><strong>Saved.</strong> Your changes are live.</div>
```
