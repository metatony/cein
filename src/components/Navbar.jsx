import React from 'react'
import Icons from '../constants/icons'
import Images from '../constants/images'
import AnnounceBar from './AnnounceBar'

function Navbar() {
  return (
    <>
    <AnnounceBar />
    

    <ul className='flex justify-between items-center py-5 px-5 sticky top-0 bg-white'>

        <div onClick={''} className='w-20'>
            <li> <img src={Icons.menu} alt="menu icon" /></li>
        </div>

     
        <div>
            <li> <img className='w-20 h-5' src={Images.logo} alt="menu icon" /></li>
        </div>

        
    
        <div className='flex justify-between items-center w-14 '>
            <li> 
                <img className='h-4 w-4' src={Icons.searchIcon}  alt="search icon" />
            </li>

            <li onClick={''} className='flex items-center text-[#5c5c5c] text-sm'> 
                <img className='h-4 w-4 ' src={Icons.cartIcon}  alt="bag icon" />
                
            </li>  
        </div>
        
    </ul>

    </>
  )
}

export default Navbar