# Context Menu (`context-menu`)

Menu opened via right-click or context key. Similar to dropdown-menu but has different trigger semantics.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | no | `false` | Controls visibility. |
| `closeOnSelect` | `boolean` | no | `true` | Close after selection. |

## States
- `open`: Menu visible at pointer location.

## A11y

### Keyboard
- Context menu can be opened via Shift+F10 or the Context Menu key (recommended).
- Arrow keys navigate items; Enter selects; Esc closes and returns focus to target.

### ARIA
- Menu uses role="menu" and items role="menuitem" patterns.
- Target should manage focus; do not steal focus permanently.

## Invariants

### Must
- Context menu must be accessible without mouse (keyboard open supported).
- Closing returns focus to the target.

### Should
- Keep actions relevant to the target context.

### Must not
- Do not hide essential actions only in context menu.

## Token usage
- `semantic.color.bg.surface` → Menu background (Use surface background for menu panel.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow for floating menus.)

## Examples

### ARIA menu skeleton

```html
<div tabindex="0" aria-label="Item">Right click me</div><div role="menu" hidden><button role="menuitem" type="button">Rename</button></div>
```
