import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to="/" className="navbar-logo">
        <img src="./logo.png" alt="Logo" className="logo" />
      </Link>
      
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("academy")} className={menu === "academy" ? "active" : ""}>
          <Link to="/academyprofile">Academy</Link>
        </li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenu("events")} className={menu === "events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="search-icon-box">
          <FaSearch 
            className="search-icon" 
            onClick={() => setSearchOpen(!searchOpen)} 
          />
          {searchOpen && (
            <div className="search-box">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search..." 
              />
            </div>
          )}
        </div>
        <Link to="/login">
          <button className="sign-in-btn">Sign In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
