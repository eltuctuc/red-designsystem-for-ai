# Form Field (`form-field`)

Wrapper contract for label + control + helper + error. Composes input/select/textarea/checkbox/radio.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `label` | `string` | yes |  | Visible label. |
| `helperText` | `string` | no |  | Optional hint text. |
| `errorText` | `string` | no |  | Optional error message; if present sets invalid state and aria links. |
| `required` | `boolean` | no | `false` | Marks the field as required. |

## States
- `invalid`: Error text present.

## A11y

### Keyboard
- Keyboard behavior is delegated to the wrapped control.

### ARIA
- Label is programmatically associated with control.
- Helper and error text are linked via aria-describedby.
- Required is indicated via native required attribute or aria-required (if non-native).

## Invariants

### Must
- Label association must be correct for all controls.
- Error and helper messages must be linked via aria-describedby.

### Should
- Reserve space for helper/error text to reduce layout shift.

### Must not
- Do not show both helper and error with the same id; keep them distinct.

## Token usage
- `semantic.color.fg.default` → Label text (Labels use default foreground.)
- `semantic.color.fg.muted` → Helper text (Helper uses muted foreground.)
- `semantic.color.state.danger.bg` → Error accent (Use danger accent for icon/indicator, not low-contrast text.)

## Examples

### Wrapper skeleton

```html
<label for="f1">Email</label><input id="f1" aria-describedby="f1-help f1-err" /><p id="f1-help">We never share your email.</p><p id="f1-err">Enter a valid email address.</p>
```
