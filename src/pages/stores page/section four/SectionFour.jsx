import React from 'react'
import Images from '../../../constants/images'

function SectionFour() {
  return (
    <div className="lg:container mx-auto px-5 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-light">
        {/* Image Section */}
        <div className="mt-5 md:mt-0">
          {/* Desktop View */}
          <img
            className="hidden md:block"
            src={Images .storeImage2}
            alt="Store"
          />
          {/* Mobile View */}
          <img
            className="block md:hidden w-full"
            src={Images.storeImage2Mobile}
            alt="Store"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5 mt-5 mb-10">
          <p className="text-2xl lg:text-3xl tracking-wider font-medium">
            Book an Appointment
          </p>
          <p className="text-xl lg:text-2xl tracking-wide">
            Experience personalized shopping services in a welcoming and inviting atmosphere, catering to your individual wardrobe and seasonal gifting requirements, available both in-store and virtually.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionFour