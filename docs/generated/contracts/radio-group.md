# Radio Group (`radio-group`)

Mutually exclusive selection. Prefer native <fieldset> + <legend> + <input type="radio">.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Selected option value. |
| `disabled` | `boolean` | no | `false` | Disables the whole group. |
| `required` | `boolean` | no | `false` | Marks the group as required. |

## States
- `selected`: Selected option.
- `focus-visible`: Keyboard focus indicator on an option.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Arrow keys move selection within the group (native radio behavior in many browsers).
- Tab focuses the selected radio or first radio.

### ARIA
- Use <fieldset> + <legend> for group labeling whenever possible.
- If non-native, use role="radiogroup" and role="radio" with aria-checked.

## Invariants

### Must
- Group must have an accessible label (legend or aria-labelledby).
- Exactly one option can be selected at a time.

### Should
- Use radio group when options are visible; use select when many options exist.

### Must not
- Do not use radio group for multiple selections (use checkbox group).

## Token usage
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.color.bg.accent` → Selected indicator (Use accent for selected dot.)

## Examples

### Plain HTML reference

```html
<fieldset><legend>Plan</legend><label><input type="radio" name="plan" value="basic" /> Basic</label><label><input type="radio" name="plan" value="pro" /> Pro</label></fieldset>
```
