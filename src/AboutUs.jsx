import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaHandshake, FaLightbulb } from "react-icons/fa";
import "./App.css";
import ContactForm from "./ContactForm";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         <span className="highlight">About Us</span>
      </motion.h2> */}
      
      <motion.div
        className="about-section"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FaBuilding className="about-icon large-icon" />
        <h3 className="about-heading">Our Vision</h3>
        <p className="about-text">
          At SVMIRA Construction & Developers Pvt. Ltd., we envision creating world-class residential and commercial spaces that redefine the urban landscape of India. Our goal is to build sustainable and high-quality infrastructure that enhances lives and communities.
        </p>
      </motion.div>
      
      <motion.div
        className="about-section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FaHandshake className="about-icon large-icon" />
        <h3 className="about-heading">Our Mission</h3>
        <p className="about-text">
          Our mission is to provide premium-quality homes and commercial properties with integrity, innovation, and excellence. We focus on customer satisfaction, timely project delivery, and eco-friendly construction methods to ensure a better future for generations to come.
        </p>
      </motion.div>
      
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FaLightbulb className="about-icon large-icon" />
        <h3 className="about-heading">Our Values</h3>
        <p className="about-text">
          We are committed to honesty, transparency, and customer-centric service. Our core values include:
          <ul>
            <li><strong>Quality & Excellence:</strong> Delivering top-notch construction with premium materials.</li>
            <li><strong>Integrity & Trust:</strong> Building relationships based on transparency and ethics.</li>
            <li><strong>Innovation & Sustainability:</strong> Using cutting-edge technology and eco-friendly methods.</li>
            <li><strong>Customer Satisfaction:</strong> Understanding and exceeding client expectations.</li>
          </ul>
        </p>
      </motion.div>
    <Team/>
    <ContactForm/>
    </div>
  );
};

export default AboutUs;