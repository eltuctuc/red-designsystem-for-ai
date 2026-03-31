# Checkbox (`checkbox`)

Binary or multi-select choice. Prefer native <input type="checkbox"> for semantics and keyboard support.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `checked` | `boolean` | no |  | Current checked state (controlled/uncontrolled depends on framework). |
| `indeterminate` | `boolean` | no | `false` | Mixed state for hierarchical selections (visual only; manage separately from checked). |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `required` | `boolean` | no | `false` | Marks the field as required in a form. |

## States
- `checked`: Checked state.
- `indeterminate`: Mixed state.
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Space toggles checked state when focused (native checkbox behavior).
- Tab focuses the checkbox; Shift+Tab reverses.

### ARIA
- Use <input type="checkbox"> with an associated <label>.
- If indeterminate, set the DOM property input.indeterminate=true (not only aria).
- If you cannot use native input, mirror semantics using role="checkbox" and aria-checked.

## Invariants

### Must
- Label must be programmatically associated with the checkbox.
- Focus indicator must be visible.

### Should
- Clickable label increases hit area and improves usability.

### Must not
- Do not use checkbox for mutually exclusive choices (use radio group).

## Token usage
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.color.bg.surface` → Control background (Unchecked background in both themes.)
- `semantic.radius.control` → Control radius (Use consistent radius for form controls.)

## Examples

### Plain HTML reference

```html
<label><input type="checkbox" name="tos" /> I agree</label>
```
