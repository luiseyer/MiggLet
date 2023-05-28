import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material'

const SingleItemMenu = () => {
  return (
    <>
      <AppBar
        position='sticky'
        color='primary'
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton component={Link} to='..'><ChevronLeftIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default SingleItemMenu
