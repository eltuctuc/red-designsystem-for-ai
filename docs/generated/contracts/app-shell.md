# App Shell (`app-shell`)

Layout contract for common application structure (navbar + sidebar + main + optional footer). Not a component implementation.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `layout` | `string` | no | `"sidebar"` | Primary layout style. |
| `responsive` | `boolean` | no | `true` | Sidebar becomes drawer/overlay on small screens. |

## States
- `sidebar-collapsed`: Sidebar in rail mode.

## A11y

### Keyboard
- Skip link to main content is present and first focusable element.

### ARIA
- Use semantic landmarks: <header>, <nav>, <main>, <footer>.
- Main content has an id that skip link targets.

## Invariants

### Must
- Landmark structure must be correct and consistent.
- Responsive layout must not trap focus when sidebar becomes drawer.

### Should
- Keep main content width readable; avoid overly wide text lines.

### Must not
- Do not create multiple <main> landmarks.

## Token usage
- `semantic.space.pagePad` → Page padding (Use page padding token for main content spacing.)
- `semantic.color.bg.canvas` → App background (Canvas background for the overall page.)

## Examples

### Landmark skeleton

```html
<a href="#main">Skip to content</a><header>…</header><nav aria-label="Primary">…</nav><main id="main">…</main>
```
