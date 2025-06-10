import React from 'react'
import Images from '../../../constants/images'

function Categories() {
  return (
    <div className=''>

      <div className='text-xl font-light w-full px-5 pt-8 pb-12 text-center '>
        <p>Elevate your lifestyle with a more intelligent, superior wardrobe. 
        Our range is crafted sustainably with longevity in mind.</p>
      </div>


      <div className='flex flex-col space-y-5 px-5 items-center'>
        <img onClick={''} className='' src={Images.newArrivalsMobile} alt="new arrivals" />
        <img onClick={''} className='' src={Images.casualEditMobile} alt="the casual edit" />
        <img onClick={''} className=''  src={Images.bestSellersMobile} alt="best sellers" />
      </div>


    </div>
  )
}

export default Categories