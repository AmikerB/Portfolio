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
                        <a href="tel:07738398290">
                            <FontAwesomeIcon className="icons" icon={faMobile} />
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
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Famikerbest%2F%3Ffbclid%3DIwAR1KCKLmRt9wzF7tIwFX8Q4XNBYTVWiaFXKOgyFpjeVe8hqQZeS191M43cE&h=AT2GFFnMkS9a86U6lavq1pPABchYI7ce7rYYoEsdnCoymjEKuTJdKGwWw63hMGZ-4Ylpfzl-pavMfDJsVvt-7Z5Aup3QzN0ScHcX41Dna_TvtY4o_sa47Kl7vxTeKwVTvvFV5omNgYfUBagyexqHxA">
                            <FontAwesomeIcon className="icons" icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer