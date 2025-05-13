import React from 'react'
import NavMobile from './navmobile'
import pplogo2 from '../assets/pplogo5.png'

const Navbar = () => {
  return (
    <nav 
    className='h-[96px]  w-full bg-bgp text-white z-10 fixed text-[16px] flex justify-between items-center font-secondry md:pr-14 pr-4  '
    >   
        <img src={pplogo2} alt="" 
            className='h-[150%] mt-2  '
            />
       
        <div
        className='   justify-between space-x-12 hidden lg:flex'
        >
         <a href="#home" className="text-inherit text-gray-700  font-medium">
            Home
          </a>
         <a  className="text-inherit text-gray-700  font-medium"
          href="https://wa.me/918660737892"
          target="_blank"
          rel="noopener noreferrer"
         >
            Book a Trial
          </a>
          <a href="#about" className="text-inherit text-gray-700  font-medium">
            Why Purple
          </a>
          <a href="#studio" className="text-inherit text-gray-700  font-medium">
            Offerings
          </a>
         
          {/* <a href="#schedule" className="text-inherit text-gray-700  font-medium">
            Schedule
          </a> */}
         
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