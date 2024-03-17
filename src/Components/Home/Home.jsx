import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Footer/Contact';
import Footer from '../Footer/Footer';
import { Button } from '@mui/material';


export default function Home() {
  return (
    <div>
     <div style={{backgroundImage:"url('https://images.pexels.com/photos/1132146/pexels-photo-1132146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}} className='h-screen bg-cover '>
     <div className='text-6xl  font-bold text-center pt-60 text-amber-600'><h1><span className='text-black'>Fn</span>Mafia Technologies</h1></div>
     <br/>
     <div className='text-2xl  font-bold text-center text-white' ><h3>‘Techies’ + ‘Enthusiastic Founders’ + ‘Investor’ Platform</h3></div> 
     <div className='text-center mt-24'><Button variant="contained" >Explore More </Button></div>
     </div>


       <About/>
      <Blogs/>
      {/* <Footer/> */}
    </div>
  )
}
