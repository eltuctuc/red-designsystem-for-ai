# Error Boundary (Runtime/UI Failures) (`error-boundary`)

## Intent
- Handle unexpected UI/runtime failures gracefully.
- Provide recovery actions (retry, reload, report) without exposing technical details.
- Preserve accessibility (focus, announcements) during error transitions.

## Uses contracts
- `empty-state`
- `toast`
- `dialog`
- `button`
- `link`

## Structure
- Use a scoped boundary: page-level boundary for critical views and smaller boundaries for risky widgets.
- Fallback UI: title + short explanation + primary action (retry) + secondary action (reload/report).
- Log technical error details to console/monitoring; do not show stack traces to end users by default.
- If failure happens after user action, show a toast and keep the user in context when possible.

## A11y

### Keyboard
- On showing a full-page fallback, move focus to the fallback title or primary action.
- Actions in the fallback are reachable via Tab and operable via Enter/Space.
- Avoid trapping focus; only use modal dialog for critical confirmations.

### ARIA
- Fallback container can be role="alert" for critical failures; otherwise use a labeled region.
- If using toast for errors, choose aria-live appropriately (polite for minor, assertive only for critical).

## Validation

### Rules
- Fallback copy is user-centered and actionable (what happened, what to do next).
- Error states must not rely on color alone; include text and clear actions.
- Retry must be safe (avoid duplicate mutations) or clearly indicate when a reload is required.

### Error messaging
- Use plain language: "Something went wrong" + next steps.
- Offer "Try again" and, if relevant, "Reload page".
- If reporting is offered, confirm what information is sent.

## Token usage
- `semantic.color.bg.canvas` → Page background (Fallback should sit on canvas base.)
- `semantic.color.bg.surface` → Fallback panel (Optional surface card around error message.)
- `semantic.color.bg.danger` → Critical error accent (Use sparingly; ensure text readability and avoid red-only signaling.)

## Examples

### Fallback skeleton

```html
<section role="region" aria-label="Error"><h1>Something went wrong</h1><p>Try again or reload the page.</p><button type="button">Try again</button><button type="button">Reload</button></section>
```
