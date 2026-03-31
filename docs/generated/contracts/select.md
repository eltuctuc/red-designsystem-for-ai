# Select (`select`)

Single selection from a list. Prefer native <select> for accessibility and platform behavior.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Selected value. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state. |

## States
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.
- `invalid`: Validation error state.

## A11y

### Keyboard
- Use native <select> to get correct keyboard behavior across platforms.
- Tab focuses select; Arrow keys change selection depending on platform.

### ARIA
- Label via <label for> or wrapping label.
- If invalid, set aria-invalid and connect error with aria-describedby.

## Invariants

### Must
- Label must be programmatically associated with the select.
- Keep focus indicator visible.

### Should
- Prefer select when options are many; prefer radio group when options are few and benefit from visibility.

### Must not
- Do not replace native select with custom combobox unless you need search/virtualization.

## Token usage
- `semantic.color.bg.surface` → Control background (Use surface background for controls.)
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.radius.control` → Border radius (Use consistent control radius.)

## Examples

### Plain HTML reference

```html
<label for="country">Country</label><select id="country" name="country"><option>Germany</option><option>France</option></select>
```
