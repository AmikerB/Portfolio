import "./Hero2Styles.css";

import React, { Component } from 'react';

import WebImg from "../assets/images/pexels-scott-webb-403575.jpg";

class Hero2 extends Component {
    render() {
        return (
            <div className="hero2" >
                <div className="mask2">
                    <img className="img2" src={WebImg} alt="Img" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Hero2