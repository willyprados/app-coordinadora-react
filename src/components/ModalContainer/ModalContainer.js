import React from 'react'
import { Dialog, useTheme, DialogTitle, useMediaQuery, DialogContent } from '@material-ui/core'
import PropTypes from 'prop-types'

export const ModalContainer = ({
  open,
  onClose,
  title,
  children,
  size,
  disableBackdropClick,
  disableEscapeKeyDown
}) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        fullScreen={fullScreen}
        fullWidth
        maxWidth={size}
        onClose={onClose}
        open={open}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  )
}

ModalContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool
}

ModalContainer.defaultProps = {
  size: 'sm',
  disableBackdropClick: false,
  disableEscapeKeyDown: false
}
