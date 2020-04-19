import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import fields from './fields.json'
import r from 'mui-fields'

export default function App() {
  const [formValues, setFormValues] = useState(null)
  const methods = useForm()
  const _onSubmit = (data) => {
    console.log(data)
    setFormValues(data)
  }
  return (
    <form onSubmit={methods.handleSubmit(_onSubmit)}>
      {r(fields, methods)}
      {
        formValues && <pre>{JSON.stringify(formValues, null, 2)}</pre>
      }
    </form>
  )
}
