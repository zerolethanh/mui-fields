import React from 'react'
import CFGrid from './Component/CFGrid'

export default (fields, methods) => {

  const topGridAttrs = {
    direction: 'column',
    items: fields
  }
  return (
    <CFGrid
      name={'topGrid'}
      attributes={topGridAttrs}
      methods={methods}
    >
      {/*{render(fields, methods)}*/}
    </CFGrid>
  )
}
