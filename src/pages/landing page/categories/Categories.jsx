import React from 'react'
import Images from '../../../constants/images'

function Categories() {
  return (
    <div className="px-5 lg:container mx-auto">
      
      {/* Mobile Paragraph */}
      <div className="text-xl font-light w-full pt-12 md:pt-8 md:pb-10 text-left pb-12 ">
        <p>
          Elevate your lifestyle with a more intelligent, superior wardrobe. <br className='hidden md:block'/>
          Our range is crafted sustainably with longevity in mind.
        </p>
      </div>
      
      
      {/* Section Images */}
      <div className="flex flex-col md:grid grid-cols-3 md:gap-4 space-y-5 md:space-y-0 justify-between items-center">
        <img className="w-full" src={Images.newArrivalsMobile} alt="new arrivals" />
        <img className="w-full" src={Images.casualEditMobile} alt="the casual edit" />
        <img className="w-full" src={Images.bestSellersMobile} alt="best sellers" />
      </div>
      
    </div>
  )
}

export default Categories