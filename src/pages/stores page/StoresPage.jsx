import React from "react";
import SectionTwo from "./section two/SectionTwo";
import SectionThree from "./section three/SectionThree";
import SectionFour from "./section four/SectionFour";
import SectionOne from "./section one/SectionOne";
import SEO from "../../components/SEO";

function StoresPage() {
  return (
    <main className="px-4 container mx-auto" aria-label="Stores Page">
      <SEO
        title="Cein Stores | Store Locations & Experiences"
        description="Explore Cein Stores' locations, discover unique in-store experiences, and find your nearest boutique for luxury shopping."
        name="ceinstores"
        type="website"
      />

      <h1 className="text-3xl font-medium mt-8 mb-8 text-center">Our Stores</h1>

      {/* Section 1 */}
      <SectionOne />

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 - Grid Section */}
      <SectionThree />

      {/* Section 4 */}
      <SectionFour />
    </main>
  );
}

export default StoresPage;
