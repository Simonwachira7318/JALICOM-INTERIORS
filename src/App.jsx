// import { useState } from "react";
import "./App.css";
import logo from "./images/int-logo.png";
import profile from "./images/user.png"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className='fixed w-full bg-teal-500 md:flex z-99 md:bg-slate-500 sm:bg-slate-600'>
         <div className='flex justify-around w-full p-5 md:p-5 sm:p-4 sm:w-full md:w-full'>
           <div className='flex items-center cursor-pointer'>
           <div className="dropdown sm:hidden md:hidden">
              <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105"> Home</li>
              <li tabIndex={0} className="relative">
                <div className="group">
                  <span className="transition-transform duration-300 transform cursor-pointer group-hover:text-amber-900 group-hover:border-b border-amber-950 group-hover:scale-105">
                    About_Us
                  </span>
                  <ul className="absolute hidden p-2 group-hover:block md:bg-slate-500 sm:bg-slate-600">
                    <li><a className="hover:text-amber-900">Vision</a></li>
                    <li><a className="hover:text-amber-900">Mission</a></li>
                    <li><a className="hover:text-amber-900">Others</a></li>
                  </ul>
                </div>
              </li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Services</li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Team</li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Contact_Us</li>
              </ul>
            </div>
            <img src={logo} alt="logo" className="object-contain h-8 mr-1 md:h-16 sm:h-16 md:w-48 sm:w-32 w-28" />
             <h1 className="text-sm font-bold text-white md:text-2xl sm:text-xl">JALICOM INTERIORS</h1>
          </div>
          <div className="flex items-center">
            <ul className='hidden space-x-4 text-white cursor-pointer justify-round sm:flex md:flex md:font-bold sm:semi-bold'>
              <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105"> Home</li>
              <li tabIndex={0} className="relative">
                <div className="group">
                  <span className="transition-transform duration-300 transform cursor-pointer group-hover:text-amber-900 group-hover:border-b border-amber-950 group-hover:scale-105">
                    About_Us
                  </span>
                  <ul className="absolute hidden p-2 group-hover:block md:bg-slate-500 sm:bg-slate-600">
                    <li><a className="hover:text-amber-900">Vision</a></li>
                    <li><a className="hover:text-amber-900">Mission</a></li>
                    <li><a className="hover:text-amber-900">Others</a></li>
                  </ul>
                </div>
              </li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Services</li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Team</li>
               <li className="transition-transform duration-300 transform hover:text-amber-900 hover:border-b border-amber-950 hover:scale-105">Contact_Us</li>
             </ul>
             <img src={profile} alt="profile" className="object-contain w-40 h-8 mr-0 transition-transform duration-300 transform cursor-pointer md:mr-2 sm:mr-1 md:w-48 md:h-16 hover:scale-105" />
          </div>
         </div>
       </div>

       <div>
         {/* <div className="flex items-center justify-center ">
            {sliders.map((slide, index) => (
              <div key={index} className={`w-full ${index === 0 ? 'block' : 'hidden'}`}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="object-cover w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="p-4 text-center text-black bg-teal-200 opacity-100 cursor-pointer rounded-xl">
                  <h1 className="mb-4 text-5xl font-bold hover:text-red-900">{slide.title}</h1>
                  <p className="text-xl font-bold">{slide.slogan}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
       </div>
    </>
  )
}

export default App
