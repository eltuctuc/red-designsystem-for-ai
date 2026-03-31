# Textarea (`textarea`)

Multi-line text input. Prefer native <textarea>.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Current value. |
| `rows` | `number` | no | `4` | Initial visible lines. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state. |

## States
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.
- `invalid`: Validation error state.

## A11y

### Keyboard
- Use native <textarea> for correct keyboard behavior.
- Tab moves focus out; Enter inserts new line.

### ARIA
- Label via <label for> or wrapping label.
- If invalid, set aria-invalid and connect error with aria-describedby.

## Invariants

### Must
- Label must be programmatically associated with the textarea.
- Focus indicator must be visible.

### Should
- Set a reasonable default height (rows) for the use case.
- Auto-resize is optional; if used, it must not cause layout jank.

### Must not
- Do not prevent text selection/copy in read-only scenarios.

## Token usage
- `semantic.color.bg.surface` → Control background (Use surface background for controls.)
- `semantic.color.border.default` → Control border (Default border; on focus use semantic.color.border.focus.)
- `semantic.radius.control` → Border radius (Use consistent control radius.)

## Examples

### Plain HTML reference

```html
<label for="about">About</label><textarea id="about" name="about" rows="4"></textarea>
```
