import React from 'react'
import Images from '../../../constants/images'

function Categories() {
  return (
    <div className='px-5'>

      {/* ❗ paragraph for mobile screens ❗ */}

      <div className='block lg:hidden text-xl font-light w-full pt-12 pb-12 text-center '>
        <p>Elevate your lifestyle with a more intelligent, superior wardrobe. 
        Our range is crafted sustainably with longevity in mind.</p>
      </div>


      {/* ❗ paragraph for desktop screen ❗ */}

      <div className=' hidden lg:block text-xl font-light w-full pt-8 pb-10 text-left'>
        <p>Elevate your lifestyle with a more intelligent, superior wardrobe <br /> 
        Our range is crafted sustainably with longevity in mind.</p>
      </div>


      {/* ❗ Section Images ❗ */}

      <div className='flex flex-col lg:grid grid-cols-3 lg:gap-4 space-y-5 lg:space-y-0 justify-between items-center'>
        <img onClick={''} className='w-full' src={Images.newArrivalsMobile} alt="new arrivals" />
        <img onClick={''} className='w-full' src={Images.casualEditMobile} alt="the casual edit" />
        <img onClick={''} className='w-full' src={Images.bestSellersMobile} alt="best sellers" />
      </div>

    </div>
  )
}

export default Categories