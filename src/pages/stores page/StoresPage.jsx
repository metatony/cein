import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionOne from './section one/SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

function StoresPage() {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Section 1 */}
      <SectionOne />

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 - Grid Section */}
      <SectionThree />

      {/* Section 4 */}
      <SectionFour />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default StoresPage