# Forms (`forms`)

## Intent
- Collect user input with clear structure and validation.
- Make errors actionable and accessible.
- Support keyboard-first usage.

## Uses contracts
- `input`
- `button`

## Structure
- Group related fields using <fieldset> + <legend> where appropriate.
- Place labels above inputs for scanning; use helper text for constraints.
- Put primary action last and align with reading direction; disable only when necessary.

## A11y

### Keyboard
- Tab order follows visual order; no focus traps unless inside a modal.
- Enter submits when focus is in a single-line input and submit action is present.

### ARIA
- Associate labels via <label for> or wrapping label pattern.
- On error, connect input to error text via aria-describedby and mark invalid via aria-invalid="true".

## Validation

### Rules
- Validate on blur and on submit; avoid aggressive per-keystroke errors for prototypes unless needed.
- Server errors must be shown near the relevant field or as a form summary.

### Error messaging
- Error messages start with the fix (e.g. “Enter a valid email address”).
- Keep messages short; avoid codes; provide examples if format is non-obvious.

## Token usage
- `semantic.color.border.default` → Input border (Use default border; on focus switch to semantic.color.border.focus.)
- `semantic.color.bg.surface` → Field background (Use for inputs and field containers.)
- `semantic.color.bg.danger` → Error accent (Use sparingly (e.g. small indicators); keep text readable.)

## Examples

### Field with error (reference HTML)

```html
<label for="email">Email</label><input id="email" name="email" aria-invalid="true" aria-describedby="email-error" /><p id="email-error">Enter a valid email address.</p>
```
