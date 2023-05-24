import { useAuthContext } from '@hooks'

const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    window.localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}

export default useLogout
