# CRUD: Bulk Actions (`crud-bulk-actions`)

## Intent
- Allow selecting multiple rows/items and performing actions.
- Prevent accidental destructive bulk operations.
- Keep selection state visible and reversible.

## Uses contracts
- `table`
- `checkbox`
- `filter-bar`
- `button`
- `dropdown-menu`
- `menu-item`
- `dialog`
- `toast`

## Structure
- Selection via checkboxes in list/table with a clear selected count.
- Bulk action bar appears when selection > 0; includes clear selection action.
- Destructive bulk actions require confirmation.

## A11y

### Keyboard
- Selection checkboxes are reachable; bulk action bar buttons are reachable when shown.

### ARIA
- Selected count is announced via role="status" (optional).
- Confirm dialogs follow dialog contract.

## Validation

### Rules
- Always show selected count and provide clear-all selection.
- Bulk destructive actions require confirmation.

### Error messaging
- On partial failure, show which items failed and what to do next.

## Token usage

- (none)

## Examples

### Selected count

```html
<div role="status">3 selected</div>
```
