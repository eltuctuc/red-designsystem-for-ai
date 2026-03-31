# Breadcrumb (`breadcrumb`)

Hierarchical navigation aid. Prefer semantic <nav> + ordered list.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `items` | `Array<{label:string, href?:string}>` | yes |  | Breadcrumb items; last item is current page. |
| `truncate` | `boolean` | no | `false` | When true, collapse long paths (e.g. with an overflow menu). |

## States

- (none)

## A11y

### Keyboard
- Native links are keyboard accessible by default.
- If truncation uses an overflow menu, that menu must be keyboard operable.

### ARIA
- Use <nav aria-label="Breadcrumb">.
- Mark current page with aria-current="page".

## Invariants

### Must
- Current page must be identifiable (aria-current and visual).

### Should
- Use concise labels; avoid repeating the current page title elsewhere if redundant.

### Must not
- Do not use breadcrumb as the only navigation method.

## Token usage
- `semantic.color.fg.muted` → Separator/secondary text (Use muted foreground for separators.)
- `semantic.space.stackGap` → Item spacing (Prefer semantic spacing tokens for gaps; map to primitives as needed.)

## Examples

### Semantic HTML reference

```html
<nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><a href="/projects">Projects</a></li><li aria-current="page">Alpha</li></ol></nav>
```
