import { Paper, styled, Typography, Box, List } from '@mui/material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'

import data from '@helpers/data'

const Item = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
  color: theme.palette.light.main,
  flex: '1 1 250px'
}))

const DashboardPage = () => {
  const recentPatiens = data.users.slice(0, 5)

  return (
    <PageContainer>
      <NavigationMenu />
      <Section color='light.main'>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          <Item elevation={3} sx={{ bgcolor: 'primary.main' }}>
            <Typography variant='h3'>15.454</Typography>
            Total de Pacientes
          </Item>
          <Item elevation={3} sx={{ bgcolor: 'secondary.main' }}>
            <Typography variant='h3'>454</Typography>
            Pacientes Diarios
          </Item>
          <Item elevation={3} sx={{ bgcolor: 'tertiary.main' }}>
            <Typography variant='h3'>3.000</Typography>
            Otra Cosa
          </Item>
        </Box>

        <List disablePadding>
          <PatientList patients={recentPatiens} />
        </List>
      </Section>
    </PageContainer>
  )
}

export default DashboardPage
