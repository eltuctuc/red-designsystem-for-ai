# Dashboard Detail (Drilldown) (`dashboard-detail`)

## Intent
- Provide a detailed view behind a KPI tile or chart.
- Keep context (time range, filters) consistent with overview.
- Support comparisons and export (optional).

## Uses contracts
- `breadcrumb`
- `filter-bar`
- `chart-container`
- `table`
- `pagination`
- `empty-state`
- `skeleton`
- `toast`
- `link`

## Structure
- Top: breadcrumb/back link + title + time range context.
- Filters: filter bar for drilldown facets.
- Main: chart(s) with summaries + detail table/list underneath.
- Errors: section-level fallback with retry; toast for transient errors.

## A11y

### Keyboard
- All controls reachable; chart summaries accessible.
- Table sorting and pagination are keyboard operable.

### ARIA
- Breadcrumb uses aria-current on current page; tables use aria-sort.

## Validation

### Rules
- Keep time range visible and consistent across sections.
- Avoid overwhelming with many charts; prefer a clear narrative.

### Error messaging
- Failures should be actionable (retry/change filters).

## Token usage

- (none)

## Examples

### Drilldown layout

```html
<main><nav aria-label="Breadcrumb">…</nav><h1>Active users</h1><section aria-label="Chart">…</section><section aria-label="Breakdown">…</section></main>
```
