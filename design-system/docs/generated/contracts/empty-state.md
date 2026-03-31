# Empty State (`empty-state`)

Message shown when no data is available (first-run, zero results, error-recovery entry points). Should be actionable and empathetic.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"no-results"` | Type of empty state. |
| `title` | `string` | yes |  | Primary message. |
| `description` | `string` | no |  | Secondary explanation and next steps. |
| `primaryActionLabel` | `string` | no |  | Primary action label (e.g. "Create project"). |
| `secondaryActionLabel` | `string` | no |  | Secondary action label (optional). |

## States

- (none)

## A11y

### Keyboard
- Actions are reachable via Tab and activate with Enter/Space as appropriate.

### ARIA
- Use headings (<h2>/<h3>) for the empty state title when appropriate to page structure.
- If the empty state appears after filtering, announce result count elsewhere (e.g. "0 results").

## Invariants

### Must
- Empty state must offer a next step (change filters, create item, retry) unless truly read-only.
- Copy must be clear and not blame the user.

### Should
- No-results state suggests clearing filters or adjusting search.
- Error variant offers retry and/or support link.

### Must not
- Do not use empty state as a loading placeholder (use skeleton/loading).

## Token usage
- `semantic.color.fg.default` → Title text (Use default foreground for title.)
- `semantic.color.fg.muted` → Description text (Use muted foreground for supporting copy.)
- `semantic.space.stackGap` → Layout spacing (Use semantic spacing tokens for gaps; adjust per layout.)

## Examples

### No results empty state

```html
<section aria-label="No results"><h2>No results</h2><p>Try clearing filters.</p><button type="button">Reset filters</button></section>
```
