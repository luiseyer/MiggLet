import { ListActionButton } from '@components'
import { useNavigate } from 'react-router-dom'
import { Avatar, ListItemAvatar, ListItemText, Skeleton, Stack, Typography } from '@mui/material'

const UserList = ({ data, isLoading, limit }) => {
  const navigate = useNavigate()

  return (
    <>
      {!isLoading && data?.count === 0 &&
        <Stack justifyContent='center' height='100%' px='2rem'>
          <Typography variant='h2' textAlign='center'>Sin resultados</Typography>
        </Stack>}

      {isLoading &&
      Array(limit).fill(0).map((_, i) => (
        <ListActionButton key={i}>
          <ListItemAvatar>
            <Skeleton variant='circular' width={54} height={54} />
          </ListItemAvatar>
          <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
        </ListActionButton>
      ))}

      {data?.users?.map((
        {
          id,
          firstnames,
          lastnames,
          profilePictureURL,
          specialty
        }, i) => {
        return (
          <ListActionButton
            key={id}
            icon={
              <Avatar
                src={profilePictureURL}
                sx={{ bgcolor: 'primary.main', width: 54, height: 54 }}
              />
            }
            primary={`${firstnames} ${lastnames}`}
            secondary={specialty}
            onClick={() => navigate(`/users/${id}`)}
          />
        )
      })}
    </>
  )
}

export default UserList
