import "./projectCardsStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";
import Wrapper from "../components/Wrapper";


function ProjectCards(props) {
    return (
        <Wrapper>
            <div className="work-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    <div className="project-card">
                        <img
                            alt={props.name}
                            src={props.image} />
                        <h2 className="project-title"> {props.name} </h2>
                        <div className="pro-details">
                            <p> {props.details} </p>
                            <div className="pro-btns">
                                <NavLink to={props.pageLink} className="btn">
                                    View
                                </NavLink>
                                <NavLink to={props.sourceLink} className="btn">
                                    Source
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>

    );
}

export default ProjectCards;
