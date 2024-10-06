import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { ApiContext } from "../../Context";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
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

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("academy")}
          className={menu === "academy" ? "active" : ""}
        >
          <Link to="/academylist">Academy</Link>
        </li>
        <li
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => setMenu("events")}
          className={menu === "events" ? "active" : ""}
        >
          <Link to="/eventpage">Events</Link>
        </li>
        <li onClick={() => setMenu("training")}
          className={menu === "training" ? "active" : ""}></li>
          <Link to="/trainingpage">Sessions</Link>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <Link to="/contact-us">Contact Us</Link>
        </li>
        {
        loggedIn ? <li>
          {
            userType == "student" ? <Link to={`/parentprofile/${userId}`}>Profile</Link> : userType == "academy"? <Link to={`/academyprofile/${userId}`}>Profile</Link> : null
          }
        </li> : null
       }
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
        {loggedIn ? (
          <Link to="/parentprofile">
            <button className="sign-in-btn" onClick={handleClick}>
              Log Out
            </button>
          </Link>
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
