import { createContext } from 'react'

const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  return (
    <SearchContext.Provider value={{ }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchContextProvider }
