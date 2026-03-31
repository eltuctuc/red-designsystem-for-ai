# Navigation (Primary/Secondary) (`navigation`)

## Intent
- Help users understand where they are and where they can go.
- Support keyboard-first navigation and clear active state.
- Provide a responsive default (sidebar becomes drawer on small screens).

## Uses contracts
- `navbar`
- `sidebar`
- `link`
- `breadcrumb`
- `dropdown-menu`
- `menu-item`
- `dialog`

## Structure
- Use <header> for the top bar and <nav> for navigation regions with clear aria-labels (Primary, Secondary).
- Mark the active location with aria-current="page" on the active link.
- Use breadcrumbs for deep hierarchies; avoid breadcrumbs for shallow apps.
- If you need overflow, use a dropdown menu (overflow/"More").

## A11y

### Keyboard
- Skip link to main content is present and first focusable element.
- All nav items are reachable via Tab in visual order.
- If sidebar becomes a drawer on mobile, focus moves into it on open and returns on close; Esc closes the drawer.

### ARIA
- Primary nav: <nav aria-label="Primary">; Secondary nav: <nav aria-label="Secondary"> (or more specific).
- Drawer mode uses dialog semantics (role="dialog", aria-modal="true") and an accessible name.

## Validation

### Rules
- Never rely on color alone for active state; include underline/indicator and/or font weight.
- Do not nest interactive elements inside interactive nav items.
- Drawer mode must not allow focus behind the drawer while open.

### Error messaging
- Navigation errors should be recoverable: provide a clear "Back" or "Home" path.
- 404/permission states should suggest the next best destination.

## Token usage
- `semantic.color.bg.surface` → Navigation surfaces (Navbar/sidebar background.)
- `semantic.color.border.default` → Dividers (Bottom border in navbar; separators in sidebar groups.)
- `semantic.color.border.focus` → Focus ring (Use focus token for all nav focus-visible states.)

## Examples

### Primary nav skeleton

```html
<header><a href="#main">Skip to content</a><nav aria-label="Primary"><a href="/" aria-current="page">Home</a><a href="/projects">Projects</a><button type="button" aria-haspopup="menu" aria-expanded="false">More</button></nav></header><main id="main">…</main>
```
