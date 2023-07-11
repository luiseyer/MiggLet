import { useState } from 'react'
import { List, Fab, Pagination } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, UserList, CreateUserForm } from '@components'
import { useAuthContext, useSearchContext } from '@hooks'
import { useGetUsers } from '@hooks/useUsers'

const UsersPage = () => {
  const { user: { isAdmin } } = useAuthContext()
  const { searchQuery } = useSearchContext()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const limit = 10

  const { data, isLoading, refetch } = useGetUsers({ page, limit, search: searchQuery })

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <PageContainer>
      <NavigationMenu title='usuarios' />
      <Section sx={{ display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '1fr', px: 0 }}>
        <List disablePadding>
          <UserList data={data} isLoading={isLoading} limit={limit} refetchFn={refetch} />
        </List>

        {data?.count > limit &&
          <Pagination
            component='div'
            count={Math.ceil(data.count / limit)}
            page={page}
            onChange={handlePageChange}
            size='large'
            sx={{
              mt: 3,
              alignSelf: 'end',
              '& .MuiPagination-ul': { justifyContent: 'center' }
            }}
          />}

        {isAdmin &&
          <Fab
            onClick={handleClickOpen}
            color='primary'
            sx={{
              position: 'sticky',
              bottom: 0,
              justifySelf: 'end',
              alignSelf: 'end',
              mx: 2,
              background: ({ gradient }) => gradient.main
            }}
          >
            <AddIcon />
          </Fab>}

        <CreateUserForm open={open} handleClose={handleClose} />
      </Section>
    </PageContainer>
  )
}

export default UsersPage
