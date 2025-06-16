import React, { useState } from 'react'
import navigationMenuItems from '../constants/hamburgerList';

function MegaMenu(props) {
    // const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    // const handleMouseEnter = () => {
    //   setIsMegaMenuOpen(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setIsMegaMenuOpen(false);
    // };

  return (
    // isMegaMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-sm hidden lg:grid grid-cols-7 justify-evenly  px-5 py-10 justify-items-center "
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
        >
          {/* Categories Dropdown */}
          <div className="">
            <h4 className=" mb-5 text-[#5c5c5c] font-medium">Categories</h4>
            <ul className="space-y-1">
              {navigationMenuItems[0].subItems.map((subItem) => (
                <li key={subItem.page}>
                  <Link to={subItem.link} className="">
                    {subItem.page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
</div>
    )
    

//   )
}

export default MegaMenu