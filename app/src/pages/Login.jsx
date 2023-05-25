import { Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { LoginForm } from '@components'
import { useAuthContext } from '@hooks'

function LoginPage () {
  const { user } = useAuthContext()
  if (user) return (<Navigate to='/dashboard' replace />)
  return (
    <Box sx={{
      p: 4,
      minHeight: '100dvh',
      display: 'grid',
      placeItems: 'center',
      placeContent: 'center',
      gap: 4,
      bgcolor: 'secondary.light'
    }}
    >
      <LoginForm />
    </Box>
  )
}

export default LoginPage
