import CFTextField from './../Component/CFTextField'
import CFCheckbox from './../Component/CFCheckbox'
import CFSelectBox from './../Component/CFSelectBox'
import CFMultipleSelect from './../Component/CFMultipleSelect'
import CFRadios from './../Component/CFRadios'

const typesMap = {
  'radio': CFRadios,
  'check': CFCheckbox,
  'multipeSelect': CFMultipleSelect,
  'select': CFSelectBox
}

export default function getComponent(type) {
  return typesMap[type] || CFTextField
}
