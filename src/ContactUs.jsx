import React from 'react';
import './contact.css'; 
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar/>
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We value your feedback and are here to help. Below you’ll find all the ways you can reach us and meet our amazing team.</p>
      </header>

      <div className='contact-container'>
        <div className='contact-card'>
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> deni@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
        </div>

        <div className='additional-info-card'>
          <h2>Business Hours</h2>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>

      <Footer st={{
        color: "black",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: "1rem",
        textAlign: "center",
        userSelect: "none",
        fontSize: "17px"
      }} />
    </div>
  );
};

export default Contact;
