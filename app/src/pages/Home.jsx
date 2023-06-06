import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import AnimatedLogo500 from '@assets/logotipo-500.gif'
import AnimatedLogo700 from '@assets/logotipo-700.gif'

const HomePage = () => {
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
          srcSet={`
            ${AnimatedLogo500} 500w, 
            ${AnimatedLogo700} 700w
          `}
          sizes='(min-width: 700px) 700px, 500px'
          src={AnimatedLogo500}
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
