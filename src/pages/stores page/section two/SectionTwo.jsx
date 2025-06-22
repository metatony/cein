import React from 'react'
import Images from '../../../constants/images'

function SectionTwo() {
  return (
    <section className="lg:container mx-auto px-5 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-light">
        {/* Text Section */}
        <div className="space-y-5">
          <p className="text-2xl tracking-wider lg:text-3xl font-medium">Stores</p>
          <p className="text-xl tracking-wide">
            Experience the embodiment of our "Less, but better" philosophy at our physical stores,
            providing an intimate setting to explore our dedication to timeless designs, heritage craftsmanship, and sustainable practices.
            <br /><br />
            Enjoy the convenience of in-store pickup, same-day delivery, and personalized shopping appointments,
            available both in-store and virtually.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-5 md:mt-0">
          {/* Desktop view */}
          <img
            className="hidden md:block"
            src={Images.storeImage1}
            alt="store image"
          />
          {/* Mobile view */}
          <img
            className="block md:hidden w-full"
            src={Images.storeImage1Mobile}
            alt="store image"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionTwo