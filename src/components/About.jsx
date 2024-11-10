import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id='about' className='border-4 border-e-8 shadow relative rounded-lg bg-gray-100 z-30 sm:border-b-2 p-4 my-12 mx-2 sm:m-8'>
        <div className='rounded-t-3xl m-0 lg:mx-12 '>
            
                <h1 className=' text-3xl sm:text-xl md:text-3xl font-bold text-center font-teko mb-2 p-2'>
                    ጆባ ንገዛና። 
                </h1>
                <p className='text-justify font-semibold text-lg font-hind w-full px-3 my-6 ease-in-out delay-50 duration-150 cursor-pointer hover:text-xl sm:hover:text-2xl'>
                    ኣብ ማእከል ልቢ ካልጋሪ ትረከብ ን ኹሉ ሓበሻ ዓዱ ዝናፍቕ ንፈተውቲ መግቢ ኣደናቒን ዝበለጸን፣ ሓዲሽ ፍረሽ፣ ሃብታም ብትሕዝቶ ቀመማትን ጣዕምታትን ሒዛትልኩም አንሆ ንቀደም ትብለኩም ገዛና።
                    ከሸንትታትና ዕላምኦም ብጥበቦም ደስዘብል ሰሪሖም መቐረቱ ዘይርሳዕ ህሞት ከተሕልፉ መሳና በኽብሪ ንዕድመኩም
                    ን ዕለታዊ አንጋለ የኩን ን ፍሉይ ኣገታሚታትን ጽንብላትን ገዛና ልክዕ ከም መግብታትና ኣደሳቲ ከምትረኽብዎ ጥርጥር የብልናን።
                    
                </p>
                <ul className="flex flex-col sm:flex-row text-left my-2 w-full">
            <li className='w-full flex flex-col items-center sm:w-1/3 m-2 sm:border-r-2 border-b-2 sm:border-b-0 pb-6 font-teko font-semibold '>
                <h1 className='text-center text-xl mb-4'>
                    ኣድራሻ
                </h1>
                <h1 className='text-lg'>
                000 street AB Calgary
                </h1>
                <Link to="/all-posts" className='bg-white font-bold text-bgCutsom text-md rounded-xl px-2 shadow-black border-2 border-black text-center mt-4 hover:bg-black'>
                ኣድራሻና
                </Link>
            </li>
            <li className='w-full flex flex-col items-center sm:w-1/3 m-2 sm:border-r-2 border-b-2 sm:border-b-0 pb-6 font-teko font-semibold '>
            <h1 className='text-center text-xl mb-4'>
                    ሰዓታትና
            </h1>
            <h1 className='text-lg'>
                24 ሰዓታት ኣብ መዓልቲ <br /> 7 መዓልታት ኣብ ሰሙን
            </h1>
            </li>
            <li className='w-full flex flex-col items-center sm:w-1/3 m-2 sm:border-r-2 border-b-2 sm:border-b-0 pb-6 font-teko font-semibold '>
            <h1 className='text-center text-xl mb-4'>
                    መራከኸቢታትና(ኢመይል)
            </h1>
            <h1 className='text-lg'>
                Gmail: brhanealexander2@gmail.com
            </h1>
            </li>
        </ul>
        </div>
                
            </div>
  )
}

export default About

// Our Services
// ንህቦ ኣገልግሎት
// ኣብ ውሽጢ መግቢ፥ ደስ ዝብል ዓዳሚ ሃዋህው። ምቹእ ንናይ ፍቁራት ቆጸራ፣ ናይ ስድራ ምትእኽኻብን፣ ካልእን።
// ኣብ ዝተኣዘዞ ምብጻሕን፥ ጥዑም ምግብና ደሊኩም ገን ካብ ገዛ ክትወጹ ኣይደለኩምን? መግቢና ኣብ ዘኣዘዝኩሞ ወላ ኣብ መዉቕ ገዛኩም ኣብ ሓጺር ግዜ ከነብጽሓልኩም ድሉዋት ኢና።
// ን ፉሉይ ኣጋጣሚታት ንምእንጋድ፥ ንፉቑራት ዝኸወን ብሑት ሃዋሁ፣ ጽንብል ዕለተ ልደት፣ ሕጸ፡ መርዓን፥ ካልኦትን ኣጋጣሚታት ክነአንግደኩም ድሉዋት ኣለና።
// Dine-In Experience: Enjoy a cozy and inviting atmosphere where every meal feels special. Perfect for date nights, family gatherings, and everything in between.

// Takeout & Delivery: Craving our flavors but prefer to stay in? We offer convenient takeout and delivery options so you can savor our dishes from the comfort of your home.

// Catering: Let us bring the feast to your next event. Our catering service is perfect for weddings, corporate events, and private parties, providing a bespoke dining experience tailored to your needs.

// Private Dining: Looking for a more intimate setting? Our private dining rooms offer the perfect space for exclusive gatherings, complete with personalized service and a curated menu.

// Our Perks
// Fresh Ingredients: We source the finest ingredients from local farms and markets, ensuring every dish is fresh and flavorful.

// Seasonal Menu: Our menu changes with the seasons, bringing you the best of what nature has to offer at any given time.

// Award-Winning Chefs: Our team of chefs are not only skilled but also passionate about food, earning accolades for their creativity and culinary expertise.

// Loyalty Program: Our way of saying thank you. Join our loyalty program and enjoy exclusive offers, discounts, and early access to special events.

// Live Entertainment: Enjoy live music performances every weekend, adding an extra layer of enjoyment to your dining experience.