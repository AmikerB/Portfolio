import "./FooterStyles.css";

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container ">

                {/* <div className="navTop">
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
                </div> */}
                <div className="navBottom">
                    <div className="location">
                        <FontAwesomeIcon className="icons" icon={faLocationDot} />
                        <div>
                            <p>London</p>
                        </div>
                    </div>
                    <div className="email">
                        <a href="mailto:best.amiker@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon className="icons" icon={faEnvelope} />
                            <div>
                                <p>best.amiker@gmail.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="phone">
                        <a href="tel:07738398290">
                            <FontAwesomeIcon className="icons" icon={faMobile} />
                            <div>
                                <p>+44 7738398290</p>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer