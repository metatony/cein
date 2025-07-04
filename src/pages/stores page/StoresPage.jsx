import React from "react";
import SectionTwo from "./section two/SectionTwo";
import SectionThree from "./section three/SectionThree";
import SectionFour from "./section four/SectionFour";
import SectionOne from "./section one/SectionOne";

function StoresPage() {
  return (
    <div>
      {/* Section 1 */}
      <SectionOne />

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 - Grid Section */}
      <SectionThree />

      {/* Section 4 */}
      <SectionFour />
    </div>
  );
}

export default StoresPage;
