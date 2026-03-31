# Dashboard (Overview) (`dashboard`)

## Intent
- Provide a scannable overview of key metrics and recent changes.
- Support drilling down from summaries to details.
- Handle loading and empty states without layout jank.

## Uses contracts
- `stat-card`
- `metric`
- `chart-container`
- `table`
- `filter-bar`
- `search-input`
- `pagination`
- `empty-state`
- `skeleton`
- `link`

## Structure
- Top: page title + time range selector (optional) + primary action.
- KPI row: 3–6 stat cards with consistent formatting and clear trend indicators.
- Charts section: 1–3 chart containers with titles and textual summaries.
- Recent activity: table/list with pagination; provide quick filters/search.
- Loading: use skeletons in place to keep layout stable; avoid flashing empty states.

## A11y

### Keyboard
- All interactive controls (filters, table sorting, links) are reachable via Tab.
- Stat cards that are interactive use native <a>/<button> and show focus-visible ring.

### ARIA
- Charts include summaries or alternative data access (table/summary text).
- Tables use semantic <table> and aria-sort for sorting.
- Empty states are labeled and actionable.

## Validation

### Rules
- KPIs are comparable: consistent units/formatting and time range context is visible.
- Trends are not conveyed by color alone (include arrow/sign/text).
- Charts and legends do not rely on color alone to distinguish series.
- Dashboard does not become a dense report; keep it scannable and link to detail views.

### Error messaging
- When data fails to load, show a section-level fallback and a retry action.
- Use a toast for transient errors; use inline fallback for persistent failures.

## Token usage
- `semantic.color.bg.canvas` → Page background (Use canvas as base background.)
- `semantic.color.bg.surface` → Cards and panels (Use surface for stat cards, chart panels, and tables.)
- `semantic.color.border.default` → Dividers (Use default border for separators and table dividers.)

## Examples

### Dashboard skeleton

```html
<main><h1>Overview</h1><section aria-label="KPIs">…</section><section aria-label="Charts">…</section><section aria-label="Recent activity">…</section></main>
```
