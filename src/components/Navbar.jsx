import React from 'react'
import Icons from '../constants/icons'
import Images from '../constants/images'
import AnnounceBar from './AnnounceBar'

function Navbar() {
  return (
    <>
    <AnnounceBar />
    

    <ul className='flex justify-between items-center py-5 px-2'>

        <div className='w-20'>
            <li> <img src={Icons.menu} alt="menu icon" /></li>
        </div>
        

        
            <li> <img className='w-20 h-5' src={Images.logo} alt="menu icon" /></li>
    
        
        

        <div className='flex justify-between items-center w-25'>
            <li> 
                <img className='h-3 w-3' src={Icons.searchIcon}  alt="search icon" />
            </li>

            <li className='flex items-center text-[#5c5c5c] text-sm'> 
                <img className='h-3 w-3 mr-1.5' src={Icons.favoriteIcon}  alt="favorite icon" />
                0
            </li>

            <li className='flex items-center text-[#5c5c5c] text-sm'> 
                <img className='h-3 w-3 mr-1.5' src={Icons.cartIcon}  alt="bag icon" />
                2
            </li>  
        </div>
        
    </ul>

    </>
  )
}

export default Navbar