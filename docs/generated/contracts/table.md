# Table (`table`)

Tabular data display with optional sorting, selection, and row actions. Prefer semantic <table> for accessibility; use grid only when necessary.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `density` | `string` | no | `"comfortable"` | Row height/padding. |
| `sortable` | `boolean` | no | `false` | Whether columns can be sorted. |
| `sort` | `{columnId:string, direction:'asc'\|'desc'}` | no |  | Current sort state (if sortable). |
| `selectable` | `boolean` | no | `false` | Whether rows can be selected. |
| `rowActions` | `boolean` | no | `false` | Whether rows have an actions column (e.g. overflow menu). |

## States
- `loading`: Data loading.
- `empty`: No rows to display.
- `sorted`: A column is sorted.
- `row-selected`: Row is selected (if selectable).
- `focus-visible`: Keyboard focus indicator on interactive header/actions.

## A11y

### Keyboard
- If header cells are clickable for sorting, they must be focusable controls (button in th) and operable with Enter/Space.
- Row selection uses native checkbox in a cell (recommended) for keyboard support.
- Avoid making entire rows clickable when they contain other interactive controls.

### ARIA
- Use semantic <table> with <thead>, <tbody>, <th scope="col"> and optional <caption>.
- When sorted, set aria-sort on the corresponding <th> (none/ascending/descending).
- If using a grid implementation, follow ARIA grid patterns (only when necessary).

## Invariants

### Must
- Use semantic <table> for tabular data unless there is a strong reason not to.
- Sorting must be indicated visually and via aria-sort.
- Empty state must be clear and actionable when appropriate.

### Should
- Keep column alignment consistent (numbers right-aligned).
- Support responsive behavior (horizontal scroll) rather than collapsing into unreadable layout.

### Must not
- Do not use tables for general page layout.
- Do not hide critical columns without an alternative access method.

## Token usage
- `semantic.color.bg.surface` → Table background (Use surface background for table container or rows.)
- `semantic.color.border.default` → Row dividers/borders (Use default border for separators.)
- `semantic.color.border.focus` → Focus ring (Use for focus-visible on header controls/actions.)
- `semantic.space.controlPadX` → Cell padding (Use consistent padding tokens; compact mode can reduce to primitives.space.2/3.)

## Examples

### Semantic table skeleton

```html
<table><caption>Projects</caption><thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead><tbody><tr><td>Alpha</td><td>Active</td></tr></tbody></table>
```
