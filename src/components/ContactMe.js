import "./ContactMeStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    return (
        <div className="dotted-line">
            <div className="contactContainer">
                <div className="formContainer">
                    <form>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" placeholder="Your message" required></textarea>
                        <div className="submit-btn">
                            <Link to="" className="btn">Submit</Link>
                        </div>
                    </form>
                </div>
                <div className="contactRight">
                    <div className="contactBase">
                        <h2>Based In</h2>
                        <p>London, UK</p>
                    </div>
                    <div className="contactEmail">
                        <h2>Email</h2>
                        <a className="email" href="mailto:best.amiker@gmail.com">best.amiker@gmail.com</a>
                    </div>
                    <div className="contactEmail">
                        <h2>Phone</h2>
                        <a className="email" href="tel:07738398290">+44 773 839 8290</a>
                    </div>
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
        </div>

    )
}

export default ContactMe;