import React from 'react'
import vid1 from '../assets/vid1.mp4'


const Hero = () => {
  return (
    <home
    id='home'
    className='pt-[96px]  flex flex-col w-full md:flex-row font-bold'
    >
        <div
        className=' flex flex-col w-full    lg:w-[50%] gap-10 sm:px-14 px-6   py-10 bg-bgp1   '
        >

        <h1
        className='self-center md:self-start  font-secondry text-[36px]'
        >
            WELCOME
        </h1>
        <p
        className=' text-center sm:text-left leading-8 font-medium overflow-hidden'
        >
          At Purple Pilates, we’re redefining fitness with a holistic approach that seamlessly blends Pilates with toning and strengthening into one wholesome workout. Our classes cater to all levels—from beginners to seasoned practitioners—allowing you to strengthen your body, mind, and spirit in every session.

        <br /><br /><strong> Low Impact, Big Results:  </strong>  Our workouts are gentle on the joints yet powerful enough to sculpt, tone, and enhance flexibility. Each session, crafted by our expert Purple Pilates Athletics team, is designed to challenge, empower, and inspire you. We focus on toning and strengthening every muscle group, ensuring a balanced and comprehensive fitness experience.

         <br /><br /> Whether you’re looking to build core strength, improve posture, or increase mobility, we provide a supportive environment where you can thrive. Together, at Purple Pilates, we'll work toward a stronger, healthier, and more vibrant future.

         <br />br Come see why Purple Pilates isn’t just a workout—it’s a way of life.
        </p>
        <a
        className='bg-bgp px-8 py-4 mt-2 rounded-lg self-center md:self-start  '
        href='#contact'
        >
            GET STARTED
        </a>
        
        </div>

        <div
        className='w-full lg:w-[50%]  '
        >
          <div
          className='aspect-square'
          >
          <video
        className="h-full w-full object-cover pt-10 "
        autoPlay
        loop
        muted
        playsInline
        loading='lazy'
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
      
        </div>
    </home>
  )
}

export default Hero