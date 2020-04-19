import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'

export default function CFTextField({ name, attributes, methods }) {
  const defaultValue = attributes.value || attributes.defaultValue
  delete attributes.value
  attributes.type = attributes.type || 'text'

  return (
    <Controller
      as={
        <TextField
          margin="dense"
          name={name}
          variant={'outlined'}
          error={Boolean(methods.errors[name])}
          helperText={methods.errors[name] && methods.errors[name].message}
          fullWidth
          InputLabelProps={{ shrink: true }}
          {...attributes}
        />
      }
      control={methods.control}
      name={name}
      defaultValue={defaultValue}
    />

  )
}
