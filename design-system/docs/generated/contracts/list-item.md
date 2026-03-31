# List Item (`list-item`)

Composable list row (title + description + optional leading/trailing). Can be static or interactive.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `interactive` | `boolean` | no | `false` | When true, root is a link/button. |
| `selected` | `boolean` | no | `false` | Selected state for interactive lists. |

## States
- `hover`: Pointer hover (interactive).
- `focus-visible`: Keyboard focus indicator (interactive).
- `selected`: Selected (interactive).

## A11y

### Keyboard
- If interactive, use <a> or <button> for correct semantics.
- Avoid nested interactive elements inside an interactive row.

### ARIA
- If selected state exists, consider aria-current="page" for nav or aria-selected for listbox patterns (only if listbox semantics implemented).

## Invariants

### Must
- Row layout must be scannable (title primary, description secondary).

### Should
- Provide consistent alignment for leading/trailing content.

### Must not
- Do not make non-interactive rows focusable.

## Token usage
- `semantic.color.interactive.bg.hover` → Hover background (Use interactive hover background for highlight.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible.)

## Examples

### Interactive row as link

```html
<a href="/projects/alpha">Alpha <span>Active</span></a>
```
