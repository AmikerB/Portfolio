import "./FooterStyles.css";

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container ">
                <div className="left">
                    <div className="location">
                        <FontAwesomeIcon className="icons" icon={faLocationDot} />
                        <div>
                            <p>London</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FontAwesomeIcon className="icons" icon={faMobile} />
                            +44 7738398290</h4>
                    </div>
                    <div className="email">
                        <h4><FontAwesomeIcon className="icons" icon={faEnvelope} />
                            best.amiker@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/amikerbest/">
                            <FontAwesomeIcon className="icons" icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/AmikerB">
                            <FontAwesomeIcon className="icons" icon={faGithub} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="icons" icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer