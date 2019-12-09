import React, { useState } from 'react'
import useForm from 'react-hook-form'

import renderFields from 'mui-fields'

export default function App() {
  const [isVietNamese, setIsVietNamese] = useState(true)
  const [province, setProvince] = useState('Hà Nội')
  const [formValues, setFormValues] = useState(null)
  const [soThich, setSoThich] = useState([])
  const [soThich2, setSoThich2] = useState([])
  const methods = useForm({
    defaultValues: { isVietNamese }
  })
  const _renderFieds = () => {
    return renderFields({
      // MuiTextFieldsAttributes là các thuộc tính TextField của MUI,
      // xem thêm https://material-ui.com/api/text-field/
      fullName: { label: 'Họ và tên', required: true, autoFocus: true },
      cmnd: { label: 'Số cmnd/thẻ căn cước', type: 'number', fullWidth: false },
      dob: { label: 'Ngày sinh', type: 'date', defaultValue: '2010-01-20', fullWidth: false },
      province: {
        label: 'Nơi ở hiện tại',
        select: true,
        values: ['Hà Nội', 'HCM'],
        // mapKey: k => k,
        // mapValue: k => k,
        // mapLabel: k => k,
        value: province,
        onChangeValue: setProvince
      },
      sothich: {
        isMultipleSelect: true,
        label: 'Sở thích',
        selections: ['lập trình', 'đọc sách báo', 'chụp ảnh', 'du lịch'],
        value: soThich,
        onChangeValue: setSoThich,
        fullWidth: true
      },
      sothich2: {
        isMultipleSelectWithValueLabel: true,
        label: 'Sở thích version 2',
        selections: [
          {
            value: 'value1',
            label: 'lập trình'
          },
          {
            value: 'value2',
            label: 'đọc sách báo'
          },
          {
            value: 'value3',
            label: 'chụp ảnh'
          },
          {
            value: 'value4',
            label: 'du lịch'
          }
        ],
        value: soThich2,
        onChangeValue: setSoThich2,
        fullWidth: true
      },
      isVietNamese: {
        label: 'Là người Việt Nam',
        checkbox: true // để render checkbox field
        ,
        checked: isVietNamese // trạng thái check or uncheck
        ,
        onChangeChecked: setIsVietNamese
        ,
        fullWidth: true
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
