import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './About.css'

const About = () =>
{
    return(
        <div className="about-body">
            <Navbar/>
            <div className="about-container">
                <h1>About This Website</h1>
                <p>Welcome to my mini e-commerce site—a showcase of my passion for crafting functional and user-friendly interfaces!
                This project is part of my portfolio, highlighting my skills in frontend web development. Designed as a key addition to my resume, 
                it demonstrates my ability to create responsive layouts, implement seamless navigation, and provide engaging user experiences using modern web technologies.
                While this platform focuses primarily on frontend design, it lays the groundwork for integrating backend functionalities in future projects. 
                Feel free to explore, and if my work aligns with your needs, let’s connect and discuss how I can contribute to your vision!</p>
            </div>
            <Footer st={{color: "black",
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "1rem",
            textAlign: "center",
            userSelect: "none",
            fontSize: "17px"}}/>
        </div>        
    )
}

export default About;