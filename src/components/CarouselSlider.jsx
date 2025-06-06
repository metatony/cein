import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import carouselSlides from '../constants/carouselData'


function CarouselSlider(props) {

    const { options } = props
    // eslint-disable-next-line no-unused-vars
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport px-5" ref={emblaRef}>
        <div className="embla__container flex flex-row ">
          {carouselSlides.map(function(item) {
            return (
              <div className="embla__slide" key={item.id}>
                <img src={item.image} alt={item.name} />
                  <div className='font-light mt-2 text-sm'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


export default CarouselSlider