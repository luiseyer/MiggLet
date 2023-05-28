import { Box, Toolbar } from '@mui/material'
import { useBreakpoint } from '@hooks'

const Section = ({ children, bg, sx }) => {
  const breakpoint = useBreakpoint()
  return (
    <Box
      component='section'
      sx={{
        bgcolor: bg,
        py: 4,
        px: 2,
        '&:last-child': { flex: '1 1 100%' },
        ...(breakpoint.up('md') && { maxHeight: '100svh', overflowY: 'auto' }),
        ...sx
      }}
    >
      {breakpoint.up('md') && <Toolbar />}
      {children}
    </Box>
  )
}

export default Section
