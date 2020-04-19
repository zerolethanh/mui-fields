import CFTextField from './../Component/CFTextField'
import CFCheckbox from './../Component/CFCheckbox'
import CFSelectBox from './../Component/CFSelectBox'
import CFMultipleSelect from './../Component/CFMultipleSelect'
import CFRadios from './../Component/CFRadios'
import CFGrid from '../Component/CFGrid'

const typesMap = {
  'radio': CFRadios,
  'radios': CFRadios,
  'radioGroup': CFRadios,
  'radiogroup': CFRadios,

  'grid': CFGrid,

  'check': CFCheckbox,
  'checkbox': CFCheckbox,
  'switch': CFCheckbox,

  'multipeSelect': CFMultipleSelect,
  'multipeselect': CFMultipleSelect,
  'multiSelect': CFMultipleSelect,
  'multiselect': CFMultipleSelect,

  'select': CFSelectBox
}

export default function getComponent(type) {
  return typesMap[type] || CFTextField
}
