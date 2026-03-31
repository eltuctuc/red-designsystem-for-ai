# Nav Item (`nav-item`)

Single navigation item used in navbar/sidebar. Prefer <a> for navigation; supports icons, badges, and active state.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `href` | `string` | no |  | Destination url (navigation). |
| `active` | `boolean` | no | `false` | Active/current state. |
| `disabled` | `boolean` | no | `false` | Non-interactive state. |

## States
- `active`: Current location.
- `focus-visible`: Keyboard focus indicator.

## A11y

### Keyboard
- Use native link for navigation so Enter works by default.

### ARIA
- Active item uses aria-current="page".
- If disabled, avoid focus; if focusable, clearly indicate state and block activation.

## Invariants

### Must
- Active state must not rely on color alone (indicator/underline/shape).

### Should
- Icons must have accessible name via label; decorative icons are aria-hidden.

### Must not
- Do not use nav item for actions (use buttons).

## Token usage
- `semantic.color.border.focus` → Focus ring (Use focus token for focus-visible.)
- `semantic.color.interactive.bg.hover` → Hover background (Use interactive hover background for nav hover.)

## Examples

### Active nav link

```html
<a href="/projects" aria-current="page">Projects</a>
```
