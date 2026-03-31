# Async Section (Loading → Error → Empty → Data) (`async-section`)

## Intent
- Provide a consistent pattern for any async-loaded region.
- Avoid layout jank and confusing state transitions.
- Make errors recoverable and accessible.

## Uses contracts
- `skeleton`
- `empty-state`
- `alert`
- `toast`
- `button`
- `link`

## Structure
- Default state order: loading (skeleton) → data OR empty OR error.
- Loading uses skeleton placeholders with stable height/structure.
- Error state offers retry; show technical details only in logs.
- Empty state is specific (no-results vs first-run vs error).

## A11y

### Keyboard
- Retry button is reachable via Tab and activates with Enter/Space.
- Do not steal focus on loading; only move focus when presenting a full replacement fallback.

### ARIA
- Use aria-busy="true" on the section container while loading.
- Error messages use role="status" or role="alert" depending on urgency.

## Validation

### Rules
- Do not show empty state while loading (avoid flicker).
- Retry must be safe (avoid double mutations) or show a clear warning.
- Never rely on color alone to communicate error/success.

### Error messaging
- Use short, actionable copy: what happened + what to do next.
- Provide a retry and, if relevant, a fallback navigation link.

## Token usage
- `semantic.color.bg.surface` → Section container (Use surface for card-like async sections; canvas for full-page.)

## Examples

### Section wrapper with aria-busy

```html
<section aria-busy="true" aria-label="Results">…</section>
```
