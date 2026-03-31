# CRUD: Import (`crud-import`)

## Intent
- Import data from a file with clear validation and preview.
- Make failures actionable and allow retries.
- Show progress for long imports.

## Uses contracts
- `file-upload`
- `table`
- `progress`
- `alert`
- `button`
- `toast`
- `empty-state`

## Structure
- Step 1: upload file (accept formats + size limits).
- Step 2: validate + show preview table with issues highlighted.
- Step 3: import with progress; show success summary and error report.

## A11y

### Keyboard
- Upload and actions operable by keyboard.
- Preview table uses semantic table.

### ARIA
- Progress uses progressbar semantics; errors use status/alert roles appropriately.

## Validation

### Rules
- Validation errors must reference row/column context.
- Import must be cancelable if it takes long (optional).

### Error messaging
- Explain what failed and how to fix the file; provide downloadable error report (optional).

## Token usage

- (none)

## Examples

### Import steps

```html
<ol><li>Upload</li><li>Review</li><li>Import</li></ol>
```
