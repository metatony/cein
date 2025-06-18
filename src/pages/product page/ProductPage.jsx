import React from 'react'
import { useParams } from 'react-router-dom'
import productList from '../../constants/productList';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductAccordion from './ProductAccordion';

const infoList = [
  {
    header: "Quality Craftsmanship",
    subheader: "Excellence in Every Detail",
    body: "Our products are crafted with premium materials and attention to detail, ensuring you receive only the best quality. Experience lasting style, comfort, and durability with our range.",
  },
  {
    header: "Sustainable Fashion",
    subheader: "Eco-Friendly Choices",
    body: "We are dedicated to sustainable practices. Our collections incorporate eco-friendly materials and production methods, providing you with ethical and stylish options.",
  },
  {
    header: "Unique Designs",
    subheader: "Express Your Individuality",
    body: "Discover trend-setting designs that blend modern aesthetics with classic elegance. Our range empowers you to stand out and express your unique style.",
  },
];

function ProductPage() {
  const { id } = useParams();
  const product = productList.find((item => item.id.toString() === id ));

  return (
    <>
    {/* Navigation */}
    <Navbar />

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
          <p className="text-2xl"> {product.name} <br /> {product.price}</p>
          <p className="md:w-[300px]"> {product.description} </p>

          {/* button */}
          <div className="md:w-[300px]">
            <button className="w-full bg-black text-white p-3 text-center">Add to Bag</button>
          </div>

            <ProductAccordion/>

          </div>

        </div>

        {/* bottom div */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-20 justify-items-center '>
          {infoList.map(function(item){
            return (
              <div className='font-light space-y-5 mb-5 lg:w-[307px] '>
                <p className='text-[#5c5c5c] tracking-wide'>{item.header.toUpperCase()}</p>
                <p className='font-normal text-xl md:text-xl lg:text-2xl'>{item.subheader}</p>
                <p className='text-md md:text-l'>{item.body}</p>
              </div>
            )
          })}
          
        </div>

      </div>
    {/* Footer */}
    <Footer/>
    </>

  )
}

export default ProductPage

