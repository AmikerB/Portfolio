import "./HeroStyles.css";

import React from 'react';

import IntroImg from "../assets/images/pexels-photo-403571.jpeg";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Amiker Best</p>
                <h1>Frontend Engineer</h1>
                <div>
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero