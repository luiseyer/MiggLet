import { Link } from 'react-router-dom'
import { Backdrop, CircularProgress, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import { FormDialog } from '@components'

const CreateUserForm = ({
  open,
  handleClose
}) => {
  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 999 }} open={false}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <FormDialog open={open} handleClose={handleClose}>
        <DialogTitle>Crear usuario</DialogTitle>
        <DialogContent>
          <TextField
            id='new-user-email'
            label='Correo electrónico'
            type='email'
            variant='standard'
            margin='none'
            autoFocus
            fullWidth
          />
          <DialogContentText>
            <Typography variant='caption'>
              <Link to='/about/create-users'>Más información</Link>
            </Typography>
          </DialogContentText>
        </DialogContent>
      </FormDialog>
    </>
  )
}

export default CreateUserForm