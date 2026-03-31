# Pagination (`pagination`)

Navigate paged content. Prefer semantic <nav> with links/buttons and clear current state.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `page` | `number` | yes |  | Current page (1-based). |
| `pageCount` | `number` | yes |  | Total number of pages. |
| `siblingCount` | `number` | no | `1` | How many pages to show adjacent to current page. |
| `showFirstLast` | `boolean` | no | `true` | Show first/last page shortcuts. |

## States
- `current`: Current page item.
- `disabled`: Prev/next disabled at edges.
- `focus-visible`: Keyboard focus indicator on controls.

## A11y

### Keyboard
- Controls must be reachable via Tab; activation via Enter/Space on buttons, Enter on links.

### ARIA
- Wrap in <nav aria-label="Pagination">.
- Mark current page with aria-current="page".
- Use aria-labels on prev/next buttons (e.g. "Go to next page").

## Invariants

### Must
- Current page must be clearly indicated (visual + aria-current).
- Prev/next must be disabled correctly at boundaries.

### Should
- Support compact mode with ellipsis for large page counts.

### Must not
- Do not render dozens of page links; use ellipsis/compaction.

## Token usage
- `semantic.color.border.default` → Control borders (Use default border for pagination items.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible styling.)
- `semantic.radius.control` → Shape (Use control radius for page pills/buttons.)

## Examples

### Semantic HTML reference

```html
<nav aria-label="Pagination"><a href="?page=1" aria-current="page">1</a><a href="?page=2">2</a><button type="button" aria-label="Go to next page">Next</button></nav>
```
