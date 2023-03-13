import "./FormStyles.css";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Form = () => {
    return (
        <div className="form">
            <div className="navTop">
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
    )
}

export default Form