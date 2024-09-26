import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

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
        <div className="navbar-search">
          <i className="bi bi-search"></i> {/* Bootstrap icon for search */}
        </div>
        <Link to="/login">
          <button className="btn-signin">Sign In</button>
        </Link>
      </div>
      <div className="navbar-toggle" onClick={() => setMenu(menu === "expanded" ? "home" : "expanded")}>
        <i className="bi bi-list"></i> {/* Bootstrap icon for hamburger menu */}
      </div>
    </nav>
  );
}

export default Navbar;
