import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Section } from '@components'
import AnimatedLogo from '../assets/Logo.gif'

const HomePage = function () {
  return (
    <>
      <main id='Page-Container'>
        <Section bg='light.main'>
          <img src={AnimatedLogo} />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button size='large' variant='contained' component={Link} to='/login'>
              Comenzar
            </Button>
          </div>
        </Section>
      </main>
    </>
  )
}

export default HomePage
