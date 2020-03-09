import React from 'react'
import Loadable from '@loadable/component'
import { makeStyles } from '@material-ui/core/styles'

const LoadableSnowfall = Loadable(() => import('react-snowfall'))

const useStyles = makeStyles({
  snowfall: {
    'z-index': -100,
  },
})

const CustomSnowfall = (props) => {
  const classes = useStyles()
  return (
    <LoadableSnowfall className={classes.snowfall} snowflakeCount={75}/>
  )
}

export default CustomSnowfall
