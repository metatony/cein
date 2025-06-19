import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#f5f4f4]'>
      <div className="bg-[#f5f4f4] px-5 container mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col lg:grid grid-cols-5 gap-4 pt-[76px] space-y-5 text-xl font-light">
          {/* CONTACT US section */}
          <div className="space-y-1 w-full">
            <p className="text-[#565656] mb-5 font-medium">CONTACT US</p>
            <p>+1 (844) 326-6000</p>
            <p>Email Us</p>
            <p>Mon-Fri 9am-3pm PT</p>
          </div>

          {/* CUSTOMERS section */}
          <div className="space-y-1 w-full">
            <p className="text-[#565656] mb-5 font-medium">CUSTOMERS</p>
            <p>Start a Return</p>
            <p>Return Policy</p>
            <p>FAQ</p>
            <p>Catalogs and Mailers</p>
            <p>About Group Gifting</p>
          </div>

          {/* COMPANY section */}
          <div className="space-y-1 w-full">
            <p className="text-[#565656] mb-5 font-medium">COMPANY</p>
            <p>About Us</p>
            <p>Sustainability</p>
            <p>Discover Revive</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>

          {/* Newsletter Signup section: spans two columns */}
          <div className="flex flex-col space-y-4 col-span-2">
            <p className="text-xl font-medium tracking-wider">
              Get the latest news from us
            </p>
            <p>
              By signing up, you agree to our&nbsp;
              <span className="underline">Privacy Policy</span> and&nbsp;
              <span className="underline">Terms of Service</span>.
            </p>
            <input className='w-full border border-[#dddddd] p-2 focus:outline-none' type="text"
            placeholder='Enter your email address'
            />
            <button className="bg-black text-white text-lg w-36 text-center py-[8px]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full py-5 text-[#565656]">
          <p className="text-center">&copy; Metatony</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer