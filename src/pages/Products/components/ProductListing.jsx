import React from "react";
import productList from "../../../constants/productList";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <section aria-labelledby="shop-products-heading" className="">
      {/* Container for Sort and Filter Controls */}
      <div className=" mt-10">
        {/* Desktop Controls */}
        <div className="hidden lg:flex flex-row justify-between tracking-wider">
          <div>
            <p className="section-header-text tracking-wider">Shop</p>
          </div>
          <div className="flex space-x-20 paragraph-text">
            <p className="flex items-center">
              Sort <IoIosArrowDown className="ml-2" />
            </p>
            <p className="flex items-center">
              Filter <IoIosArrowDown className="ml-2" />
            </p>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="grid grid-cols-2 lg:hidden justify-items-center tracking-wider paragraph-text">
          <p className="flex items-center">
            Sort <IoIosArrowDown className="ml-2" />
          </p>
          <p className="flex items-center">
            Filter <IoIosArrowDown className="ml-2" />
          </p>
        </div>
      </div>

      {/* Divider (visible on mobile) */}
      <hr className="w-full border-t border-gray-200 my-5 lg:hidden" />

      {/* Product Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 my-20">
        {productList.map((item) => (
          <section key={item.id} className="cursor-pointer">
            <Link to={`/product/${item.id}`}>
              <img
                className="w-full h-52 lg:h-96 object-cover rounded-lg"
                src={item.desktopImage}
                alt={item.name}
                loading="lazy"
              />
            </Link>
            <div className=" mt-2 paragraph-text">
              <p>{item.name}</p>
              <p>£{item.price}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default ProductListing;
