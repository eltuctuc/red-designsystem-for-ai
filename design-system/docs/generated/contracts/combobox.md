# Combobox (`combobox`)

Searchable select/autocomplete. Follow WAI-ARIA combobox patterns; use native <datalist> only for simple cases.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `value` | `string` | no |  | Selected value (id or label depending on data model). |
| `inputValue` | `string` | no |  | Current text input value. |
| `open` | `boolean` | no | `false` | Whether the listbox is open. |
| `disabled` | `boolean` | no | `false` | Prevents interaction. |
| `invalid` | `boolean` | no | `false` | Validation error state. |
| `filterMode` | `string` | no | `"contains"` | How options are filtered as the user types. |

## States
- `open`: Listbox visible.
- `active-option`: Option is active (aria-activedescendant).
- `focus-visible`: Keyboard focus indicator on input/toggle.
- `invalid`: Error state.

## A11y

### Keyboard
- ArrowDown/ArrowUp moves active option; Enter selects active option.
- Esc closes the listbox; if closed, Esc clears input only if that behavior is explicit.
- Tab moves focus out; listbox closes on blur (recommended).

### ARIA
- Input uses role="combobox" with aria-expanded and aria-controls pointing to listbox.
- Listbox uses role="listbox"; options use role="option".
- Use aria-activedescendant on the input to indicate the active option.

## Invariants

### Must
- Combobox must be usable with keyboard and screen readers.
- Focus stays on the input while navigating options (common pattern).

### Should
- Support empty state (“No results”).
- Support loading state for async options (optional).

### Must not
- Do not implement combobox as a menu; use listbox roles and combobox pattern.
- Do not trap focus inside the listbox.

## Token usage
- `semantic.color.bg.surface` → Input and listbox background (Use surface background for controls and floating list.)
- `semantic.color.border.default` → Borders (Default borders; focus uses semantic.color.border.focus.)
- `semantic.shadow.overlay` → Listbox elevation (Use overlay shadow for floating list.)

## Examples

### ARIA combobox skeleton

```html
<label for="cb">Search</label><input id="cb" role="combobox" aria-expanded="false" aria-controls="cb-list" aria-autocomplete="list" /><div id="cb-list" role="listbox" hidden><div id="opt-1" role="option">Apple</div><div id="opt-2" role="option">Banana</div></div>
```
