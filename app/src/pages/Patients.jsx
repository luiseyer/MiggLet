import { useEffect, useState } from 'react'
import { List, TextField, TablePagination, Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, UserList } from '@components'

import data from '@helpers/data'

const PatientsPage = () => {
  const [users, setUsers] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  useEffect(() => {
    setUsers(null)
    setTimeout(() => setUsers(data.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage - 1)), 1000)
  }, [page])

  useEffect(() => {
    if (query !== '') {
      const filterUsers = data.users.filter(user => {
        if (query === '') return user

        if (
          user.firstnames.toLowerCase().includes(query.toLowerCase()) ||
          user.lastnames.toLowerCase().includes(query.toLowerCase())
        ) return user

        return null
      })

      setUsers(filterUsers)
    }
  }, [query])

  const handleSearch = ({ target }) => {
    setQuery(target.value)
  }

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  return (
    <PageContainer>
      <NavigationMenu />
      <Section
        color='light.main' sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          justifyContent: 'center',
          px: 0
        }}
      >
        <TextField
          fullWidth
          variant='standard'
          id='search-user'
          label='Buscar'
          type='search'
          size='small'
          onChange={handleSearch}
          sx={{ display: 'none' }}
        />

        <List disablePadding>
          <UserList users={users} />
          <TablePagination
            component='div'
            count={data.users.length}
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

        <Fab
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
      </Section>
    </PageContainer>
  )
}

export default PatientsPage
