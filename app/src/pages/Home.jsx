import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import AnimatedLogo from '@assets/logotipo.gif'
import SVGLogo from '@assets/logotipo.svg'

const HomePage = () => {
  const [logo, setLogo] = useState(SVGLogo)

  useEffect(() => {
    setTimeout(() => setLogo(AnimatedLogo), 1000)
    setTimeout(() => setLogo(SVGLogo), 3000)
  }, [])

  return (
    <Box
      component='main'
      sx={{
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'light.main',
        minHeight: '100dvh'
      }}
    >
      <Box>
        <img className='logotipo' src={logo} />
        <Box style={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
          <Button size='large' variant='contained' component={Link} to='/login'>
            Comenzar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
