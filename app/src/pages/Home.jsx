import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'

const SVGLogo = '/images/logotipo.svg'

const HomePage = () => {
  return (
    <Box
      component='main'
      sx={{
        p: 2,
        display: 'grid',
        placeItems: 'center',
        minHeight: '100dvh',
        background: (theme) => theme.gradient.light
      }}
    >
      <Box>
        <img
          className='logo'
          src={SVGLogo}
          loading='lazy'
          width={512}
          height={256}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
          <Button size='large' variant='contained' component={Link} to='/login'>
            Comenzar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(HomePage)
