# Navbar (`navbar`)

Top-level application/header navigation container. Prefer semantic <header> + <nav>.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"default"` | Layout density and background treatment. |
| `sticky` | `boolean` | no | `false` | Sticks to top on scroll. |

## States
- `focus-visible`: Keyboard focus indicator on links/actions.

## A11y

### Keyboard
- All nav items must be reachable with Tab.
- Provide a skip link to main content (recommended).

### ARIA
- Use <nav aria-label="Primary"> for the primary navigation region.
- Indicate current page with aria-current="page" on the active link.

## Invariants

### Must
- Navigation must be usable with keyboard only.
- Current page must be indicated (aria-current + visual).

### Should
- Include a skip link to main content at the top of the page.
- Keep primary nav items limited; use overflow menu for long lists.

### Must not
- Do not hide focus outlines in the header.

## Token usage
- `semantic.color.bg.surface` → Header background (Default header background in light/dark themes.)
- `semantic.color.border.default` → Bottom divider (Optional bottom border for separation.)

## Examples

### Semantic HTML reference

```html
<header><a href="#main">Skip to content</a><nav aria-label="Primary"><a href="/" aria-current="page">Home</a><a href="/projects">Projects</a></nav></header>
```
