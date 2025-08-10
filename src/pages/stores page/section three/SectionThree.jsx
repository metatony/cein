import React from "react";
import storeImageGrid from "../../../constants/storeGridList";

function SectionThree() {
  return (
    <section className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4" aria-labelledby="store-gallery-heading">
      {storeImageGrid.map((item) => (
        <div key={item.id} className="font-light tracking-wide">
          <img className="w-full rounded-lg" src={item.StoreImageGrid} alt="store image" loading="lazy"/>
          <p className="mt-2 text-xl">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SectionThree;
