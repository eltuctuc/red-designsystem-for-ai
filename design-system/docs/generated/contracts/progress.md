# Progress (`progress`)

Progress indicator for operations (determinate/indeterminate). Use when tasks take noticeable time.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `mode` | `string` | no | `"indeterminate"` | Determinate shows percentage; indeterminate shows ongoing activity. |
| `value` | `number` | no |  | 0–100 for determinate mode. |
| `label` | `string` | no |  | Accessible label (e.g. "Uploading"). |

## States
- `indeterminate`: Unknown progress.
- `determinate`: Known progress.

## A11y

### Keyboard
- Progress is not interactive.

### ARIA
- Use role="progressbar" with aria-valuemin/max and aria-valuenow for determinate mode.
- For indeterminate, omit aria-valuenow and rely on aria-label/aria-labelledby.

## Invariants

### Must
- Determinate progress must expose value to assistive tech.
- Respect prefers-reduced-motion in indeterminate animations.

### Should
- For long tasks, include descriptive text about what is happening.

### Must not
- Do not fake determinate values if you do not have real progress.

## Token usage
- `semantic.color.bg.muted` → Track background (Muted background for track.)
- `semantic.color.bg.accent` → Bar fill (Use accent for progress fill.)
- `semantic.radius.control` → Shape (Use control radius for track/bar.)

## Examples

### ARIA progressbar (determinate)

```html
<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" aria-label="Uploading"></div>
```
