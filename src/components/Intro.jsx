import React from 'react'
import Background from "../assets/rest2.jpg"

function Intro() {
  return (
    <div id='intro' className="bg-gray-100 relative items-center justify-center text-center rounded-lg m-2 pb-10 sm:pb-6 pt-16 border-8 border-gray-150 sm:m-2">
        <div className='flex flex-col items-center md:-mb-12'>
            <h1 className='w-1/4 lg:-mb-8 z-20 bg-gradient-to-b to-white text-6xl px-8 md:text-8xl text-bgCutsom font-bold font-teko animate-pulse'>
                ገዛና
            </h1>
            <img className="z-10 max-h-[80vh] mt-6" src={Background} alt="" />
        </div>
    </div>

  )
}

export default Intro