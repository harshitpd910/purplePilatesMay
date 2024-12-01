import React from 'react'
import pplogo2 from '../assets/pplogo2.png'
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
            >VISIT</h1>
            <p
            >
                Purple Pilates <br />
                Qube Software Park
                <br />Survey No.133/2,<br /> Behind Embassy Tech Village 

               <br /> Outer Ring Road, Bengaluru</p>

               <a href="https://maps.app.goo.gl/ZDJ2ixs5BdGvdtVv9"
            target="_blank"
            rel="noopener noreferrer"
      className='bg-white text-black    mt-10  rounded-lg self-center'
      >
      
         
        <SiGooglestreetview
        size={50}
        className='text-green-700'
        />
      

      </a>
        </div>


        <div
        className='leading-10  flex flex-col  items-center md:items-start w-[300px]  md:mt-[-120px] '
        >
            <h1
            className='mb-4 md:mb-6 text-[24px]'
            >Contact</h1>
            <p>
            info@purplepilates.in <br />

            +91 86 6073 7892
            </p>
            <div
            className='flex justify-between items-center mt-8 w-[60%]  '
            >
                <div>
                <a 
                 href="tel:8660737892" 
                className="text-white font-primary font-semibold text-[18px]"
                >
                📞
                </a>
                </div>

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
    className=''
    >
    <p className="text-sm text-center mt-10 md:mt-0 ">&copy; {new Date().getFullYear()} PurplePilates. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footerfull