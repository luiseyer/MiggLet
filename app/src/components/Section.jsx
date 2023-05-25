import { Container } from '@mui/material'

const Section = function ({ children, bg }) {
  return (
    <Container
      maxWidth='xl'
      component='section'
      className='section'
      sx={{ bgcolor: bg }}
    >
      {children}
    </Container>
  )
}

export default Section
