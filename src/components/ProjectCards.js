import "./projectCardsStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";
import Wrapper from "../components/Wrapper";


function ProjectCards(props) {
    return (
        <Wrapper>
            <div className="project-card">
                <img
                    alt={props.name}
                    src={`/images/${props.image}`} />
                <h2 className="project-title"> {props.name} </h2>
                <div className="pro-details">
                    <p> {props.details} </p>
                    <div className="pro-btns">
                        <NavLink to={props.pageLink} className="btn">
                            View
                        </NavLink>
                        <NavLink to={props.pageSource} className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper >

    );
}

export default ProjectCards;
