import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '@hooks'

const PrivateRoute = ({ page }) => {
  const { user } = useAuthContext()
  if (!user) return (<Navigate to='/login' replace />)
  return page || <Outlet />
}

export default PrivateRoute
