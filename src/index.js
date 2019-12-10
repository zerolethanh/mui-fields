import React from 'react'
import DefaultTextField from './Component/DefaultTextField'
import CheckboxField from './Component/CheckboxField'
import SelectBoxField from './Component/SelectBoxField'
import MultipleSelect from './Component/MultipleSelect'
import MultipleSelectWithValueLabel from './Component/MultipleSelectWithValueLabel'
import { isCheckBox, isMultipleSelect, isMultipleSelectWithValueLabel, isSelectBox, isSwitch } from './helpers'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    // console.log(attributes)
    if (!attributes) return null
    if (isCheckBox(attributes)) {
      return <CheckboxField
        name={name}
        attributes={attributes}
        methods={methods}/>
    }
    if (isSwitch(attributes)) {
      return <CheckboxField
        name={name}
        attributes={attributes}
        methods={methods}
        isSwitch={true}/>
    }
    if (isSelectBox(attributes)) {
      return <SelectBoxField
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    if (isMultipleSelect(attributes)) {
      return <MultipleSelect
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    if (isMultipleSelectWithValueLabel(attributes)) {
      return <MultipleSelectWithValueLabel
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    return <DefaultTextField
      name={name}
      attributes={attributes}
      methods={methods}
    />
  })
}
