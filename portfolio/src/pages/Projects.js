import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import WorkCards from '../components/WorkCards';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="PROJECTS" text="Check out some of my work" />
            <WorkCards />
            <Footer />
        </div>
    )
}

export default Projects