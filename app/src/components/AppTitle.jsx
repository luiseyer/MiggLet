import { Box, Typography } from '@mui/material'

const AppTitle = (props) => {
  return (
    <Typography className='app-title' component='h1' variant='h4' sx={{ fontWeight: 'bold', pb: 1 }}>
      <Box component='span' color='secondary.main'>Mi</Box>
      <Box component='span' color='primary.main'>gg</Box>
      <Box component='span' color='tertiary.main'>Let</Box>
    </Typography>
  )
}

export default AppTitle
