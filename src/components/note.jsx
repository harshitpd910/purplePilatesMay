import React from 'react'
import fn1 from '../assets/fn1.webp'
import g5 from '../assets/g5.webp'
import g2 from '../assets/g2.jfif'
import G3 from '../assets/G3.jpg'

const Note = () => {
  return (
    <note
    className='w-full flex  justify-center items-center text-center md:text-left  text-black sm:px-16 px-6 py-10 '
    >
     <div
     className=' md:px-14 md:py-10 border-8 flex flex-col-reverse md:flex-row'
     >

     
        <div
        className='md:w-[50%] w-full flex flex-col justify-center items-center   py-10 md:pr-10   mt-16 md:mt-0'
        >
            <h1
            className='font-secondry text-[36px] pb-10 '
            >
                Founder's Note
            </h1>

            <p
            className='  leading-8  px-4 md:px-0'
            >
                With Purple Pilates, I aim to create a space where people can nurture their bodies and minds, building strength not just for today but for a lifetime. Not just for larger muscles but for smaller, essential core muscles. Pilates is more than just movement—it’s an investment in your future self. 

              <br /><br /> I’ve seen firsthand how a lack of mobility and balance can impact quality of life, and I believe deeply in the transformative power of mindful movement to prevent that. 

               {/* <br /><br /> Pilates helps us move better, feel better, and carry ourselves with poise and confidence, no matter our age or stage of life. Let’s embrace the journey of aging with strength, flexibility, and grace. Together, at Purple Pilates, we’ll work toward a stronger, healthier, and more vibrant future. */}

               <br /><br /><strong>#FindYourPurple <br /> #WePurpleYou</strong> 
            </p>

        </div>

        <div
      className='md:w-[50%] w-full flex justify-center items-center pl-  '
      >
        <img src={fn1} alt="" loading='lazy'
        className='w-full aspect-square  shadow-2xl border-8 rounded-2xl'
        />


      </div>
      </div>

    </note>
  )
}

export default Note