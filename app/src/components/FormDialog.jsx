import { forwardRef } from 'react'
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, Slide } from '@mui/material'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FormDialog = ({
  children,
  open,
  isLoading,
  handleClose,
  action = () => {},
  ...props
}) => {
  const handleClick = async () => {
    action()
    handleClose()
  }

  return (
    <>
      {isLoading &&
        <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

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
    </>
  )
}

export default FormDialog
