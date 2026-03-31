# CRUD: Confirm Delete (`crud-confirm-delete`)

## Intent
- Confirm destructive actions with clear consequences.
- Avoid accidental deletion and provide safe defaults.
- Support keyboard-first confirmation.

## Uses contracts
- `dialog`
- `button`
- `alert`
- `toast`

## Structure
- Use a dialog for destructive confirmation when action is irreversible or high-impact.
- Explain what will be deleted and if it can be undone.
- Default focus on the safest action (Cancel).

## A11y

### Keyboard
- Dialog traps focus; Esc closes only if dismissible is appropriate.
- Default focus is on Cancel; Delete requires deliberate action.

### ARIA
- Dialog has a clear title and description; buttons have clear labels.

## Validation

### Rules
- Destructive action is visually distinct and clearly labeled ("Delete project").
- If undo is possible, communicate it and provide an immediate undo action (toast).

### Error messaging
- If delete fails: "Couldn’t delete. Try again."

## Token usage

- (none)

## Examples

### Dialog copy skeleton

```html
<div role="dialog" aria-modal="true" aria-label="Delete"><p>This will permanently delete Alpha.</p><button>Cancel</button><button>Delete</button></div>
```
