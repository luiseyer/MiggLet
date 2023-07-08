import { Link } from 'react-router-dom'
import { Paper, styled, Typography, Box, List, Stack, Button, CircularProgress } from '@mui/material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'
import { useGetUsers } from '@hooks/useUsers'
import { useGetPatients } from '@hooks/usePatients'

const Item = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
  color: theme.palette.light.main,
  flex: '1 1 250px'
}))

const DashboardPage = () => {
  const { data: users } = useGetUsers({ counter: true })
  const { data: patients } = useGetPatients({ counter: true })
  const { data: recentPatients, isLoading } = useGetPatients({ limit: 6 })

  return (
    <PageContainer>
      <NavigationMenu noSearch />
      <Section spacing='2rem' sx={{ px: 0 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, px: 2 }}>
          <Item elevation={3} sx={{ bgcolor: 'primary.main' }}>
            <Typography variant='h3'>{users?.count
              ? users.count
              : <CircularProgress color='inherit' />}
            </Typography>
            <Typography>Total de Usuarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'secondary.main' }}>
            <Typography variant='h3'>{patients?.count
              ? patients?.count + 86
              : <CircularProgress color='inherit' />}
            </Typography>
            <Typography>Pacientes Diarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'tertiary.main' }}>
            <Typography variant='h3'>{patients?.count
              ? patients?.count + 2475
              : <CircularProgress color='inherit' />}
            </Typography>
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
            to='/recentPatients'
            sx={{
              color: 'dark.main',
              background: ({ gradient }) => gradient.surface
            }}
          >
            Ver todos
          </Button>
        </Stack>

        <List disablePadding sx={{ px: 1 }}>
          <PatientList data={recentPatients} isLoading={isLoading} limit={6} />
        </List>
      </Section>
    </PageContainer>
  )
}

export default DashboardPage
