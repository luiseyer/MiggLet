import { NavigationMenu, PageContainer, PatientList, Section } from '@components'
import { useGetPatients } from '@hooks/usePatients'
import { useGetUsers } from '@hooks/useUsers'
import {
  Box,
  Button,
  CircularProgress,
  List,
  Paper,
  Stack,
  Typography,
  styled
} from '@mui/material'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
  color: theme.palette.light.main,
  flex: '1 1 250px'
}))

const DashboardPage = () => {
  const { data: users } = useGetUsers({ page: 1 })
  const { data: patients, isLoading } = useGetPatients({ page: 1, limit: 6 })

  return (
    <PageContainer>
      <NavigationMenu noSearch />
      <Section spacing="2rem" sx={{ px: 0 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, px: 2 }}>
          <Item elevation={3} sx={{ bgcolor: 'primary.main' }}>
            <Typography variant="h3">
              {users?.totalItems ? users.totalItems + 1 : <CircularProgress color="inherit" />}
            </Typography>
            <Typography>Total de Usuarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'secondary.main' }}>
            <Typography variant="h3">
              {patients?.totalItems ? (
                Math.ceil(patients?.totalItems / 8.5)
              ) : (
                <CircularProgress color="inherit" />
              )}
            </Typography>
            <Typography>Pacientes Diarios</Typography>
          </Item>

          <Item elevation={3} sx={{ bgcolor: 'tertiary.main' }}>
            <Typography variant="h3">
              {patients?.totalItems ? patients?.totalItems : <CircularProgress color="inherit" />}
            </Typography>
            <Typography>Total de Pacientes</Typography>
          </Item>
        </Box>

        <Stack direction="row" justifyContent="space-between" mt={6} mb={2} mx={2} px={1}>
          <Typography variant="h4">Pacientes</Typography>

          <Button
            disableElevation
            variant="contained"
            size="small"
            component={Link}
            to="/patients"
            sx={{
              color: 'dark.main',
              background: ({ gradient }) => gradient.surface
            }}
          >
            Ver todos
          </Button>
        </Stack>

        <List disablePadding sx={{ px: 1 }}>
          <PatientList data={patients} isLoading={isLoading} limit={6} />
        </List>
      </Section>
    </PageContainer>
  )
}

export default memo(DashboardPage)
