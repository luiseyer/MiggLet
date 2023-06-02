import { Box, Typography } from '@mui/material'

const AppTitle = (props) => {
  return (
    <Typography {...props}>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='secondary.main'>Mi</Box>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='primary.main'>gg</Box>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='tertiary.main'>Let</Box>
    </Typography>
  )
}

export default AppTitle