import React from 'react'
import Images from '../../../constants/images'

function Hero() {
  return (
    <div style={{ backgroundImage: `url(${Images.heroMobile})` }} 
    className="flex flex-col justify-end h-screen bg-cover bg-center px-[32px] pb-[64px]">

        <div>

        <p className='text-white w-full text-3xl mb-[20px] tracking-wide   '>
            Elevate Your Style <br /> Timeless Fashion, <br /> Sustainable <br /> Choices 
        </p>

        <button className='bg-white text-black text-lg w-36  py-[11px] px-[18px]'> Shop Now</button>

        </div>

    </div>
  )
}

export default Hero