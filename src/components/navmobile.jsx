import React, { useState } from 'react';

import { BiMenu } from "react-icons/bi";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=''>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer text-4xl text-heading ml-[10px] lg:none'
      >
        <BiMenu style={{color:'white'}} />
      </div>
      <ul
        className={`${
          isOpen ? ' p-8' : 'max-h-0 p-0'
        } flex flex-col  absolute w-full top-24 left-0 bg-bgp/80 rounded-md shadow-primary space-y-6 overflow-hidden transform-all duration-300 ease-in-out`}
      >
        <li className='ml-10'>
          <a href='#home'>Home</a>
        </li>
        <li className='ml-10'>
          <a href='#about'>About</a>
        </li>
        <li className='ml-10'>
          <a href='#studio'>Studio</a>
        </li>
       
        <li className='ml-10'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
