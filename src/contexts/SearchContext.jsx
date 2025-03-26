import { createContext, memo, useState } from 'react'

const SearchContext = createContext({
  searchQuery: '',
  // biome-ignore lint/suspicious/noEmptyBlockStatements: default props are not empty
  setSearchQuery: () => {}
})

const SearchContextProvider = memo(({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
})

export { SearchContext, SearchContextProvider }
