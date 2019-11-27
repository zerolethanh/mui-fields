import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'

import isFunction from 'lodash/isFunction'
import { isCheckBox, isSelectBox, isSwitch } from './helpers'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    // console.log(attributes)
    if (!attributes) return null
    if (isCheckBox(attributes)) {
      return CheckboxField({
        name,
        attributes,
        methods
      })
    }
    if (isSwitch(attributes)) return CheckboxField({ name, attributes, methods, isSwitch: true })
    if (isSelectBox(attributes)) return SelectBoxField({ name, attributes, methods })
    return DefaultTextField({ name, attributes, methods })
  })
}

function DefaultTextField({ name, attributes, methods }) {
  return (
    <TextField
      key={name}
      margin="dense"
      id={name}
      name={name}
      label={name}
      variant={'outlined'}
      error={Boolean(methods.errors[name])}
      helperText={methods.errors[name] && methods.errors[name].message}
      fullWidth
      InputLabelProps={{ shrink: true }}
      inputRef={methods.register(attributes)}
      {...attributes}
    />
  )
}

function CheckboxField({ name, attributes, methods, isSwitch }) {
  const { onChangeChecked } = attributes
  const Comp = isSwitch ? Switch : Checkbox
  return (
    <FormControlLabel
      control={
        <Comp
          name={name}
          inputRef={methods.register({ name })}
          onChange={(e, checked) => {
            methods.setValue(name, checked)
            if (isFunction(onChangeChecked)) {
              onChangeChecked(checked)
            }
          }}
          {...attributes}
        />
      }
      label={attributes.label || name}
    />
  )
}

function SelectBoxField({ name, attributes, methods }) {
  let { mapKey, mapValue, mapLabel, values, onChangeValue } = attributes

  const children = values.map((val, idx) => {
    return (
      <MenuItem key={isFunction(mapKey) ? mapKey(val) : val}
                value={isFunction(mapValue) ? mapValue(val) : val}>
        {isFunction(mapLabel) ? mapLabel(val) : val}
      </MenuItem>
    )
  })

  const newAttributes = {
    ...attributes,
    name,
    select: true,
    children,
    onChange: (e) => {
      const value = e.target.value
      methods.setValue(name, value)
      if (isFunction(onChangeValue)) {
        onChangeValue(value)
      }
    }
  }

  return DefaultTextField({ name, attributes: newAttributes, methods })

}
