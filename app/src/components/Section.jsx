import { Box } from '@mui/material'

const Section = ({ children, color, sx }) => {
  return (
    <Box
      data-spacing='1rem'
      component='section'
      sx={{
        bgcolor: color,
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

export default Section
