import React from 'react'
import CFTextField from './Component/CFTextField'
import CFCheckbox from './Component/CFCheckbox'
import CFSelectBox from './Component/CFSelectBox'
import CFMultipleSelect from './Component/CFMultipleSelect'
import CFMultipleSelectWithValueLabel from './Component/CFMultipleSelectWithValueLabel'
import CFRadios from './Component/CFRadios'

import {
  isCheckBox,
  isMultipleSelect,
  isMultipleSelectWithValueLabel,
  isRadios,
  isSelectBox,
  isSwitch
} from './helpers'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    if (!attributes) return null
    let Com
    let otherProps = {}
    if (isCheckBox(attributes)) {
      Com = CFCheckbox
    } else if (isSwitch(attributes)) {
      Com = CFCheckbox
      otherProps.isSwitch = true
    } else if (isSelectBox(attributes)) {
      Com = CFSelectBox
    } else if (isMultipleSelect(attributes)) {
      Com = CFMultipleSelect
    } else if (isMultipleSelectWithValueLabel(attributes)) {
      Com = CFMultipleSelectWithValueLabel
    } else if (isRadios(attributes)) {
      Com = CFRadios
    } else {
      Com = CFTextField
    }
    return <Com
      key={name}
      name={name}
      attributes={attributes}
      methods={methods}
      {...otherProps}
    />
  })
}
