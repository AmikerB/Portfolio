import "./FooterStyles.css";

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top ">
                <div className="footer-left">
                    <h2><FontAwesomeIcon className="icons" icon={faLocationDot} />Based In</h2>
                    <p className="location">London, UK</p>
                </div>
                <div className="footer-middle">
                    <h2><FontAwesomeIcon className="icons" icon={faEnvelope} />Email</h2>
                    <a className="email" href="mailto:best.amiker@gmail.com" rel="noreferrer" target="_blank">best.amiker@gmail.com</a>
                </div>
                <div className="footer-middle">
                    <h2><FontAwesomeIcon className="icons" icon={faMobile} />Phone</h2>
                    <a className="phone" href="tel:07738398290">+44 7738398290</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social">
                    <a href="https://www.linkedin.com/in/amikerbest/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="icons" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/AmikerB" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                    </a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Famikerbest%2F%3Ffbclid%3DIwAR1KCKLmRt9wzF7tIwFX8Q4XNBYTVWiaFXKOgyFpjeVe8hqQZeS191M43cE&h=AT2GFFnMkS9a86U6lavq1pPABchYI7ce7rYYoEsdnCoymjEKuTJdKGwWw63hMGZ-4Ylpfzl-pavMfDJsVvt-7Z5Aup3QzN0ScHcX41Dna_TvtY4o_sa47Kl7vxTeKwVTvvFV5omNgYfUBagyexqHxA" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="icons" icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer