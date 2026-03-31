# Tooltip (`tooltip`)

Short helper text shown on hover/focus. Not interactive; avoid tooltips for essential information.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | no | `false` | Controls visibility. |
| `placement` | `string` | no | `"top"` | Preferred placement relative to trigger. |
| `delay` | `number` | no | `400` | Delay before showing (ms). |

## States
- `open`: Tooltip visible.
- `focus-visible`: Keyboard focus indicator on trigger.

## A11y

### Keyboard
- Tooltip should appear on focus and disappear on blur.
- Esc may dismiss the tooltip (optional but recommended).

### ARIA
- Tooltip content uses role="tooltip".
- Trigger references tooltip via aria-describedby (when tooltip is available).
- Do not move focus into tooltip.

## Invariants

### Must
- Tooltip must not contain interactive elements.
- Tooltip must not steal focus.

### Should
- Keep tooltip copy short (1 sentence).
- Avoid tooltips on mobile-only experiences; provide inline help instead.

### Must not
- Do not use tooltip to display critical information required to complete a task.

## Token usage
- `semantic.color.bg.surface` → Tooltip background (Use surface background; may need stronger contrast for small text.)
- `semantic.color.fg.default` → Tooltip text (Ensure readable contrast.)
- `semantic.shadow.surface` → Elevation (Subtle shadow for tooltips.)
- `semantic.motion.hover` → Show/hide motion (Use fast motion token.)

## Examples

### ARIA tooltip skeleton

```html
<button type="button" aria-describedby="tip-1">i</button><div id="tip-1" role="tooltip" hidden>More information.</div>
```
