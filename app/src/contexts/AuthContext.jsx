import { createContext, useReducer, useEffect } from 'react'

const AuthContext = createContext()

const authReducer = (state, action) => {
  const ACTION_HANDLERS = {
    LOGIN: ({ action }) => ({ user: action.payload }),
    LOGOUT: () => ({ user: null }),
    default: ({ state }) => state
  }

  const handleAction = ACTION_HANDLERS[action.type] || ACTION_HANDLERS.default

  return handleAction({ state, action })
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) dispatch({ type: 'LOGIN', payload: user })
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider, authReducer }
