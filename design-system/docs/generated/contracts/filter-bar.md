# Filter Bar (`filter-bar`)

Row of controls for filtering/sorting/searching a dataset. Composes other contracts (search input, select, checkbox, buttons).

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `density` | `string` | no | `"comfortable"` | Spacing and control sizing. |
| `showActiveChips` | `boolean` | no | `true` | Shows active filters as removable chips. |
| `canReset` | `boolean` | no | `true` | Whether reset/clear-all is available. |

## States
- `has-filters`: At least one filter is active.
- `loading`: Dataset is updating.

## A11y

### Keyboard
- All controls reachable via Tab in a logical order.
- Chip remove buttons are keyboard accessible and have clear labels.

### ARIA
- Group the filter bar with a label (e.g. role="region" aria-label="Filters").
- If chips are shown, each remove control must have an accessible name (e.g. "Remove Status: Active").

## Invariants

### Must
- Filter bar must not rely on color alone to show active filters.
- Reset must be discoverable when filters are active.

### Should
- Prefer progressive disclosure: keep primary filters visible and move advanced filters into a popover.
- Persist filter state in URL or local state for usability (implementation-specific).

### Must not
- Do not hide active filters without a way to review them.

## Token usage
- `semantic.color.bg.surface` → Bar background (Use surface background if bar is on canvas.)
- `semantic.color.border.default` → Dividers (Optional border or separators.)
- `semantic.space.controlPadX` → Internal padding (Use control padding tokens for consistent spacing.)

## Examples

### Region wrapper skeleton

```html
<section role="region" aria-label="Filters"><form><input type="search" placeholder="Search…" /><select><option>Status: Any</option></select><button type="button">Reset</button></form></section>
```
