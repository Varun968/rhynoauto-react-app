import React from 'react';
import './ContactUs.css'; 
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        <strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a>
      </p>
      <p>
        <strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a>
      </p>
      <p>
        <strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
      </p>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://in.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
