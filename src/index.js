import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import isFunction from 'lodash/isFunction'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    // console.log(attributes)
    if (!attributes) return null
    if (attributes.isCheckBox) return CheckboxField({ name, attributes, methods })
    if (attributes.isSelectBox) return SelectBoxField({ name, attributes, methods })
    return DefaultTextField({ name, attributes, methods })
  })
}

function DefaultTextField({ name, attributes, methods }) {
  // const methods = useFormContext() // retrieve all hook methods
  return (
    <TextField
      key={name}
      margin="dense"
      id={attributes.id || name}
      name={attributes.name || name}
      label={name}
      variant={'outlined'}
      error={Boolean(methods.errors[name])}
      helperText={methods.errors[name] && methods.errors[name].message}
      // defaultValue={attributes.defaultValue || ''}
      fullWidth
      inputRef={methods.register(attributes)}
      {...attributes}
    />
  )
}

function CheckboxField({ name, attributes, methods }) {
  const { onChangeChecked } = attributes
  return (
    <FormControlLabel
      control={
        <Checkbox
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
      <MenuItem key={isFunction(mapKey) ? mapKey(val) : idx}
                value={isFunction(mapValue) ? mapValue(val) : idx}>
        {isFunction(mapLabel) ? mapLabel(val) : idx}
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
