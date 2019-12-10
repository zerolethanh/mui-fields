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
