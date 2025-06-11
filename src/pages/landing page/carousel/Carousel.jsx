import React from 'react'
import Images from '../../../constants/images'
import CarouselSlider from '../../../components/CarouselSlider'

function Carousel() {
  // Options for the carousel slider
  const OPTIONS = { align: 'start', containScroll: true }
  const SLIDE_COUNT = 5

  return (
    <div className="">
      {/* Section Heading */}
      <div className="text-xl font-light px-5 pt-12 pb-12 text-center w-full lg:text-left">
        <p className="py-2 tracking-wider">What to Wear Now</p>
      </div>

      {/* Carousel Slider */}
      <CarouselSlider options={OPTIONS} />
    </div>
  )
}

export default Carousel