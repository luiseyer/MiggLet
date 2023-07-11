import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { useGetUser, useManageAdminUser } from '@hooks/useUsers'

const ManageAdminDialog = ({ id }) => {
  const { mutate, isLoading } = useManageAdminUser(id)
  const { data } = useGetUser(id)

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
    const button = document.getElementById('manage-admin-button')
    button.addEventListener('click', handleClickOpen)
  }, [])

  return (
    <>
      {isLoading &&
        <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      {data &&
        <Dialog open={open} onClose={handleClose} maxWidth='xs'>
          <DialogTitle>
            {data.isAdmin
              ? '¿Desea quitar los permisos de administrador de este usuario?'
              : '¿Desea volver administrador a este usuario?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Los administradores pueden modificar ajustes de la aplicación, gestionar usuarios, entre otros
            </DialogContentText>
            <DialogContentText>
              <Typography variant='caption'>
                <Link to='/about/manage-admin-users'>Más información</Link>
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>Cancelar</Button>
            <Button onClick={handleClickSubmit}>Aceptar</Button>
          </DialogActions>
        </Dialog>}
    </>
  )
}

export default ManageAdminDialog
