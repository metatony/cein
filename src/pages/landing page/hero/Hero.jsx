import React from 'react'
import Images from '../../../constants/images'

function Hero() {
  return (
    <div 
    className="hero flex flex-col justify-end h-screen bg-cover bg-center px-[32px] pb-[64px]">

        <div>
          {/* ❗ mobile screens ❗*/}
          <p className='block md:hidden text-white w-full text-3xl mb-[20px] tracking-wide font-light  '>
              Elevate Your Style <br /> Timeless Fashion, <br /> Sustainable <br /> Choices 
          </p>

          {/* ❗ desktop screens ❗*/}
          <p className='hidden md:block text-white w-full text-3xl mb-[20px] tracking-wide font-light  '>
              Elevate Your Style <br /> Timeless Fashion, Sustainable <br />Choices 
          </p>

          <button className='bg-white text-black text-lg w-36 font-light py-[11px] px-[18px] hover:text-white hover:bg-black'> Shop Now</button>
        </div>

    </div>
  )
}

export default Hero
// style={{ backgroundImage: `url(${Images.heroDesktop})` }} 