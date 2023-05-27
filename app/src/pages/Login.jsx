import { Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { LoginForm, FirstLoginForm } from '@components'
import { useAuthContext } from '@hooks'

function LoginPage () {
  const { user } = useAuthContext()
  if (user) return (<Navigate to='/dashboard' replace />)

  return (
    <Box sx={{ p: 4, minHeight: '100%', display: 'grid', placeItems: 'center', bgcolor: 'secondary.light' }}>
      {!user
        ? <LoginForm />
        : <FirstLoginForm />}
    </Box>
  )
}

export default LoginPage
