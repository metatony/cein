import React from 'react'
import Images from '../../../constants/images'

function InstaSection() {
  return (
    <div className='flex flex-col mt-5'>


        <div className='text-xl font-light text-center px-5 pt-[30px] mb-5'>
            <p className='mb-7 tracking-wider'>Shop Instagram</p>
        </div> 


        <div className='lg:hidden flex space-y-5 px-5 w-full justify-between'>
            <img className=' h-[101px] w-[101px]' src={Images.instaPhoto1} alt="insta image 1" />
            <img className=' h-[101px] w-[101px]' src={Images.instaPhoto2} alt="insta image 2" />
            <img className=' h-[101px] w-[101px]' src={Images.instaPhoto3} alt="insta image 3" />
        </div>

        <div className='hidden lg:grid grid-cols-5 gap-5 px-5 mb-5 justify-between '>
            <img className='w-full' src={Images.instaPhoto1} alt="insta image 1" />
            <img className='w-full' src={Images.instaPhoto2} alt="insta image 2" />
            <img className='w-full' src={Images.instaPhoto3} alt="insta image 3" />
            <img className='w-full' src={Images.instaPhoto4} alt="insta image 2" />
            <img className='w-full' src={Images.instaPhoto5} alt="insta image 3" />
        </div>

    </div>
  )
}

export default InstaSection