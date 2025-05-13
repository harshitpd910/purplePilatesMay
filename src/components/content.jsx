import React from 'react'
import wpI from '../assets/wpI.jpeg'


const Content = () => {
  return (
    
    <content
    id='about'
    className='pb-10 md:pb-6 pt-6 md:pt-0 flex flex-col w-full md:flex-row font-bold md:px-14 px-6 '
    >
        <div
        className=' flex flex-col w-full text-center md:text-left    gap-10   pt-14 pb-14 md:pt-6  '
        >

        <h1
        className='  font-secondry text-[36px] text-bgp'
        >
            Why Purple?
        </h1>
        <p
        className=' leading-8 font-medium text-[16px]'
        >
         <b>The Story of Purple: </b>
<br /> "Purple is more than just a color—it's a harmonious blend of pink and blue, representing the perfect balance of strength and flexibility—qualities essential to build a stronger, healthier self that Pilates offers.

<br /><br /><b>Step into Purple Pilates</b>- whether you’re improving your posture, strengthening your core, or simply seeking a peaceful moment, every session guides you toward empowerment and self-discovery.

{/* <br /><br /> Join us today and start your journey toward strength, serenity, and balance. */}
<br /><br /><b> #FindYourPurple #PurplePower #WePurpleYou</b>


         </p>
       
        
        </div>

        {/* <div
        className='w-full  lg:w-[50%] flex justify-center items-center md:py-10  md:pl-10 md:mb-8 '
        >
       

      <img src={wpI} alt="" loading='lazy'
      className='object-contain  rounded-xl  '
      />
        </div> */}
    </content>

  )
}

export default Content