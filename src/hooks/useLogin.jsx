import { useAuthContext } from '@hooks'
import pb from '@lib/pocketbase'
import { useState } from 'react'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    try {
      setIsLoading(true)
      setError(null)

      await pb.collection('users').authWithPassword(username, password)

      dispatch({ type: 'LOGIN', payload: pb.authStore.model })
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
