import { useParams } from 'react-router-dom'
import { Avatar, Badge, Box, List, ListItemIcon, ListItemText, Skeleton, Stack, Typography } from '@mui/material'
import { ManageAccounts as ManageAccountsIcon, LocalHospital as LocalHospitalIcon, Business as BusinessIcon, Email as EmailIcon, Call as CallIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton, DeleteUserDialog, ManageAdminDialog } from '@components'
import { useGetUser } from '@hooks/useUsers'
import { useAuthContext } from '@hooks'

const SingleUserPage = () => {
  const { user } = useAuthContext()
  const { id } = useParams()
  const { data } = useGetUser(id)

  return (
    <PageContainer>
      <NavigationMenu
        variant='toolbar'
        title='usuario'
        manageAdminButton
        deleteButton
      />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: 'min(600px, 100%)', justifyContent: 'center' }}>
        <Stack spacing='2rem' alignItems='center'>
          <Box sx={{ display: 'block', p: '0.25rem', width: '50%', aspectRatio: 1, borderRadius: '100%', border: '0.25rem solid rgba(0, 0, 0, 0.25)' }}>
            {data &&
              <Badge
                color='primary'
                overlap='circular'
                badgeContent={<ManageAccountsIcon />}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{
                  '& .MuiBadge-badge': {
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    ...((!data.isAdmin || (data.isAdmin && !user.isAdmin)) && { display: 'none' })
                  }
                }}
              >
                <Avatar
                  src={data.profilePictureURL}
                  sx={{ bgcolor: 'secondary.main', aspectRatio: '1', width: '100%', height: '100%' }}
                />
              </Badge>}

            {!data && <Skeleton variant='circular' width='100%' height='100%' />}
          </Box>

          <Typography variant='h4' textAlign='center' width='100%'>
            {data
              ? `${data.firstnames} ${data.lastnames}`
              : <Skeleton variant='text' width='75%' sx={{ mx: 'auto' }} />}
          </Typography>

          <Stack spacing='0.5rem'>
            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              {data
                ? <><BusinessIcon color='primary' /><Typography variant='body1'>{data.department}</Typography></>
                : <><Skeleton><BusinessIcon color='primary' /></Skeleton><Typography variant='body1'><Skeleton width='20ch' /></Typography></>}
            </Stack>

            <Stack direction='row' alignItems='center' spacing='0.5rem'>
              {data
                ? <><LocalHospitalIcon color='primary' /><Typography variant='body1'>{data.specialty}</Typography></>
                : <><Skeleton><LocalHospitalIcon color='primary' /></Skeleton><Typography variant='body1'><Skeleton width='20ch' /></Typography></>}
            </Stack>
          </Stack>

          <List sx={{ display: 'grid', gridTemplateColumns: 'minmax(min(500px, 100%), 500px)', gap: '1rem' }}>
            {data &&
              <>
                <ListActionButton
                  component='a'
                  href={`tel:${data.phone}`}
                  icon={<CallIcon color='primary' sx={{ width: '2rem', height: '2rem' }} />}
                  primary={<Typography fontWeight={500}>{data.phone}</Typography>}
                  secondary='Número de teléfono'
                  sx={{
                    background: (theme) => theme.gradient.surface,
                    '& .MuiListItemText-root': { display: 'flex', flexDirection: 'column-reverse' }
                  }}
                />

                <ListActionButton
                  component='a'
                  href={`mailto:${data.email}`}
                  icon={<EmailIcon color='primary' sx={{ width: '2rem', height: '2rem' }} />}
                  primary={<Typography fontWeight={500}>{data.email}</Typography>}
                  secondary='Correo electrónico'
                  sx={{
                    background: (theme) => theme.gradient.surface,
                    '& .MuiListItemText-root': { display: 'flex', flexDirection: 'column-reverse' }
                  }}
                />
              </>}

            {!data &&
              <>
                <ListActionButton color='neutral.main'>
                  <ListItemIcon>
                    <Skeleton variant='rectangular' width={32} height={32} />
                  </ListItemIcon>
                  <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
                </ListActionButton>

                <ListActionButton color='neutral.main'>
                  <ListItemIcon>
                    <Skeleton variant='rectangular' width={32} height={32} />
                  </ListItemIcon>
                  <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
                </ListActionButton>
              </>}
          </List>
        </Stack>
      </Section>

      {user && user.isAdmin && <DeleteUserDialog id={id} />}
      {user && user.isAdmin && <ManageAdminDialog id={id} />}
    </PageContainer>
  )
}

export default SingleUserPage
