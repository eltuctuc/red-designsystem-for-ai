# Avatar (`avatar`)

User or entity representation (image + fallback initials/icon).

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `src` | `string` | no |  | Image URL. |
| `alt` | `string` | no |  | Alt text (required if the avatar conveys information). |
| `name` | `string` | no |  | Used for initials fallback and accessible labeling. |
| `size` | `string` | no | `"md"` | Controls dimensions. |

## States
- `image-error`: Image fails to load.

## A11y

### Keyboard
- No keyboard interaction when avatar is non-interactive.

### ARIA
- If purely decorative, use empty alt="".
- If avatar conveys identity, provide meaningful alt text (e.g. person name).

## Invariants

### Must
- Fallback must be present (initials or icon).
- Avatar must remain recognizable at small sizes.

### Should
- Use circular shape by default for people.

### Must not
- Do not rely on avatar alone to identify a user (include name in text where relevant).

## Token usage
- `semantic.color.bg.muted` → Fallback background (Use muted background for fallback.)
- `semantic.color.fg.default` → Fallback text (Initials contrast must be sufficient.)

## Examples

### Plain HTML reference

```html
<img src="/avatar.png" alt="Alex Doe" width="32" height="32" />
```
