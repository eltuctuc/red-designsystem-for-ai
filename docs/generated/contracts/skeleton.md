# Skeleton / Loading Placeholder (`skeleton`)

Non-content placeholder shown while loading. Must avoid being announced as real content; keep layout stable to reduce jank.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `variant` | `string` | no | `"block"` | Shape preset. |
| `animated` | `boolean` | no | `true` | Whether shimmer/pulse is animated (respect prefers-reduced-motion). |
| `width` | `string` | no |  | Optional width hint (e.g. "120px" or "60%"). |
| `height` | `string` | no |  | Optional height hint (e.g. "16px"). |

## States
- `animated`: Animation enabled.

## A11y

### Keyboard
- Skeleton is not interactive.

### ARIA
- Skeleton blocks should be aria-hidden="true".
- Apply aria-busy="true" to the nearest meaningful container while loading.

## Invariants

### Must
- Skeleton must not be focusable and must not be announced as content.
- Loading states should keep layout stable (avoid major shifts).

### Should
- Respect prefers-reduced-motion and reduce/disable shimmer.
- Use skeleton only for short loading; for long loads, show progress or messaging.

### Must not
- Do not show skeleton and real content at the same time for the same area.

## Token usage
- `semantic.color.bg.muted` → Placeholder background (Use muted background for skeleton blocks.)
- `semantic.motion.ui` → Animation timing (Use UI motion token for pulse/shimmer; disable for reduced motion.)
- `semantic.radius.control` → Shape radius (Use control radius for skeleton blocks unless circle variant.)

## Examples

### Aria-hidden skeleton block

```html
<div aria-busy="true"><div aria-hidden="true" style="height:16px;width:120px"></div></div>
```
