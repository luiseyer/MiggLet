import { useSearchContext } from '@hooks'
import { InputBase } from '@mui/material'
import { memo } from 'react'

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchContext()

  return (
    <InputBase
      autoFocus
      id="search"
      sx={{ flex: '1' }}
      placeholder="Buscar"
      value={searchQuery}
      onInput={({ target }) => {
        setSearchQuery(target.value)
      }}
    />
  )
}

export default memo(SearchInput)
