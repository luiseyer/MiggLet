import { useMediaQuery, useTheme } from '@mui/material'

const useBreakpoint = () => {
  const { breakpoints } = useTheme()
  const up = (query) => useMediaQuery(breakpoints.up(query))
  const down = (query) => useMediaQuery(breakpoints.down(query))
  const between = (query) => useMediaQuery(breakpoints.between(query))

  return { up, down, between }
}

export default useBreakpoint
