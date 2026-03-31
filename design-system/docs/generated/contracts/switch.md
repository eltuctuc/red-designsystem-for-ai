# Switch (`switch`)

Binary on/off toggle for immediate settings. Prefer <button role="switch"> or checkbox semantics depending on implementation constraints.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `checked` | `boolean` | no |  | Current on/off state. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |

## States
- `checked`: On state.
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Space toggles when focused (common switch behavior).
- Tab focuses the switch; Shift+Tab reverses.

### ARIA
- If not using a native checkbox, use role="switch" and set aria-checked to true/false.
- Provide an accessible name via associated label or aria-label.

## Invariants

### Must
- Switch must clearly communicate on/off state via position and/or icon/text.
- Focus indicator must be visible.

### Should
- Use switch for immediate settings; use checkbox for multi-select in forms.

### Must not
- Do not use switch for navigation or mutually exclusive options.

## Token usage
- `semantic.color.bg.accent` → On track background (Use accent color in on state.)
- `semantic.color.bg.muted` → Off track background (Use muted surface for off state.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible outline/ring.)

## Examples

### ARIA switch reference

```html
<button type="button" role="switch" aria-checked="false">Notifications</button>
```
