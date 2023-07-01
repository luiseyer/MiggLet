import { InputBase } from '@mui/material'
import { useSearchContext } from '@hooks'

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchContext()

  return (
    <InputBase
      id='search'
      sx={{ flex: '1' }}
      placeholder='Buscar'
      value={searchQuery}
      onInput={({ target }) => { setSearchQuery(target.value) }}
    />
  )
}

export default SearchInput
