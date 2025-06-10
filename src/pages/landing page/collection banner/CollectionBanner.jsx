import React from 'react'
import Images from '../../../constants/images'

function CollectionBanner() {
  return (

    <>
       <div className='flex flex-col mt-16'>


          <div className='flex flex-col space-y-5 px-5'>
              <img onClick={''} className='' src={Images.collectionBanner1} alt="new arrivals" />
              <img onClick={''} className='' src={Images.collectionBanner2} alt="the casual edit" />

          </div>

          <div className='flex text-2xl font-light flex-col justify-center items-center text-center mt-5 px-5  bg-[#f5f4f4] pt-[60px] '>
              <p className='mb-7 tracking-wider font-medium'>The Art of Fewer, <br /> Better Choices</p>

              <p className='text-xl  font-light w-full mb-[150px]'>Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.</p>
          </div> 


        </div>


    </>
 

  
  )
}

export default CollectionBanner