# Popover (`popover`)

Anchored floating surface for contextual content (non-modal). Consider using the HTML Popover API where available.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | no | `false` | Controls visibility. |
| `placement` | `string` | no | `"bottom"` | Preferred placement relative to trigger. |
| `dismissible` | `boolean` | no | `true` | Whether outside click and Esc can close the popover. |
| `modal` | `boolean` | no | `false` | When true, behaves more like a dialog (use sparingly). |

## States
- `open`: Popover is visible.
- `focus-visible`: Keyboard focus indicator on trigger or content elements.

## A11y

### Keyboard
- Trigger: Enter/Space toggles popover.
- Esc closes if dismissible is true and returns focus to trigger.
- Tab should move naturally; do not trap focus unless modal is true.

### ARIA
- If content is a simple region, use aria-expanded on trigger and aria-controls pointing to content.
- If the popover behaves like a dialog (modal=true), use role="dialog" and an accessible name.

## Invariants

### Must
- Popover must not obscure critical content without a way to dismiss it.
- Focus management must be predictable: on close, return focus to trigger.

### Should
- Close on outside click when dismissible is true.
- Support repositioning to stay within viewport.

### Must not
- Do not use popovers for essential information that must always be visible (use inline).
- Do not trap focus in a non-modal popover.

## Token usage
- `semantic.color.bg.surface` → Popover background (Use surface background for floating content.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow for floating surfaces.)
- `semantic.radius.surface` → Panel radius (Use surface radius for the popover panel.)
- `semantic.motion.ui` → Open/close animation (Use UI motion token for transitions.)

## Examples

### Trigger + region skeleton

```html
<button type="button" aria-expanded="false" aria-controls="pop-1">Details</button><div id="pop-1" role="region" hidden><p>Contextual content…</p></div>
```
