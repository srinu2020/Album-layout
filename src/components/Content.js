import React from 'react'
import {  Typography,Box } from '@mui/material'
import { Button } from '@mui/material';
import { textAlign } from '@mui/system'
import Stack from '@mui/material/Stack';
const Content = () => {
  return (
    <div className='mainContent'>
    <Box sx={{mt:8}}>
<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} >
<Typography variant='h2' sx={{textAlign:"center"}}>Album layout</Typography>
 <Typography variant='h6' sx={{mt:8,textAlign:"center",width:'50%',color:'gray'}}>Something short and leading about the collection below-its contents,the creator,etc. Make it short and sweet,but not too short so folks don't simply skip over it entirely.</Typography>
 
 </Stack>

</Box>
<Box sx={{mt:5}}>
<Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
     
     <Button variant="contained">main call to action</Button>
     <Button variant="outlined">secondary action</Button>
     </Stack>
</Box>

     
        
    </div> 
    
  )
}

export default Content
