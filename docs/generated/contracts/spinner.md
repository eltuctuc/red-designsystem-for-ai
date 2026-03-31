# Spinner (`spinner`)

Small loading indicator for async operations. Should not be the only indicator; use text where helpful.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `size` | `string` | no | `"md"` | Spinner size. |
| `label` | `string` | no |  | Accessible label (e.g. "Loading"). |

## States
- `reduced-motion`: prefers-reduced-motion enabled.

## A11y

### Keyboard
- Spinner is not interactive.

### ARIA
- If spinner is purely decorative, set aria-hidden="true".
- If it represents loading, add an accessible label and set aria-busy="true" on the relevant container.

## Invariants

### Must
- Respect prefers-reduced-motion.
- Spinner must not be the only way to convey progress for long tasks (use progress).

### Should
- Use subtle, non-distracting motion.

### Must not
- Do not block interactions globally for small async tasks.

## Token usage
- `semantic.motion.ui` → Animation timing (Use UI motion token; reduce for prefers-reduced-motion.)
- `semantic.color.interactive.fg.default` → Spinner stroke (Use readable foreground for indicator.)

## Examples

### Aria-hidden decorative spinner

```html
<span aria-hidden="true">⏳</span>
```
