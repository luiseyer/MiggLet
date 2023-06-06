import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import AnimatedLogo from '@assets/logotipo.gif'
import SVGLogo from '@assets/logotipo.svg'

const HomePage = () => {
  const [logoSource, setLogoSource] = useState(AnimatedLogo)

  useEffect(() => {
    if (logoSource !== SVGLogo) {
      const Logo = document.querySelector('.logo')
      window.addEventListener('load', () => {
        setTimeout(() => setLogoSource(SVGLogo), 3000)
      })
      if (Logo.complete) {
        setTimeout(() => setLogoSource(SVGLogo), 3000)
      }
    }
  }, [logoSource])

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
        <img
          className='logo'
          src={logoSource}
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

export default HomePage
