import "./HeroStyles.css";

import React from 'react';

import IntroImg from "../assets/images/pexels-photo-403571.jpeg";
import meImg from "../assets/images/me.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <img className="meImg" src={meImg} alt="Photograph of me" />
                <p>Amiker Best</p>
                <h1>Frontend Engineer</h1>
                <div>
                    <Link to="/projects" className="btn" onClick={() => window.scrollTo(0, 0)}>
                        Projects
                    </Link>

                    <a href="https://github.com/AmikerB" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Hero