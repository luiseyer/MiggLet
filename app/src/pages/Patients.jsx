import { useEffect, useState } from 'react'
import { List, Fab, Pagination } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'

import data from '@helpers/data'

const dataPatients = [...data.patients].reverse()

const PatientsPage = () => {
  const [patients, setPatients] = useState(null)
  const [page, setPage] = useState(1)
  const limit = 10

  useEffect(() => {
    setPatients(dataPatients.slice((page - 1) * limit, (page - 1) * limit + limit))
  }, [page])

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  return (
    <PageContainer>
      <NavigationMenu />
      <Section sx={{ display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '1fr', px: 0 }}>
        <List disablePadding>
          <PatientList patients={patients} />
        </List>

        <Pagination
          component='div'
          count={Math.ceil(dataPatients.length / limit)}
          page={page}
          onChange={handlePageChange}
          size='large'
          sx={{
            mt: 3,
            alignSelf: 'end',
            '& .MuiPagination-ul': { justifyContent: 'center' }
          }}
        />

        <Fab
          color='primary'
          sx={{
            position: 'sticky',
            bottom: 0,
            justifySelf: 'end',
            alignSelf: 'end',
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
