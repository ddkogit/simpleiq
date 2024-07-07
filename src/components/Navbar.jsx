import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
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
          <Button text="Share Link" type="secondary" />
        </Link>
        <Link to="/testpage">
          <Button text="Start Test" type="primary" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
