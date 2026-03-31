# Metric (`metric`)

Atomic KPI display (label + value + optional change). Used inside stat cards, tables, or detail pages.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `label` | `string` | yes |  | Metric label. |
| `value` | `string` | yes |  | Formatted value. |
| `unit` | `string` | no |  | Optional unit (e.g. "ms", "%", "€"). |
| `change` | `string` | no |  | Optional change (e.g. "+12%"), include sign. |
| `trend` | `string` | no | `"neutral"` | Direction for styling and iconography. |

## States

- (none)

## A11y

### Keyboard
- No keyboard interaction for a non-interactive metric.

### ARIA
- If change is indicated, ensure it is included in the accessible text (not only via color/icon).

## Invariants

### Must
- Metric must be readable and scannable.
- Trend must not rely on color alone (include sign, arrow, or words).

### Should
- Use tabular numbers for columns of metrics (implementation-specific).

### Must not
- Do not animate numbers excessively; avoid distracting count-up in dashboards.

## Token usage
- `semantic.color.fg.default` → Value color (Use default foreground for the primary value.)
- `semantic.color.fg.muted` → Label color (Use muted foreground for labels.)

## Examples

### Plain HTML reference

```html
<div aria-label="Latency 123ms, down 3%"><span>Latency</span><span>123</span><span>ms</span><span>-3% down</span></div>
```
