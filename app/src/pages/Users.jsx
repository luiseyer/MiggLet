import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, List, Toolbar, Typography, Stack, Tabs, TextField } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, SingleItemMenu, ListActionButton, UserList } from '@components'

import data from '@helpers/data'

const RenderAllUsers = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    setUsers(null)
    setTimeout(() => setUsers(data.users), 1000)
  }, [])

  const [query, setQuery] = useState('')

  useEffect(() => {
    const filterUsers = data.users.filter(user => {
      if (query === '') return user

      if (
        user.firstnames.toLowerCase().includes(query.toLowerCase()) ||
        user.lastnames.toLowerCase().includes(query.toLowerCase())
      ) return user

      return null
    })

    setUsers(filterUsers)
  }, [query])

  const handleSearch = ({ target }) => {
    setQuery(target.value)
  }

  return (
    <>
      <NavigationMenu />
      <Section bg='light.main'>
        <Toolbar /><Tabs />

        <Typography variant='h4' my={3} textAlign='center'>USUARIOS</Typography>

        <TextField
          fullWidth
          id='search-user'
          label='Buscar'
          type='search'
          size='small'
          onChange={handleSearch}
        />

        <List sx={{ display: 'grid', gridTemplateColumns: '1fr', mt: '1rem' }}>
          <UserList users={users} />
        </List>
      </Section>
    </>
  )
}

const RenderSingleUser = () => {
  const { id } = useParams()
  const user = data.users.find(user => user.id === id)

  return (
    <>
      <SingleItemMenu />
      <Section bg='secondary.surface' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Toolbar />
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
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.phone}
              secondary='Llamar'
            />
            <ListActionButton
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
