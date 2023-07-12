import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Backdrop, Box, Button, CircularProgress, Container, Paper, Snackbar, TextField, Typography } from '@mui/material'
import { AppTitle } from '@components'
import { useLogin } from '@hooks'

const LoginForm = () => {
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    await login(data.get('username'), data.get('password'))
  }

  const [open, setOpen] = useState(Boolean(error))

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(Boolean(error))
  }, [error])

  return (
    <>
      <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        sx={{ width: 'calc(100% - 1rem)' }}
      >
        <Alert severity='error'>{error}</Alert>
      </Snackbar>

      <Container
        component={Paper}
        maxWidth='xs'
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <AppTitle variant='h4' sx={{ mb: '1rem' }} />

        <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin='normal'
            name='username'
            type='email'
            id='username'
            label='Correo o cédula'
          />

          <TextField
            fullWidth
            margin='normal'
            name='password'
            type='password'
            id='password'
            label='Contraseña'
          />

          <Button
            fullWidth
            disabled={isLoading}
            type='submit'
            variant='contained'
            sx={{ mt: '1rem' }}
          >
            Iniciar
          </Button>

          <Typography variant='caption' display='block' textAlign='center' mt={2}>
            <Link to='#'>Recuperar contraseña</Link>
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default memo(LoginForm)
