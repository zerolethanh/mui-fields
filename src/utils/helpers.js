export function isCheckBox(attributes) {
  return attributes.isCheckBox || attributes.check || attributes.checkbox
}

export function isSwitch(attributes) {
  return attributes.isSwitch || attributes.switch
}

export function isSelectBox(attributes) {
  return attributes.isSelectBox || attributes.select
}

export function isMultipleSelect(attributes) {
  return attributes.isMultipleSelect || attributes.multipleSelect
}

export function isMultipleSelectWithValueLabel(attributes) {
  return attributes.isMultipleSelectWithValueLabel || attributes.isMultipleSelectWithValueLabel
}

export function isRadios(attrs) {
  return attrs.radio || attrs.radios
}

export function isGrid(attrs) {
  return attrs.type === 'grid' || attrs.grid
}

export function lowcaseType(type) {
  if (!type) return
  if (typeof type === 'string') return
  return type.toLowerCase()
}

export function mapNames(fields) {
  return Object.keys(fields).map(name => ({ name }))
}
