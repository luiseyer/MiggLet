import { NavigationMenu, PageContainer, Section, UserList } from '@components'
import { useSearchContext } from '@hooks'
import { useGetUsers } from '@hooks/useUsers'
import { List, Pagination, Typography } from '@mui/material'
import { memo, useState } from 'react'

const SettingsPage = () => {
  const { searchQuery } = useSearchContext()
  const [page, setPage] = useState(1)
  const limit = 5

  const { data, isLoading, refetch } = useGetUsers({
    isActive: false,
    page,
    limit,
    search: searchQuery
  })

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }
  return (
    <PageContainer>
      <NavigationMenu variant="toolbar" title="Ajustes" />

      <Section
        spacing="4rem"
        sx={{ display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '1fr', px: 0 }}
      >
        <List disablePadding sx={{ px: 2 }}>
          <Typography variant="h4" textAlign="center" mb={3}>
            Usuarios desactivados
          </Typography>
          <UserList
            data={data}
            isLoading={isLoading}
            limit={limit}
            refetchFn={refetch}
            restoreUser
          />
        </List>

        {data?.totalItems > limit && (
          <Pagination
            component="div"
            count={Math.ceil(data.totalItems / limit)}
            page={page}
            onChange={handlePageChange}
            size="large"
            sx={{
              mt: 3,
              alignSelf: 'end',
              '& .MuiPagination-ul': { justifyContent: 'center' }
            }}
          />
        )}
      </Section>
    </PageContainer>
  )
}

export default memo(SettingsPage)
