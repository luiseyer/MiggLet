import { useState } from 'react'
import { List, Fab, Pagination } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { PageContainer, Section, NavigationMenu, PatientList } from '@components'
import { useSearchContext } from '@hooks'
import { useGetPatients } from '@hooks/usePatients'
const PatientsPage = () => {
  const { searchQuery } = useSearchContext()
  const [page, setPage] = useState(1)
  const limit = 10

  const { data, isLoading } = useGetPatients({ page, limit, search: searchQuery })

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  return (
    <PageContainer>
      <NavigationMenu />
      <Section sx={{ display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '1fr', px: 0 }}>
        <List disablePadding>
          <PatientList data={data} isLoading={isLoading} limit={limit} />
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
