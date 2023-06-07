import { ListActionButton } from '@components'
import { useNavigate } from 'react-router-dom'
import { Avatar, ListItemAvatar, ListItemText, Skeleton } from '@mui/material'

const UserList = ({ users }) => {
  const navigate = useNavigate()

  return (
    <>
      {!users &&
      Array(10).fill(0).map((_, i) => (
        <ListActionButton key={i} divider>
          <ListItemAvatar>
            <Skeleton variant='circular' width={54} height={54} />
          </ListItemAvatar>
          <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
        </ListActionButton>
      ))}

      {users?.map((
        {
          id,
          firstnames,
          lastnames,
          profilePictureURL,
          specialty
        }, i) => {
        const username = firstnames + ' ' + lastnames

        return (
          <ListActionButton key={id} onClick={() => navigate(`/users/${id}`)} divider>
            <ListItemAvatar>
              <Avatar
                src={profilePictureURL}
                sx={{ bgcolor: 'primary.main', width: 54, height: 54 }}
              />
            </ListItemAvatar>
            <ListItemText primary={username} secondary={specialty} />
          </ListActionButton>
        )
      })}
    </>
  )
}

export default UserList
