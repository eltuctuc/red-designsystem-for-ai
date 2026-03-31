# Tabs (`tabs`)

Switch between related views. Must follow WAI-ARIA tabs pattern when custom; avoid tabs for primary navigation.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Active tab id. |
| `activation` | `string` | no | `"auto"` | Auto: arrow keys activate immediately. Manual: arrow keys move focus; Enter/Space activates. |

## States
- `active`: Active tab.
- `focus-visible`: Keyboard focus indicator on a tab.

## A11y

### Keyboard
- ArrowLeft/ArrowRight move focus between tabs.
- Home/End jump to first/last tab.
- In manual activation, Enter/Space activates focused tab.

### ARIA
- Use role="tablist" on the list, role="tab" on tabs, role="tabpanel" on panels.
- Tabs must have aria-controls pointing to panel; panels must have aria-labelledby pointing to tab.
- Only the active panel is shown; inactive panels should be hidden (e.g. hidden attribute).

## Invariants

### Must
- Tabs must be fully usable by keyboard and screen readers.
- Active state must be visually clear without relying on color alone.

### Should
- Use tabs for related content at the same hierarchy level.

### Must not
- Do not use tabs for primary site navigation.

## Token usage
- `semantic.color.border.default` → Tab list divider (Use for separators/underline.)
- `semantic.color.bg.accent` → Active indicator (Use accent for the indicator line or pill.)
- `semantic.motion.hover` → Interaction motion (Use for hover/active transitions.)

## Examples

### ARIA tabs skeleton

```html
<div><div role="tablist" aria-label="Settings"><button role="tab" aria-selected="true" aria-controls="panel-a" id="tab-a">Profile</button><button role="tab" aria-selected="false" aria-controls="panel-b" id="tab-b" tabindex="-1">Security</button></div><div role="tabpanel" id="panel-a" aria-labelledby="tab-a">…</div><div role="tabpanel" id="panel-b" aria-labelledby="tab-b" hidden>…</div></div>
```
