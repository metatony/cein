import React from 'react'
import storeImageGrid from '../../../constants/storeGridList'

function SectionThree() {
  return (
    <div className="lg:container mx-auto px-5 mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
      {storeImageGrid.map((item, index) => (
        <div key={index} className="font-light tracking-wide">
          <img
            className="w-full"
            src={item.StoreImageGrid}
            alt="store image"
          />
          <p className="mt-2 text-xl">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionThree