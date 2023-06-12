import { useEffect, useState } from 'react'
import { List, TablePagination, Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'

import data from '@helpers/data'

const dataPatients = [...data.patients]

const PatientsPage = () => {
  const [patients, setPatients] = useState(null)
  const [page, setPage] = useState(0)
  const rowsPerPage = 10

  useEffect(() => {
    setPatients(null)
    setTimeout(() => setPatients(dataPatients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage - 1)), 1000)
  }, [page])

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  return (
    <PageContainer>
      <NavigationMenu />
      <Section
        sx={{
          display: 'grid',
          gridTemplateColumns: '100%',
          justifyContent: 'center',
          px: 0
        }}
      >
        <List disablePadding>
          <PatientList patients={patients} />
          <TablePagination
            component='div'
            count={dataPatients.length}
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
