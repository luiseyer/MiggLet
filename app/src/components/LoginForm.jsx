import { Alert, Box, Button, Container, Link, Paper, TextField, Typography } from '@mui/material'
import { useLogin } from '@hooks'

const LoginForm = function () {
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    await login(data.get('username'), data.get('password'))
  }

  return (
    <>
      {error && <Alert severity='error'>{error}</Alert>}

      <Container
        component={Paper}
        maxWidth='xs'
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Typography className='app-title' component='h1' variant='h4' sx={{ fontWeight: 'bold' }}>
          <Box component='span' color='secondary.main'>Mi</Box>
          <Box component='span' color='primary.main'>gg</Box>
          <Box component='span' color='tertiary.main'>Let</Box>
        </Typography>

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

          <Link href='#'>
            Recuperar contraseña
          </Link>

          <Button
            fullWidth
            disabled={isLoading}
            type='submit'
            variant='contained'
            sx={{ mt: 2 }}
          >
            Iniciar
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default LoginForm
