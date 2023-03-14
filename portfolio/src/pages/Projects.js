import React from 'react';
import "../index.css";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ProjectCards from '../components/ProjectCards';
import projectData from "../projectData.json";
import Wrapper from "../components/Wrapper";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Hero2 heading="PROJECTS" text="Check out some of my work" />
                <div className="workContainer">
                    {projectData.map((project) => (
                        <ProjectCards key={project.name} name={project.name} image={project.image} details={project.details} pageLink={project.pageLink} pageSource={project.pageSource} />
                    ))}
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Projects;