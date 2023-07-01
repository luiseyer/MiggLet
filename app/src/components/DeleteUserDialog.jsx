import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useDeleteUser } from '@hooks/useUsers'

const DeleteUserDialog = ({ id }) => {
  const navigate = useNavigate()
  const { mutate, isSuccess } = useDeleteUser(id)

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
          <Link to='/about/delete-users'>Más información</Link>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>Cancelar</Button>
        <Button onClick={handleClickSubmit}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteUserDialog
