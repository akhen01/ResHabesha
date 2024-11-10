import React, { useRef, useState, useEffect } from 'react'
import whatsapp from "../assets/Socialmedia Logo/icons8-whatsapp-96.png"
import insta from "../assets/Socialmedia Logo/icons8-instagram-96.png"
import { initializeVisibilityObserver } from './visiblityAnim/initializeVisibilityObserver'

function OurService() {

  const elementRefs = useRef([]);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = initializeVisibilityObserver(elementRefs.current, (visibleEl) => {
      setVisibleElements((prevVisibleElements) => {
        const newVisibleElements = new Set(prevVisibleElements);
        newVisibleElements.add(visibleEl);
        return newVisibleElements;
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id='ourService' className='bg-gray-100 w-full my-6 px-6 border-4 border-e-8'>
      <div className='font-semibold bg-gray-300 rounded-lg border-8 border-grey-150'>
        <h1 className='text-3xl  text-center p-2 '>
          ንህቦ ኣገልግሎት
        </h1>
        <ul className='flex flex-wrap flex-col sm:flex-row'>
          <div className='p-4 sm:w-1/2'>
            
          <li ref={(el) => (elementRefs.current[1] = el)} className='w-full bg-gray-600 rounded-3xl text-center text-bgCutsom p-2  sm:border-b-0 pb-3 font-semibold'>
            <p className='text-white font-bold text-2xl'>-</p>ኣብ ውሽጢ መግቢ: ደስ ዝብል ዓዳሚ ሃዋህው። 
          </li>
          </div>
          <div className='p-4 sm:w-1/2'>
          <li ref={(el) => (elementRefs.current[2] = el)} className='w-full bg-gray-600 rounded-3xl text-center text-bgCutsom  p-2 mb-6  sm:border-b-0 pb-3 font-semibold'>
          <p className='text-white font-bold text-2xl'>-</p>ምቹእ ንናይ ፍቑራት ቆጸራ: ናይ ስድራ ምትእኽኻብን፣ ካልእን።
          </li>
          </div>
          <div className='p-4  sm:w-1/2'>
          <li ref={(el) => (elementRefs.current[4] = el)} className={`w-full bg-gray-600 rounded-3xl text-center text-bgCutsom p-2  sm:border-b-0 pb-3 font-semibold  ${visibleElements.has(elementRefs.current[4]) ? '-translate-x-6' : 'translate-x-0'
            } duration-1000 delay-500 p-4 border`}>
          <p className='text-white font-bold text-2xl'>-</p>ኣብ ዝተኣዘዞ ምብጻሕን: ጥዑም ምግብና ደሊኹም ገን ካብ ማሙቕ ገዛኹም ክትወጹ ኣይደለኩምን? መግቢና ኣብ ዘኣዘዝኩሞ ወላ ኣብ መዉቕ ገዛኩም ኣብ ሓጺር ግዜ ከነብጽሓልኩም ድሉዋት ኢና።
          </li>
          </div>
          <div className='p-4 sm:w-1/2'>
          <li ref={(el) => (elementRefs.current[4] = el)} className={`w-full bg-gray-600 rounded-3xl text-center text-bgCutsom p-2  sm:border-b-0 pb-3 font-semibold ${visibleElements.has(elementRefs.current[4]) ? 'translate-x-6' : 'translate-x-0'
            } duration-1000 delay-500 p-4 border`}>
          <p className='text-white font-bold text-2xl'>-</p>ን ፉሉይ ኣጋጣሚታት ንምእንጋድ: ንፉቑራት ዝኸወን ብሑት ሃዋሁ፣ ጽንብል ዕለተ ልደት፣ ሕጸ፡ መርዓን፥ ካልኦትን ኣጋጣሚታት ክነአንግደኩም ድሉዋት ኣለና።
          </li>
          </div>
        </ul>
      
      </div>
        <ul className="flex flex-col sm:flex-row text-left mt-2 w-full">
            <li className={`w-full sm:w-1/2 m-2 sm:border-b-0 pb-6 font-teko font-semibold p-2 bg-gray-300 rounded-lg border-8 border-gray-150 hover:translate-y-6
             duration-1000 delay-500`}>
                <p className='text-3xl text-bgCutsom text-center '>ጽንባላት</p>
                <h1 className='sm:text-xl text-lg'>
                ን ገዛና ቤት መግቢ ግደፉሉ ጽንብላት ኣደናቒ ክገብሮ 
                ኣዘራቢ ናይ ጽንበላት ኣገልግሎት ብጠለብኩም ዝተኣለመ ምዕሩግ ኣቅራረባ ብ ክኢላታት ኣባላትና ን ኣበር ዘይብሉ ኣገልግሎት ከንህቦም
                ን መርዓ፣ ወልቃዊ መትአኽኻብ፣ ናይ ስራሕ ኣኼባታትን ካልእን ፍጹምን ኣንግዶት ክንህበኩም ደለዋት ኢና።
                </h1>
            </li>
            <li className={`w-full sm:w-1/2 m-2 sm:border-b-0 pb-6 font-teko font-semibold p-2 bg-gray-300 rounded-lg border-8 border-gray-150 hover:translate-y-6
             duration-1000 delay-500`}>
            <p className='text-3xl text-bgCutsom text-center'>ወልቃዊ ድራራት</p>
            <h1 className='sm:text-xl text-lg'>
              ፍሉይን ምዕሩግን ኣገልግሎት ናይ ወልቃዊ ድራራት ኣማራጺታትና ን ፉሉይን ባሕታዊ በዓላትን መደባት ንግዳዊ ኣኬባታትን፣ ብኽኢላታት ዝተዳለወ ባሕታዊ ኣገልግሎት ምቹእ ሃዋህው
              ሕጂ ቆጸራ ሓዙ ዘይርሳዕ ህሞታት ንኽትፈጥሩ ኣብ ገዛና።
            </h1>
            </li>
        </ul>
        <div>
          <hr />
          <ul className='w-full flex flex-col items-center m-2 pb-6 font-teko font-semibold '>

            <h1 className='text-center text-2xl m-4 font-semibold'>
                ሰዓቡና
            </h1>
            <div className='flex sm:flex-row gap-4'>
            <li className='flex'>
              <img className='animate-bounce max-h-8 max-w-8' src={insta} alt="" />
              <h1 className='text-center font-extrabold text-xl mb-4'>
                  @558alex1
              </h1>
            </li>
            <li className='flex'>
              <img className='animate-bounce max-h-8 max-w-8' src={whatsapp} alt="" />
              <h1 className='text-lg font-extrabold'>
                @Alexander BR
              </h1>
            </li>
            </div>
          </ul>
    </div>  
    </div>
    )
}

export default OurService



// welqawi derarat
// feluyen merugen agelglotna nay welqawi derarat merechatatna 
// ne fuluyen bahtawi bealaten medebaten ngdawi akiebatatn, bkeilatat zetedalewe bhetawi agelgloten mechue hawahu
// hji qoxera hazu zeyresae hemotat neketfetru ab gezana!
