import { useState } from 'react'
import { useAuthContext } from '@hooks'
import axios from 'axios'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    try {
      setIsLoading(true)
      setError(null)

      const { data } = await axios.post('/api/login', { username, password })

      window.localStorage.setItem('user', JSON.stringify(data))
      dispatch({ type: 'LOGIN', payload: data })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error.code === 'ERR_BAD_REQUEST') {
        setError('Usuario o contraseña inválidos')
      }
      if (error.code === 'ERR_BAD_RESPONSE') {
        setError('No se pudo conectar con el servidor')
      }
    }
  }

  return { login, isLoading, error }
}

export default useLogin
