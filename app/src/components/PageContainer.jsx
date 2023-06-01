import { Box } from '@mui/material'
import { SearchContextProvider } from '@contexts/SearchContext'

const PageContainer = ({ children }) => {
  return (
    <SearchContextProvider>
      <Box
        component='main'
        sx={{
          minHeight: '100dvh',
          maxHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </Box>
    </SearchContextProvider>
  )
}

export default PageContainer
