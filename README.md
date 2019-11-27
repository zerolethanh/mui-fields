# mui-fields

>

[![NPM](https://img.shields.io/npm/v/mui-fields.svg)](https://www.npmjs.com/package/mui-fields) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Ví dụ](https://img-classfunc.s3-ap-northeast-1.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2019-11-27+lu%CC%81c+12.17.14.png "Ví dụ")

## Install

```bash
npm install --save mui-fields
```

## Usage
```js
import renderFields from 'mui-fields'
renderFields(settings, useFormMethods)
```

> #### settings: {fieldName: {...attributes}}:
>> fieldName (string): Tên của trường.
>
>> attributes (object): thuộc tính của trường (extends tất cả thuộc tính của MUI TextField) // xem thêm https://material-ui.com/api/text-field/
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
# API
Default: type = 'text'
+ isSelectBox (bool): `render box lựa chọn các giá trị của trường values`
  - values (array): `các giá trị` (`required`)
  - value (any): `giá trị hiện tại của box`
  - onChangeValue (func): `value => {/* tác vụ với giá trị mới (value)*/}`
+ isCheckBox (bool): `render check box`
  - checked (bool): `giá trị hiện tại checked or unchecked`
  - onChangeChecked (func): `checked => {/* tác vụ với giá trị mới (checked)*/}`
+ isSwitch (bool)
  - như isCheckBox

## License

MIT
