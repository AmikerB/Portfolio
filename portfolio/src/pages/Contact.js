import React from 'react';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import ContactMe from "../components/ContactMe";
import Footer2 from '../components/Footer2';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="Contact" text="To contact me click on the links below" />
            <ContactMe />
            <Footer2 />
        </div>
    )
}

export default Contact;