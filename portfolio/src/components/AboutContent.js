import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import Me from "../assets/images/me.jpg";
import MyCv from "../assets/Amiker Best Resume 2023.pdf";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Amiker Best</h1>
                <p>A bit about me</p>
                <a href={MyCv} target="_blank" rel="noopener noreferrer">
                    <button className="btn cv-btn">CV</button>
                </a>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={Me} className="img" alt="true" />
                </div>
            </div>

        </div>
    )
}

export default AboutContent