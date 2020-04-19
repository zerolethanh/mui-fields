import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import render from '../utils/render'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))
let containerIdx = 0
export default function CFGrid({ name, attributes: attrs, methods }) {
  ++containerIdx
  const classes = useStyles()
  const { direction = 'column', justify, spacing, alignItems, style, items } = attrs
  const getKey = (name, prefix) => {
    return `${prefix}${name}_${containerIdx}`
  }
  return (
    <Grid container
          key={getKey(name, 'c_')}
          {...{ direction, justify, spacing, alignItems }}
          style={style}
          className={classes.root}
    >
      {
        items && Object.keys(items).map(name => {
          const attrs = items[name]
          const { style } = attrs
          return (
            <Grid item key={getKey(name, 'i_')} style={style}>
              {
                render({ [name]: attrs }, methods)
              }
            </Grid>
          )
        })
      }
    </Grid>
  )
}
