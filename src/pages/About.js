import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import AboutContent from '../components/AboutContent';
import Skills from '../components/Skills';

const About = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="SOFTWARE ENGINEER" text="Specialising in frontend" />
            <AboutContent />
            <Skills />
            <Footer />
        </div>
    )
}

export default About