# Date Picker (Spec-only) (`date-picker`)

Date selection control. Prefer native <input type="date"> for prototypes when acceptable; otherwise follow a11y calendar patterns.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Selected date in ISO format (YYYY-MM-DD). |
| `min` | `string` | no |  | Minimum date (YYYY-MM-DD). |
| `max` | `string` | no |  | Maximum date (YYYY-MM-DD). |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state. |

## States
- `open`: Calendar popover open.
- `invalid`: Error state.

## A11y

### Keyboard
- If using native input type="date", rely on platform behavior.
- If using custom calendar: Arrow keys move day focus; Enter selects; Esc closes.

### ARIA
- Label must be associated with the input.
- If custom calendar, follow ARIA grid/calendar patterns; provide aria-live updates for month changes where necessary.

## Invariants

### Must
- Use native date input when prototype constraints allow.
- If custom, keyboard navigation must be complete and documented.

### Should
- Show selected date in a clear format; allow manual typing with validation.

### Must not
- Do not create a custom date picker without strong reasons; it is easy to get a11y wrong.

## Token usage
- `semantic.color.bg.surface` → Control and popover background (Use surface background for input and calendar popover.)
- `semantic.shadow.overlay` → Popover elevation (Use overlay shadow for calendar.)

## Examples

### Native date input reference

```html
<label for="d">Due date</label><input id="d" type="date" />
```
