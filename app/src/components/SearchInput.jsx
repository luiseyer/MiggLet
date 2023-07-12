import { memo } from 'react'
import { InputBase } from '@mui/material'
import { useSearchContext } from '@hooks'

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchContext()

  return (
    <InputBase
      autoFocus
      id='search'
      sx={{ flex: '1' }}
      placeholder='Buscar'
      value={searchQuery}
      onInput={({ target }) => { setSearchQuery(target.value) }}
    />
  )
}

export default memo(SearchInput)
