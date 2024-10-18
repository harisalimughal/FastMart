import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#651b1b] py-5 px-12">
      <div className="logo">
        <h1 className="text-white text-[35px] font-normal font-rubikMono">FASTMART</h1>
      </div>
      <div className="relative flex justify-center items-center w-full sm:max-w-sm md:max-w-lg lg:max-w-3xl">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full py-2.5 px-3.5 pr-10 rounded-lg border border-gray-300 outline-none text-base"
        />
        <i className="fa fa-search absolute right-3.5 text-gray-800 text-base cursor-pointer"></i>
      </div>
      <div className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
