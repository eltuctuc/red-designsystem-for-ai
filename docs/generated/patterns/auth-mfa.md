# Auth: MFA (One-time code) (`auth-mfa`)

## Intent
- Verify user with a one-time code (TOTP/SMS/email).
- Support paste and fast keyboard entry.
- Provide recovery options.

## Uses contracts
- `input`
- `button`
- `link`
- `alert`

## Structure
- Show short instruction with masked destination when appropriate.
- Code input: single input or segmented inputs; support paste of full code.
- Actions: Verify (primary), Resend (secondary), Use recovery code (optional).

## A11y

### Keyboard
- Focus starts on code input; Enter submits when code complete.
- If segmented inputs, arrow keys and backspace move predictably.

### ARIA
- Provide a single accessible name for segmented input group.
- Announce resend confirmation via role="status".

## Validation

### Rules
- Allow pasting full code; avoid forcing manual entry.
- Rate limit resend action and communicate cooldown.

### Error messaging
- Use generic error: "Code is invalid or expired" + next steps.

## Token usage

- (none)

## Examples

### Code input

```html
<label for="code">Code</label><input id="code" inputmode="numeric" autocomplete="one-time-code" />
```
