import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Badge, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, TextField } from '@mui/material'
import { Person as PersonIcon, LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Email as EmailIcon, Call as CallIcon, Edit as EditIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton, FormDialog } from '@components'
import { useAuthContext } from '@hooks'

import data from '@helpers/data'

const colors = ['primary', 'secondary', 'tertiary']
let color = -1

const UserProfilePage = () => {
  const { user: { id } } = useAuthContext()
  const {
    firstnames,
    lastnames,
    profilePictureURL,
    specialty,
    department,
    phone,
    email
  } = data.users.find(user => user.id === id)

  const personalData = [
    { name: 'Nombres', value: firstnames, icon: color => <PersonIcon color={color} />, plural: true },
    { name: 'Apellidos', value: lastnames, icon: color => <PersonIcon color={color} />, plural: true },
    { name: 'Departamento', value: department, icon: color => <BusinessIcon color={color} />, plural: false },
    { name: 'Especialidad', value: specialty, icon: color => <LocalHospitalIcon color={color} />, plural: false },
    { name: 'Teléfono', value: phone, icon: color => <CallIcon color={color} />, plural: false },
    { name: 'Correo electrónico', value: email, icon: color => <EmailIcon color={color} />, plural: false }
  ]

  const [openDeletetDialog, setOpenDeleteDialog] = useState(false)

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const [openFormDialog, setOpenFormDialog] = useState(false)
  const [formDialogTitle, setFormDialogTitle] = useState('')
  const [formDialogInputValue, setFormDialogInputValue] = useState('')

  const handleClickOpenFormDialog = (name, value, plural) => () => {
    setFormDialogTitle(`${plural ? 'sus' : 'su'} ${name.toLowerCase()}`)
    setFormDialogInputValue(value)
    setOpenFormDialog(true)
  }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  }

  const handleChange = ({ target }) => {
    setFormDialogInputValue(target.value)
  }

  return (
    <PageContainer>
      <NavigationMenu
        variant='toolbar'
        title='usuario'
        manageAdminAction={() => {}}
        deleteAction={handleClickOpenDeleteDialog}
      />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <IconButton sx={{ display: 'block', p: '0.25rem', width: '50%', borderRadius: '100%', border: '0.25rem solid rgba(0, 0, 0, 0.25)' }}>
            <Badge
              color='primary'
              overlap='circular'
              badgeContent={<PhotoCameraIcon />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              sx={{
                '& .MuiBadge-badge': {
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%'
                }
              }}
            >
              <Avatar
                src={profilePictureURL}
                sx={{
                  bgcolor: 'secondary.main',
                  aspectRatio: '1',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Badge>
          </IconButton>

          <List sx={{ width: '100%' }}>
            {personalData.map(({ icon, value, name, plural }, i) => {
              color = color < 2 ? ++color : 0

              return (
                <ListActionButton
                  key={i}
                  icon={icon(colors.at(color))}
                  primary={value}
                  secondary={name}
                  onClick={handleClickOpenFormDialog(name, value, plural)}
                  actionIcon={<EditIcon sx={{ color: 'rgba(0, 0, 0, 0.5)' }} />}
                  sx={{ '& .MuiListItemText-root': { display: 'flex', flexDirection: 'column-reverse' } }}
                />
              )
            })}
          </List>
        </Box>
      </Section>

      <Dialog open={openDeletetDialog} onClose={handleCloseDeleteDialog} maxWidth='xs'>
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
          <Button onClick={handleCloseDeleteDialog} autoFocus>Cancelar</Button>
          <Button onClick={handleCloseDeleteDialog}>Aceptar</Button>
        </DialogActions>
      </Dialog>

      <FormDialog open={openFormDialog} handleClose={handleCloseFormDialog}>
        <DialogTitle>Escriba {formDialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id='user-profile'
            type='text'
            value={formDialogInputValue}
            onChange={handleChange}
            autoComplete='off'
            variant='standard'
            margin='none'
            fullWidth
          />
        </DialogContent>
      </FormDialog>
    </PageContainer>
  )
}

export default UserProfilePage
