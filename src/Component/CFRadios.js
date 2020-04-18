import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default function CFRadios({ name, attributes: attrs, methods }) {
  const [value, setValue] = useState(attrs.defaultValue || attrs.value || '')

  const handleChange = (event) => {
    const _value = event.target.value
    setValue(_value)
    methods.setValue(name, _value)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{attrs?.legend || attrs?.title}</FormLabel>
      <RadioGroup aria-label={name} name={name} value={value} onChange={handleChange}
                  inputRef={methods.register({ name })}>
        {
          attrs.options?.map((o, idx) => {
            return (
              <FormControlLabel key={o.value || idx} control={<Radio/>} {...o}/>
            )
          })
        }
      </RadioGroup>
    </FormControl>
  )
}
