import { memo } from 'react'
import { Box } from '@mui/material'

const PageContainer = ({ children }) => {
  return (
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
  )
}

export default memo(PageContainer)
