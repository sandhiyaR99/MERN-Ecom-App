import React from 'react';
import "../Styles/About.css"
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <><Navbar />
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
        Welcome to MyWebsite, your number one source for all things product. We're dedicated to giving you the very best of product, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className="about-description">
        Founded in 2024 by San, MyWebsite has come a long way from its beginnings in India. When San first started out, their passion for Passion drove them to do tons of research, quit their day job, and gave them the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over India, and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the eCommerce industry.
        </p>
        <p className="about-description">
        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us!
        </p>
        <button><Link to={'/contact'}>Contact us</Link></button>
      </div>
    </>
  );
};

export default About;
