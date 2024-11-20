import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import { ApiContext } from "../../Context";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const { getUserInfo, loggedIn, userType, userId } = useContext(ApiContext);

  const navigator = useNavigate();

  const handleClick = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/logout", {
        withCredentials: true,
      });
      if (resp.data.status === "ok") {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="./logo.png" alt="Logo" className="logo" />
      </Link>

      {/* Mobile menu toggle */}
      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Show bars on close and times on open */}
      </div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {["home", "academylist", "about", "events", "trainings"].map((item) => (
          <li
            key={item}
            onClick={() => {
              setMenu(item);
              setIsMobileMenuOpen(false); // Close menu after selection on mobile
            }}
            className={menu === item ? "active" : ""}
          >
            <Link to={`/${item === "home" ? "" : item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
          </li>
        ))}

        {loggedIn && (
          <li>
            <Link to={userType === "student" ? `/parentprofile/${userId}` : `/academyprofile/${userId}`}>
              Profile
            </Link>
          </li>
          
        )}
        {loggedIn && (
          <li >
            <Link to="/chat">
              GroupChat
            </Link>
          </li>
          
        )}
      </ul>

      <div className="navbar-right">
       
        {loggedIn ? (
          <button className="sign-in-btn" onClick={handleClick}>Log Out</button>
        ) : (
          <Link to="/login">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
