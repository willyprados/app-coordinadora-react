import React from 'react'
import {
  List,
  Dialog,
  useTheme,
  ListItem,
  Typography,
  DialogTitle,
  useMediaQuery,
  DialogActions,
  DialogContent
} from '@material-ui/core'
import PropTypes from 'prop-types'
import Button from 'components/CustomButtons/Button'
import useStyles from './styles'

const ManagerModalDetail = ({ open, data, onClose, title }) => {
  const theme = useTheme()
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        onClose={onClose}
        open={open}
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
          <List component="nav" aria-label="main mailbox folders">
            {data.length === 0 ? (
              <b>No Hay Datos</b>
            ) : (
              data.map((item, key) => (
                <div key={key} className={classes.containerListInfo}>
                  <ListItem>
                    <Typography>
                      <b>{item.name}</b>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>{item.value}</Typography>
                  </ListItem>
                </div>
              ))
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="danger">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

ManagerModalDetail.defaultProps = {
  onClose: () => null,
  title: 'Title Detail',
  data: [],
  open: false
}

ManagerModalDetail.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  open: PropTypes.bool
}

export default ManagerModalDetail
