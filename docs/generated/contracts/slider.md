# Slider (`slider`)

Continuous or discrete value control. Use native <input type="range"> for prototypes when possible.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `number` | no |  | Current value. |
| `min` | `number` | no | `0` | Minimum value. |
| `max` | `number` | no | `100` | Maximum value. |
| `step` | `number` | no | `1` | Step size. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |

## States
- `focus-visible`: Keyboard focus indicator on thumb.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Arrow keys adjust value; PageUp/Down adjust larger steps (native range behavior).
- Tab focuses the control.

### ARIA
- Use native input type="range" when possible.
- If custom slider, use role="slider" and expose aria-valuemin/max/now plus accessible name.

## Invariants

### Must
- Value must be available to assistive tech (native or aria).
- Label must be associated with control.

### Should
- Show current value near the control (optional).

### Must not
- Do not implement a custom slider without strong reasons; native range is usually sufficient for prototypes.

## Token usage
- `semantic.color.bg.muted` → Track (Muted background for track.)
- `semantic.color.bg.accent` → Range fill (Accent fill for selected range.)
- `semantic.color.border.focus` → Focus ring (Use focus token for thumb focus-visible.)

## Examples

### Native range input reference

```html
<label for="s">Volume</label><input id="s" type="range" min="0" max="100" />
```
