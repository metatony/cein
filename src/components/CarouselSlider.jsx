import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import productList from "../constants/productList";

function CarouselSlider(props) {
  const { options } = props;
  // eslint-disable-next-line no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <>
      <section className="embla">
        {/* mobile Carousel */}
        <div className="block md:hidden embla__viewport px-5" ref={emblaRef}>
          <div className="embla__container flex flex-row ">
            {productList.slice(5, 10).map(function (item) {
              return (
                <div className="embla__slide " key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.desktopImage} alt={item.name} />
                  </Link>

                  <div className="font-light mt-2 text-medium">
                    <p>{item.name}</p>
                    <p>£{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desktop Carousel - Non slidable */}

      <section className="hidden md:block px-5">
        <div className="grid grid-cols-5 gap-4">
          {productList.slice(5, 10).map(function (item) {
            return (
              <div key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.desktopImage} alt={item.name} />
                </Link>

                <div className="font-light text-sm lg:text-lg mt-2 text-medium">
                  <p>{item.name}</p>
                  <p>£{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CarouselSlider;