# Card (`card`)

Surface container for grouped content. May be static or clickable (link/card button) depending on context.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `elevation` | `string` | no | `"surface"` | Controls shadow and border treatment. |
| `interactive` | `boolean` | no | `false` | When true, card acts like a link/button and must support keyboard focus. |

## States
- `hover`: Pointer hover (interactive).
- `focus-visible`: Keyboard focus indicator (interactive).

## A11y

### Keyboard
- If interactive, use <a> or <button> to get keyboard behavior for free.
- Do not make entire card clickable if it contains other interactive elements (avoid nested interactive).

### ARIA
- If interactive, ensure accessible name (e.g. via heading text).

## Invariants

### Must
- Card must have clear padding and separation from the background.
- If interactive, focus indicator must be visible.

### Should
- Use cards to group related content; avoid overusing for simple lists.

### Must not
- Do not nest links/buttons inside a clickable card root.

## Token usage
- `semantic.color.bg.surface` → Surface background (Use for card background.)
- `semantic.color.border.default` → Border (Optional subtle border on flat cards.)
- `semantic.shadow.surface` → Elevation (Use surface/overlay shadow depending on elevation.)
- `semantic.radius.surface` → Corner radius (Use surface radius for containers.)

## Examples

### Plain HTML reference

```html
<section aria-label="Project" data-elevation="surface"><h3>Project Alpha</h3><p>Summary…</p></section>
```
