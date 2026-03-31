# Menu Item (`menu-item`)

Action item inside a menu (dropdown/context/overflow). Prefer <button> or <a> depending on action vs navigation.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `type` | `string` | no | `"action"` | Menu item semantic type. |
| `disabled` | `boolean` | no | `false` | Non-interactive item. |
| `danger` | `boolean` | no | `false` | Marks a destructive action; requires confirmation in many contexts. |

## States
- `highlighted`: Item is focused/hovered.
- `disabled`: Non-interactive item.
- `checked`: For checkbox/radio items.

## A11y

### Keyboard
- Menu navigation is handled by the parent menu using arrow keys and roving tabindex.
- Enter/Space activates the focused item.

### ARIA
- Action items use role="menuitem".
- Checkbox items use role="menuitemcheckbox" with aria-checked.
- Radio items use role="menuitemradio" with aria-checked.

## Invariants

### Must
- Item must have a clear label and consistent spacing/alignment.
- Disabled items must not be focusable when possible.

### Should
- Support optional icons and keyboard shortcuts (display only).
- Danger items should be visually distinct but still readable.

### Must not
- Do not put form fields inside a menu unless it is a combobox or dedicated popover.

## Token usage
- `semantic.color.bg.muted` → Highlighted background (Use muted background for highlight state.)
- `semantic.color.fg.default` → Text (Ensure readable contrast.)
- `semantic.motion.hover` → Highlight motion (Use fast motion for hover/highlight transitions.)

## Examples

### Menu item skeleton

```html
<button role="menuitem" type="button">Rename</button>
```
