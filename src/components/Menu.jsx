import React,{useRef, useState, useEffect} from 'react'
import ades from "../assets/menu/menu/ades.jpg"
import alecha from "../assets/menu/menu/alecha.jpg"
import daboqolo from "../assets/menu/menu/daboqolo.jpg"
import gored_gored from "../assets/menu/menu/gored_gored.jpg"
import hembasha from "../assets/menu/menu/hembasha.jpg"
import kitfo from "../assets/menu/menu/kitfo.webp"
import mies from "../assets/menu/menu/mies.jpg"
import rice from "../assets/menu/menu/rice.jpg"
import salad from "../assets/menu/menu/salad.jpg"
import sewa from "../assets/menu/menu/sewa.jpg"
import shiro from "../assets/menu/menu/shiro.jpg"
import tea from "../assets/menu/menu/tea.jpg"
import Tibs from "../assets/menu/menu/Tibs.jpg"
import xebhiderho from "../assets/menu/menu/xebhi derho.jpg"
import { initializeVisibilityObserver } from './visiblityAnim/initializeVisibilityObserver'

function Menu() {
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

  const Items = [
    {
      cata: "ናይ ስዕረት (Non Vegeterian)",
      item: "ጸብሒ ደርሆ (Tsebhi Derho)",
      ingre: "ደርሆ (Chicken), አንቋቕሖ (Eggs), በርበረ (Habeshan Chili spice), እና ሽንጉርት (Onions)",
      img: xebhiderho
    },
    {
      cata: "ናይ ስዕረት (Non Vegeterian)",
      item: "ሽሮ (Shiro)",
      ingre: "ዓተር (Chickpea stew) ሽጉርቲ (onions), ሽጉርቲ ጻዕዳ(garlic), በርበረ(berbere spice).",
      img: shiro
    },
    {
      cata: "ናይ ስዕረት (Non Vegeterian)",
      item: "ኪትፎ (Kitfo)",
      ingre: "ስጋ (Beef), ሚጥሚጣ (Mitmita), ጠስሚ (Butter)",
      img: kitfo
    },
    {
      cata: "ናይ ስዕረት (Non Vegeterian)",
      item: "ጎረድ ጎረድ (Gored Gored)",
      ingre: "ስጋ (Beef), ሚጥሚጣ (Mitmita), ጠስሚ (Butter)",
      img: gored_gored
    },
    {
      cata: "ናይ ስዕረት (Non Vegeterian)",
      item: "ጥብሲ(Tibs)",
      ingre: "ስጋ ብዕራይ ወይ በጊዕ (Sautéed beef or lamb) ሽጉርቲ (onions), ሽጉርቲ ጻዕዳ(garlic), ቀመማትን(spices).",
      img: Tibs
    },
    {
      cata: "ናይ ጾም (Vegetarian Options)",
      item: "ጸብሒ ዓደስ (Tsebhi Misir)",
      ingre: "ዝተቓመመ ብርስን (Spicy lentil) በርበረ (berbere spice), ሽጉርቲ(onions), ሽጉርቲ ጻዕዳ(garlic), ጅንጅብል(ginger)",
      img: ades
    },
    {
      cata: "ናይ ጾም (Vegetarian Options)",
      item: "ኣልጫ(Alicha)",
      ingre: "kawlo(cabage), ሽጉርቲ(onion), ኮሚደረ(tomato)",
      img: alecha
    },
    {
      cata: "ተወሳኺ (Sides)",
      item: "Rice ሩዝ ",
      ingre: "ንጹህ ወይ ዘተቓመመ ሩዝ (Plain or seasoned rice)",
      img: rice
    },
    {
      cata: "ተወሳኺ (Sides)",
      item: "ሳላታ (Salata)",
      ingre: "ሰላጣ ምስ ኮሚደረን ሽጉርቲን(Salad Tomatoes and onions)",
      img: salad
    },
    {
      cata: "ዝስተ(Drinks)",
      item: "ስዋ(sewa)",
      ingre: "ኣልኮላዊ መስተ(alcholic drink)",
      img: sewa
    },
    {
      cata: "ዝስተ(Drinks)",
      item: "ሜስ",
      ingre: "ኣልኮላዊ መስተ(alcholic drink)",
      img: mies
    },
    {
      cata: "ዝስተ(Drinks)",
      item: "ሻሂ(Tea)",
      ingre: "",
      img: tea
    },
    {
      cata: "ድሕሪ መግቢ (Desserts)",
      item: "ሕምባሻ (Himbasha)",
      ingre: "ፊኖ (Flour), መዓር(Honey)",
      img: hembasha
    },
    {
      cata: "ድሕሪ መግቢ (Desserts)",
      item: "ዳቦ ቖሎ (Dabo Kolo)",
      ingre: "ፊኖ(Flour)",
      img: daboqolo
    },
  ]

  return (
    <div className="bg-bgCutsom w-full px-1 py-24">
      <div className='bg-gray-100 rounded-t-3xl m-0 lg:mx-6 border-4 border-e-8'>
        <h1 className=' bg-gray-200 text-2xl md:text-2xl font-bold text-center font-teko m-4 p-2'>
          ሓዲሽ(Fresh)
        </h1>
        <h1 className=' text-xl md:text:text-2xl font-extrabold text-center font-teko mb-2 p-2'>
          ናይ ስዕረት (Non Vegeterian)
        </h1>
        <ul className="flex flex-wrap text-center my-2 justify-evenly rounded-xl m-4  ">
        {
          Items.map((item, index) => item.cata !== "ናይ ስዕረት (Non Vegeterian)" ? null : (
            <li
            key={item.item}
            ref={(el) => (elementRefs.current[index] = el)}
            className={`bg-gray-300 flex flex-wrap items-center sm:w-1/4 pb-6 font-teko justify-center font-semibold m-2 mb-12 p-2 rounded-lg border-8 border-grey-150 hover:scale-105
              ${visibleElements.has(elementRefs.current[index]) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 p-4 border`}
            >
              <h1 className='text-center text-xl font-bold mb-4'>
                  {item.item}
                </h1>
                <h1 className='text-lg'>
                  {item.ingre}
                </h1>
                <div className='w-full h-80 md:h-48 rounded-xl p-1 flex justify-center items-center'>
                  
                <img className="rounded-xl  md:max-w-48 md:max-h-48 max-w-80 max-h-80 mb-2" src={item.img} alt={item.item} />
                </div>
              </li>
          ))
        }
        </ul>
        <hr />

        <h1 className=' text-xl md:text:text-2xl font-extrabold text-center font-teko m-2 p-2'>
          ናይ ጾም (Vegetarian Options)
        </h1>
        <ul className="flex flex-wrap text-center my-2 justify-evenly rounded-xl m-4  ">
        {
          Items.map((item, index) => item.cata !== "ናይ ጾም (Vegetarian Options)" ? null : (
            <li
            key={item.item}
            ref={(el) => (elementRefs.current[index] = el)}
            className={`bg-gray-300 flex flex-wrap items-center sm:w-1/4 pb-6 font-teko justify-center font-semibold m-2 mb-12 p-2 rounded-lg border-8 border-grey-150 hover:scale-105
              ${visibleElements.has(elementRefs.current[index]) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 p-4 border`}
            >
            <h1 className='text-center text-xl font-bold mb-4'>
                  {item.item}
                </h1>
                <h1 className='text-lg'>
                  {item.ingre}
                </h1>
                <div className='w-full h-80 md:h-48 rounded-xl p-1 flex justify-center items-center m-4'>
                  
                <img className="rounded-xl  md:max-w-48 md:max-h-48 max-w-80 max-h-80 mb-2" src={item.img} alt={item.item} />
                </div>
              </li>
          ))
        }
        </ul>


        <hr />
       
        <h1 className=' text-xl md:text:text-2xl font-extrabold text-center font-teko m-2 p-2'>
          ተወሳኺ (Sides)
        </h1>
        <ul className="flex flex-wrap text-center my-2 justify-evenly rounded-xl m-4  ">
        {
          Items.map((item, index) => item.cata !== "ተወሳኺ (Sides)" ? null : (
            <li
            key={item.item}
            ref={(el) => (elementRefs.current[index] = el)}
            className={`bg-gray-300 flex flex-wrap items-center sm:w-1/4 pb-6 font-teko justify-center font-semibold m-2 mb-12 p-2 rounded-lg border-8 border-grey-150 hover:scale-105
              ${visibleElements.has(elementRefs.current[index]) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 p-4 border`}
            >  
                <h1 className='text-center text-xl font-bold mb-4'>
                  {item.item}
                </h1>
                <h1 className='text-lg'>
                  {item.ingre}
                </h1>
                <div className='w-full h-80 md:h-48 rounded-xl p-1 flex justify-center items-center m-4'>
                  
                <img className="rounded-xl  md:max-w-48 md:max-h-48 max-w-80 max-h-80 mb-2" src={item.img} alt={item.item} />
                </div>
              </li>
          ))
        }
        </ul>

        <hr />

        <h1 className=' text-xl md:text:text-2xl font-extrabold text-center font-teko m-2 p-2'>
        ዝስተ(Drinks)
        </h1>
        <ul className="flex flex-wrap text-center my-2 justify-evenly rounded-xl m-4  ">
        {
          Items.map((item, index) => item.cata !== "ዝስተ(Drinks)" ? null : (
            <li
            key={item.item}
            ref={(el) => (elementRefs.current[index] = el)}
            className={`bg-gray-300 flex flex-col sm:flex-wrap items-center sm:w-1/4 pb-6 font-teko justify-center font-semibold m-2 mb-12 p-2 rounded-lg border-8 border-grey-150 hover:scale-105
              ${visibleElements.has(elementRefs.current[index]) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 p-4 border`}
            >  
                <h1 className='text-center text-xl font-bold mb-4'>
                  {item.item}
                </h1>
                <h1 className='text-lg'>
                  {item.ingre}
                </h1>
                <div className='w-full h-80 md:h-48 rounded-xl p-1 flex justify-center items-center m-4'>
                  
                <img className="rounded-xl  md:max-w-48 md:max-h-48 max-w-80 max-h-80 mb-2" src={item.img} alt={item.item} />
                </div>
              </li>
          ))
        }
        </ul>

        

        <hr />
        
        <h1 className=' text-xl md:text:text-2xl font-extrabold text-center font-teko m-2 p-2'>
          ድሕሪ መግቢ (Desserts)
        </h1>
        <ul className="flex flex-wrap text-center my-2 justify-evenly rounded-xl m-4  ">
        {
          Items.map((item, index) => item.cata !== "ድሕሪ መግቢ (Desserts)" ? null : (
            <li
            key={item.item}
            ref={(el) => (elementRefs.current[index] = el)}
            className={`bg-gray-300 flex flex-col sm:flex-wrap items-center sm:w-1/4 pb-6 font-teko justify-center font-semibold m-2 mb-12 p-2 rounded-lg border-8 border-grey-150 hover:scale-105
              ${visibleElements.has(elementRefs.current[index]) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 p-4 border`}
            >
            <h1 className='text-center text-xl font-bold mb-4'>
                  {item.item}
                </h1>
                <h1 className='text-lg'>
                  {item.ingre}
                </h1>
                <div className='w-full h-80 md:h-48 rounded-xl p-1 flex justify-center items-center m-4'>
                  
                <img className="rounded-xl  md:max-w-48 md:max-h-48 max-w-80 max-h-80 mb-2" src={item.img} alt={item.item} />
                </div>
              </li>
          ))
        }
        </ul>

        <hr />
          
      </div>
    </div>
  )
}

export default Menu