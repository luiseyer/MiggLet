import { Box } from '@mui/material'

const PageContainer = ({ children }) => {
  return (
    <Box
      component='main'
      sx={{
        height: '100%',
        maxHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </Box>
  )
}

export default PageContainer
