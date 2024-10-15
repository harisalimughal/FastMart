import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#651b1b] py-5 px-12">
      <div className="logo">
        <h1 className="text-white text-[35px] font-normal font-mono">FASTMART</h1>
      </div>
      <div className="relative flex justify-center items-center max-w-2/5">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full py-2.5 px-3.5 pr-10 rounded-lg border border-gray-300 outline-none text-base"
        />
        <i className="fa fa-search absolute right-3.5 text-gray-800 text-base cursor-pointer"></i>
      </div>
      <div className="flex space-x-4">
        <button className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg hover:bg-[#500f0f]">SIGN UP</button>
        <button className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg hover:bg-[#500f0f]">LOGIN</button>
        <button className="bg-[#290030] text-white py-2.5 px-6 font-bold text-lg rounded hover:bg-[#500f0f]">SELL</button>
      </div>
    </nav>
  );
};

export default Navbar;
