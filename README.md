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

## type

**name**: `type` | `[type]`

**values**: `checkbox` | `radio`.

**default**: `checkbox`


Set the input type, either `checkbox` or `radio`.


## Theme

**name**: `theme` | `[theme]`

**values**: `success` | `info` | `primary` | `warning` | `purple` | `teal` | `dark`.

**default**: `success`

Set the input theme color.

## label

**name**: `label` | `[label]`

Set the input label.


# Missing attributes

Any input attribute/event could be applied here, such as `(change)` event, `value` and so on. 