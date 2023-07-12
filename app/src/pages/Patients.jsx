import { memo, useState } from 'react'
import { List, Pagination } from '@mui/material'
import { PageContainer, Section, NavigationMenu, PatientList, RegisterPatientForm } from '@components'
import { useSearchContext } from '@hooks'
import { useGetPatients } from '@hooks/usePatients'
const PatientsPage = () => {
  const { searchQuery } = useSearchContext()
  const [page, setPage] = useState(1)
  const limit = 10

  const { data, isLoading, refetch } = useGetPatients({ page, limit, search: searchQuery })

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

        <RegisterPatientForm refetchFn={refetch} count={data?.count} />
      </Section>
    </PageContainer>
  )
}

export default memo(PatientsPage)
