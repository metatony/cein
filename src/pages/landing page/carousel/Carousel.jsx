import React from 'react'
import Images from '../../../constants/images'
import CarouselSlider from '../../../components/CarouselSlider'

function Carousel() {

    const OPTIONS = { align: 'start', containScroll: true }
    const SLIDE_COUNT = 5
        // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    // const SLIDES = [
    //     Images.Carousel.classicBag,
    //     Images.Carousel.blackBag,
    //     Images.Carousel.coat,
    //     Images.Carousel.beanie,
    //     Images.Carousel.cardigan,
       
    //   ]



  return (
    <div className='mb-12'>

        <div className='text-2xl font-light w-[325px] px-5 pt-8 pb-12 '>
        <p>What to Wear Now</p>
        </div>

        <CarouselSlider options={OPTIONS} />

    </div>
  )
}

export default Carousel