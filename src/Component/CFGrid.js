import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import render from '../utils/render'
import _isArray from 'lodash/isArray'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

export default function CFGrid({ name, attributes: attrs, methods }) {

  const classes = useStyles()
  const { direction = 'column', justify, spacing, alignItems, style, items } = attrs
  const getKey = (name, prefix) => {
    return `${prefix}${name}`
  }
  return (
    <Grid container
          key={getKey(name, 'c_')}
          {...{ direction, justify, spacing, alignItems }}
          style={style}
          className={classes.root}
    >
      {/*{*/}
      {/*  _isPlainObject(items) && Object.keys(items).map(name => {*/}
      {/*    const attrs = items[name]*/}
      {/*    const { style } = attrs*/}
      {/*    return (*/}
      {/*      <Grid item key={getKey(name, 'i_')} style={style}>*/}
      {/*        {*/}
      {/*          render(attrs, methods)*/}
      {/*        }*/}
      {/*      </Grid>*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}
      {
        _isArray(items) && items.map(attrs => {
          const { style, name } = attrs
          return (
            <Grid item key={getKey(name, 'i_')} style={style}>
              {
                render(attrs, methods)
              }
            </Grid>
          )

        })
      }
    </Grid>
  )
}
