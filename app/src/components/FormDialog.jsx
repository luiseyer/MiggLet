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
  field,
  value,
  action = () => {},
  ...props
}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget).get(field)

    if (value !== data) {
      action({ [field]: data })
    }

    handleClose()
  }

  return (
    <>

      {isLoading &&
        <Backdrop sx={{ color: '#fff', zIndex: 9999, bgcolor: 'rgba(0,0,0, 0.1)' }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      <Dialog
        component='form'
        onSubmit={handleSubmit}
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
          <Button type='button' onClick={handleClose}>Cancelar</Button>
          <Button type='submit'>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FormDialog
