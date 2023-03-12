import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';

const About = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="ABOUT ME" text="I am a frontend developer" />
            <Footer />
        </div>
    )
}

export default About