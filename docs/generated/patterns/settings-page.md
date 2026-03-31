# Settings Page (`settings-page`)

## Intent
- Provide a predictable layout for user/app settings.
- Support safe saving and unsaved changes handling.
- Make sections scannable and accessible.

## Uses contracts
- `sidebar`
- `nav-item`
- `tabs`
- `form-field`
- `input`
- `switch`
- `button`
- `toast`
- `dialog`
- `alert`

## Structure
- Layout: secondary nav (sidebar or tabs) + main settings content.
- Each section has a heading and short description; group related controls.
- Saving: show explicit Save/Cancel; optionally show a save bar when changes exist.

## A11y

### Keyboard
- Nav and controls reachable via Tab; focus-visible ring preserved.
- If unsaved changes dialog appears, focus moves to safest action.

### ARIA
- Sections use headings and landmarks; alerts and toasts use appropriate live regions.

## Validation

### Rules
- Do not save on every toggle unless explicitly intended; communicate persistence.
- Unsaved changes prompt must not be overly aggressive; avoid prompting on harmless changes.

### Error messaging
- Save failures are actionable: "Couldn’t save. Try again."

## Token usage

- (none)

## Examples

### Section skeleton

```html
<section><h2>Notifications</h2><p>Control how we notify you.</p>…</section>
```
