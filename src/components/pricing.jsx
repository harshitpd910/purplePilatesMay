import React from 'react'

const Pricing = () => {
  return (
    <pricing
    id='pricing'
    className='w-full flex flex-col justify-center items-center font-primary py-20'
    >
        <h1
        className='font-secondry text-[36px] '
        >
            Pricing &nbsp; Plans
        </h1>


        <div
        className='w-[90%] flex flex-col md:flex-row gap-10 md:gap-6 justify-between px-10 pt-20'
        >

            <div
            className='bg-white md:w-[25%] inline-block  flex flex-col group transition-transform transform hover:scale-110 '
            >
                <div
                className=' h-[20%]  py-16 border-b bg-gray-600 font-secondry text-white group-hover:bg-gray-800 text-center'
                >
                <h1>PRICE 1 </h1>
                 </div>
                <div
                className='h-[80%] py-16 flex flex-col space-y-4 text-center'
                >
                    <h3>This is Feature 1</h3>
                    <h3>This is Feature 2</h3>
                    <h3>This is Feature 3</h3>
                </div>
            </div>


            <div
            className='bg-white md:w-[25%] inline-block  flex flex-col group transition-transform transform hover:scale-110 '
            >
                <div
                className=' h-[20%]  py-16 border-b bg-gray-600 font-secondry text-white group-hover:bg-gray-800 text-center'
                >
                <h1>PRICE 1 </h1>
                 </div>
                <div
                className='h-[80%] py-16 flex flex-col space-y-4 text-center'
                >
                    <h3>This is Feature 1</h3>
                    <h3>This is Feature 2</h3>
                    <h3>This is Feature 3</h3>
                </div>
            </div>


            <div
            className='bg-white md:w-[25%] inline-block  flex flex-col group transition-transform transform hover:scale-110 '
            >
                <div
                className=' h-[20%]  py-16 border-b bg-gray-600 font-secondry text-white group-hover:bg-gray-800 text-center'
                >
                <h1>PRICE 1 </h1>
                 </div>
                <div
                className='h-[80%] py-16 flex flex-col space-y-4 text-center'
                >
                    <h3>This is Feature 1</h3>
                    <h3>This is Feature 2</h3>
                    <h3>This is Feature 3</h3>
                </div>
            </div>






        </div>



    
    </pricing>
  )
}

export default Pricing