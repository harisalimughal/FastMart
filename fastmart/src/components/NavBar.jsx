import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Create a navigate function

  // Functions to navigate to Login and Signup pages
  const handleSignup = () => {
    navigate('/SignUp'); // Navigate to the Signup page
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  const handleSell = () => {
    navigate('/postad'); // Navigate to the Sell page
  }

  return (
    <nav className="bg-[#651b1b] py-5 px-6 md:px-12">
      {/* Navbar container */}
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Top section: Hamburger icon and logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Hamburger Icon for small devices  */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className="fa fa-bars text-white text-xl"></i>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-grow text-right md:text-left">
            <h1 className="text-white text-[20px] md:text-[36px] font-normal font-rubikMono">
              FASTMART
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 md:mt-0 w-full flex justify-center items-center">
          <div className="flex relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full py-2.5 px-3.5 pr-10 rounded-3xl md:rounded-lg border border-gray-300 outline-none text-base"
            />
            <i className="fa fa-search absolute right-3.5 text-gray-800 top-1/2 transform -translate-y-1/2 text-base cursor-pointer"></i>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 md:flex-grow justify-end">
          <button 
            onClick={handleSignup} // Handle Signup button click
            className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg whitespace-nowrap transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]"
          >
            SIGN UP
          </button>
          <button 
            onClick={handleLogin} // Handle Login button click
            className="bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg whitespace-nowrap transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]"
          >
            LOGIN
          </button>
          <button
            onClick={handleSell} // Handle Sell button click
            className="bg-[#290030] text-white py-2.5 px-6 font-bold text-lg rounded whitespace-nowrap transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg hover:translate-y-[-3px]">
            SELL
          </button>
        </div>

      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* Sign up and login buttons for mobile */}
          <button 
            onClick={handleSignup} // Handle Signup button click
            className="w-full bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg"
          >
            SIGN UP
          </button>
          <button 
            onClick={handleLogin} // Handle Login button click
            className="w-full bg-[#651b1b] text-white py-2.5 px-5 font-bold text-lg transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg"
          >
            LOGIN
          </button>
          <button
            onClick={handleSell} // Handle Sell button click
            className="w-full bg-[#290030] text-white py-2.5 px-6 font-bold text-lg rounded transition-all duration-300 ease-in-out transform hover:bg-[#500f0f] hover:scale-105 hover:shadow-lg">
            SELL
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
