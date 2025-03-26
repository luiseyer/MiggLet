import { useAuthContext } from '@hooks'
import { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ page, requireAdmin }) => {
  const navigate = useNavigate()
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user) navigate('/login', { replace: true })
    if (requireAdmin && !user.isAdmin) navigate(-1, { replace: true })
  }, [user, requireAdmin, navigate])

  if (!user) return
  if (requireAdmin && !user.isAdmin) return
  return page || <Outlet />
}

export default memo(PrivateRoute)
