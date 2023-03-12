import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // navbar color when scroll down 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        // if window is less than of equal to 100 pixels then set navbar background color
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes />) : (<FaBars />)}
            </div>
        </div>
    )
}

export default Navbar;