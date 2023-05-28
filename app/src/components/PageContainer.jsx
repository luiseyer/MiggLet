import { Container } from '@mui/material'
import { useBreakpoint } from '@hooks'

const PageContainer = ({ children }) => {
  const breakpoint = useBreakpoint()

  return (
    <Container
      disableGutters
      maxWidth='lg'
      component='main'
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        ...(breakpoint.up('md') && { maxHeight: '100dvh' })
      }}
    >
      {children}
    </Container>
  )
}

export default PageContainer
