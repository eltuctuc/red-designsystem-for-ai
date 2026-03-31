# Password Input (`password`)

Password entry control (input type="password") with optional reveal toggle and requirements helper text.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Current value. |
| `reveal` | `boolean` | no | `false` | Whether password is visible (toggle). |
| `autocomplete` | `string` | no | `"current-password"` | Autocomplete hint. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state. |

## States
- `reveal`: Password visible.
- `focus-visible`: Keyboard focus indicator.
- `invalid`: Error state.

## A11y

### Keyboard
- Reveal toggle is a button reachable via Tab.
- Enter submits the surrounding form when appropriate.

### ARIA
- Reveal toggle has an accessible name ("Show password" / "Hide password").
- Requirements helper text is linked via aria-describedby.
- Use autocomplete="new-password" for sign-up and "current-password" for sign-in.

## Invariants

### Must
- Password input must support password managers (autocomplete).
- Reveal toggle must not expose password unexpectedly (default hidden).

### Should
- Requirements are shown as helper text and validated on blur/submit.
- Strength indicators are optional and must not rely on color alone.

### Must not
- Do not block paste into password field (supports password managers).

## Token usage
- `semantic.color.bg.surface` → Control background (Use surface background for password control.)
- `semantic.color.border.focus` → Focus ring (Use focus token for focus-visible.)
- `semantic.radius.control` → Radius (Use control radius.)

## Examples

### Native password input

```html
<label for="pw">Password</label><input id="pw" type="password" autocomplete="current-password" />
```
