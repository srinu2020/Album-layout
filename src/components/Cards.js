
import React from 'react'
import { Box} from '@mui/system';
 import {CardContent,Card,Typography,Button, Stack } from '@mui/material';
import { CardActions } from '@mui/material';
const credentials=[
  {id:1,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:2,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:3,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:4,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:5,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:6,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:7,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:8,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:9,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:10,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:11,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"},
  {id:12,title:"Thumbnail",heading:"Heading",description:"This is a media card. You can use this section to describe the content.",view:"VIEW",edit:"EDIT"}
]

const Cards = () => {
  return (
    <div className='card'>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap',backgroundColor:  'rgb(247, 245, 245)',justifyContent:'space-between',mt:6,'& > :not(style)': {m:4},}}>
    {
      credentials.map((info)=>(
        <Stack display='flex' direction='row' justifyContent='space-between'  spacing={{  md: 7}} >
     <Card key={info.id} sx={{maxWidth:350,maxHeight:370}} >
     <Box sx={{backgroundColor:'#4c4f52',height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     
      <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center',color:'white',fontWeight:500}}>
        {info.title}
      </Typography>
      </CardContent>
    </Box>
    <Typography variant='h5' sx={{m:2}}>{info.heading}</Typography>
    <Typography variant='body2' sx={{m:2}}>{info.description}</Typography>
    <CardActions>
      <Button size="small">{info.view}</Button>
      <Button size="small">{info.edit}</Button>
    </CardActions>
  </Card>
   
   
   
     
     
     </Stack>
      ))
    }
     
  </Box>
    </div>
  )
}

export default Cards
