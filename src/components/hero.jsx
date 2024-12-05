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

At Purple Pilates, we’re transforming the way you think about fitness. Our goal is to help you feel stronger, healthier, and more confident in your body through Pilates. Whether you’re a beginner or an advanced practitioner, our classes are thoughtfully designed to meet your unique needs. 

 <br /><br />Why Choose Purple Pilates?
<br /> •<b>	Whole-Body Harmony: </b> Strengthen your body, mind, and spirit in every session.
<br /> •<b>	Strength Without Strain: </b> Gentle on your joints but effective enough to sculpt, tone, and improve flexibility.
<br /> •<b>	Your Workout, Your Way: </b> From Reformer to Wunda Chair and Arc Barrel, we use specialized equipment to deliver a balanced and comprehensive personalized experience.
<br /> •<b>	Community Focus: </b> We’re more than just a studio—we’re a supportive space where everyone can thrive.
<br /><br />
Discover how Purple Pilates is more than just a workout—it's a way of life. Join us as we work toward a stronger, healthier, and more vibrant future together!
       
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