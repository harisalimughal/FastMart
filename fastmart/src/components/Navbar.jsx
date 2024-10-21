import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#651b1b] py-5 px-6 md:px-12">
      <div className="flex justify-between items-center">
        
        {/* Left section: Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars text-white text-2xl"></i>
          </button>
        </div>

        {/* Search Bar - Hidden on small screens, visible from md onwards */}
        <div className="hidden md:flex relative justify-center items-center w-full sm:max-w-sm md:max-w-lg lg:max-w-3xl">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full py-2.5 px-3.5 pr-10 rounded-lg border border-gray-300 outline-none text-base"
          />
          <i className="fa fa-search absolute right-3.5 text-gray-800 text-base cursor-pointer"></i>
        </div>

        {/* Right section: Logo */}
        <div className="logo">
          <h1 className="text-white text-[28px] sm:text-[35px] font-normal font-rubikMono">
            FASTMART
          </h1>
        </div>

        {/* Buttons - Hidden on small screens, visible from md onwards */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]">
            SIGN UP
          </button>
          <button className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]">
            LOGIN
          </button>
          <button className="bg-[#290030] text-white py-2.5 px-6 font-bold text-lg rounded transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]">
            SELL
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full py-2.5 px-3.5 rounded-lg border border-gray-300 outline-none text-base"
          />
          <button className="w-full bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg">
            SIGN UP
          </button>
          <button className="w-full bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg">
            LOGIN
          </button>
          <button className="w-full bg-[#290030] text-white py-2.5 px-6 font-bold text-lg rounded transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg">
            SELL
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
