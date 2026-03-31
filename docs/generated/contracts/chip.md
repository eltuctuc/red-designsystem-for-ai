# Chip / Tag (`chip`)

Compact label used for categories, filters, or selections. Can be static, removable, or selectable.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"neutral"` | Visual intent. |
| `removable` | `boolean` | no | `false` | Shows remove control. |
| `selected` | `boolean` | no | `false` | Selectable filter chip state. |
| `disabled` | `boolean` | no | `false` | Non-interactive. |

## States
- `selected`: Selected chip.
- `focus-visible`: Keyboard focus indicator (if interactive).

## A11y

### Keyboard
- If removable, remove control is a button and reachable via Tab.
- If selectable, chip is a button and toggles with Enter/Space.

### ARIA
- Remove button has an accessible name (e.g. "Remove Status: Active").
- If selectable, use aria-pressed for toggle buttons.

## Invariants

### Must
- Chip must be understandable without relying on color alone.
- Remove action must be explicit and accessible.

### Should
- Keep chip labels short.

### Must not
- Do not use chips as primary navigation.

## Token usage
- `semantic.color.interactive.bg.default` → Base background (Neutral chips use interactive bg; variants use state tokens.)
- `semantic.radius.control` → Shape (Chips can use pill radius; reference primitives.radius.pill if needed.)

## Examples

### Removable chip

```html
<span>Status: Active <button type="button" aria-label="Remove Status: Active">×</button></span>
```
