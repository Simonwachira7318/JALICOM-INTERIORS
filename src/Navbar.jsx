import React from 'react'
import logo from "./images/int-logo.png";
import profile from "./images/user.png"

function Navbar() {
  return (

    
    <div className='fixed w-full bg-teal-500 z-99 md:bg-slate-500 sm:bg-slate-600'>
        <div className='flex justify-around w-full p-5 md:p-5 sm:p-4 sm:w-full md:w-full'>
          <div className='flex items-center cursor-pointer'>
            <img src={logo} alt="logo" className="object-contain h-8 mr-1 md:h-16 sm:h-16 md:w-48 sm:w-32 w-28" />
            <h1 className="text-sm font-bold text-white md:text-2xl sm:text-xl">JALICOM INTERIORS</h1>
          </div>
         <div className="flex items-center">
            <ul className='hidden space-x-4 text-white cursor-pointer justify-round sm:flex md:flex md:font-bold sm:semi-bold'>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Home</li>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">About_Us</li>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Services</li>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Team</li>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Contact_Us</li>
            </ul>
            <img src={profile} alt="profile" className="object-contain w-40 h-8 mr-0 transition-transform duration-300 transform cursor-pointer md:mr-2 sm:mr-1 md:w-48 md:h-16 hover:scale-105" />
         </div>
        </div>
      </div>
  )
}

export default Navbar;