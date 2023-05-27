import { Box } from '@mui/material'

const PageContainer = ({ children }) => {
  return (
    <Box component='main' sx={{ minHeight: '100dvh', display: 'grid' }}>
      {children}
    </Box>
  )
}

export default PageContainer
