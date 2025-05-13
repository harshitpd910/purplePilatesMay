import React from 'react'
// import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid6.mp4'


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
        className='self-center md:self-start  font-secondry text-[36px] text-bgp'
        >
            WELCOME
        </h1>
        <p
        className=' text-center sm:text-left leading-8 font-medium overflow-hidden'
        >

At Purple Pilates, we’re transforming the way you think about fitness. Our goal is to help you feel stronger, healthier, and more confident in your body through Pilates.<br/> Whether you’re a beginner or an advanced practitioner, our classes are thoughtfully designed to meet your unique needs. 

 <br /><br />Why Choose Purple Pilates?
<br /> •<b>	Whole-Body Harmony: </b> Strengthen your body & mind.
<br /> •<b>	Strength Without Strain: </b> Effective, yet gentle on your joints.
<br /> •<b>	Your Workout, Your Way: </b> From Reformer to Wunda Chair, Arc Barrel, Spine corrector and Cadillac, we use specialized equipment. 
<br /> •<b>	Community Focus: </b> We’re more than just a studio—we’re a supportive space where everyone can thrive.
<br />
 <br/> Join us as we work toward a stronger, healthier, and more vibrant future together!
       
        </p>
        {/* <a
        className='bg-bgp px-8 py-4 mt-2 rounded-lg self-center md:self-start  '
        href='#contact'
        >
            GET STARTED
        </a> */}
        
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
        <source src={vid3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
      
        </div>
    </home>
  )
}

export default Hero