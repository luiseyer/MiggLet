import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, ListItemAvatar, ListItemText, Skeleton, Stack, Typography } from '@mui/material'
import { Groups as GroupsIcon, GroupRemove as GroupRemoveIcon } from '@mui/icons-material'
import { ListActionButton } from '@components'
import { useManageActiveUser } from '@hooks/useUsers'

const RestoreUserDialog = memo(({ user, refetchFn = () => {}, handleClose = () => {} }) => {
  const { mutate, isLoading, isSuccess } = useManageActiveUser(user.id)

  const open = Boolean(user)

  const handleClickSubmit = () => {
    mutate()
  }

  useEffect(() => {
    if (isSuccess) {
      refetchFn()
      handleClose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <>
      {isLoading &&
        <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      <Dialog open={open} onClose={handleClose} maxWidth='xs'>
        <DialogContent>
          <DialogContentText>
            <b>¿Reactivar la cuenta de <i>{user.names}</i>?</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancelar</Button>
          <Button onClick={handleClickSubmit}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
})

const UserList = ({ data, isLoading, limit, restoreUser, refetchFn = () => {} }) => {
  const navigate = useNavigate()
  const [userForRestore, setUserForRestore] = useState(null)

  return (
    <>
      {!isLoading && data?.count === 0 &&
        <>
          {!restoreUser &&
            <Stack justifyContent='center' alignItems='center' height='100%' px='2rem'>
              <GroupsIcon color='secondary' sx={{ width: '8rem', height: '8rem' }} />
              <Typography variant='h2' textAlign='center'>Sin resultados</Typography>
            </Stack>}

          {restoreUser &&
            <Stack justifyContent='center' alignItems='center' px='2rem' gap={2} mt={5}>
              <GroupRemoveIcon color='secondary' sx={{ width: '5rem', height: '5rem' }} />
              <Typography variant='h5' textAlign='center'>No hay usuarios deactivados</Typography>
            </Stack>}
        </>}

      {isLoading &&
      Array(limit).fill(0).map((_, i) => (
        <ListActionButton key={i}>
          <ListItemAvatar>
            <Skeleton variant='circular' width={54} height={54} />
          </ListItemAvatar>
          <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
        </ListActionButton>
      ))}

      {data?.users?.map(({ id, firstnames, lastnames, profilePictureURL, specialty }, i) => {
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
            actionIcon={restoreUser && ' '}
            onClick={
              restoreUser
                ? () => setUserForRestore({ id, names: `${firstnames} ${lastnames}` })
                : () => navigate(`/users/${id}`)
            }
          />
        )
      })}

      {userForRestore &&
        <RestoreUserDialog user={userForRestore} handleClose={() => setUserForRestore(null)} refetchFn={refetchFn} />}
    </>
  )
}

export default memo(UserList)
