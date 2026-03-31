# File Upload (`file-upload`)

File selection and upload flow. Prefer native <input type="file">, optionally enhanced with dropzone UI.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `accept` | `string` | no |  | Accepted file types (accept attribute). |
| `multiple` | `boolean` | no | `false` | Allow multiple files. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `maxSizeBytes` | `number` | no |  | Maximum allowed file size. |

## States
- `drag-over`: User drags files over dropzone.
- `uploading`: Upload in progress.
- `error`: Validation or upload failure.

## A11y

### Keyboard
- Selection via native file input is keyboard accessible by default.
- If dropzone is clickable, it must be a <button> or have button semantics and be focusable.

### ARIA
- Provide clear instructions and accepted formats in helper text.
- Progress uses progress contract (aria-valuenow for determinate).

## Invariants

### Must
- File selection must work without drag & drop.
- Errors must be actionable (what failed, what to do next).

### Should
- Show selected files list with remove action.
- Show upload progress per file for long uploads.

### Must not
- Do not block the whole UI during upload; scope busy state to the upload area.

## Token usage
- `semantic.color.bg.surface` → Dropzone background (Use surface background for dropzone.)
- `semantic.color.border.default` → Dropzone border (Use default border; focus uses semantic.color.border.focus.)

## Examples

### Native file input reference

```html
<label for="f">Upload</label><input id="f" type="file" />
```
