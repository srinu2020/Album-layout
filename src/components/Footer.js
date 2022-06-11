import React from 'react'
import { Stack, Typography,Box } from '@mui/material';
const Footer = () => {
  return (
    <div className='footer'>
     <Box sx={{my:6}} >
     <Stack direction="column" justifyContent="center" alignItems="center">
    <Typography variant='h6'>Footer</Typography>
    <Typography variant='body1' color='gray'>something here to give the footer a purpose!</Typography>
  </Stack>
     </Box>
     <div>
     <Stack sx={{ display: 'flex',justifyContent:'center',alignItems:'center', flexWrap: 'wrap',backgroundColor:  'rgb(247, 245, 245)', mt:6,'& > :not(style)': {m:4},}}>
       <Typography variant='body2' color='gray'  >Built with ❤️ by the Material-UI team.</Typography>
     </Stack>
     </div>
     </div>
  )
}

export default Footer
