import React from 'react'
import Icons from '../constants/icons'
import Images from '../constants/images'
import AnnounceBar from './AnnounceBar'
import HamburgerMenu from './HamburgerMenu'
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <AnnounceBar />
      <nav className="sticky top-0 bg-white z-10 ">
        <ul className="flex justify-between items-center py-5 px-5">
          {/* Left side nav: Desktop logo and nav items / Mobile menu icon */}
          <div className="flex justify-between items-center lg:space-x-8 text-lg font-light">
            {/* Desktop Logo */}
            <li className="hidden lg:block">
              <img className="w-20 h-5" src={Images.logo} alt="logo" />
            </li>
            {/* Mobile Menu Icon */}
            <HamburgerMenu/>
            {/* Desktop Navigation Items */}
            <li className="hidden lg:block">Shop</li>
            <li className="hidden lg:block">Arrivals</li>
            <li className="hidden lg:block">Sales</li>
            <li className="hidden lg:block">Journal</li>
          </div>

          {/* Center area for Mobile Logo */}
          <div className="lg:hidden flex justify-center items-center">
            <li>
              <img className="w-20 h-5" src={Images.logo} alt="logo" />
            </li>
          </div>

          {/* Right side nav: Search and Cart */}
          <div className="flex items-center justify-between w-14 lg:w-32 lg:space-x-8 font-light tracking-wider">
            <li className="flex items-center space-x-5 text-[#5c5c5c]">
              <FaSearch className='lg:h-10' />
              <p className="hidden lg:block">Stores</p>
            </li>
            <li className="flex items-center text-[#5c5c5c]">
              <FaBagShopping className='lg:h-10  ' />
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar