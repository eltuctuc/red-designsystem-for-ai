# Drawer / Sheet (`drawer`)

Overlay panel that slides from an edge (often mobile navigation or settings). Behaves like a dialog when modal.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | yes |  | Controls visibility. |
| `side` | `string` | no | `"right"` | Drawer edge. |
| `modal` | `boolean` | no | `true` | When true, background is inert and focus is trapped. |
| `dismissible` | `boolean` | no | `true` | Whether ESC and overlay click close the drawer. |

## States
- `open`: Drawer visible.

## A11y

### Keyboard
- On open, move focus into the drawer (title or first focusable).
- If modal, trap focus inside; Esc closes if dismissible.
- On close, return focus to the opener.

### ARIA
- If modal, use role="dialog" and aria-modal="true".
- Provide aria-labelledby (title) or aria-label as fallback.

## Invariants

### Must
- Drawer must be operable by keyboard only.
- Focus management must be correct (return focus on close).

### Should
- Avoid drawers for complex multi-step flows; use full pages or dialogs.

### Must not
- Do not allow focus behind a modal drawer.

## Token usage
- `semantic.color.bg.surface` → Panel background (Use surface background for drawer container.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow for sliding panel.)
- `semantic.motion.enter` → Open motion (Use enter motion token for slide-in.)

## Examples

### Dialog-like drawer skeleton

```html
<div role="dialog" aria-modal="true" aria-label="Menu"><button type="button">Close</button><nav aria-label="Mobile">…</nav></div>
```
