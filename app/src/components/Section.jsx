import { Box } from '@mui/material'

const Section = ({ children, bg, sx }) => {
  return (
    <Box
      component='section'
      sx={{
        bgcolor: bg,
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
