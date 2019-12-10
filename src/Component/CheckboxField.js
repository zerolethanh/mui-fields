import React, { useEffect, useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import isFunction from 'lodash/isFunction'

export default function CheckboxField({ name, attributes, methods, isSwitch }) {
  const [checked, setChecked] = useState(attributes.defaultValue || attributes.value || attributes.checked || false)
  useEffect(() => {
    methods.setValue(name, checked)
  }, [])
  const { onChangeChecked } = attributes

  const Comp = isSwitch ? Switch : Checkbox
  const Wrap = attributes.fullWidth ? FormGroup : React.Fragment
  return (
    <Wrap>
      <FormControlLabel
        control={
          <Comp
            name={name}
            inputRef={methods.register({ name })}
            onChange={(e, checked) => {
              methods.setValue(name, checked)
              setChecked(checked)
              if (isFunction(onChangeChecked)) {
                onChangeChecked(checked)
              }
            }}
            {...attributes}
            checked={checked}
          />
        }
        label={attributes.label || name}
      />
    </Wrap>
  )
}
