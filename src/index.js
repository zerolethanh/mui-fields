import React from 'react'
import CFTextField from './Component/CFTextField'
import CFCheckbox from './Component/CFCheckbox'
import CFSelectBox from './Component/CFSelectBox'
import CFMultipleSelect from './Component/CFMultipleSelect'
import CFMultipleSelectWithValueLabel from './Component/CFMultipleSelectWithValueLabel'
import CFRadios from './Component/CFRadios'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import {
  isCheckBox,
  isGrid,
  isMultipleSelect,
  isMultipleSelectWithValueLabel,
  isRadios,
  isSelectBox,
  isSwitch
} from './utils/helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))
export default (fields, methods) => {
  const classes = useStyles()
  return (
    <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}>
      {render(fields, methods)}
    </Grid>
  )
}

function render(fields, methods) {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    if (!attributes) return null
    let Com
    let otherProps = {}
    if (isGrid(name)) {
      return (
        render(attributes.items, methods)
      )
    }

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
    return (
      <Grid item xs={8} md={6} key={name}>
        <Com
          name={name}
          attributes={attributes}
          methods={methods}
          {...otherProps}
        />
      </Grid>
    )
  })
}
