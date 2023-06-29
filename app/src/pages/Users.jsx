import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { List, TablePagination, Fab, Tooltip } from '@mui/material'
=======
import { List, TablePagination, Fab } from '@mui/material'
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, UserList, CreateUserForm } from '@components'
import { useAuthContext } from '@hooks'

import data from '@helpers/data'

<<<<<<< HEAD
let dataUsers

const UsersPage = () => {
  const { user: { isAdmin, id } } = useAuthContext()
  const [open, setOpen] = useState(false)
=======
const dataUsers = [...data.users]

const UsersPage = () => {
  const { user: { isAdmin } } = useAuthContext()
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
  const [users, setUsers] = useState(null)
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

<<<<<<< HEAD
  dataUsers = data.users.filter(user => user.id !== id)

  useEffect(() => {
    setUsers(null)
    setUsers(dataUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
=======
  useEffect(() => {
    setUsers(null)
    setTimeout(() => setUsers(dataUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)), 1000)
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
  }, [page])

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
<<<<<<< HEAD
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
=======
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
  }

  return (
    <PageContainer>
      <NavigationMenu />
      <Section sx={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', px: 0 }}>
        <List disablePadding>
          <UserList users={users} />

          <TablePagination
            component='div'
            count={dataUsers.length}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
            labelDisplayedRows={({ from, to, count }) => { return `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}` }}
            sx={{
              my: '1rem',
              '& .MuiToolbar-root': { justifyContent: 'center' },
              '& .MuiTablePagination-spacer': { display: 'none' }
            }}
          />
        </List>

        {isAdmin &&
          <Tooltip title='Crear usuario' arrow>
            <Fab
              onClick={handleClickOpen}
              color='primary'
              sx={{
                position: 'sticky',
                bottom: 0,
                justifySelf: 'end',
                mx: 2,
                background: (theme) => theme.gradient.main
              }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>}

        <CreateUserForm open={open} handleClose={handleClose} />
      </Section>
    </PageContainer>
  )
}

export default UsersPage
