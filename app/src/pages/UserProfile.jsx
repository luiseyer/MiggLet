import { useEffect, useState } from 'react'
import { Avatar, Badge, Box, DialogContent, DialogTitle, IconButton, List, ListItemIcon, ListItemText, Skeleton, Stack, TextField } from '@mui/material'
import { Person as PersonIcon, LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Email as EmailIcon, Call as CallIcon, Edit as EditIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton, FormDialog, DeleteUserDialog } from '@components'
import { useAuthContext } from '@hooks'

import { useGetUser, useUpdateUser } from '@hooks/useUsers'

const UserProfilePage = () => {
  const colors = ['primary', 'secondary', 'tertiary']
  let color = -1

  const { user: session } = useAuthContext()
  const { data } = useGetUser(session.id)
  const { mutate, data: mutateData, isLoading } = useUpdateUser(session.id)

  const [user, setUser] = useState(session)

  useEffect(() => {
    if (data) {
      setUser(data)
    }
  }, [data])

  const generatePersonalData = (data) => [
    { name: 'Nombres', value: data?.firstnames, field: 'firstnames', icon: color => <PersonIcon color={color} />, plural: true },
    { name: 'Apellidos', value: data?.lastnames, field: 'lastnames', icon: color => <PersonIcon color={color} />, plural: true },
    { name: 'Departamento', value: data?.department, field: 'department', icon: color => <BusinessIcon color={color} />, plural: false },
    { name: 'Especialidad', value: data?.specialty, field: 'specialty', icon: color => <LocalHospitalIcon color={color} />, plural: false },
    { name: 'Teléfono', value: data?.phone, field: 'phone', icon: color => <CallIcon color={color} />, plural: false },
    { name: 'Correo electrónico', value: data?.email, field: 'email', icon: color => <EmailIcon color={color} />, plural: false }
  ]

  const [personalData, setPersonalData] = useState(generatePersonalData())

  useEffect(() => {
    if (data) {
      setPersonalData(generatePersonalData(data))
    }
  }, [data])

  useEffect(() => {
    if (mutateData) {
      setPersonalData(generatePersonalData(mutateData))
    }
  }, [mutateData])

  const [openFormDialog, setOpenFormDialog] = useState('')
  const [formDialogInputValue, setFormDialogInputValue] = useState('')

  const handleClickOpenFormDialog = (value, dialog) => () => {
    setFormDialogInputValue(value)
    setOpenFormDialog(dialog)
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
        variant='toolbar' title='usuario' manageAdminButton deleteButton
      />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Stack spacing='2rem' alignItems='center'>
          <IconButton sx={{ display: 'block', p: '0.25rem', width: '50%', aspectRatio: 1, borderRadius: '100%', border: '0.25rem solid rgba(0, 0, 0, 0.25)' }}>
            {user &&
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
                  src={user.profilePictureURL}
                  sx={{
                    bgcolor: 'secondary.main',
                    aspectRatio: '1',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Badge>}

            {!user && <Skeleton variant='circular' width='100%' height='100%' />}
          </IconButton>

          <List sx={{ width: '100%' }}>
            {personalData?.map(({ icon, value, name, field }, i) => {
              color = color < 2 ? ++color : 0

              return (
                <Box key={i}>
                  {value &&
                    <ListActionButton
                      id={`dialog-${i}`}
                      icon={icon(colors.at(color))}
                      primary={value}
                      secondary={name}
                      onClick={handleClickOpenFormDialog(value, `dialog-${i}`)}
                      actionIcon={<EditIcon sx={{ color: 'rgba(0, 0, 0, 0.5)' }} />}
                      sx={{ '& .MuiListItemText-root': { display: 'flex', flexDirection: 'column-reverse' } }}
                    />}

                  {!value &&
                    <ListActionButton
                      actionIcon={<EditIcon sx={{ color: 'rgba(0, 0, 0, 0.5)' }} />}
                      sx={{ '& .MuiListItemText-root': { display: 'flex', flexDirection: 'column-reverse' } }}
                    >
                      <ListItemIcon>
                        <Skeleton variant='rectangular' width={32} height={32} />
                      </ListItemIcon>
                      <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
                    </ListActionButton>}

                  {value &&
                    <FormDialog
                      open={openFormDialog === `dialog-${i}`}
                      action={(data) => { mutate(data) }}
                      isLoading={isLoading}
                      handleClose={handleCloseFormDialog}
                      field={field}
                      value={value}
                    >
                      <DialogTitle>Actualizar {name.toLowerCase()}</DialogTitle>
                      <DialogContent>
                        <TextField
                          autoFocus
                          id='data-profile'
                          name={field}
                          type='text'
                          value={formDialogInputValue || value}
                          onChange={handleChange}
                          autoComplete='off'
                          variant='standard'
                          margin='none'
                          fullWidth
                        />
                      </DialogContent>
                    </FormDialog>}
                </Box>
              )
            })}
          </List>
        </Stack>
      </Section>

      {user && <DeleteUserDialog id={user.id} />}

    </PageContainer>
  )
}

export default UserProfilePage
