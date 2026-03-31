# Link (`link`)

Navigation to a resource. Prefer native <a href> for correct semantics and expected browser behavior.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `href` | `string` | yes |  | Destination URL. |
| `target` | `string` | no |  | Target browsing context (e.g. _blank). |
| `rel` | `string` | no |  | Relationship attribute; required for security when using target=_blank. |
| `variant` | `string` | no | `"default"` | Visual intent of the link. |
| `underline` | `string` | no | `"auto"` | Underline behavior; avoid relying on color alone to indicate links. |
| `disabled` | `boolean` | no | `false` | When true, link is non-interactive (avoid if possible; prefer not rendering a link). |

## States
- `hover`: Pointer hover.
- `visited`: Visited link state.
- `focus-visible`: Keyboard focus indicator.
- `disabled`: Non-interactive state.

## A11y

### Keyboard
- Enter activates the link (native behavior).
- Tab focuses the link; Shift+Tab reverses.

### ARIA
- Use <a href> for real navigation.
- If you need a button-like action, use <button> instead of a link.

## Invariants

### Must
- Links must be distinguishable without relying on color alone (underline or other affordance).
- Focus indicator must be visible.

### Should
- If target is _blank, set rel="noopener noreferrer" (or equivalent) for security.
- Keep link text descriptive (avoid “click here”).

### Must not
- Do not disable links by removing href while keeping them focusable; if disabled, make them unfocusable and clearly styled.

## Token usage
- `semantic.color.fg.default` → Default link color (Default links can use fg.default with underline; accent links use semantic.color.bg.accent or a derived token in future.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible outline/ring.)
- `semantic.motion.hover` → Hover transition (Use fast motion token for underline/color transition.)

## Examples

### Plain HTML reference

```html
<a href="/projects">Projects</a>
```
