import React from 'react'
import vid1 from '../assets/vid1.mp4'
import bgI2 from '../assets/bgI2.jpg'
import { TiTick } from "react-icons/ti";
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import g1 from '../assets/G1.jpeg'
import g5 from '../assets/g5.webp'
import g2 from '../assets/g2.jfif'
import G3 from '../assets/G3.jpg'
import S1 from '../assets/s1.jpeg'

const Studio = () => {
  return (
    <studio
    id='studio'
    className='md:pt-0 pt-10  w-full flex flex-col text-center sm:px-14 px-6 mb-10 '
    >
        <div
        className=' w-full flex justify-center items-center pb-20 '
        >
            <div 
            className=' flex flex-col justify-center items-center  '
            >
            <h1
            className='font-secondry text-[32px]  '
            >OUR OFFERINGS</h1>
           
            </div>
        </div>

        




            <div
            className='flex flex-col gap-6  justify-center items-center sm:flex-row sm:justify-center sm:items-center w-full  '
            >
                <div
                className='sm:w-[50%] w-[100%]   flex justify-center sm:block'
                >
                    <img src={c2} alt="" loading='lazy'
                    className='  sm:w-[100%] w-[100%]  sm:mr-[16px] rounded-lg '
                    />

                </div>
                <div
                className='sm:w-[50%]'
                >
                    <div
                    className='  ml-[16px]  sm:px-0'
                    >
                    <h1
                    className=' text-center sm:text-left font-secondry text-[36px]'
                    >Pilates </h1>

                    <br /><br />
                    <p
                    className=' text-center sm:text-left'
                    > 
                    Strengthen your core, improve posture, and boost flexibility with low-impact Pilates sessions that focus on alignment and pain-free movement. Designed for all fitness levels, these workouts emphasize balance and control, helping you stay centered and resilient. Achieve a revitalized, aligned body that supports everyday activities with ease.
                   <br /><br /> <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Improves Muscle Imbalance
                    </div> 
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Improves Core Strength

                    </div> 
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Enhances Flexibility
                    </div> 
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Boosts Postural Alignment
                    </div> 
                       
                     </p>
                    </div>
                </div>
                   
            </div>




            <div
            className='flex flex-col-reverse gap-6  justify-center items-center sm:flex-row sm:justify-center sm:items-center w-full mt-20 '
            >
                
                <div
                className='sm:w-[50%]'
                >
                    <div
                    className='  ml-[16px]  sm:px-0'
                    >
                    <h1
                    className=' text-center sm:text-left font-secondry text-[36px]'
                    >Aeriel yoga </h1>

                    <br /><br />
                    <p
                    className=' text-center sm:text-left'
                    > 
                    Experience the healing power of yoga to reduce stress, improve flexibility, and enhance mental clarity. These mindful flows promote better sleep and build a stronger body, fostering relaxation and resilience. Perfect for all levels, each session supports a balanced mind and body, bringing calm and strength to daily life.
                   <br /><br />
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Builds Upper Body Strength
                    </div> 
                  
                  
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Reduces Stress
                    </div> 
                   <div
                   className='flex text-left items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Improves Spinal Decompression
                    </div> 
                   <div
                   className='flex text-left items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Boosts Balance and Coordination
                    </div> 
                   
                     
                     
                     </p>
                    </div>
                </div>
                   


                <div
                className='sm:w-[50%] w-[100%]  flex justify-center sm:block '
                >
                    <img src={c1} alt="" loading='lazy'
                    className='  sm:w-[100%] w-[100%] sm:mr-[16px] rounded-lg'
                    />

                </div>
            </div>



            <div
            className='flex flex-col gap-6  justify-center items-center sm:flex-row sm:justify-center sm:items-center w-full mt-20 '
            >
                <div
                className='sm:w-[50%] w-[100%]   flex justify-center sm:block'
                >
                    <img src={c3} alt="" loading='lazy'
                    className='  sm:w-[100%] w-[100%]  sm:mr-[16px] rounded-lg '
                    />

                </div>
                <div
                className='sm:w-[50%]'
                >
                    <div
                    className='  ml-[16px]  sm:px-0'
                    >
                    <h1
                    className=' text-center sm:text-left font-secondry text-[36px]'
                    >Yoga</h1>

                    <br /><br />
                    <p
                    className=' text-center sm:text-left'
                    > 
                    Relieve stress, increase flexibility, and sharpen mental clarity through mindful yoga flows that harness yoga's healing power. Perfect for all levels, each practice brings calm and strength, enhancing both mind and body for daily life.
                    <br /><br /> <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Deepens Stretches
                    </div> 
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Builds Core Strength

                    </div> 
                   <div
                   className='flex items-center gap-4'
                   >
                    <TiTick
                    className='text-green-600 bg-white rounded-xl '
                    />
                    Reduces Joint Strain
                    </div> 
                     </p>
                    </div>
                </div>
                   
            </div>





    <div 
    id='schedule'
    className='w-full mt-20 flex flex-col gap-10'
    >
        <h1
        className='font-secondry text-[32px] text-center'
        >
            Schedule for the Month
        </h1>
        <img src={S1} alt=""
        className='w-full rounded-xl'
        />
       

    </div>
           



    

    <div
        className='  flex sm:justify-between sm:items-start flex-col md:mt-20 mt-20 md:flex-row space-y-10 md:space-y-0 gap-x-10  '
        >
          



            <div
            className='text-purple-950  md:w-[275px] lg:w-[375px] border border-8  shadow-lg '
            >
            <div
            className='h-[192px]'
            >
                <img src={g2} alt="" loading='lazy'
                className='w-[100%] h-full object-cover rounded-md'
                />

            </div>

            <h1
            className='p-4 font-secondry font-bold text-[24px] '
            > Try Us</h1>
            
            <p
            className='p-4 py-5 lg:px-4  text-left text-black'
            >
                 At Purple Pilates, we offer:
                 <br /><br />
                <ul 
                className='list-disc pl-5'
                >
                    <li>
                    Private 1:1 Sessions for personalized attention.
                    </li>
                    <li>
                    Duet Sessions to work out with a partner.
                    </li>
                    <li>
                    Group Sessions for a dynamic, community experience.
                    </li>
                </ul>
               
               <br /> Give us a try! <br /> Your first trial class is just ₹999. Experience the difference today!
            </p>
            </div>



           

            <div
            className='text-purple-950  md:w-[275px] lg:w-[375px] border-8 shadow-lg'
            >
            <div
            className='h-[192px]'
            >
                <img src={G3} alt="" loading='lazy'
                className='w-[100%] h-full object-cover rounded-md'
                />

            </div>

            <h1
            className='p-4 font-secondry font-bold text-[24px] '
            > Collaborate with Us</h1>
            
            
            <p
            className='p-4 py-5 lg:px-4 text-left text-black'
            >
                {/* Collaborate with Us! <br /><br /> */}
                <ul
                className='list-disc pl-5'
                >
                    <li>
                    Corporate Workshops: Enhance employee well-being with Pilates.
                    </li>
                    <li>
                    Exclusive Events: Add a unique fitness touch to your events or retreats.
                    </li>
                    <li>
                    Franchise Opportunities: Be a part of our growing network and to our community.

                    </li>
                </ul>
               <br /> Partner with Purple Pilates to create something extraordinary!


                {/* Let’s join forces to promote health, fitness, and mindfulness. <br /><br /> */}
                <br /><br />
                 Reach out today to collaborate!
            </p>
            </div>




            <div
            className='text-purple-950  md:w-[275px] lg:w-[375px] border-8 shadow-lg'
            >
            <div
            className='h-[192px]'
            >
                <img src={g5} alt="" loading='lazy'
                className='w-[100%] h-full object-cover rounded-md'
                />

            </div>

            <h1
            className='p-4 font-secondry font-bold text-[24px] '
            > Become a Teacher</h1>
            
            <p
            className='p-4 py-5 lg:px-4 text-left text-black'
            >
                Become a Certified Teacher with Us! <br /><br />
                <ul
                className='list-disc pl-5'
                >
                    <li>
                    Passionate about fitness and movement? Step into a rewarding career with Pilates and Aerial Yoga Training Programs.
                    </li>
                    <li>
                    Comprehensive Training: Learn the fundamentals, advanced techniques, and teaching methodologies.
                    </li>
                    <li>
                    Hands-On Experience: Practice under expert guidance to build confidence and skill.
                    </li>
                </ul>
              
            </p>
            </div>





            

        </div>




        <a
        className='bg-bgp px-8 py-4 mt-10 rounded-lg self-center md:self-start mx-auto text-white font-bold text-[20px] hover:bg-purple-300  '
        href='#contact'
        >
            JOIN US
        </a>



            





           

        
    </studio>
  )
}

export default Studio