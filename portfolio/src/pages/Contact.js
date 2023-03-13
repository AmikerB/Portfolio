import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import Form from "../components/Form";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="Contact" text="To contact me use the form below or message me on one of my socials " />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact