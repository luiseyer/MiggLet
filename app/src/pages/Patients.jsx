import { Typography } from '@mui/material'
import { PageContainer, Section, NavigationMenu } from '@components'

const PatientsPage = () => {
  return (
    <PageContainer>
      <NavigationMenu />
      <Section bg='secondary.surface'>
        <Typography variant='h3'>Pacientes</Typography>
        <Typography component='p' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni facere ab eos quaerat, sapiente ad modi temporibus mollitia nihil animi officia autem soluta libero architecto tempore cum maiores ex possimus! Provident delectus et, nulla blanditiis voluptatum, debitis accusamus necessitatibus maiores obcaecati magni quas aut, sed explicabo laborum est cum.</Typography>
        <Typography variant='h4'>Subtitle</Typography>
        <Typography component='p' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni facere ab eos quaerat, sapiente ad modi temporibus mollitia nihil animi officia autem soluta libero architecto tempore cum maiores ex possimus! Provident delectus et, nulla blanditiis voluptatum, debitis accusamus necessitatibus maiores obcaecati magni quas aut, sed explicabo laborum est cum.</Typography>
        <Typography variant='h5'>Subtitle</Typography>
        <Typography component='p' variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni facere ab eos quaerat, sapiente ad modi temporibus mollitia nihil animi officia autem soluta libero architecto tempore cum maiores ex possimus! Provident delectus et, nulla blanditiis voluptatum, debitis accusamus necessitatibus maiores obcaecati magni quas aut, sed explicabo laborum est cum.</Typography>
      </Section>
    </PageContainer>
  )
}

export default PatientsPage
