# Command Palette (`command-palette`)

Keyboard-first command launcher (Cmd/Ctrl+K). Typically implemented as a dialog containing a combobox-like search and a list of results.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `open` | `boolean` | yes |  | Controls visibility. |
| `hotkey` | `string` | no | `"mod+k"` | Global shortcut to open (implementation-specific). |
| `placeholder` | `string` | no | `"Type a command…"` | Search input placeholder. |

## States
- `open`: Palette open and modal.
- `active-item`: Highlighted result item.
- `empty`: No results.

## A11y

### Keyboard
- On open, focus moves to the input.
- ArrowDown/ArrowUp moves active item; Enter selects active item.
- Esc closes and returns focus to the opener.
- Tab should usually move focus through any secondary controls; avoid trapping focus in the list.

### ARIA
- Palette container uses role="dialog" and aria-modal="true".
- Search input can use combobox/listbox roles (see combobox contract) or simple input + list with appropriate labeling.
- Results list should be announced (e.g. role="listbox" + options) if interactive selection is not plain buttons.

## Invariants

### Must
- Palette must be usable keyboard-first with predictable focus management.
- Must provide a clear way to dismiss (Esc and/or close button).

### Should
- Support grouping (e.g. Navigation, Actions, Recent).
- Show keyboard shortcuts as hints (display only).

### Must not
- Do not open multiple palettes at once.
- Do not steal focus when closed.

## Token usage
- `semantic.color.bg.surface` → Panel background (Use surface background for the palette container.)
- `semantic.shadow.overlay` → Elevation (Use overlay shadow for the modal surface.)
- `semantic.motion.ui` → Open/close motion (Use UI motion token for transitions.)

## Examples

### Dialog + input skeleton

```html
<div role="dialog" aria-modal="true" aria-label="Command palette"><input type="text" placeholder="Type a command…" /><div role="listbox"><div role="option">Go to Projects</div><div role="option">Create new…</div></div></div>
```
