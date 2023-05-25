import { Typography } from '@mui/material'
import { NavigationMenu, Section } from '@components'

const EMRsPage = function () {
  return (
    <>
      <main id='Page-Container'>
        <NavigationMenu />
        <Section bg='secondary.surface'>
          <Typography variant='h2'>Historias Clínicas</Typography>
          <Typography component='p' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni facere ab eos quaerat, sapiente ad modi temporibus mollitia nihil animi officia autem soluta libero architecto tempore cum maiores ex possimus! Provident delectus et, nulla blanditiis voluptatum, debitis accusamus necessitatibus maiores obcaecati magni quas aut, sed explicabo laborum est cum.</Typography>
          <Typography variant='h3'>Subtitle</Typography>
          <Typography component='p' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni facere ab eos quaerat, sapiente ad modi temporibus mollitia nihil animi officia autem soluta libero architecto tempore cum maiores ex possimus! Provident delectus et, nulla blanditiis voluptatum, debitis accusamus necessitatibus maiores obcaecati magni quas aut, sed explicabo laborum est cum.</Typography>
        </Section>
      </main>
    </>
  )
}

export default EMRsPage
