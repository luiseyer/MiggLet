import { memo } from 'react'
import { Container } from '@mui/material'
import { LoginForm } from '@components'

function LoginPage () {
  return (
    <Container sx={{
      p: 4,
      gridColumn: 'span 2',
      minHeight: '100dvh',
      display: 'grid',
      placeItems: 'center',
      bgcolor: 'secondary.light'
    }}
    >
      <LoginForm />
    </Container>
  )
}

export default memo(LoginPage)
