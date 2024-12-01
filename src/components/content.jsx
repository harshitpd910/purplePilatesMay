import React from 'react'
import wpI from '../assets/wpI.jpeg'


const Content = () => {
  return (
    
    <content
    id='about'
    className='pb-10 pt-20 flex flex-col w-full md:flex-row font-bold md:px-14 px-6 '
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
          Purple is a harmonious blend of pink and blue, representing a balance of strength and calmness—qualities essential for any fitness journey. Its universal appeal resonates with both men and women, symbolizing the unity of energy and focus needed to build a stronger, healthier self that Pilates offers.

          <br /><br /> In our studio, purple isn’t just a color—it’s a way of life. As the final hue in the rainbow, purple evokes a sense of wonder and completion. Much like a rainbow’s path, Pilates emphasizes finishing each movement with precision and grace. Every exercise flows effortlessly, guiding you to balance and harmony in body and mind.

         <br /><br /> Step into Purple Pilates- Whether you’re here to improve your posture, enhance your core strength, or simply find a moment of peace in your day, every session becomes a step toward feeling empowered, balanced, and truly at home in your body.

          <br /><br /> Join us today, and let’s create your own journey toward strength, serenity, and self-discovery.
         <br /><br /><strong>  #FindYourPurple #PurplePower </strong> 
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