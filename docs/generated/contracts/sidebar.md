# Sidebar (`sidebar`)

Secondary navigation region, often used in dashboards. Prefer semantic <nav> and clear grouping.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `collapsed` | `boolean` | no | `false` | Collapsed rail mode (icons only). |
| `responsive` | `boolean` | no | `true` | Supports mobile behavior (drawer/overlay). |

## States
- `collapsed`: Compact mode.
- `focus-visible`: Keyboard focus indicator on items.

## A11y

### Keyboard
- All items must be reachable via Tab.
- If used as a mobile drawer, focus must move into the drawer when opened and return on close.

### ARIA
- Use <nav aria-label="Secondary"> (or a specific label like "Project navigation").
- Use aria-current="page" on the active item.
- If sidebar becomes a modal drawer on mobile, apply dialog-like semantics (see dialog contract).

## Invariants

### Must
- Active location must be indicated (aria-current + visual).
- Collapsed mode must remain usable (icons need accessible names; tooltips or sr-only labels).

### Should
- Group items with headings for scanning.
- Keep sidebar width stable to reduce layout shift.

### Must not
- Do not hide navigation labels without providing accessible names.

## Token usage
- `semantic.color.bg.surface` → Sidebar background (Use surface background for navigation region.)
- `semantic.color.border.default` → Divider/border (Use for separators between groups or edge border.)

## Examples

### Semantic HTML reference

```html
<aside><nav aria-label="Secondary"><a href="/overview" aria-current="page">Overview</a><a href="/settings">Settings</a></nav></aside>
```
