import React from 'react'
import Background from "../assets/restaurant-png-hd--1920.png"

function Intro() {
  return (
    <div id='intro' className="bg-gray-100 relative items-center justify-center text-center rounded-lg m-2 pb-6 pt-16 border-4 border-e-8 sm:border-none">
        <div className='flex flex-col md:-mb-12'>
            <h1 className='lg:-mb-24 z-20 bg-gradient-to-b to-white text-4xl px-8 md:text-8xl text-gray-500 font-bold font-teko'>
                WELCOME TO OUR RESTAURANT
            </h1>
            <img className="z-10 mt-6" src={Background} alt="" />
        </div>
    </div>

  )
}

export default Intro