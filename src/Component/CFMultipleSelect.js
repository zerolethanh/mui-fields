import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import FormGroup from '@material-ui/core/FormGroup'
import isFunction from 'lodash/isFunction'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'

export default function CFMultipleSelect({ name, attributes, methods }) {
  const [value, setValue] = useState(attributes.defaultValue || attributes.value || [])
  const classes = useStyles()
  const Wrap = attributes.fullWidth ? FormGroup : React.Fragment
  const { selections, onChangeValue, mapKey, mapValue, mapLabel } = attributes

  const checkSelected = val => {
    if (!value) return false
    return value.includes(val)
  }
  const getKey = (opt) => {
    return isFunction(mapKey) ?
      mapKey(opt)
      : mapValue
        ?
        mapValue(opt)
        : opt
  }
  const getValue = (opt) => {
    return isFunction(mapValue) ?
      mapValue(opt)
      : opt
  }
  const getLabel = (opt) => {
    return isFunction(mapLabel) ?
      mapLabel(opt)
      : opt
  }
  return (
    <Wrap>
      <FormControl
        className={classes.formControl}
        // variant="outlined"
        fullWidth={attributes.fullWidth}>
        <InputLabel id={`${name}-label`}>{attributes.label || name}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          multiple
          onChange={e => {
            const value = e.target.value
            methods.setValue(name, value)
            setValue(value)
            if (isFunction(onChangeValue)) {
              onChangeValue(value)
            }
          }}
          renderValue={() => (
            value.map(val => {
              let label
              selections.forEach(opt => {
                if (getValue(opt) === val) {
                  label = getLabel(opt)
                }
              })
              return (
                <Chip key={val}
                      label={label || val}
                      className={classes.chip}/>
              )
            })
          )
          }
          MenuProps={MenuProps}
          inputRef={methods.register({ name })}
          {...attributes}
          value={value}
        >
          {selections.map(opt => {
            return (
              <MenuItem key={getKey(opt)} value={getValue(opt)}>
                <Checkbox checked={checkSelected(getValue(opt))}/>
                <ListItemText primary={getLabel(opt)}/>
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Wrap>
  )
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}))
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
