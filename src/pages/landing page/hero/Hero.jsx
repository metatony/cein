import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();
  return (

    <div className="hero flex flex-col justify-end h-screen bg-cover bg-center px-[32px] pb-[64px]">
      <div>
        {/* hero text */}
        <p className="block text-white w-full text-3xl md:text-4xl xl:text-6xl mb-[20px] tracking-wide font-light">
          Elevate Your Style <br /> Timeless Fashion, <br className='md:hidden'/> Sustainable <br /> Choices
        </p>

        <button 
        onClick={() => navigate('/shop')}
         className="bg-white text-black text-lg w-36 xl:h-16 xl:w-52 xl:text-xl font-light py-[11px] px-[18px] hover:text-white hover:bg-black">
          Shop Now
        </button>
      </div>
    </div>

  )
}

export default Hero
