import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, List, Typography, Stack, TextField, TablePagination, Divider } from '@mui/material'
import {
  LocalHospital as LocalHospitalIcon,
  CalendarMonth as CalendarMonthIcon,
  AccountBox as AccountBoxIcon,
  ShortText as ShortTextIcon,
  LocationOn as LocationOnIcon
} from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, ListActionButton, UserList } from '@components'

import data from '@helpers/data'

const RenderAllUsers = () => {
  const [users, setUsers] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  useEffect(() => {
    setUsers(null)
    setTimeout(() => setUsers(data.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage - 1)), 1000)
  }, [page])

  useEffect(() => {
    if (query !== '') {
      const filterUsers = data.users.filter(user => {
        if (query === '') return user

        if (
          user.firstnames.toLowerCase().includes(query.toLowerCase()) ||
          user.lastnames.toLowerCase().includes(query.toLowerCase())
        ) return user

        return null
      })

      setUsers(filterUsers)
    }
  }, [query])

  const handleSearch = ({ target }) => {
    setQuery(target.value)
  }

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <NavigationMenu />
      <Section color='light.main'>
        <TextField
          fullWidth
          variant='standard'
          id='search-user'
          label='Buscar'
          type='search'
          size='small'
          onChange={handleSearch}
          sx={{ display: 'none' }}
        />

        <List disablePadding sx={{ display: 'grid', gridTemplateColumns: '1fr', mt: 4 }}>
          <UserList users={users} />
        </List>

        <TablePagination
          component='div'
          count={data.users.length}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={() => {}}
          labelRowsPerPage='Usuarios por página'
          labelDisplayedRows={({ from, to, count }) => { return `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}` }}
          sx={{
            my: '0.5rem',
            '& .MuiToolbar-root': { justifyContent: 'center' },
            '& .MuiTablePagination-spacer': { display: 'none' }
          }}
        />
      </Section>
    </>
  )
}

const RenderSinglePatient = () => {
  const { id } = useParams()
  const user = data.users.find(user => user.id === id)

  return (
    <>
      <NavigationMenu variant='toolbar' />
      <Section color='light.main' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Typography variant='h2'>Ficha del Paciente</Typography>

          <Divider />

          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <ShortTextIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Nombres: {user.firstnames}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <ShortTextIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Apellidos: {user.lastnames}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <AccountBoxIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Cédula de identidad: V-{user.dni}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <CalendarMonthIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Fecha de nacimiento: 00, MES de 0000</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocationOnIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Dirección: ------</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocalHospitalIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Número de Historia: ------</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocalHospitalIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Antecedentes personales: ------</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocalHospitalIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Antecedentes familiares: ------</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocalHospitalIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Antecedentes psicobiológicos: ------</Typography>
          </Stack>

          <Divider />

          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              color='secondary.surface'
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.phone}
              secondary='Llamar'
            />
          </List>
        </Box>
      </Section>
    </>
  )
}

const PatientsPage = () => {
  const { id } = useParams()

  return (
    <PageContainer>
      {id && <RenderSinglePatient />}
      {!id && <RenderAllUsers />}
    </PageContainer>
  )
}

export default PatientsPage
