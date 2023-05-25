import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Section } from '@components'
import AnimatedLogo from '@assets/logo.gif'
import SVGLogo from '@assets/logo.svg'

const HomePage = function () {
  const [logo, setLogo] = useState(SVGLogo)

  useEffect(() => {
    setTimeout(() => setLogo(AnimatedLogo), 1000)
    setTimeout(() => setLogo(SVGLogo), 4000)
  }, [])

  return (
    <>
      <main id='Home-Container'>
        <Section bg='light.main'>
          <img src={logo} />
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
