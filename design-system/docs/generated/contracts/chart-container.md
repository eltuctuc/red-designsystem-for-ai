# Chart Container (`chart-container`)

Wrapper for charts/visualizations with title, description, legend, and accessible alternatives (summary/table).

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `title` | `string` | yes |  | Chart title. |
| `description` | `string` | no |  | Short context or explanation. |
| `loading` | `boolean` | no | `false` | Shows loading state/skeleton. |
| `empty` | `boolean` | no | `false` | No data to display; show empty state copy. |
| `accessibleSummary` | `string` | no |  | Textual summary of key insight (recommended). |

## States
- `loading`: Data loading.
- `empty`: No data.

## A11y

### Keyboard
- Charts should not require mouse-only interaction to access key insights.
- If chart has interactive controls (filters, toggles), they must be keyboard accessible.

### ARIA
- Provide a text summary and/or data table fallback for complex charts.
- If the chart is an image/canvas, provide aria-label and long description nearby.
- Legend items must not rely on color alone (include labels/patterns).

## Invariants

### Must
- Chart must include a title and a summary or alternative access to data.
- Do not rely on color alone to distinguish series.

### Should
- Keep chart ink low: avoid heavy gridlines and decorative noise.
- Support responsive sizing (container scales; avoids overflow).

### Must not
- Do not render charts without context (title/units/time range).

## Token usage
- `semantic.color.bg.surface` → Container background (Use surface background for chart panels.)
- `semantic.color.border.default` → Panel border/divider (Optional border or divider between header and chart.)
- `semantic.radius.surface` → Corner radius (Use surface radius for containers.)

## Examples

### Panel skeleton with summary

```html
<section aria-label="Revenue chart"><h2>Revenue</h2><p>Last 30 days</p><div aria-label="Chart" role="img">…</div><p>Summary: Revenue increased week-over-week.</p></section>
```
