// import { Link } from 'react-router-dom'
import { Backdrop, Box, Button, CircularProgress, Container, Paper, TextField, Avatar, IconButton } from '@mui/material'
import { AppTitle } from '@components'

const FirstLoginForm = () => {
  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 999 }} open={false}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <Container component={Paper} maxWidth='sm' sx={{ p: 4 }}>
        <AppTitle variant='h4' sx={{ mb: '1rem' }} />

        {/* {error && <Alert severity='error'>{error}</Alert>} */}

        <Box
          component='form'
          onSubmit={() => {}}
          noValidate
          autoComplete='off'
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 2, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton component='label'>
              <Avatar variant='square' sx={{ width: '7rem', height: '7rem', flex: '0 0 7rem' }} />
              <input accept='image/*' type='file' style={{ display: 'none' }} />
            </IconButton>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                margin='normal'
                name='firstnames'
                id='firstnames'
                label='Nombres'
              />

              <TextField
                fullWidth
                margin='normal'
                name='lastnames'
                id='lastnames'
                label='Apellidos'
              />
            </Box>
          </Box>

          <TextField
            fullWidth
            margin='normal'
            name='phone'
            id='phone'
            label='Teléfono'
          />

          <Button
            fullWidth
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

export default FirstLoginForm
