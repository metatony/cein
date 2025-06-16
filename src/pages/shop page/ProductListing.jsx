import React from 'react'
import productList from '../../constants/productList'
import { IoIosArrowDown } from "react-icons/io"

function ProductListing() {
  return (
    <div className="">
      
      {/* Container for Sort and Filter Controls */}
      <div className="lg:container mx-auto px-5 mt-10">
        {/* Desktop Controls */}
        <div className="hidden lg:flex flex-row justify-between tracking-wider text-lg font-light text-[#5c5c5c]">
          <div>
            <p className="text-2xl lg:text-3xl tracking-wider font-medium">Shop</p>
          </div>
          <div className="flex space-x-20">
            <p className="flex items-center">
              Sort <IoIosArrowDown className="ml-2" />
            </p>
            <p className="flex items-center">
              Filter <IoIosArrowDown className="ml-2" />
            </p>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="grid grid-cols-2 lg:hidden justify-items-center tracking-wider font-light">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20 lg:container mx-auto px-5">
        {productList.map((item) => (
          <div key={item.id} className="cursor-pointer" onClick={''}>
            <img className="w-full" src={item.desktopImage} alt={item.name} />
            <div className="font-light text-sm lg:text-lg mt-2 text-medium">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ProductListing