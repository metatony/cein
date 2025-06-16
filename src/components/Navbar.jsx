import Icons from "../constants/icons";
import Images from "../constants/images";
import AnnounceBar from "./AnnounceBar";
import HamburgerMenu from "./HamburgerMenu";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import navigationMenuItems from "../constants/hamburgerList";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <>

      <AnnounceBar />
      <nav className="sticky top-0 bg-white z-20 border-b border-gray-200">
        <ul className="relative flex justify-between items-center py-5 px-5">
          {/* Left side: Desktop logo and mobile menu icon */}
          <li className="flex justify-between items-center lg:space-x-8 text-lg font-light ">
            {/* Logo displayed on desktop */}
            <Link to="/" className="hidden lg:block">
              <img className="w-20 h-5" src={Images.logo} alt="logo" />
            </Link>

            {/* Hamburger menu for mobile */}
            <HamburgerMenu />

            {/* Desktop Navigation Items */}
            {navigationMenuItems.map((item) => (
              <Link
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                key={item.page}
                to={item.link}
                className="hidden lg:block"
              >
                {item.page}
              </Link>
            ))}
            

            {/* Mega Dropdown */}
            {isMegaMenuOpen && (

            <div className="absolute left-0 top-full w-full bg-white shadow-sm hidden lg:grid grid-cols-7 justify-evenly  px-5 py-10 justify-items-center "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
              {/* Categories Dropdown */}
              {
                navigationMenuItems.map(function(item){
                  return (
                    <div className="">
                      <h4 className=" mb-5 text-[#5c5c5c] font-medium">{item.header}</h4>
                      <ul className="">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.page}>
                            <Link to={subItem.link} className="">
                              {subItem.page}
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </div>

                  )
                })
              }

              <div className=" w-full col-span-3">
                <img className="justify-self-end " src={Images.megaMenuImage} alt="mega menu image" />
              </div>


            </div>
            )}

          </li>


          {/* Center area for Mobile Logo */}
          <li className="lg:hidden flex justify-center items-center">
            <Link to='/'>
              <img className="w-20 h-5" src={Images.logo} alt="logo" />
            </Link>
          </li>

          {/* Right side nav: Search and Cart */}
          <li className="flex items-center justify-between w-14 lg:w-32 lg:space-x-8 font-light tracking-wider">
            <div className="flex items-center space-x-5 text-[#5c5c5c]">
              <FaSearch className="lg:h-10" />
              <p className="hidden lg:block">Stores</p>
            </div>
            <div className="flex items-center text-[#5c5c5c]">
              <FaBagShopping className="lg:h-10" />
            </div>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;


// to achieve mega menu you can either use the group and group-hover: class or just render it 
// conditionally based on the state of the menu