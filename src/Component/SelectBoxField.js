import DefaultTextField from './DefaultTextField'
import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import isFunction from 'lodash/isFunction'

export default function SelectBoxField({ name, attributes, methods }) {
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

  return DefaultTextField({
    name,
    attributes: newAttributes,
    methods
  })

}
