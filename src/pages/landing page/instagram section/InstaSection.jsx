import React from 'react'
import Images from '../../../constants/images'

function InstaSection() {
  return (
    <div className='flex flex-col mt-5 lg:container mx-auto'>


        <div className='text-xl font-light text-center px-5 pt-[30px] mb-5'>
            <p className='mb-7 tracking-wider'>Shop Instagram</p>
        </div> 

        {/* Mobile View */}
        <div className="md:hidden flex space-x-5 px-5 justify-between mb-5">
            <img
                className="h-[101px] w-[101px]"
                src={Images.instaPhoto1}
                alt="Instagram image 1"
            />
            <img
                className="h-[101px] w-[101px]"
                src={Images.instaPhoto2}
                alt="Instagram image 2"
            />
            <img
                className="h-[101px] w-[101px]"
                src={Images.instaPhoto3}
                alt="Instagram image 3"
            />
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-5 gap-5 px-5 mb-5">
            <img
                className="w-full hover:grayscale"
                src={Images.instaPhoto1}
                alt="Instagram image 1"
            />
            <img
                className="w-full hover:grayscale"
                src={Images.instaPhoto2}
                alt="Instagram image 2"
            />
            <img
                className="w-full hover:grayscale"
                src={Images.instaPhoto3}
                alt="Instagram image 3"
            />
            <img
                className="w-full hover:grayscale"
                src={Images.instaPhoto4}
                alt="Instagram image 4"
            />
            <img
                className="w-full hover:grayscale"
                src={Images.instaPhoto5}
                alt="Instagram image 5"
            />
        </div>

    </div>
  )
}

export default InstaSection