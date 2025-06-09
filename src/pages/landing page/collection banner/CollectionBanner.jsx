import React from 'react'
import Images from '../../../constants/images'

function CollectionBanner() {
  return (
    <div className='flex-flex-col mt-16'>


        <div className='flex flex-col space-y-5 px-5 items-center'>
            <a href="#"><img className='' src={Images.collectionBanner1} alt="new arrivals" /></a>
            <a href="#"><img className='' src={Images.collectionBanner2} alt="the casual edit" /></a>

        </div>

        <div className='flex flex-col justify-center items-center text-center mt-5 px-5 h-screen'>
            <p className=' text-2xl font-light mb-7'>The Art of Fewer, <br /> Better Choices</p>

            <p className='font-light w-[307px]'>Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.</p>
        </div>


    </div>
  )
}

export default CollectionBanner