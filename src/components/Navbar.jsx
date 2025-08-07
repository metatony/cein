import Images from "../constants/images";
import AnnounceBar from "./AnnounceBar";
import HamburgerMenu from "./HamburgerMenu";
import { FaBagShopping } from "react-icons/fa6";
import navigationMenuItems from "../constants/hamburgerList";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useGlobal } from "../provider/GlobalProvider";


function Navbar(props) {
  const {cart} = useGlobal();

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
        <ul className="relative flex justify-between items-center py-4 px-5">
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
                onMouseLeave={handleMouseLeave}
                key={item.page}
                to={item.link}
                className="hidden lg:block"
              >
                {item.page}
              </Link>
            ))}
            

            {/* Mega Dropdown */}
            {/* {isMegaMenuOpen && ( */}

            <div className={`absolute left-0 top-full w-full bg-white shadow-sm hidden lg:grid grid-cols-7 justify-evenly  px-5 py-10 justify-items-center transform transition-all duration-300 ease-out
            ${isMegaMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
              {/* Categories Dropdown */}
              {
                navigationMenuItems.map(function(item){
                  return (
                    <div key={item.header}>
                      <h4  className=" mb-5 text-[#5c5c5c] font-semibold">{item.header}</h4>
                      <ul>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.page}>
                            <Link to={subItem.link}>
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

          </li>


          {/* Center area for Mobile Logo */}
          <li className="lg:hidden flex justify-center items-center">
            <Link to='/'>
              <img className="w-20 h-5" src={Images.logo} alt="logo" />
            </Link>
          </li>

          {/* Right side nav: Search and Cart */}
          <li className="flex items-center justify-between w-14 lg:w-32 lg:space-x-8 font-light tracking-wider">

            <SearchBar/>
           

            <div 
              onClick={props.toggleCart}
              className="flex items-center text-[#5c5c5c]">
              <FaBagShopping className="lg:h-10"/>
              {cart.length > 0 && (
                <span className="absolute top-7 border-2 p-0 border-white right-1 bg-red-500 text-white rounded-full  text-xs w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
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
