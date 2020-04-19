import React from 'react'
import getComponent from './types'
import _isPlainObject from 'lodash/isPlainObject'
import _isArray from 'lodash/isArray'

export default function render(fields, methods) {
  // console.log({ fields })
  if (_isPlainObject(fields)) {
    const attrs = fields
    return renderComponent(attrs, methods)
  }

  return fields.map((attrs, idx) => {
    if (_isArray(attrs)) {
      return render(attrs, methods)
    }
    if (!_isPlainObject(attrs)) return null
    return renderComponent(attrs, methods)
  })
}

const renderComponent = (attrs, methods) => {
  const { type, name } = attrs
  let Com = getComponent(type)
  return (
    <Com
      key={name}
      name={name}
      attributes={attrs}
      methods={methods}
    />
  )
}
