import React from 'react'
import CarouselSlider from '../../../components/CarouselSlider'

function Carousel() {
  const OPTIONS = { align: 'start', containScroll: true }
  const SLIDE_COUNT = 5

  return (
    <div className=" lg:container mx-auto">
      {/* Section Heading */}
      <div className="text-xl font-light px-5 pt-12 pb-12 w-full text-left">
        <p className="py-2 tracking-wider">What to Wear Now</p>
      </div>

      {/* Carousel Slider */}
      <CarouselSlider options={OPTIONS} />
    </div>
  )
}

export default Carousel