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

> #### settings: {fieldName: attributes}:
>> fieldName (string): Tên của trường.
>
>> attributes (object): thuộc tính của trường (extends tất cả thuộc tính của MUI TextField) // xem thêm https://material-ui.com/api/text-field/
>
> #### useFormMethods:
> các methods của useForm // xem ví dụ bên dưới

```jsx
import React, { useState } from 'react'
import useForm from 'react-hook-form'

import renderFields from 'mui-fields'

export default function App() {
  const [isVietNamese, setIsVietNamese] = useState(false)
  const [province, setProvince] = useState(null)
  const [formValues, setFormValues] = useState(null)
  const methods = useForm()
  const _renderFieds = () => {
    return renderFields({
      // MuiTextFieldsAttributes là các thuộc tính TextField của MUI,
      // xem thêm https://material-ui.com/api/text-field/
      fullName: { label: 'Họ và tên', required: true },
      cmnd: { label: 'Số cmnd/thẻ căn cước', type: 'number', fullWidth: false },
      dob: { label: 'Ngày sinh', type: 'date', defaultValue: '2010-01-20', fullWidth: false },
      province: {
        label: 'Nơi ở hiện tại',
        isSelectBox: true,
        values: ['Hà Nội', 'HCM'],
        // mapKey: k => k,
        // mapValue: k => k,
        // mapLabel: k => k,
        value: province,
        onChangeValue: setProvince
      },
      isVietNamese: {
        label: 'Là người Việt Nam',
        isCheckBox: true // để render checkbox field
        , checked: isVietNamese // trạng thái check or uncheck
        , onChangeChecked: setIsVietNamese
      }
    }, methods)
  }
  const _onSubmit = (data) => {
    console.log(data)
    setFormValues(data)
  }
  return (
    <form onSubmit={methods.handleSubmit(_onSubmit)} style={{ margin: 20 }}>
      {_renderFieds()}
      <div>
        <button type={'submit'}>Submit</button>
      </div>
      {
        formValues && <pre>{JSON.stringify(formValues, null, 2)}</pre>
      }
    </form>
  )
}
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
## Xem thêm react-hook-form tại https://github.com/react-hook-form/react-hook-form
## License

MIT
