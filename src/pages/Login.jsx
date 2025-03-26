import { LoginForm } from '@components'
import { useAuthContext } from '@hooks'
import { Box } from '@mui/material'
import { memo } from 'react'
import { Navigate } from 'react-router-dom'

function LoginPage() {
  const { user } = useAuthContext()
  if (user) return <Navigate to="/dashboard" replace />

  return (
    <Box
      sx={{
        p: '1rem',
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: ({ gradient }) => gradient.light
      }}
    >
      <LoginForm />
    </Box>
  )
}

export default memo(LoginPage)
