import React from 'react'
import PropTypes from 'prop-types'

// Material ui core
import { IconButton, Tooltip } from '@material-ui/core'

// Material ui icons
import AddIcon from '@material-ui/icons/Add'

const CustomToolbar = ({ tooltip, onClick }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  )
}

CustomToolbar.propTypes = {
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default CustomToolbar
