import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <Link to="/">
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
          <Link to="/events">Events</Link> {/* Make sure to define this route in App.js */}
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contact-us">Contact Us</Link> {/* Make sure to define this route in App.js */}
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <div className="dot"></div>
        </div>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
