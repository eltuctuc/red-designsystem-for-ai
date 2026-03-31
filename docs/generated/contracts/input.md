# Input (`input`)

Single-line text input contract (reference spec).

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Current value (controlled/uncontrolled depends on framework). |
| `placeholder` | `string` | no |  | Short hint text. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Shows validation error state; set aria-invalid and describe error. |

## States
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.
- `invalid`: Validation error state.

## A11y

### Keyboard
- Use <input> for native keyboard behavior.
- Tab focuses the control; Shift+Tab reverses.

### ARIA
- Label via <label for> or wrapping label.
- When invalid, set aria-invalid="true" and link error text with aria-describedby.

## Invariants

### Must
- Label must be programmatically associated with the input.
- Focus state must be clearly visible.

### Should
- Helper and error text should be short and actionable.

### Must not
- Do not indicate error only via color (add text and aria).

## Token usage
- `semantic.color.bg.surface` → Control background (Use surface background for inputs.)
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.radius.control` → Border radius (Use consistent control radius.)

## Examples

### Plain HTML reference

```html
<label for="name">Name</label><input id="name" name="name" />
```
