
import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content';
 import Cards from './components/Cards';

import Footer from './components/Footer';
import { Typography,Box ,Stack} from '@mui/material';
 
 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Cards/>
     <Footer/>
    
      
    </div>
  )
}

export default App
