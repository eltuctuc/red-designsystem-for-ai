# Accordion (`accordion`)

Expandable/collapsible content sections. Prefer native <details>/<summary> for prototypes when suitable.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `type` | `string` | no | `"single"` | Single allows one open item; multiple allows many. |
| `collapsible` | `boolean` | no | `true` | Whether the open item can be collapsed. |

## States
- `open`: Item expanded.
- `focus-visible`: Keyboard focus indicator on trigger.

## A11y

### Keyboard
- Trigger is a button and toggles with Enter/Space.
- Tab navigates between triggers and focusable content inside open panels.

### ARIA
- Trigger uses aria-expanded and aria-controls pointing to panel id.
- Panel has role="region" and aria-labelledby pointing to trigger (recommended).

## Invariants

### Must
- Expanded state must be exposed via aria-expanded.
- Panels must be associated with triggers via ids.

### Should
- Prefer <details>/<summary> for prototypes when semantics fit.

### Must not
- Do not hide important information behind accordions without a clear discoverability.

## Token usage
- `semantic.color.border.default` → Item separators (Use default border for dividers between items.)
- `semantic.motion.ui` → Expand/collapse motion (Use UI motion token; respect reduced motion.)

## Examples

### Native details reference

```html
<details><summary>Details</summary><p>More info…</p></details>
```
