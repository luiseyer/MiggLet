import { forwardRef, memo, useEffect } from 'react'
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, Slide } from '@mui/material'

const Transition = memo(forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
}))

const FormDialog = ({
  children,
  open,
  mutationObject = {},
  handleClose,
  field,
  value,
  ...props
}) => {
  const { mutate, isLoading, isSuccess } = mutationObject

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget).get(field).trim()

    if (data && data.trim('').length !== 0 && data !== value) {
      mutate({ [field]: data })
    } else handleClose()
  }

  useEffect(() => {
    if (isSuccess) handleClose()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  useEffect(() => {
    document.querySelectorAll('.section').forEach(section => {
      open
        ? section.classList.add('no-scrollable')
        : section.classList.remove('no-scrollable')
    }
    )
  }, [open])

  return (
    <>
      {isLoading &&
        <Backdrop sx={{ color: 'primary.light', bgcolor: 'transparent', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      <Dialog
        component='form'
        autoComplete='off'
        onSubmit={handleSubmit}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-container': {
            position: 'fixed',
            inset: 0,
            alignItems: 'flex-end'

          },
          '& .MuiPaper-root': {
            m: 0,
            width: '100%'
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

export default memo(FormDialog)
