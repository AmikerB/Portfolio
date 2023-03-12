import "./FooterStyles.css";

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


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
                            <FontAwesomeIcon icon={faMobile} />
                            +44 7738398290</h4>
                    </div>
                    <div className="email">
                        <h4><FontAwesomeIcon icon={faEnvelope} />
                            best.amiker@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <div className="socials">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer