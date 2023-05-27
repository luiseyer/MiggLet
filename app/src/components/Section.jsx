import { Box } from '@mui/material'

const Section = ({ children, bg, sx }) => {
  return (
    <Box
      component='section'
      sx={{ bgcolor: bg, py: 4, px: 2, ...sx }}
    >
      {children}
    </Box>
  )
}

export default Section
