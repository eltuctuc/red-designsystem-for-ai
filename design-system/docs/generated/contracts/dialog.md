# Dialog (Modal) (`dialog`)

Modal overlay for critical tasks. Prefer native <dialog> when feasible; otherwise implement a11y correctly.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | yes |  | Controls visibility. |
| `dismissible` | `boolean` | no | `true` | Whether ESC and overlay click can close the dialog. |
| `title` | `string` | no |  | Dialog title (should be rendered as heading). |

## States
- `open`: Dialog is visible and modal.

## A11y

### Keyboard
- On open, move focus to the dialog (or first focusable element).
- Trap focus within the dialog while open.
- ESC closes only if dismissible is true.

### ARIA
- Use role="dialog" and aria-modal="true" (unless using native <dialog>).
- Provide aria-labelledby pointing to the title, or aria-label as fallback.
- Ensure background content is inert or aria-hidden while open.

## Invariants

### Must
- Dialog must be reachable and operable by keyboard only.
- Visible focus indicator must be preserved.
- A close action must be available (button or explicit cancel action).

### Should
- Avoid dialogs for non-critical content; prefer inline or page navigation.

### Must not
- Do not trap focus when dialog is not open.
- Do not allow focus to move behind the dialog while open.

## Token usage
- `semantic.color.bg.canvas` → Overlay backdrop base (Backdrop is typically a translucent overlay over canvas/surface.)
- `semantic.color.bg.surface` → Dialog background (Use surface background for dialog container.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow for modal container.)
- `semantic.radius.surface` → Corner radius (Use surface radius for containers.)

## Examples

### ARIA dialog skeleton

```html
<div role="dialog" aria-modal="true" aria-labelledby="dlg-title"><h2 id="dlg-title">Confirm</h2><p>Are you sure?</p><button type="button">Cancel</button><button type="button">Confirm</button></div>
```
