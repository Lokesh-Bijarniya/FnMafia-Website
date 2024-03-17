import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Navbar({username}) {
   

  return (
    <div>
      <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
     
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
         



          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         



          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-2 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-10 w-auto rounded-md" src="./Images/fnLogo.jpeg" alt="Your Company" />
        </div>
        <div class="hidden sm:ml-6 sm:block ">
          <div class="flex space-x-4 m-10">
            <Link to='/' class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
            <Link to='/about' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium" aria-current="page">About Us</Link>
            {/* <Link to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</Link> */}
            <Link to='/blogs' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">Blogs</Link>
            <Link to='/footer' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">Contact Us</Link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

      
      {/* PROFILE SECTION */}
        <div class="relative ml-3">
          <div className='flex'>
            
            {username ? <span className='text-2xl text-white flex '><img class="h-8 w-8 rounded-full mr-3" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMja3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8Ma%3D%3D" alt=""/>{username}</span> : <Button variant="outlined"><Link to='/signin' className='text-white'>Sign In</Link></Button>}
            
             
          </div>
        </div>
      </div>
    </div>
  </div>

 
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blogs</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</a>
    </div>
  </div>
</nav>

    </div>
  )
}
