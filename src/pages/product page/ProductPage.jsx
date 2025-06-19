import React from 'react'
import { useParams } from 'react-router-dom'
import productList from '../../constants/productList';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductAccordion from './ProductAccordion';
import { useGlobal } from '../../provider/GlobalProvider.jsx';
import infoList from '../../constants/infoList.js';



function ProductPage() {
  const { id } = useParams();
  const product = productList.find((item => item.id.toString() === id ));

  const { addToCart } = useGlobal();

  return (
    <>

    {/* Main Product Section */}
    <div className="my-10 lg:container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Grid: Product Image */}
        <div className="w-full">
          <img
            className="w-full -mt-10 md:mt-0"
            src={product.desktopImage}
            alt="product"
          />
        </div>

        {/* Right Grid: Product Details */}
        <div className="flex flex-col space-y-5 font-light md:px-5">
          <p className="text-[#5c5c5c] tracking-wider">Shop / Clothing</p>
          <p className="text-2xl"> {product.name} <br /> £{product.price}</p>
          <p className="md:w-[300px]"> {product.description} </p>

          {/* button */}
          <div className="md:w-[300px]">
            <button 
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white p-3 text-center"
            >Add to Bag
            </button>
          </div>

            <ProductAccordion/>

          </div>

        </div>

        {/* bottom div */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-20 justify-items-center '>
          {infoList.map(function(item) {
            return (
              <div key={item.id} className='font-light space-y-5 mb-5 lg:w-[307px] '>
                <p className='text-[#5c5c5c] tracking-wide'>{item.header.toUpperCase()}</p>
                <p className='font-normal text-xl md:text-xl lg:text-2xl'>{item.subheader}</p>
                <p className='text-md md:text-l'>{item.body}</p>
              </div>
            )
          })}
          
        </div>

      </div>

    </>

  )
}

export default ProductPage

