import "./FooterStyles.css";

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import emoji from 'react-easy-emoji';


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
                        <a href="tel:07738398290">
                            {emoji('\u{1F4F1}')}
                            +44 7738398290</a>
                    </div>
                    <div className="email">
                        <a href="mailto:best.amiker@gmail.com"><FontAwesomeIcon className="icons" icon={faEnvelope} />
                            best.amiker@gmail.com</a>
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