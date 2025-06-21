import React from 'react'
import { Link, Links, useParams } from 'react-router-dom'
import productList from '../../constants/productList';
import ProductAccordion from './ProductAccordion';
import { useGlobal } from '../../provider/GlobalProvider.jsx';
import infoList from '../../constants/infoList.js';



function ProductPage() {
  const { id } = useParams();
  const product = productList.find((item => item.id.toString() === id ));

  // Destructure addToCart from our global context using our custom hook (useGlobal)
  const { addToCart } = useGlobal();

  // function to create random items for the "you might like"
  const randomItems = [...productList].sort(function() {
    return Math.random() - 0.5;
  }).slice(0, 4);

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


          <div className='mt-10 md:mt-20'>
            <p className='text-center text-xl font-light'>you might also like</p>

            <div className="grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 lg:my-20 lg:container mx-auto px-5 ">
            {randomItems .map((item) => (
              <div key={item.id} className="cursor-pointer" >
                <Link to={`/product/${item.id}`}>
                  <img className="w-full h-52 lg:h-96   object-cover" src={item.desktopImage} alt={item.name} />
                </Link>
                <div className="font-light text-sm lg:text-lg mt-2 text-medium">
                  <p>{item.name}</p>
                  <p>£{item.price}</p>
                </div>
              </div>
            ))}
            </div>
          </div>



      </div>

    </>

  )
}

export default ProductPage

