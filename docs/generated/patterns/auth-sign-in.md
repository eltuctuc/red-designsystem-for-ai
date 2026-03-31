# Auth: Sign In (`auth-sign-in`)

## Intent
- Allow users to sign in with minimal friction.
- Provide clear error handling and recovery options.
- Support password managers and keyboard-first flows.

## Uses contracts
- `form-field`
- `input`
- `button`
- `link`
- `alert`
- `toast`

## Structure
- Fields: email/username + password; optional remember-me checkbox.
- Primary action: Sign in; secondary: Forgot password link.
- Errors: field-level (inline) for validation; top-level alert for auth failures.

## A11y

### Keyboard
- Enter submits when focused in password field.
- Focus moves to the first invalid field on submit failure.

### ARIA
- Inputs have autocomplete attributes (email, current-password) when possible.
- Errors are linked via aria-describedby; invalid fields use aria-invalid.

## Validation

### Rules
- Do not disable submit button preemptively unless required; prefer showing validation errors.
- Lockout/rate-limit messaging must not reveal account existence.

### Error messaging
- Use generic auth error copy (e.g. "Email or password is incorrect").
- Offer recovery: "Reset password" link.

## Token usage
- `semantic.space.sectionGap` → Form spacing (Use section gaps for vertical rhythm.)

## Examples

### Basic form skeleton

```html
<form><label>Email</label><input autocomplete="email" /><label>Password</label><input type="password" autocomplete="current-password" /><button type="submit">Sign in</button></form>
```
