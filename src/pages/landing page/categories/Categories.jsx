import React from 'react'
import Images from '../../../constants/images'

function Categories() {
  return (
    <div className=''>

      <div className='text-2xl font-light w-[325px] px-5 pt-8 pb-12 '>
        <p>Elevate your lifestyle with a more intelligent, superior wardrobe. 
        Our range is crafted sustainably with longevity in mind.</p>
      </div>


      <div className='flex flex-col space-y-5 px-5 items-center'>
        <a href="#"><img className='' src={Images.newArrivals} alt="new arrivals" /></a>
        <a href="#"><img className='' src={Images.casualEdit} alt="the casual edit" /></a>
        <a href="#"><img className=''  src={Images.bestSellers} alt="best sellers" /></a>
      </div>


    </div>
  )
}

export default Categories