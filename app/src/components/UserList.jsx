import { ListActionButton } from '@components'
import { useLocation, useNavigate } from 'react-router-dom'
import { Avatar, ListItemAvatar, ListItemText, Skeleton } from '@mui/material'

const UserList = ({ users }) => {
  const currentPage = '/' + useLocation().pathname.split('/')[1] + '/'
  const navigate = useNavigate()

  if (!users) {
    return (
      Array(3).fill(0).map((_, i) => (
        <ListActionButton key={i} divider>
          <ListItemAvatar>
            <Skeleton variant='circular' width={54} height={54} />
          </ListItemAvatar>
          <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
        </ListActionButton>
      ))
    )
  }

  return (
    users.map((user, i) => {
      const username = user.firstnames + ' ' + user.lastnames

      return (
        <ListActionButton key={user.id} onClick={() => navigate(currentPage + i)} divider>
          <ListItemAvatar>
            <Avatar
              src={user.profilePictureUrl}
              sx={{ bgcolor: 'primary.main', width: 54, height: 54 }}
            />
          </ListItemAvatar>
          <ListItemText primary={username} secondary={user.dni} />
        </ListActionButton>

      )
    })
  )
}

export default UserList
