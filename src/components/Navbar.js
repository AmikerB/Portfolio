import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    // event listener to take user to page they clicked on
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // navbar color when scroll down 
    const [color, setColor] = useState(false);
    const [textColor, setTextColor] = useState(false);
    const changeColor = () => {
        // if window is less than of equal to 100 pixels then set navbar background color
        if (window.scrollY >= 100) {
            setColor(true);
            setTextColor(true)
        } else {
            setColor(false);
            setTextColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <h1 className={textColor ? "content content-light" : "content"}>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li>
                    <Link className={textColor ? "content content-light" : "content"} to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li>
                    <Link className={textColor ? "content content-light" : "content"} to="/About" onClick={() => window.scrollTo(0, 0)}>About Me</Link>
                </li>
                <li>
                    <Link className={textColor ? "content content-light" : "content"} to="/Projects" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                </li>
                <li>
                    <a className={textColor ? "content content-light" : "content"} href="https://github.com/AmikerB" rel="noreferrer" target="_blank">GitHub</a>
                </li>
                <li>
                    <Link className={textColor ? "content content-light" : "content"} to="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes className="ex" />) : (<FontAwesomeIcon className={textColor ? "content content-light" : "content"} icon={faBurger} />)}
            </div>
        </div>
    )
}

export default Navbar;