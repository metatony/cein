import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col space-y-12 bg-[#f5f4f4] pt-[76px] px-5 text-left text-xl '> 

      <div className='space-y-1 w-full'>
        <p className='text-[#565656] mb-5'>CONTACT US</p>
        <p>+1 (844) 326-6000</p>
        <p>Email Us</p>
        <p>Mon-Fri 9am-3pm PT</p>
      </div>

      <div className='space-y-1 w-full'>
        <p className='text-[#565656] mb-5'>CUSTOMERS</p>
        <p>Start a Return</p>
        <p>Return Policy</p>
        <p>FAQ</p>
        <p>Catalogs and Mailers</p>
        <p>About Group Gifting</p>
      </div>


      <div className='space-y-1 w-full'>
        <p className='text-[#565656] mb-5'>COMPANY</p>
        <p>About Us</p>
        <p>Sustainability</p>
        <p>Discover Revive</p>
        <p>Careers</p>
        <p>Privacy Policy</p>
        <p>Terms</p>
      </div>


      <div className='space-y-4'>
        <p className='text-xl font-medium tracking-wider'>Get the latest new from us</p>
        <p className=''>By signing up, you agree to our <span className='underline'>Privacy Policy</span>  and  <span className='underline'>Terms of Service.</span> </p>
        <button className='bg-black text-white text-lg w-36 text-center py-[8px]'>Subscribe</button>
      </div>

      <div className='text-center w-full pb-10'>
        {/* <p>&copy;CEIN </p> */}
        <p>&copy; Metatony </p>
      </div>





    </div>
  )
}

export default Footer