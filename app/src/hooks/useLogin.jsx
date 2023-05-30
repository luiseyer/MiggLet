import { useState } from 'react'
import { useAuthContext } from '@hooks'
import data from '@helpers/data'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    // TODO try { setIsLoading(true) setError(null) const response = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) }) const json = await response.json() if (response.status === 401) { setIsLoading(false) setError(json.error.message) } if (response.ok) { window.localStorage.setItem('user', JSON.stringify(json)) dispatch({ type: 'LOGIN', payload: json }) setIsLoading(false) } } catch (error) { setIsLoading(false) setError('No se puede conectar con el servidor') }
    simulationLogin(username, password, dispatch, setError, setIsLoading)
  }

  return { login, isLoading, error }
}

const simulationLogin = (username, password, dispatch, setError, setIsLoading) => {
  setIsLoading(true)
  setError(null)
  const user = data.users.find(user => (user.email === username || user.dni === username) && user.password === password)

  if (!user) {
    setIsLoading(false)
    setError('Usuario o contraseña incorrectos')
    return 0
  }

  window.localStorage.setItem('user', JSON.stringify(user))
  dispatch({ type: 'LOGIN', payload: user })
}

export default useLogin
