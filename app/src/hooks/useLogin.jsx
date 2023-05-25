import { useState } from 'react'
import { useAuthContext } from '@hooks'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    const json = await response.json()

    if (response.status === 401) {
      setIsLoading(false)
      setError(json.error.message)
    }

    if (response.ok) {
      window.localStorage.setItem('user', JSON.stringify(json))
      dispatch({ type: 'LOGIN', payload: json })
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}

export default useLogin
