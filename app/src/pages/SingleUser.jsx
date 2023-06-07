import { useParams } from 'react-router-dom'
import { Avatar, Box, Fab, List, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Edit as EditIcon, Email as EmailIcon, Call as CallIcon } from '@mui/icons-material'
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
        title='usuario'
        manageAdminAction={() => {}}
        deleteAction={() => {}}
      />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Box sx={{ p: '0.25rem', width: '50%', borderRadius: '100%', border: '0.25rem solid rgba(0, 0, 0, 0.25)' }}>
            <Avatar
              src={profilePictureURL}
              sx={{
                bgcolor: 'secondary.main',
                aspectRatio: '1',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>

          <Typography variant='h4' textAlign='center'>{`${firstnames} ${lastnames}`}</Typography>

          <Stack spacing='0.5rem'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <BusinessIcon /><Typography variant='body1'>{department}</Typography>
            </Stack>

            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <LocalHospitalIcon /><Typography variant='body1'>{specialty}</Typography>
            </Stack>
          </Stack>

          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              icon={<CallIcon color='primary' sx={{ width: '2rem', height: '2rem' }} />}
              primary={phone}
              secondary='Llamar'
              sx={{ background: (theme) => theme.gradient.surface, bgcolor: 'primary.surface' }}
            />

            <ListActionButton
              icon={<EmailIcon color='primary' sx={{ width: '2rem', height: '2rem' }} />}
              primary={email}
              secondary='Enviar correo'
              sx={{ background: (theme) => theme.gradient.surface, bgcolor: 'primary.surface' }}
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
