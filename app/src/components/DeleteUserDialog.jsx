import { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { useManageActiveUser } from '@hooks/useUsers'

const DeleteUserDialog = ({ id }) => {
  const navigate = useNavigate()
  const { mutate, isLoading, isSuccess } = useManageActiveUser(id)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickSubmit = () => {
    mutate()
    handleClose()
  }

  useEffect(() => {
    const button = document.getElementById('delete-button')
    button.addEventListener('click', handleClickOpen)
  }, [])

  useEffect(() => {
    if (isSuccess) {
      navigate('/users', { replace: true })
    }
  }, [isSuccess, navigate])

  return (
    <>
      {isLoading &&
        <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      <Dialog open={open} onClose={handleClose} maxWidth='xs'>
        <DialogTitle>
          ¿Seguro que desea eliminar este usuario?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Los datos del usuario no serán eliminados,
            sin embargo este perderá todo acceso a la aplicación
          </DialogContentText>
          <DialogContentText>
            <Typography variant='caption'>
              <Link to='/about/delete-users'>Más información</Link>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancelar</Button>
          <Button onClick={handleClickSubmit}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default memo(DeleteUserDialog)
