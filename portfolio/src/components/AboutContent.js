import "./AboutContentStyles.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Me from "../assets/images/me.jpg";
import MyCv from "../assets/Amiker Best Resume 2023.pdf";

const AboutContent = () => {
    return (
        <div className="dotted-line">
            <div className="about">
                <div className="left">
                    <h1>Amiker Best</h1>
                    <div>
                        <FontAwesomeIcon className="icons" icon={faLocationDot} />
                        London
                    </div>
                    <p>I am an innovative and driven individual with a proven track record in software engineering, with a particular focus on frontend development. I have successfully delivered diverse web applications as both an individual contributor and a team player, I am constantly seeking opportunities to improve my skills. I am seeking a junior frontend engineering role within the FinTech industry, with a company that offers excellent training opportunities and a clear path for career progression.</p>
                    <div>
                        <a href={MyCv} target="_blank" rel="noopener noreferrer" className="btn">
                            CV
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Me} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent