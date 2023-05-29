import { Link } from 'react-router-dom'
import { Alert, Backdrop, Box, Button, CircularProgress, Container, Paper, TextField } from '@mui/material'
import { AppTitle } from '@components'
import { useLogin } from '@hooks'

const LoginForm = () => {
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    await login(data.get('username'), data.get('password'))
  }

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>

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

        {error && <Alert severity='error'>{error}</Alert>}

        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin='normal'
            name='username'
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

          <Link to='#'>
            Recuperar contraseña
          </Link>

          <Button
            fullWidth
            disabled={isLoading}
            type='submit'
            variant='contained'
            sx={{ mt: '1rem' }}
          >
            Iniciar
          </Button>

        </Box>
      </Container>
    </>
  )
}

export default LoginForm
