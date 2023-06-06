import { Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { LoginForm, FirstLoginForm } from '@components'
import { useAuthContext } from '@hooks'

function LoginPage () {
  const { user } = useAuthContext()
  if (user) return (<Navigate to='/dashboard' replace />)

  return (
    <Box sx={{
      p: '1rem',
      minHeight: '100dvh',
      display: 'grid',
      placeItems: 'center',
      background: (theme) => theme.gradient.light
    }}
    >
      {!user
        ? <LoginForm />
        : <FirstLoginForm />}
    </Box>
  )
}

export default LoginPage
