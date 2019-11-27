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
