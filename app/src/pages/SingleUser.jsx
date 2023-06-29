import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Email as EmailIcon, Call as CallIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton } from '@components'

import data from '@helpers/data'

const SingleUserPage = () => {
  const { id } = useParams()
  const {
    firstnames,
    lastnames,
    profilePictureURL,
    specialty,
    department,
    phone,
    email
  } = data.users.find(user => user.id === id)

  const [openDialog, setOpenDialog] = useState(false)

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <PageContainer>
      <NavigationMenu
        variant='toolbar'
        title='usuario'
        manageAdminAction={() => {}}
        deleteAction={handleClickOpenDialog}
      />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Stack spacing='2rem' alignItems='center'>
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
              <BusinessIcon color='primary' /><Typography variant='body1'>{department}</Typography>
            </Stack>

            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              <LocalHospitalIcon color='primary' /><Typography variant='body1'>{specialty}</Typography>
            </Stack>
          </Stack>

          <List sx={{ display: 'grid', gridTemplateColumns: 'min(500px, 100%)', gap: '1rem' }}>
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
        </Stack>
      </Section>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth='xs'>
        <DialogTitle>
          ¿Seguro que desea eliminar este usuario?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Los datos del usuario no serán eliminados,
            sin embargo este perderá todo acceso a la aplicación
          </DialogContentText>
          <DialogContentText>
            <Link to='/about/delete-users'>Más información</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>Cancelar</Button>
          <Button onClick={handleCloseDialog}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  )
}

export default SingleUserPage
