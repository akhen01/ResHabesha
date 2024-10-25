import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id='about' className='border-4 border-e-8 shadow relative rounded-lg bg-gray-100 z-30 sm:border-b-2 p-4 m-8'>
        <div className='rounded-t-3xl m-0 lg:mx-12 '>
            
                <h1 className=' text-lg sm:text-xl md:text:text-2xl font-bold text-center font-teko mb-2 p-2'>
                    Welcome to our RESTAURANT. 
                </h1>
                <p className='text-justify font-hind w-full px-3 my-6'>
                    ab maekel lebi calgary terekeb, ne kulu habesha adu zenafeq genet, nefetewti megbi adenaqit zebeletsen, hadish fresh, habtam tehezto qemematen taemetaten hizatelkum enho nekedem teblekum.
                    keshentetatna elameom betebebom deszebel serihom meqeretu zeyresae hemot ketehlefu mesana bekebri nedemekum
                    ne eletawi engale yekun wey ne fuluy agatamitaten xenbelaten gezana leke kem keshenena adesati kemterekbewo tereter yebelnan
                </p>
                <ul className="flex flex-col sm:flex-row text-left my-2 w-full">
            <li className='w-full flex flex-col items-center sm:w-1/3 m-2 sm:border-r-2 border-b-2 sm:border-b-0 pb-6 font-teko font-semibold '>
                <h1 className='text-center text-xl mb-4'>
                    Address
                </h1>
                <h1 className='text-lg'>
                Your comfort and peace of mind are our top priorities.
                </h1>
                <Link to="/all-posts" className='bg-white font-bold text-bgCutsom text-md rounded-xl px-2 shadow-black border-2 border-black text-center mt-4 hover:bg-black'>
                    See Address
                </Link>
            </li>
            <li className='w-full sm:w-1/3 m-2 sm:border-r-2 font-teko font-semibold'>
            <h1 className='text-center text-xl mb-4'>
                    Hours
            </h1>
            <h1 className='text-lg'>
                Every listing is verified for authenticity, providing you with a seamless and stress-free rental experience.
            </h1>
            </li>
            <li className='w-full sm:w-1/3 m-2 font-teko font-semibold'>
            <h1 className='text-center text-xl mb-4'>
                    Contact
            </h1>
            <h1 className='text-lg'>
                Every listing is verified for authenticity, providing you with a seamless and stress-free rental experience.
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
// ን ፉሉይ ኣጋጣሚታት ንምእንጋድ
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