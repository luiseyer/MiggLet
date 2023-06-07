import { useParams } from 'react-router-dom'
import { Avatar, Box, Fab, List, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Edit as EditIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton } from '@components'
import { useAuthContext } from '@hooks'

import data from '@helpers/data'

const SingleUserPage = () => {
  const { id } = useParams()
  const { user: { id: userID } } = useAuthContext()
  const {
    firstnames,
    lastnames,
    profilePictureURL,
    specialty,
    department,
    phone,
    email
  } = data.users.find(user => user.id === id)

  return (
    <PageContainer>
      <NavigationMenu
        variant='toolbar'
        manageAdminAction={() => {}}
        deleteAction={() => {}}
      />

      <Section color='light.main' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Box sx={{ width: '60%' }}>
            <Avatar
              src={profilePictureURL}
              sx={{ bgcolor: 'secondary.main', aspectRatio: '1', width: '100%', height: '100%' }}
            />
          </Box>

          <Typography variant='h4' textAlign='center'>{`${firstnames} ${lastnames}`}</Typography>

          <Stack spacing='0.5rem'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <LocalHospitalIcon /><Typography variant='body1'>{specialty}</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <BusinessIcon /><Typography variant='body1'>{department}</Typography>
            </Stack>
          </Stack>

          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={phone}
              secondary='Llamar'
              sx={{ background: (theme) => theme.gradient.surface }}
            />

            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={email}
              secondary='Enviar correo'
              sx={{ background: (theme) => theme.gradient.surface }}
            />
          </List>

          {id === userID &&
            <Fab
              color='primary'
              sx={{
                position: 'sticky',
                bottom: 0,
                alignSelf: 'flex-end',
                background: (theme) => theme.gradient.main
              }}
            >
              <EditIcon />
            </Fab>}
        </Box>
      </Section>
    </PageContainer>
  )
}

export default SingleUserPage
