import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import "./NavBarStyle.css";
import React, { useState } from 'react';


const NavBar = () => {
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
        setHidden(!hidden);
    }

  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={ handleClick }>
            {hidden ? (
                <FaTimes size={ 20 } style={{ color: "white" }} />
            ) : (
                <FaBars size={ 20 } style={{ color: "white" }} />
            ) }     
        </div>
    </div>
  );
}

export default NavBar;