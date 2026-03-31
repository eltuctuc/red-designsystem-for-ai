# Toast (`toast`)

Transient feedback message. Avoid stealing focus; ensure screen reader announcement is appropriate.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"neutral"` | Visual intent. |
| `duration` | `number` | no | `4000` | Auto-dismiss time in ms (0 disables auto-dismiss). |
| `dismissible` | `boolean` | no | `true` | Shows close control. |

## States
- `enter`: Toast appears.
- `exit`: Toast disappears.

## A11y

### Keyboard
- Toasts should not steal focus.
- If a toast contains an action button, it must be reachable by keyboard without disrupting user flow excessively.

### ARIA
- Use aria-live="polite" for neutral/success; consider aria-live="assertive" only for critical errors.
- Ensure close button has an accessible name.

## Invariants

### Must
- Toast content must be readable and not rely on color alone.
- Toasts must not block primary interactions.

### Should
- Limit to one or few visible toasts; queue additional messages.
- Provide an action for recoverable errors (optional).

### Must not
- Do not use toasts for long-form content or required confirmations.

## Token usage
- `semantic.color.bg.surface` → Container background (Use surface background for neutral toast.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow if toast overlays content.)
- `semantic.motion.ui` → Animation duration (Use motion token for enter/exit.)

## Examples

### ARIA live region reference

```html
<div aria-live="polite"><div role="status">Saved successfully.</div></div>
```
