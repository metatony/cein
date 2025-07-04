import React from "react";
import Images from "../../../constants/images";

function CollectionBanner() {
  return (
    <>
      <section className="flex flex-col mt-16 lg:container mx-auto">
        {/* Image Section */}
        <div className="flex flex-col md:grid grid-cols-2 gap-4 space-y-5 px-5">
          <img
            className="w-full"
            src={Images.collectionBanner1}
            alt="new arrivals"
          />
          <img
            className="w-full"
            src={Images.collectionBanner2}
            alt="the casual edit"
          />
        </div>
      </section>

      <section>
        {/* Text Section */}
        <div className="flex text-2xl font-light flex-col justify-center items-center text-center mt-5 lg:mt-0 px-5 bg-[#f5f4f4] pt-[60px]">
          <p className="mb-7 tracking-wider font-medium">
            The Art of Fewer, <br className="md:hidden" /> Better Choices
          </p>
          <p className="text-xl font-light w-full mb-[150px] md:w-[720px] md:text-lg">
            Opting for quality over quantity means selecting timeless, durable,
            and responsibly made items. This approach simplifies our lives and
            fosters a deeper appreciation for our surroundings. Emphasizing
            longevity and responsible production resonates with a more
            sustainable and mindful lifestyle.
          </p>
        </div>
      </section>
    </>
  );
}

export default CollectionBanner;
