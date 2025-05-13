import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import pplogo2 from '../assets/pplogoNew.png'



const Footer = () => {
  return (

    <footer
    className='md:h-[72px]  bg-bgp px-16  text-white flex flex-col-reverse justify-center items-center md:flex-row md:justify-between gap-6 py-6'
    >

    
    <img src={pplogo2} alt="" 
    className='h-[82px]'
    />
    
  
   

    <div
    className=''
    >
    <p className="text-sm text-center ">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>







         <div
    id='contact'
    className='  font-secondry  flex flex-row  md:justify-end text-[12px] sm:gap-15 gap-12 md:gap-8   '
    >
        <div
        className=' flex flex-col items-center justify-center md:space-y-4 '
        >
        
        <a 
          href="tel:+8660737892" 
          className="text-white font-primary font-semibold text-[18px]"
        >
           📞
        </a>
        </div>



        <div
        className=' flex flex-col items-center space-y-4'

        >
        
        <a 
          href="https://www.instagram.com/purplepilatesblr/profilecard/?igsh=em5vemRra3plMHJ6"
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
        >
          <FaInstagram className="text-pink-700" size={25} /> 
        </a>

        </div>

        
        <div 
        className=' flex flex-col items-center space-y-4'

>
       
        <a 
          href="mailto:info@purplepilates.in" 
          className=""
        >
        <SiGmail className='text-red-800 ' size={25} />
        </a>
        </div>
    </div>


    </footer>
   
  )
}

export default Footer