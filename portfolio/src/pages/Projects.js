import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ProjectCards from '../components/ProjectCards';
import projectData from "./projectData.json";
import Wrapper from "../components/Wrapper";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Hero2 heading="PROJECTS" text="Check out some of my work" />
                {projectData.map((project) => (
                    <ProjectCards name={project.name} image={project.image} details={project.details} pageLink={project.pageLink} pageSource={project.pageSource} />
                ))}
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Projects;