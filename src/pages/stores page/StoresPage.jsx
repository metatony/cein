import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionTwo from './section two/SectionTwo'
import SectionThree from './section three/SectionThree'
import SectionFour from './section four/SectionFour'
import SectionOne from './section one/SectionOne'


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