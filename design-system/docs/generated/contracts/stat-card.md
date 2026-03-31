# Stat Card (`stat-card`)

Compact KPI surface for dashboards (label + value + optional delta/trend). Usually composed with card + metric.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `label` | `string` | yes |  | Short metric label (e.g. "Active users"). |
| `value` | `string` | yes |  | Main value (formatted, e.g. "12,340"). |
| `delta` | `string` | no |  | Change indicator (e.g. "+12%" or "-3.2%"). |
| `trend` | `string` | no | `"neutral"` | Trend direction for styling (must not rely on color alone). |
| `loading` | `boolean` | no | `false` | Shows skeleton/placeholder state. |
| `interactive` | `boolean` | no | `false` | When true, the card navigates or triggers an action (use <a>/<button>). |

## States
- `loading`: Data loading.
- `focus-visible`: Keyboard focus indicator (if interactive).

## A11y

### Keyboard
- If interactive, use <a> or <button> so Enter/Space works correctly.
- Avoid making the root interactive when it contains inner interactive elements.

### ARIA
- Ensure the card has an accessible name if interactive (e.g. via label text).
- If delta conveys status, include text (e.g. "+12% up") not only color.

## Invariants

### Must
- Label and value must be readable in both themes.
- If trend is communicated, do not rely on color alone (use arrows/text).

### Should
- Keep labels short (1–3 words).
- Use consistent formatting for numbers (thousands separators, units).

### Must not
- Do not overload stat cards with dense text; link to detail view instead.

## Token usage
- `semantic.color.bg.surface` → Card background (Use surface background for KPI tiles.)
- `semantic.shadow.surface` → Elevation (Optional subtle shadow; keep dashboards calm.)
- `semantic.radius.surface` → Corner radius (Use surface radius for containers.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible when interactive.)

## Examples

### Plain HTML reference

```html
<section aria-label="Active users"><p>Active users</p><p>12,340</p><p>+12% up</p></section>
```
