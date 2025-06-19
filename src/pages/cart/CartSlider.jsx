import React from 'react';
import { useGlobal } from '../../provider/GlobalProvider';
import { IoCloseOutline } from 'react-icons/io5';
import { SlTrash } from "react-icons/sl";


function CartSlider({ isOpen, toggleCart }) {
  const { cart, removeFromCart } = useGlobal();
  const totalPrice = cart.reduce(function(total, item) {
    return total + item.price;
  }, 0).toFixed(2);


  return (
    <div
      className={`fixed top-0 right-0 w-80 lg:max-w-[25%] h-full bg-white shadow-lg transform transition-transform duration-300 z-50  ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-[#dfdfdf] flex justify-between items-center">
        <h2 className="text-xl font-light tracking-wider">Shopping Bag</h2>
        <IoCloseOutline onClick={toggleCart} className="h-5 w-5 ml-3 cursor-pointer" />

      </div>
      {/* Cart Content */}
      <div className=" overflow-y-auto h-full">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <div className=" px-4 py-5 flex justify-between items-start mb-4">
                <img
                  src={item.desktopImage}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="w-36 md:w-48  ">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">£{item.price}</p>
                </div>

                <SlTrash onClick={() => removeFromCart(item.id)} className='text-[#7e7d7d]' />

              </div>
              <hr className='border-[#dfdfdf]'/>
            </div>

          ))
        ) : (
          <p className='flex justify-center items-center h-full font-light '>Your cart is empty 😯</p>
        )}

        { cart.length > 0 && (
          <div className='p-4 font-light my-20 '>

            <p className='mb-5'>You have {cart.length} items in your cart</p>
          
            <button 
            className="w-full bg-black text-white p-3 text-center"
            >CHECK OUT £{totalPrice}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSlider;
