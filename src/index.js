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
      return CheckboxField({
        name,
        attributes,
        methods
      })
    }
    if (isSwitch(attributes)) {
      return CheckboxField({
        name,
        attributes,
        methods,
        isSwitch: true
      })
    }
    if (isSelectBox(attributes)) {
      return SelectBoxField({
        name,
        attributes,
        methods
      })
    }
    if (isMultipleSelect(attributes)) {
      return MultipleSelect({
        name,
        attributes,
        methods
      })
    }
    if (isMultipleSelectWithValueLabel(attributes)) {
      return MultipleSelectWithValueLabel({
        name,
        attributes,
        methods
      })
    }
    return DefaultTextField({
      name,
      attributes,
      methods
    })
  })
}
