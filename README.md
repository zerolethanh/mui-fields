# mui-fields

>

[![NPM](https://img.shields.io/npm/v/mui-fields.svg)](https://www.npmjs.com/package/mui-fields) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Ví dụ](https://img-classfunc.s3-ap-northeast-1.amazonaws.com/A%CC%89nh+chu%CC%A3p+Ma%CC%80n+hi%CC%80nh+2019-12-06+lu%CC%81c+18.48.12.png "Ví dụ")

## Install

```bash
npm install --save mui-fields
or
yarn add mui-fields
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

```jsx harmony

import React, { useState } from 'react'
import useForm from 'react-hook-form'

import renderFields from 'mui-fields'

export default function App() {
  const [formValues, setFormValues] = useState(null)
  const methods = useForm()

  const _renderFieds = () => {
    return renderFields({
      // MuiTextFieldsAttributes là các thuộc tính TextField của MUI,
      // xem thêm https://material-ui.com/api/text-field/
      fullName: { label: 'Họ và tên', value: 'Lê Thành', required: true, autoFocus: true },
      cmnd: { label: 'Số cmnd/thẻ căn cước', type: 'number', fullWidth: false },
      dob: { label: 'Ngày sinh', type: 'date', defaultValue: '2010-01-20', fullWidth: false },
      province: {
        label: 'Nơi ở hiện tại',
        select: true,
        selections: [{ code: 'HAN', name: 'Hà Nội' }, { code: 'SGN', name: 'HCM' }],
        mapKey: opt => opt.code,
        mapValue: opt => opt.code,
        mapLabel: opt => opt.name,
      },
      sothich: {
        isMultipleSelect: true,
        label: 'Sở thích',
        selections: ['lập trình', 'đọc sách báo', 'chụp ảnh', 'du lịch'],
        fullWidth: true
      },
      dev: {
        isMultipleSelect: true,
        label: 'Dev',
        selections: [
          {
            value: 'web',
            label: 'Web'
          },
          {
            value: 'mobile-app',
            label: 'Mobile App'
          },
          {
            value: 'AI',
            label: 'AI'
          },
          {
            value: 'block-chain',
            label: 'Block Chain'
          }
        ],
        mapKey: sel => sel.value,
        mapValue: sel => sel.value,
        mapLabel: sel => sel.label
      },
      isVietNamese: {
        label: 'Là người Việt Nam',
        checkbox: true // để render checkbox field
        , checked: true
        , fullWidth: true
      },

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
+ select (bool): `render box lựa chọn các giá trị của trường values`
  - values (array): `các giá trị` (`required`)
  - value (any): `giá trị hiện tại của box`
  - mapKey (func): `map giá trị cho key từ trường values`
  - mapValue (func): `map giá trị cho value từ trường values`
  - mapLabel (func): `map giá trị cho label từ trường values`
  - onChangeValue (func): `value => {/* tác vụ với giá trị mới (value)*/}`
+ isCheckBox (bool): `render check box`
+ check (bool): `render check box`
+ checkbox (bool): `render check box`
  - checked (bool): `giá trị hiện tại checked or unchecked`
  - onChangeChecked (func): `checked => {/* tác vụ với giá trị mới (checked)*/}`
+ isSwitch (bool)
+ switch (bool)
  - như isCheckBox
+ isMultipleSelect (bool): `render multiple select`
## Xem thêm react-hook-form tại https://github.com/react-hook-form/react-hook-form
## License

MIT
