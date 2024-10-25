import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Menu from "../../assets/menu-bar-2.png"
import Logo from "../../assets/TALogo.jpg"
function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        {
            name: "Itro",
            slug: "/#intro",
        },
        {
            name: "About",
            slug: "/#about",
        },
        {
            name: "Our Service",
            slug: "/#ourService",
        },
        
        {
            name: "Menu",
            slug: "/menu",
        },
        {
            name: "Gallery",
            slug: "/gallery",
        },
        
    ]
  return (
    <header className='fixed top-0 w-full bg-gray-50 border-bgCutsom border-y-2 z-50'>
        
            <nav className='flex py-3'>
                <div className='mr-4'>
                  <img className="hidden sm:block w-12 h-12 ml-2" src={Logo} alt="Logo" />
                </div>
                <ul className='hidden ml-auto sm:flex space-x-8'>
                    {
                        navItems.map((navItem) => (
                                <li key={navItem.name}>
                                  
                                  <NavLink
                                  className="inline-block px-6 py-2 relative text-gray-600 font-semibold text-lg sm:hover:text-gray-900 transition duration-300 group"
                                  to={navItem.slug}>
                                    {navItem.name}
                                </NavLink>
                               
                                </li>
                            
                        ))
                    }
                </ul>
                <ul className='flex w-full items-center justify-between sm:hidden'>
                    <li>
                      <img className="w-12 h-12" src={Logo} alt="" />
                    </li>
                    <li> 
                      <button onClick={()=>setIsOpen(true)}>
                      <img className="bg-white rounded-lg border border-e-8 shadow w-8 h-8 mr-3" src={Menu} alt="" />
                      </button>
                      
                    </li>
                </ul>
                {isOpen && (
              <div className="fixed inset-0 bg-bgCutsom bg-opacity-90 flex flex-col items-center justify-center z-40">
                <button onClick={()=>setIsOpen(false)} className='text-black text-2xl absolute right-5 top-5'>X</button>
                {
                        navItems.map((navItem) => (
                                <li className="list-none" key={navItem.name}>
                                  <button onClick={()=>setIsOpen(false)}>
                                    <NavLink
                                      className="inline-block px-6 py-2 relative text-gray-600 font-semibold text-lg sm:hover:text-gray-900 transition duration-300 group"
                                      to={navItem.slug}>
                                        {navItem.name}
                                    </NavLink>
                                  </button>
                                </li>
                            
                        ))
                    }

              </div>
      )}
            </nav>
    </header>
  )
}

export default Header

