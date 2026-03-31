# Data Browsing (List → Detail) (`data-browsing`)

## Intent
- Support common browsing flows: list with filters/search/sort, then detail view.
- Handle loading, empty, error, and permission states gracefully.
- Maintain shareable state (URL) for filters and selection where feasible.

## Uses contracts
- `filter-bar`
- `search-input`
- `table`
- `card`
- `pagination`
- `empty-state`
- `toast`
- `link`

## Structure
- List view layout: header (title + primary action), filter bar, results (table or cards), pagination/footer.
- Filters/search update results without losing context; keep layout stable during loading (skeletons).
- Empty states differentiate: first-run (create), no-results (clear filters), error (retry).
- Detail view has clear back navigation and preserves list state (e.g. via URL params).

## A11y

### Keyboard
- Filter controls and result items are reachable in a logical tab order.
- Table sorting controls are buttons in headers and operable via keyboard.
- When navigating from list to detail and back, focus returns to a reasonable element (e.g. previously activated row/link).

### ARIA
- Results region can be labeled (e.g. role="region" aria-label="Results").
- Empty state uses headings and clear labels; error toasts use appropriate aria-live.

## Validation

### Rules
- Loading state does not remove controls unless necessary; prefer showing a subtle busy indicator.
- Empty state is specific: No results suggests clearing filters; First run suggests creating an item; Error suggests retry.
- Pagination and sorting do not break deep links; state is reflected in URL when feasible.

### Error messaging
- Errors are actionable: explain what happened, what the user can do next (retry, change filters, contact support).
- Avoid technical error codes in UI; log them elsewhere.

## Token usage
- `semantic.color.bg.canvas` → Page background (Use canvas as base background.)
- `semantic.color.bg.surface` → Panels and results containers (Use surface for filter bar, cards, and tables.)
- `semantic.color.border.default` → Dividers and separators (Use for table row dividers and section separators.)

## Examples

### List view skeleton

```html
<main><h1>Projects</h1><section role="region" aria-label="Filters">…</section><section role="region" aria-label="Results">…</section></main>
```
