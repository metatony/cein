import React, { useState } from 'react';
import productList from '../constants/productList';
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle the visibility of the search bar container
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Update searchQuery with user's input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search input (case-insensitive)
  const filteredSearchResults = productList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center space-x-5 text-[#5c5c5c]">
      {/* Search Icon toggles the search bar */}
      <FaSearch onClick={toggleSearch} className="lg:h-10 cursor-pointer" />

      {isSearchOpen && (
        <div className="absolute top-20 left-0 right-0 w-full bg-white shadow-lg p-5 z-50">
          {/* Input row: search icon, text input, and close ("X") button */}
          <div className="flex items-center mb-5">
            <CiSearch className="h-5 w-5 mr-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full border-none p-2 focus:outline-none"
              placeholder="Search..."
            />
            <IoCloseOutline onClick={toggleSearch} className="h-5 w-5 ml-3 cursor-pointer" />
          </div>

          {/* Render filtered results only if there is a search query */}
          {searchQuery && (
            filteredSearchResults.length  ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white justify-items-center max-h-[460px] overflow-y-auto p-5">
                {filteredSearchResults.map((item) => (
                  <div key={item.id} className="cursor-pointer">
                    <img className="w-full" src={item.desktopImage} alt={item.name} />
                    <div className="font-light text-sm lg:text-lg mt-2">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No products found.</p>
            )
          )}
        </div>
      )}
      <p className='hidden lg:block'>Stores</p>
    </div>
  );
}

export default SearchBar;