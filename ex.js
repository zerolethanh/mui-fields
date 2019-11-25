import React from 'react'
import useForm from 'react-hook-form'
import * as yup from 'yup' // nếu cần đến
import renderFields from 'mui-fields'

function Component() {
  const useFormMethods = useForm({
    validationSchema: SignupSchema,
  })
  return renderFields({
    fieldName: { label: 'Họ và tên',
  {...
    MuiTextFieldsAttributes
  }
},
  useFormMethods
})
}

//nếu cần đến
const SignupSchema = yup.object().shape({
  fieldName: yup
    .string()
    .required()
})
