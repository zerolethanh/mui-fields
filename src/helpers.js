export function isCheckBox(attributes) {
  return attributes.isCheckBox || attributes.check || attributes.checkbox
}

export function isSwitch(attributes) {
  return attributes.isSwitch || attributes.switch
}

export function isSelectBox(attributes) {
  return attributes.isSelectBox || attributes.select
}

export function lowcaseType(type) {
  if (!type) return
  if (typeof type === 'string') return
  return type.toLowerCase()
}

export function mapNames(fields) {
  return Object.keys(fields).map(name => ({ name }))
}
