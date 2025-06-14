import React from 'react'

function Hero() {
  return (

    <div className="hero flex flex-col justify-end h-screen bg-cover bg-center px-[32px] pb-[64px]">
      <div>
        {/* hero text */}
        <p className="block text-white w-full text-3xl md:text-5xl xl:text-8xl mb-[20px] tracking-wide font-light">
          Elevate Your Style <br /> Timeless Fashion, <br className='md:hidden'/> Sustainable <br /> Choices
        </p>

        <button className="bg-white text-black text-lg w-36  xl:h-24 xl:w-64 xl:text-3xl font-light py-[11px] px-[18px] hover:text-white hover:bg-black">
          Shop Now
        </button>
      </div>
    </div>

  )
}

export default Hero
