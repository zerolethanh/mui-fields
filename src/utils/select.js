import isFunction from 'lodash/isFunction'
import _get from 'lodash/get'

export default (attributes) => {
  let { mapKey, mapValue, mapLabel, keyPath, valuePath, labelPath } = attributes

  const getKey = (opt) => {
    if (keyPath) return _get(opt, keyPath)
    return isFunction(mapKey) ?
      mapKey(opt)
      : mapValue
        ?
        mapValue(opt)
        : opt
  }
  const getValue = (opt) => {
    if (valuePath) return _get(opt, valuePath)
    return isFunction(mapValue) ?
      mapValue(opt)
      : opt
  }
  const getLabel = (opt) => {
    if (labelPath) return _get(opt, labelPath)
    return isFunction(mapLabel) ?
      mapLabel(opt)
      : opt
  }
  return {
    getKey,
    getValue,
    getLabel
  }
}
