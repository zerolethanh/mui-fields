import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import FormGroup from '@material-ui/core/FormGroup'

import isFunction from 'lodash/isFunction'
import { isCheckBox, isMultipleSelect, isSelectBox, isSwitch } from './helpers'

export default (fields, methods) => {
  return Object.keys(fields).map((name, idx) => {
    const attributes = fields[name]
    // console.log(attributes)
    if (!attributes) return null
    if (isCheckBox(attributes)) {
      return CheckboxField({
        name,
        attributes,
        methods
      })
    }
    if (isSwitch(attributes)) return CheckboxField({ name, attributes, methods, isSwitch: true })
    if (isSelectBox(attributes)) return SelectBoxField({ name, attributes, methods })
    if (isMultipleSelect(attributes)) return MultipleSelect({ name, attributes, methods })
    return DefaultTextField({ name, attributes, methods })
  })
}

function DefaultTextField({ name, attributes, methods }) {
  return (
    <TextField
      key={name}
      margin="dense"
      id={name}
      name={name}
      label={name}
      variant={'outlined'}
      error={Boolean(methods.errors[name])}
      helperText={methods.errors[name] && methods.errors[name].message}
      fullWidth
      InputLabelProps={{ shrink: true }}
      inputRef={methods.register(attributes)}
      {...attributes}
    />
  )
}

function CheckboxField({ name, attributes, methods, isSwitch }) {
  const { onChangeChecked } = attributes
  const Comp = isSwitch ? Switch : Checkbox
  const Wrap = attributes.fullWidth ? FormGroup : React.Fragment
  return (
    <Wrap>
      <FormControlLabel
        control={
          <Comp
            name={name}
            inputRef={methods.register({ name })}
            onChange={(e, checked) => {
              methods.setValue(name, checked)
              if (isFunction(onChangeChecked)) {
                onChangeChecked(checked)
              }
            }}
            {...attributes}
          />
        }
        label={attributes.label || name}
      />
    </Wrap>
  )
}

function SelectBoxField({ name, attributes, methods }) {
  let { mapKey, mapValue, mapLabel, values, onChangeValue } = attributes

  const children = values.map((val, idx) => {
    return (
      <MenuItem key={isFunction(mapKey) ? mapKey(val) : val}
                value={isFunction(mapValue) ? mapValue(val) : val}>
        {isFunction(mapLabel) ? mapLabel(val) : val}
      </MenuItem>
    )
  })

  const newAttributes = {
    ...attributes,
    name,
    select: true,
    children,
    onChange: (e) => {
      const value = e.target.value
      methods.setValue(name, value)
      if (isFunction(onChangeValue)) {
        onChangeValue(value)
      }
    }
  }

  return DefaultTextField({ name, attributes: newAttributes, methods })

}

function MultipleSelect({ name, attributes, methods }) {
  const classes = useStyles()
  const theme = useTheme()
  const Wrap = attributes.fullWidth ? FormGroup : React.Fragment

  const { selections, value: selected, onChangeValue } = attributes

  return (
    <Wrap>
      <FormControl className={classes.formControl} fullWidth={attributes.fullWidth}>
        <InputLabel id={`${name}-label`}>{attributes.label || name}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          multiple
          onChange={e => {
            const sel = e.target.value
            methods.setValue(name, sel)
            if (isFunction(onChangeValue)) {
              onChangeValue(sel)
            }
          }}
          input={<Input id="select-multiple-chip"/>}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip}/>
              ))}
            </div>
          )}
          MenuProps={MenuProps}
          inputRef={methods.register({ name })}
          {...attributes}
        >
          {selections.map(sel => (
            <MenuItem key={sel} value={sel} style={getStyles(sel, selected, theme)}>
              {sel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrap>
  )
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}
