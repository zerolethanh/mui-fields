import React from 'react'
import CFTextField from './Component/CFTextField'
import CFCheckbox from './Component/CFCheckbox'
import CFSelectBox from './Component/CFSelectBox'
import CFMultipleSelect from './Component/CFMultipleSelect'
import CFMultipleSelectWithValueLabel from './Component/CFMultipleSelectWithValueLabel'
import { isCheckBox, isMultipleSelect, isMultipleSelectWithValueLabel, isSelectBox, isSwitch } from './helpers'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    // console.log(attributes)
    if (!attributes) return null
    if (isCheckBox(attributes)) {
      return <CFCheckbox
        key={name}
        name={name}
        attributes={attributes}
        methods={methods}/>
    }
    if (isSwitch(attributes)) {
      return <CFCheckbox
        key={name}
        name={name}
        attributes={attributes}
        methods={methods}
        isSwitch={true}/>
    }
    if (isSelectBox(attributes)) {
      return <CFSelectBox
        key={name}
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    if (isMultipleSelect(attributes)) {
      return <CFMultipleSelect
        key={name}
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    if (isMultipleSelectWithValueLabel(attributes)) {
      return <CFMultipleSelectWithValueLabel
        key={name}
        name={name}
        attributes={attributes}
        methods={methods}
      />
    }
    return <CFTextField
      key={name}
      name={name}
      attributes={attributes}
      methods={methods}
    />
  })
}
