import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <header className="hero flex flex-col justify-end h-screen bg-cover bg-center pb-16"
    aria-label="Hero Section">
      <div className="px-4 container mx-auto z-10">
        {/* hero text */}
        <h1 className="block text-white w-full text-3xl md:text-4xl lg:text-5xl mb-[20px] tracking-wide font-light">
          Elevate Your Style <br /> Timeless Fashion,{" "}
          <br className="md:hidden" /> Sustainable <br /> Choices
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="bg-white text-black text-lg w-36  xl:w-52 xl:text-xl font-light py-[11px] px-[18px] hover:text-white hover:bg-black rounded-lg"
        >
          Shop Now
        </button>
      </div>
    </header>
  );
}

export default Hero;
