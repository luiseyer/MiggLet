import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Backdrop, CircularProgress, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import { FormDialog } from '@components'

const CreateUserForm = ({
  open,
  handleClose
}) => {
  return (
    <>
      <Backdrop sx={{ color: 'primary.main', zIndex: 9999 }} open={false}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <FormDialog open={open} handleClose={handleClose}>
        <DialogTitle>Crear usuario</DialogTitle>
        <DialogContent>
          <TextField
            name='new-user-email'
            label='Correo electrónico'
            type='email'
            variant='outlined'
            margin='normal'
            autoComplete='off'
            autoFocus
            fullWidth
            sx={{ mb: 2 }}
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

export default memo(CreateUserForm)
