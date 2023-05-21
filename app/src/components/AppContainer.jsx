import { Container } from '@mui/material'

import NavigationMenu from './NavigationMenu'

const AppContainer = function (props) {
  const { children, id } = props

  return (
    <Container id={id} maxWidth='lg' disableGutters>
      <NavigationMenu />
      <Container sx={{ bgcolor: 'secondary.surface', py: '1rem' }}>
        {children}
      </Container>
    </Container>

  )
}

export default AppContainer
