import { forwardRef } from 'react'
import { Button, Dialog, DialogActions, Slide } from '@mui/material'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FormDialog = ({
  children,
  open,
  handleClose,
  clickAction = () => {},
  ...props
}) => {
  const handleClick = () => {
    clickAction()
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{
        '.MuiPaper-root': {
          m: 0,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0
        }
      }}
      {...props}
    >
      {children}
      <DialogActions>
        <Button onClick={handleClose} autoFocus>Cancelar</Button>
        <Button onClick={handleClick}>Enviar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
