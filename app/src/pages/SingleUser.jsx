import { useParams } from 'react-router-dom'
import { Avatar, Box, List, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton } from '@components'

import data from '@helpers/data'

const SingleUserPage = () => {
  const { id } = useParams()
  const user = data.users.find(user => user.id === id)

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' />
      <Section color='light.main' sx={{ display: 'grid', gridTemplateColumns: 'min(500px, 100%)', justifyContent: 'center' }}>
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
              src={user.profilePictureURL}
              sx={{
                bgcolor: 'secondary.main',
                aspectRatio: '1',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
          <Typography variant='h4' textAlign='center'>{`${user.firstnames} ${user.lastnames}`}</Typography>
          <Stack spacing='0.5rem'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <LocalHospitalIcon /><Typography variant='body1'>{user.specialty}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <BusinessIcon /><Typography variant='body1'>{user.department}</Typography>
            </Stack>
          </Stack>
          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.phone}
              secondary='Llamar'
              sx={{ background: (theme) => theme.gradient.surface }}
            />
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.email}
              secondary='Enviar correo'
              sx={{ background: (theme) => theme.gradient.surface }}
            />
          </List>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default SingleUserPage
