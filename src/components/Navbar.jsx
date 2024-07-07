import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  
  const handleCopyLink =()=>{
    navigator.clipboard.writeText("https://simpleiq.vercel.app/");

        
  }


  return (
    <nav className="navbar">
      <div    className="logo">
      <Link to="/">

        <img
       
          src="iqlogo.svg"
          alt="simple iq logo"
           />
      </Link>
          </div>
      <div className="navmenu">
        <Link>
          <Button handleClick={handleCopyLink} text="Share Link" type="secondary" />
        </Link>
        <Link to="/testpage">
          <Button text="Start Test" type="primary" handleClick={handleCopyLink} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
