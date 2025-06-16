import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCoatHanger } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function FaqCategories() {
  return (
    <div className='col-span-1 space-y-5 w-full order-2 lg:order-1'>

                    
        <div className='text-lg md:text-xl tracking-wide space-y-5 text-[#565656] mt-10 lg:mt-0'>
        <p className='text-2xl text-black lg:text-3xl tracking-wider font-medium'>Categories</p>

            <div className='text-black flex justify-items-center space-x-3'>
            <TbTruckDelivery className=''  /> 
            <p> Delivery and order tracking</p>
            </div>

            <div className='flex flex-row items-center space-x-3'>
            <PiKeyReturn />
            <p>Returns, exchanges and refunds</p>
            </div>

            <div className='flex items-center space-x-3'>
            <CiCreditCard1  className=''  /> 
            <p> Payments and promotions</p>
            </div>

            <div className='flex items-center space-x-3'>
            <PiCoatHanger className=''  /> 
            <p>Information on sizes and products</p>
            </div>

            <div className='flex items-center space-x-3'>
            <CiUser className=''  /> 
            <p>Personal data and notifications</p>
            </div>

        </div>



    </div>
  )
}

export default FaqCategories