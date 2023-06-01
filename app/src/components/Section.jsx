import { Box } from '@mui/material'

const Section = ({ children, color, sx }) => {
  return (
    <Box
      component='section'
      sx={{
        bgcolor: color,
        padding: '2rem 1.5rem',
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
