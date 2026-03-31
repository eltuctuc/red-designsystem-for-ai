# List (`list`)

Vertical collection of items (static or interactive). Prefer semantic <ul>/<ol> for lists and <nav> for navigation lists.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"plain"` | List styling/behavior. |
| `density` | `string` | no | `"comfortable"` | Item padding/height. |

## States

- (none)

## A11y

### Keyboard
- If items are interactive, implement them as <a> or <button> so keyboard works by default.
- Avoid making non-interactive list items focusable.

### ARIA
- Use <ul>/<ol> for semantic lists.
- If used for navigation, wrap in <nav aria-label="…">.

## Invariants

### Must
- Use appropriate semantic container (list vs nav).

### Should
- Divided lists use consistent separators.

### Must not
- Do not use role="listbox" unless you implement listbox keyboard interactions.

## Token usage
- `semantic.color.border.default` → Dividers (Use default border for separators.)
- `semantic.space.stackGap` → Item spacing (Use stack gap token for list spacing.)

## Examples

### Semantic list

```html
<ul><li>Alpha</li><li>Beta</li></ul>
```
