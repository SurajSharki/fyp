import React, { useState } from 'react'
import './Navbar.css'
// import { assets } from '../../assets/assets'

const Navbar = () => {
    const[menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
        <img src="./logo.png" alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("academy")} className={menu ==="academy"?"active":""}>Academy</li>
            <li onClick={()=>setMenu("about")} className={menu ==="about"?"active":""}>About</li>
            <li onClick={()=>setMenu("events")} className={menu ==="events"?"active":""}>Events</li>
            <li onClick={()=>setMenu("contact-us")} className={menu ==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt="" /> */}
            <div className="navbar-search-icon">
                {/* <img src={assets.football_icon} alt="" width='100px'/> */}
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
