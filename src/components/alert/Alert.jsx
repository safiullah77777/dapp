import React from 'react'
import MuiAlert from '@mui/material/Alert'

import './Alert.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert className="alert" elevation={6} ref={ref} variant="filled" {...props} />
})

export default Alert
