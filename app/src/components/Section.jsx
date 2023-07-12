import { memo } from 'react'
import { Box } from '@mui/material'

const Section = ({ children, color, spacing, sx }) => {
  return (
    <Box
      data-spacing={spacing || '1rem'}
      component='section'
      className='section'
      sx={{
        bgcolor: color || 'light.main',
        padding: '1rem',
        flex: '1',
        overflowY: 'auto',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default memo(Section)
