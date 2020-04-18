import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function CFTextField({ name, attributes, methods }) {
  const defaultValue = attributes.value || attributes.defaultValue
  delete attributes.value
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
      defaultValue={defaultValue}
    />
  )
}
