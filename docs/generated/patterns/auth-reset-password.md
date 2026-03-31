# Auth: Reset Password (`auth-reset-password`)

## Intent
- Allow users to request and complete password reset securely.
- Avoid leaking account existence.
- Provide clear next steps and recovery.

## Uses contracts
- `form-field`
- `input`
- `button`
- `alert`
- `link`

## Structure
- Step 1: request reset (email field) → show generic success message.
- Step 2: set new password (new password field + confirm if needed).
- Include link back to sign in.

## A11y

### Keyboard
- Enter submits; focus moves to first invalid field.

### ARIA
- Use autocomplete="email" on request step; autocomplete="new-password" on reset step.

## Validation

### Rules
- Always show a generic success message after request ("If an account exists...").

### Error messaging
- Explain what to check (email inbox/spam) and how long it might take.

## Token usage

- (none)

## Examples

### Generic success copy

```html
<div role="status">If an account exists for that email, we sent a reset link.</div>
```
