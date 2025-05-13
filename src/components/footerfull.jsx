import React from 'react'
import pplogo2 from '../assets/pplogo5.png'
import { MdLocationPin } from "react-icons/md";
import {FaInstagram} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { SiGooglestreetview } from "react-icons/si";

const Footerfull = () => {
  return (
    <footer
    className='flex flex-col bg-bgp px-16 py-6 text-white'
    >
        <div
        className='flex flex-col  md:flex-row md:justify-between items-center  mt-6  leading-7'
        >
        <img src={pplogo2} alt="" 
         className='h-[182px]'
        />
        <div
        className=' mb-10 flex flex-col  items-center  md:items-start  md:text-left w-[300px] mt-10 md:mt-0  '
        >
            <h1
            className='mb-6 self text-[24px]'
            >VISIT US </h1>
            <a href="https://www.google.com/maps/place/Purple+Pilates/@12.917434,77.635003,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1571f8913cbd:0x5043f26a8832460f!8m2!3d12.9174288!4d77.6375779!16s%2Fg%2F11x162mqy7?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
            >   
                 
                 Urban Vault, 5th floor, 13th main road,
                 <br /> HSR layout (Koramangla 1st block),
                 <br /> Sector 5, Bangalore 560034
            
            </a>
    
        </div>


        <div
        className='leading-10  flex flex-col  items-center md:items-start w-[300px] md:mt-[-40px]    '
        >
            <h1
            className='mb-4  text-[24px]'
            >Contact</h1>
            <p>
            info@purplepilates.in <br />

            +91 86 6073 7892
            </p>
            <div
            className='flex justify-between items-center mt-4 w-[60%]  '
            >
                <div>
                <a 
                 href="tel:8660737892" 
                className="text-white font-primary font-semibold text-[18px]"
                >
                📞
                </a>
                </div>

                <a href="https://www.google.com/maps/place/113,+13th+Main+Rd,+Sector+5,+1st+Block+Koramangala,+HSR+Layout+5th+Sector,+Bengaluru,+Karnataka+560034/@12.917423,77.6376175,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae148ebe5dad71:0xb2ee73ccf249338b!8m2!3d12.917423!4d77.6376175?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className=' '
                >
      
         
                <MdLocationPin
                size={28}
                className='text-red-700 '
                />
      

                </a>

                <div>
                <a 
                 href="https://www.instagram.com/purplepilatesblr/profilecard/?igsh=em5vemRra3plMHJ6"
                  target="_blank" 
                 rel="noopener noreferrer" 
                 className=""
                >
                <FaInstagram className="text-pink-700" size={25} /> 
                </a>
                </div>

                <div>
                <a 
                 href="mailto:info@purplepilates.in" 
                 className=""
                >
                <SiGmail className='text-red-800 ' size={25} />
                </a>
                </div>
            </div>
        </div>
        </div>


     







        <div
    className='mt-6'
    >
    <p className="text-sm text-center mt-10 md:mt-0 ">&copy; {new Date().getFullYear()} PurplePilates. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footerfull