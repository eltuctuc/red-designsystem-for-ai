# Banner (`banner`)

Prominent message at the top of a page or section (announcement, maintenance, policy). Typically dismissible and persistent across navigation.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"info"` | Status intent. |
| `dismissible` | `boolean` | no | `true` | Whether the banner can be dismissed. |
| `sticky` | `boolean` | no | `false` | Sticks to the top when scrolling. |

## States
- `dismissed`: Hidden after dismissal.

## A11y

### Keyboard
- Dismiss button and any actions are reachable via Tab.

### ARIA
- Use role="status" by default; use role="alert" only for urgent/critical announcements.

## Invariants

### Must
- Banner must not cover key navigation without a clear way to dismiss or skip.
- Message must be understandable without relying on color alone.

### Should
- Persist dismissal per user/session when appropriate.

### Must not
- Do not stack multiple banners; queue or combine messages.

## Token usage
- `semantic.color.state.info.bg` → Banner background (Use state tokens per variant.)
- `semantic.color.state.info.fg` → Text/icon (Ensure contrast for all variants.)
- `semantic.color.border.default` → Divider/border (Optional border to separate from content.)

## Examples

### Top-of-page banner

```html
<div role="status"><span>Maintenance tonight at 22:00.</span><button type="button">Dismiss</button></div>
```
