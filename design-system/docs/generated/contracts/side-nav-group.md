# Side Nav Group (`side-nav-group`)

Grouped sidebar navigation section with optional collapsible behavior.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `title` | `string` | yes |  | Group label. |
| `collapsible` | `boolean` | no | `false` | Whether group can collapse. |
| `collapsed` | `boolean` | no | `false` | Collapsed state. |

## States
- `collapsed`: Group collapsed.

## A11y

### Keyboard
- If collapsible, toggle is a button and operable with Enter/Space.

### ARIA
- Toggle uses aria-expanded and aria-controls pointing to items container.
- Group title is visible and programmatically associated with items region (recommended).

## Invariants

### Must
- Group label must be visible and scannable.

### Should
- Collapsible groups remember state per user/session (optional).

### Must not
- Do not hide essential nav items behind collapsed groups on desktop.

## Token usage
- `semantic.color.border.default` → Separators (Optional divider between groups.)

## Examples

### Group skeleton

```html
<section aria-label="Group"><h3>Projects</h3><nav><a href="/p/alpha">Alpha</a></nav></section>
```
