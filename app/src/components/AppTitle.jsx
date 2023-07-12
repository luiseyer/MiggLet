import { memo } from 'react'
import { Box, Typography } from '@mui/material'

const AppTitle = (props) => {
  return (
    <Typography className='AppTitle' {...props}>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='secondary.main'>Mi</Box>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='primary.main'>gg</Box>
      <Box component='span' sx={{ fontFamily: 'coiny', lineHeight: 0 }} color='tertiary.main'>Let</Box>
    </Typography>
  )
}

export default memo(AppTitle)
