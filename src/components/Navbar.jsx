import React from 'react'
import Icons from '../constants/icons'
import Images from '../constants/images'
import AnnounceBar from './AnnounceBar'

function Navbar() {
  return (
    <>
    <AnnounceBar />
    

    <ul className='flex justify-between items-center py-5 px-5 sticky top-0 bg-white z-1 '>

        <div className='flex justify-between items-center font-light lg:space-x-8 lg:text-lg'>

            {/* ❗ desktop logo ❗ */}

            <div className='hidden lg:block '>
                <li> <img className='w-20 h-5 ' src={Images.logo} alt="logo" /></li>
            </div>
            

            {/* ❗ 1st is menu icon, others are desktop nav list ❗ */}

            <li className='block w-20 lg:hidden'> <img src={Icons.menu} alt="menu icon" /></li>

            <li className='hidden lg:block '>Shop</li>
            <li className='hidden lg:block '>Arrivals</li>
            <li className='hidden lg:block '>Sales</li>
            <li className='hidden lg:block '>Journal</li>
        </div>


     {/* mobile logo */}
        <div className='lg:hidden'>
            <li> <img className='w-20 h-5' src={Images.logo} alt="logo" /></li>

        </div>


        {/* ❗ Right side nav list ❗ */}

        <div className='flex justify-between items-center w-14 lg:w-32 lg:space-x-8 font-light tracking-wider'>

            <li className='flex justify-between items-center space-x-5 '> 
                <img className='h-4 w-4' src={Icons.searchIcon}  alt="search icon" />
                <p className='hidden lg:block '>Stores</p>
            </li>


            <li onClick={''} className='flex items-center text-[#5c5c5c]'> 
                <img className='h-4 w-4 ' src={Icons.cartIcon}  alt="bag icon" />
            </li>  
        </div>
        
    </ul>

    </>
  )
}

export default Navbar