# Stepper (`stepper`)

Multi-step flow indicator (wizard). Indicates progress across steps; can be clickable or read-only.

## Props

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `steps` | `Array<{id:string,label:string,description?:string}>` | yes |  | List of steps. |
| `activeStepId` | `string` | yes |  | Current step id. |
| `interactive` | `boolean` | no | `false` | Whether steps can be clicked to navigate. |

## States
- `complete`: Completed step.
- `active`: Current step.
- `upcoming`: Future steps.

## A11y

### Keyboard
- If interactive, each step is focusable and activatable via Enter/Space.
- Tab order follows visual order.

### ARIA
- Current step can be marked with aria-current="step" on its control.
- If stepper is purely visual, ensure the flow has headings so screen readers understand context.

## Invariants

### Must
- Active step must be identifiable without relying on color alone.

### Should
- Show step numbers or icons to support scanning.

### Must not
- Do not force non-linear navigation unless the flow supports it.

## Token usage
- `semantic.color.border.default` → Separators (Use default borders for connectors.)
- `semantic.color.bg.accent` → Active indicator (Use accent for active step indicator.)

## Examples

### Current step marking

```html
<ol><li aria-current="step">Details</li><li>Billing</li><li>Confirm</li></ol>
```
