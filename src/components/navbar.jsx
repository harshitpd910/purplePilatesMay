import React from 'react'
import NavMobile from './navmobile'
import pplogo2 from '../assets/pplogo2.png'

const Navbar = () => {
  return (
    <nav 
    className='h-[96px]  w-full bg-bgp text-white z-10 fixed text-[18px] flex justify-between items-center font-secondry px-14  '
    >   
        <img src={pplogo2} alt="" 
            className='h-[150%] mt-3 '
            />
       
        <div
        className='   justify-between space-x-12 hidden lg:flex'
        >
         <a href="#home" className="text-inherit text-gray-700  font-medium">
            Home
          </a>
          <a href="#about" className="text-inherit text-gray-700  font-medium">
            About
          </a>
          <a href="#studio" className="text-inherit text-gray-700  font-medium">
            Studio
          </a>
         
          <a href="#contact" className="text-inherit text-gray-700  font-medium">
            Contact
          </a>   

        </div>

        <div className='ml-auto mr-10 lg:hidden'>
            <NavMobile/>
        </div>
    </nav>
  )
}

export default Navbar