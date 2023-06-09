import { Paper, styled, Typography, Box, List, Stack, Button } from '@mui/material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'

import data from '@helpers/data'
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
  color: theme.palette.light.main,
  flex: '1 1 250px'
}))

const DashboardPage = () => {
  const recentPatiens = data.users.slice(0, 6)

  return (
    <PageContainer>
      <NavigationMenu />
      <Section sx={{ px: 0 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, px: 2 }}>
          <Item elevation={3} sx={{ bgcolor: 'primary.main' }}>
            <Typography variant='h3'>17</Typography>
            <Typography>Total de Usuarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'secondary.main' }}>
            <Typography variant='h3'>124</Typography>
            <Typography>Pacientes Diarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'tertiary.main' }}>
            <Typography variant='h3'>5.454</Typography>
            <Typography>Total de Pacientes</Typography>
          </Item>
        </Box>

        <Stack direction='row' justifyContent='space-between' mt={6} mb={2} mx={2} px={1}>
          <Typography variant='h4'>Pacientes</Typography>

          <Button
            disableElevation
            variant='contained'
            size='small'
            component={Link}
            to='/patients'
            sx={{
              color: 'dark.main',
              background: ({ gradient }) => gradient.surface
            }}
          >
            Ver todos
          </Button>
        </Stack>

        <List disablePadding sx={{ px: 1 }}>
          <PatientList patients={recentPatiens} />
        </List>
      </Section>
    </PageContainer>
  )
}

export default DashboardPage
