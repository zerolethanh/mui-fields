import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import ListItemText from '@material-ui/core/ListItemText'
import isFunction from 'lodash/isFunction'
import find from 'lodash/find'
import React from 'react'

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

export default function CFMultipleSelectWithValueLabel({ name, attributes, methods }) {
  const classes = useStyles()
  // const theme = useTheme()
  // const Wrap = attributes.fullWidth ? FormGroup : React.Fragment

  const { selections, value: selected, onChangeValue } = attributes

  return (
    // <Wrap>
    <FormControl className={classes.formControl} fullWidth={attributes.fullWidth}>
      <InputLabel id={`${name}-label`}>{attributes.label || name}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        onChange={e => {
          const value = e.target.value
          methods.setValue(name, value)
          if (isFunction(onChangeValue)) {
            onChangeValue(value)
          }
        }}
        renderValue={() => (
          <div className={classes.chips}>
            {selected.map(value => (
              <Chip key={value} label={find(selections, { value }).label} className={classes.chip}/>
            ))}
          </div>
        )}
        MenuProps={MenuProps}
        inputRef={methods.register({ name })}
        {...attributes}
      >
        {selections.map(sel => (
          <MenuItem key={sel.value} value={sel.value}
            // style={getStyles(sel, selected, theme)}
          >
            <Checkbox checked={selected.indexOf(sel.value) > -1}/>
            <ListItemText primary={sel.label}/>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    // </Wrap>
  )
}
