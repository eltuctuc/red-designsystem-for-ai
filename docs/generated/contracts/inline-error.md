# Inline Error (`inline-error`)

Small error message attached to a control or section. Used with form-field; must be linked via aria-describedby.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `message` | `string` | yes |  | Error text. Starts with the fix. |

## States

- (none)

## A11y

### Keyboard
- Inline error is not interactive.

### ARIA
- Error element has an id and is referenced by aria-describedby on the control.
- Control uses aria-invalid="true" when error is present.

## Invariants

### Must
- Error copy is actionable and concise.
- Do not rely on color alone; include text and optionally an icon.

### Should
- Avoid shifting layout drastically; reserve space when possible.

### Must not
- Do not show technical error codes to end users.

## Token usage
- `semantic.color.state.danger.bg` → Error accent (Use danger tokens sparingly (e.g. icon).)
- `semantic.color.fg.default` → Text (Keep error text readable; avoid low-contrast red text.)

## Examples

### Error message linked via aria-describedby

```html
<input aria-invalid="true" aria-describedby="err-1" /><p id="err-1">Enter a valid email address.</p>
```
