# Search Input (`search-input`)

Text input optimized for search with clear affordances (icon, clear button). Prefer native <input type="search"> when feasible.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Current query value. |
| `placeholder` | `string` | no | `"Search…"` | Hint text. |
| `debounceMs` | `number` | no | `200` | Debounce delay for live filtering (0 disables). |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state (rare for search, but can exist). |

## States
- `focus-visible`: Keyboard focus indicator.
- `has-value`: Query is non-empty.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Use native <input type="search"> or <input> for keyboard behavior.
- Esc may clear the input (optional; must be consistent and documented).

### ARIA
- Provide an associated label or aria-label.
- Clear button must have an accessible name (e.g. "Clear search").
- If invalid, set aria-invalid and connect error with aria-describedby.

## Invariants

### Must
- Search input must have an accessible name.
- Clear action must not remove focus unexpectedly.

### Should
- Debounced search should still allow explicit submit (Enter) when used for server queries.
- Show a loading indicator if search triggers async results (optional).

### Must not
- Do not hide the clear action behind hover-only UI.

## Token usage
- `semantic.color.bg.surface` → Control background (Use surface background for search control.)
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible outline/ring.)
- `semantic.radius.control` → Control radius (Use consistent control radius.)

## Examples

### Plain HTML reference

```html
<label for="q">Search</label><input id="q" name="q" type="search" placeholder="Search…" />
```
