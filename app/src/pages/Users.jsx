import { useLocation, useParams } from 'react-router-dom'
import { Avatar, Box, List, ListItemSecondaryAction, ListItemAvatar, ListItemText, Toolbar, Typography, ListItemIcon, Stack, ListItemButton, Tabs } from '@mui/material'
import { ChevronRight as ChevronRightIcon, LocalHospital as LocalHospitalIcon, Business as BusinessIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, SingleItemMenu } from '@components'

import data from '@helpers/data'

const ListActionButton = ({
  children,
  icon,
  primary,
  secondary,
  onclick,
  bg,
  sx,
  ...rest
}) => {
  return (
    <ListItemButton
      component='li'
      sx={{
        bgcolor: bg || 'light.main',
        pr: 6,
        gap: 2,
        '& :is(.MuiListItemText-primary, .MuiListItemText-secondary)': {
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
        },
        ...sx
      }} {...rest}
    >
      {children}
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {(primary || secondary) && <ListItemText primary={primary} secondary={secondary} />}
      <ListItemSecondaryAction>
        <ChevronRightIcon />
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}

const ListUsers = ({ users }) => {
  const currentPage = '/' + useLocation().pathname.split('/')[1] + '/'

  return (
    users.map((user, index) => {
      const username = user.firstnames + ' ' + user.lastnames

      return (
        <ListActionButton key={index} hola={currentPage}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main', width: 54, height: 54 }} />
          </ListItemAvatar>
          <ListItemText primary={username} secondary={user.dni} />
        </ListActionButton>
      )
    }
    ))
}

const RenderAllUsers = () => {
  return (
    <>
      <NavigationMenu />
      <Section bg='light.main'>
        <Toolbar /><Tabs />
        <Typography variant='h4'>USUARIOS</Typography>
        <List sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <ListUsers users={data.users} />
        </List>
      </Section>
    </>
  )
}

const RenderSingleUser = () => {
  const { id } = useParams()
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
              sx={{
                bgcolor: 'secondary.main',
                aspectRatio: '1',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>
          <Typography variant='h3'>{data.users[id].firstnames}</Typography>
          <Stack spacing='0.5rem' alignItems='flex-start'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'><LocalHospitalIcon /><Typography variant='h5'>Especialidad</Typography></Stack>
            <Stack direction='row' alignItems='center' spacing='0.5rem'><BusinessIcon /><Typography variant='h5'>Departamento</Typography></Stack>
          </Stack>
          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary='Teléfono'
              secondary='0412-8934046'
            />
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary='Correo'
              secondary='email@email.com'
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
