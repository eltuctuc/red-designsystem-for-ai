# CRUD: Create / Edit Form (`crud-create-edit-form`)

## Intent
- Create or edit an entity with clear validation and safe submission.
- Prevent double submits and preserve user input on errors.
- Support draft/save patterns for prototypes when needed.

## Uses contracts
- `form-field`
- `input`
- `textarea`
- `select`
- `checkbox`
- `button`
- `alert`
- `toast`
- `dialog`

## Structure
- Layout: title + optional description, grouped fields, primary action in footer.
- Validation: inline errors on blur and on submit; summary alert for general errors.
- Submission: disable only the submit button while saving; show loading state; prevent duplicate submissions.

## A11y

### Keyboard
- Enter submits for simple forms; for complex forms, ensure primary action is explicit.
- Focus moves to first invalid field on submit failure.

### ARIA
- Errors are linked via aria-describedby; invalid fields use aria-invalid.
- If unsaved changes prompt exists, dialog follows dialog contract.

## Validation

### Rules
- Keep error messages actionable and close to the field.
- Preserve user input on server errors.

### Error messaging
- General error: "Couldn’t save. Try again."
- Field error: start with fix ("Enter a name").

## Token usage

- (none)

## Examples

### Footer actions

```html
<div><button type="button">Cancel</button><button type="submit">Save</button></div>
```
