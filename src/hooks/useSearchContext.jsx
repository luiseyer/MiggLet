import { SearchContext } from '@contexts/SearchContext'
import { useContext } from 'react'

const useSearchContext = () => {
  const context = useContext(SearchContext)

  if (!context) throw new Error('useSearchContext must be used inside an SearchContextProvider')

  return context
}

export default useSearchContext
