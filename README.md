# mui-fields

> 

[![NPM](https://img.shields.io/npm/v/mui-fields.svg)](https://www.npmjs.com/package/mui-fields) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-fields
```

## Usage

renderFields(settings, useFormMethods)
> #### settings: {fieldName: {...attributes}}: 
>> fieldName (string): Tên của trường.
>
>> attributes (object): thuộc tính của trường (extends tât cả thuộc tính của MUI TextField) // xem thêm https://material-ui.com/api/text-field/
>
> #### useFormMethods:
> các methods của useForm // xem ví dụ bên dưới 

```jsx
import React from 'react'
import useForm from 'react-hook-form'
import * as yup from 'yup' // nếu cần đến

import renderFields from 'mui-fields'

function MyForm() {
  const useFormMethods = useForm({
    validationSchema: SignupSchema,
  })
  return renderFields({
    // MuiTextFieldsAttributes là các thuộc tính TextField của MUI,
    // xem thêm https://material-ui.com/api/text-field/
    fieldName: { label: 'Họ và tên', {...MuiTextFieldsAttributes} },
    province: {
        isSelectBox: true // để render select box
        , required: true
        , label: 'Chọn Tỉnh/TP'
        , values: provinces // các giá trị của select box
        , mapKey: p => p.code // key
        , mapValue: p => p.code //value
        , mapLabel: p => p.name //label hiển thị
        , value: province, // giá trị hiện tại của box (vd: const [province, setProvince] = useState(null))
        onChangeValue: (value) => {
            setProvince(value) // set giá trị hiện tại của box 
        }
    },
    isActive: {
        isCheckBox: true // để render checkbox field
        , checked: isActive // trạng thái check or uncheck
        , onChangeChecked: (checked) => {
            // checked = true or fail
            setIsActive(checked)
        }
    }
  }, useFormMethods)
}

//nếu cần đến
const SignupSchema = yup.object().shape({
  fieldName: yup
    .string()
    .required()
})
```


## License

MIT
