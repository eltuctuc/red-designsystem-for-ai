# Button (`button`)

Clickable action control. This is a contract/spec, not a mandatory implementation.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"primary"` | Visual intent of the button. |
| `size` | `string` | no | `"md"` | Controls height/padding and text size. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `loading` | `boolean` | no | `false` | Shows busy state; should prevent repeated submission. |

## States
- `hover`: Pointer hover.
- `active`: Pressed/clicked state.
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.
- `loading`: Busy state.

## A11y

### Keyboard
- Use <button> whenever possible to get keyboard and semantics for free.
- Enter/Space should activate (native button behavior).

### ARIA
- If loading is true, set aria-busy="true" on the button or nearest relevant container.
- If disabled is true, use the disabled attribute on <button> (not only aria-disabled).

## Invariants

### Must
- Keep a visible focus indicator (do not remove outline without replacement).
- Ensure minimum hit area (~40px height or equivalent padding).

### Should
- Prefer semantic tokens for colors and borders.
- When loading, keep label readable or provide accessible name.

### Must not
- Do not rely on color alone to indicate the variant (use shape/label/icon where needed).

## Token usage
- `semantic.color.bg.accent` → Primary background (Used for primary variant; other variants map to bg.surface/muted/danger.)
- `semantic.color.fg.onAccent` → Primary foreground (Ensure contrast in both themes.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible outline/ring.)
- `semantic.radius.control` → Border radius (Use for button shape.)
- `semantic.space.controlPadX` → Horizontal padding (Baseline padding for md size; sm/lg can scale from primitives.space.)

## Examples

### Plain HTML reference

```html
<button type="button" data-variant="primary">Save</button>
```
