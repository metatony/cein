import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FaqCategories from './FaqCategories'
import FaqAnswers from './FaqAnswers'

function Faq() {
  return (
    <div>


      {/* FAQ Content */}
      <div className="lg:container mx-auto px-5 mt-20 mb-32 grid grid-cols-1 lg:grid-cols-3 gap-4 font-light">
        {/* Left Container: FAQ Categories */}
        <FaqCategories />

        {/* Right Container: FAQ Answers */}
        <FaqAnswers />
      </div>

    </div>
  )
}

export default Faq