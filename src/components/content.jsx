import React from 'react'
import wpI from '../assets/wpI.jpeg'


const Content = () => {
  return (
    
    <content
    id='about'
    className='pb-10 pt-10 md:pt-0 flex flex-col w-full md:flex-row font-bold md:px-14 px-6 '
    >
        <div
        className=' flex flex-col w-full text-center md:text-left   lg:w-[50%] gap-10   pt-14 pb-14  '
        >

        <h1
        className='  font-secondry text-[36px]'
        >
            Why Purple?
        </h1>
        <p
        className=' leading-8 font-medium text-[16px]'
        >
         The Story of Purple:
<br /> "Purple is more than just a color—it's a harmonious blend of pink and blue, representing the perfect balance of strength and flexibility—qualities essential for any fitness journey. Its universal appeal resonates with both men and women, symbolizing the unity of energy and focus needed to build a stronger, healthier self that Pilates offers.

<br /><br /><b>Step into Purple Pilates</b>- whether you’re improving your posture, strengthening your core, or simply seeking a peaceful moment, every session guides you toward empowerment and self-discovery.

<br /><br /> Join us today and start your journey toward strength, serenity, and balance.
<br /><br /><b> #FindYourPurple #PurplePower</b>


         </p>
       
        
        </div>

        <div
        className='w-full  lg:w-[50%] flex justify-center items-center  '
        >
       

      <img src={wpI} alt="" loading='lazy'
      className='object-contain md:py-10  md:pl-10 rounded-md  '
      />
        </div>
    </content>

  )
}

export default Content