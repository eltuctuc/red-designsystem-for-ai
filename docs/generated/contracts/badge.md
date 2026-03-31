# Badge (`badge`)

Small status label or count. Not interactive by default.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"neutral"` | Visual intent of the badge. |
| `size` | `string` | no | `"md"` | Controls padding and font size. |

## States

- (none)

## A11y

### Keyboard
- No keyboard interaction when badge is non-interactive.

### ARIA
- If badge conveys dynamic status, ensure the surrounding context includes accessible text.
- If used as a count, avoid relying on color alone (e.g. include the number).

## Invariants

### Must
- Badge content must remain readable in both themes.

### Should
- Keep labels short (1–2 words) or numeric.

### Must not
- Do not use badges as primary calls to action (use buttons/links).

## Token usage
- `semantic.color.bg.muted` → Neutral background (Use muted background for neutral badges.)
- `semantic.color.fg.default` → Text color (Ensure contrast for all variants.)
- `semantic.radius.control` → Shape (Badge can use pill-like radius; if so, reference primitives.radius.pill.)

## Examples

### Plain HTML reference

```html
<span data-variant="success">Active</span>
```
