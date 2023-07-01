import { createContext, useState } from 'react'

const SearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {}
})

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchContextProvider }
