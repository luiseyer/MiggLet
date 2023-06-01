import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, List, Typography, Stack, TextField, TablePagination } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon } from '@mui/icons-material'
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

const RenderSingleUser = () => {
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
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <Box sx={{ width: '60%' }}>
            <Avatar
              src={user.profilePictureUrl}
              sx={{
                bgcolor: 'secondary.main',
                aspectRatio: '1',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
          <Typography variant='h4'>{`${user.firstnames} ${user.lastnames}`}</Typography>
          <Stack spacing='0.5rem'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <LocalHospitalIcon /><Typography variant='body2'>{user.specialty}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <BusinessIcon /><Typography variant='body2'>{user.department}</Typography>
            </Stack>
          </Stack>
          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              color='secondary.surface'
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.phone}
              secondary='Llamar'
            />
            <ListActionButton
              color='secondary.surface'
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.email}
              secondary='Enviar correo'
            />
          </List>
        </Box>
      </Section>
    </>
  )
}

const UsersPage = () => {
  const { id } = useParams()

  return (
    <PageContainer>
      {id && <RenderSingleUser />}
      {!id && <RenderAllUsers />}
    </PageContainer>
  )
}

export default UsersPage
