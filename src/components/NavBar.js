import { Link } from "react-router-dom";
import "./NavBarStyle.css"
import React from 'react'


const NavBar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
    </div>
  )
};

export default NavBar;