import React from 'react'
import Images from '../../../constants/images'

function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-end px-[32px] pb-[64px]">
      {/* Mobile background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${Images.heroMobile})` }}
      ></div>

      {/* Desktop background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${Images.heroDesktop})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <p className="block text-white w-full text-3xl md:text-5xl xl:text-8xl mb-[20px] tracking-wide font-light">
          Elevate Your Style <br /> Timeless Fashion, <br className="md:hidden" /> Sustainable <br /> Choices
        </p>
        <button className="bg-white text-black text-lg w-36 xl:h-24 xl:w-64 xl:text-3xl font-light py-[11px] px-[18px] hover:text-white hover:bg-black">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Hero