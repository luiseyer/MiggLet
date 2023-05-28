import { Link, useLocation, useParams } from 'react-router-dom'
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, SingleItemMenu } from '@components'
import { useBreakpoint } from '@hooks'

import data from '@helpers/data'

const ListUsers = ({ users }) => {
  const currentPage = '/' + useLocation().pathname.split('/')[1] + '/'

  return (
    users.map((user, index) => (
      <ListItem
        key={index}
        sx={{ bgcolor: 'secondary.surface' }}
        secondaryAction={
          <IconButton component={Link} to={currentPage + String(index)} sx={{ ml: 4 }}>
            <ChevronRightIcon />
          </IconButton>
     }
      >
        <ListItemAvatar>
          <Avatar variant='square' sx={{ bgcolor: 'primary.main' }} />
        </ListItemAvatar>
        <ListItemText
          primary={user.firstnames.split(' ')[0] + ' ' + user.lastnames[0] + '.'}
          secondary={user.dni}
          sx={{
            whiteSpace: 'nowrap',
            '& .MuiListItemText-primary': { overflow: 'hidden', textOverflow: 'ellipsis' }
          }}
        />
      </ListItem>
    )
    ))
}

const RenderAllUsers = () => {
  return (
    <>
      <NavigationMenu />
      <Section bg='secondary.light'>
        <Typography variant='h4'>USUARIOS</Typography>
        <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '1rem' }}>
          <ListUsers users={data.users} />
        </List>
      </Section>
    </>
  )
}

const RenderSingleUser = ({ id }) => {
  const breakpoint = useBreakpoint()
  return (
    <>
      {breakpoint.down('md') && <SingleItemMenu />}
      <Section bg='light.main'>
        <Typography variant='h4'>{data.users[id].firstnames}</Typography>
      </Section>
    </>
  )
}

const UsersPage = () => {
  const { id } = useParams()
  const breakpoint = useBreakpoint()
  return (
    <PageContainer>
      {breakpoint.down('md') && !id && <RenderAllUsers />}

      {breakpoint.down('md') && id && <RenderSingleUser id={id} />}

      {breakpoint.up('md') &&
        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr' }}>
          <RenderAllUsers />
          <RenderSingleUser id={id ?? 0} />
        </Box>}
    </PageContainer>
  )
}

export default UsersPage
