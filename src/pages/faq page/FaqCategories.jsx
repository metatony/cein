import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCoatHanger } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function FaqCategories() {


  const faqCategoriesList = [
    {
      id: 1,
      icon: <TbTruckDelivery /> ,
      text: "Delivery and order tracking",
    },
    {
      id: 2,
      icon: <PiKeyReturn />,
      text: "Returns, exchanges and refunds",
    },
    {
      id: 3,
      icon: <CiCreditCard1 /> ,
      text: "Payments and promotions",
    },
    {
      id: 4,
      icon: <PiCoatHanger/>, 
      text: "Information on sizes and products",
    },
    {
      id: 5,
      icon: <CiUser /> , 
      text: "Personal data and notifications",
    },
  ];

  return (
    <div className='col-span-1 space-y-5 w-full order-2 lg:order-1'>
        <div className='text-lg md:text-xl tracking-wide space-y-5 text-[#565656] mt-10 lg:mt-0'>
          <p className='text-2xl text-black lg:text-3xl tracking-wider font-medium'>Categories</p>
          {
            faqCategoriesList.map(function(item){
              return (
                <div key={item.id}>
                  <div className='hover:text-black flex items-center space-x-3'>
                    {item.icon}
                    <p> {item.text}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
    </div>
  )
}

export default FaqCategories