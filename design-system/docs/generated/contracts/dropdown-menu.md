# Dropdown Menu (`dropdown-menu`)

Menu triggered by a button (menu button pattern). Use for a list of actions; avoid for simple navigation links.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | no | `false` | Controls menu visibility. |
| `placement` | `string` | no | `"bottom-start"` | Preferred placement relative to trigger. |
| `closeOnSelect` | `boolean` | no | `true` | Close menu when selecting an item. |
| `disabled` | `boolean` | no | `false` | Disables the trigger. |

## States
- `open`: Menu is visible.
- `focus-visible`: Keyboard focus indicator on trigger or item.
- `disabled`: Trigger is disabled.

## A11y

### Keyboard
- Trigger: Enter/Space opens the menu; ArrowDown should open and focus first item.
- Menu: ArrowUp/ArrowDown move focus between items (roving tabindex).
- Home/End jump to first/last item.
- Esc closes the menu and returns focus to trigger.
- Tab closes the menu and moves focus to next focusable element.

### ARIA
- Trigger should have aria-haspopup="menu" and aria-expanded reflecting open state.
- Menu container uses role="menu"; items use role="menuitem" (or menuitemcheckbox/menuitemradio when applicable).
- Disabled items use aria-disabled="true" when not native <button disabled>.

## Invariants

### Must
- Menu must be fully operable by keyboard.
- Focus must be managed predictably: open focuses an item; close returns focus to trigger.

### Should
- Prefer simple lists of actions; keep item labels concise.
- Support typeahead (optional): typing letters jumps to matching items.

### Must not
- Do not use menu role for simple navigation lists; use links in a <nav> instead.
- Do not trap focus inside a non-modal menu (allow Tab to escape).

## Token usage
- `semantic.color.bg.surface` → Menu background (Use surface background for the menu panel.)
- `semantic.shadow.overlay` → Menu elevation (Use overlay shadow for floating surfaces.)
- `semantic.radius.surface` → Panel radius (Use surface radius for the menu panel.)
- `semantic.motion.ui` → Open/close animation (Use UI motion token for transitions.)

## Examples

### ARIA menu button skeleton

```html
<button type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="menu-1">Actions</button><div id="menu-1" role="menu" hidden><button role="menuitem" type="button">Edit</button><button role="menuitem" type="button">Duplicate</button><button role="menuitem" type="button">Delete</button></div>
```
