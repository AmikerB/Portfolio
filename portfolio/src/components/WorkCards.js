import "./WorkCardsStyles.css";

import React from 'react';
import proWeather from "../assets/images/amikerb.github.io_Weather-Dashboard_.png";
import { NavLink } from "react-router-dom";

const WorkCards = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={proWeather} alt="image" />
                    <h2 className="project-title">Weather Dashboard</h2>
                    <div classname="pro-details">
                        <p>About this app</p>
                        <div className="pro-btns">
                            <NavLink to="https://amikerb.github.io/Weather-Dashboard/" className="btn">View</NavLink>
                            <NavLink to="https://github.com/AmikerB/Weather-Dashboard" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCards