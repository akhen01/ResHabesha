import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import youtube from "../assets/Socialmedia Logo/icons8-youtube-96.png"
import whatsapp from "../assets/Socialmedia Logo/icons8-whatsapp-96.png"
import insta from "../assets/Socialmedia Logo/icons8-instagram-96.png"

function OurService() {

  return (
    <div id='ourService' className='bg-gray-100 w-full my-6 px-6 border-4 border-e-8'>
        <ul className="flex flex-col sm:flex-row text-left my-2 w-full">
            <li className='w-full sm:w-1/2 m-2  sm:border-b-0 pb-6 font-teko font-semibold'>
                <p className='text-3xl text-bgCutsom '>Catering and Events</p>
                <h1 className='text-xl'>
                Your comfort and peace of mind are our top priorities.
                </h1>
            </li>
            <li className='w-full sm:w-1/2 m-2 font-teko font-semibold'>
            <p className='text-3xl text-bgCutsom'>Private Dinning</p>
            <h1 className='text-xl'>
                Every listing is verified for authenticity, providing you with a seamless and stress-free rental experience.
            </h1>
            </li>
        </ul>
        <div>
          <hr />
          <ul className='w-full flex flex-col items-center m-2 pb-6 font-teko font-semibold '>

            <h1 className='text-center text-2xl m-4 font-semibold'>
                Follow us on
            </h1>
            <div className='flex sm:flex-row gap-4'>
            <li className='flex'>
              <img className='max-h-8 max-w-8' src={insta} alt="" />
              <h1 className='text-center text-xl mb-4'>
                  Instagram
              </h1>
            </li>
            <li className='flex'>
              <img className='max-h-8 max-w-8' src={whatsapp} alt="" />
              <h1 className='text-lg'>
                Whatsapp
              </h1>
            </li>
            </div>
          </ul>
    </div>  
    </div>
    )
}

export default OurService