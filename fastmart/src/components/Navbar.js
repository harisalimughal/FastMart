import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FASTMART</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for anything" />
        <i className="fa fa-search search-icon"></i>
      </div>
      <div className="nav-buttons">
        <button className="nav-btn">SIGN UP</button>
        <button className="nav-btn">LOGIN</button>
        <button className="nav-btn sell-btn">SELL</button>
      </div>
    </nav>
  );
};

export default Navbar;
