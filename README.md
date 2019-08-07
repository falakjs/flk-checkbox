# Checkbox inputs

A component for checkbox/radio inputs for Falak JS framework. 

# Installation
`flk install flk-checkbox`

# Usage

`hello-world.component.html`

```html
<flk-checkbox name="display" [checked]="true" value="1" label="Display post"></flk-checkbox>
```

# Attributes

## checked

**name**: `[checked]`

**values**: Any `Boolean` value, `true` to mark it as checked, `false` to uncheck it.

Determine wether input is checked.


## label

**name**: `label` | `[label]`

Set the input label.


# Missing attributes

Any input attribute/event could be applied here, such as `(change)` event, `value` and so on. 