import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gal1 from '../assets/for the gallery/pexels-alleksana-4234527.jpg'
import gal2 from "../assets/for the gallery/pexels-bohlemedia-1114427.jpg"
import gal3 from "../assets/for the gallery/pexels-chris-f-38966-8351667.jpg"
import gal4 from "../assets/for the gallery/pexels-julieaagaard-2097118.jpg"
import gal5 from "../assets/for the gallery/pexels-pixabay-265940.jpg"
import gal6 from "../assets/for the gallery/pexels-ricardo-oliveira-317251078-17888753.jpg"
import gal7 from "../assets/for the gallery/pexels-vidalbalielojrfotografia-15751626.jpg"

function OurService() {
    const Piclist = [
        gal1,
        gal2,
        gal3,
        gal4,
        gal5,
        gal6,
        gal7,
    ]
    const [isOpen, setIsOpen] = useState(false)
    const [selImage, SetselImage] = useState("")

    const OpenImage = (src) => {
      setIsOpen(true)
      SetselImage(src)
    }
    const CloseImage = () => {
      setIsOpen(false)
      SetselImage("")
    }
  return (
    <div className='bg-bgCutsom w-full px-2 py-24 '>
        <div className= "flex flex-wrap justify-center text-left w-full border-4 border-e-8 bg-gray-300 sm:mx-12 sm:w-auto">
          {
            Piclist.map((pic) => (
              <div key={pic} className='flex max-h-96 justify-center ease-in-out cursor-pointer hover:scale-110 p-1'>
                <img onClick={() => OpenImage(pic)} className=" max-h-96 object-contain " src={pic} alt="Gallery" />
              </div>
            ))
          }
        </div>
        <div>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 py-24 z-40">
              <div className="relative">
                <span
                  className="absolute top-24 right-0 text-white text-2xl cursor-pointer"
                  onClick={CloseImage}
                >
                  &times;
                </span>
                <img
                  src={selImage}
                  className="max-w-auto h-screen object-contain"
                  alt="Full Preview"
                />
              </div>
            </div>
          )}
        </div>
    </div>
    )
}

export default OurService