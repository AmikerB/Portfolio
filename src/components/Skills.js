import "./SkillsStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faSquareJs, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="bottom">
            <h1>Engineering Skills</h1>
            <div className="skills">
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faHtml5} />
                    <div>
                        <p>HTML</p>
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faCss3} />
                    <div>
                        <p>CSS</p>
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faSquareJs} />
                    <div>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faReact} />
                    <div>
                        <p>React</p>
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faNodeJs} />
                    <div>
                        <p>Node.js</p>
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon className="icons" icon={faVialCircleCheck} />
                    <div>
                        <p>Testing</p>
                    </div>
                </div>
            </div>
            <div className="project-btn-container">
                <Link to="/projects" className="btn" onClick={() => window.scrollTo(0, 0)}>
                    Projects
                </Link>

            </div>
        </div>

    )
}

export default Skills