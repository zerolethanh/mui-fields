import CFTextField from './CFTextField'
import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import isFunction from 'lodash/isFunction'

export default function CFSelectBox({ name, attributes, methods }) {
  const [value, setValue] = useState(attributes.defaultValue || attributes.value || '')

  let { mapKey, mapValue, mapLabel, values, selections, onChangeValue } = attributes

  const getKey = (opt) => {
    return isFunction(mapKey) ?
      mapKey(opt)
      : mapValue
        ?
        mapValue(opt)
        : opt
  }
  const getValue = (opt) => {
    return isFunction(mapValue) ?
      mapValue(opt)
      : opt
  }
  const getLabel = (opt) => {
    return isFunction(mapLabel) ?
      mapLabel(opt)
      : opt
  }
  const children = (values || selections).map((opt) => {
    return (
      <MenuItem key={getKey(opt)}
                value={getValue(opt)}>
        {getLabel(opt)}
      </MenuItem>
    )
  })

  const newAttributes = {
    ...attributes,
    value: value,
    name,
    select: true,
    children,
    onChange: (e) => {
      const value = e.target.value
      methods.setValue(name, value)
      setValue(value)
      if (isFunction(onChangeValue)) {
        onChangeValue(value)
      }
    }
  }

  return CFTextField({
    name,
    attributes: newAttributes,
    methods
  })

}
