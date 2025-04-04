import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";
import {Link} from 'react-router-dom'
import "./App.css"; // Global styles

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="footer">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="footer-container">
        {/* Company Info */}
        <motion.div
          className="footer-section company-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>SVMIRA COSTRUCTION AND DEVELOPERS PRIVATE LIMITED</h3>
          <p>Saguna more, mainpura, main road, danapur cantt patna 801503</p>
          <p>📞 <a href="tel:+919709993000">+91 9709993000</a></p>
          <p>📞 <a href="tel:+919708004545">+91 9708004545</a></p>
          <p>📧 <a href="mailto:svmiraconstructionanddevel@gmail.com"> <span className="emailc">svmiraconstructionanddevel@gmail.com</span></a></p>
          <p>CIN: U41001BR2025PTC072929</p>
          <motion.a 
            href="#quote"
            className="quote-btn open-modal-btn"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get a Quote
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-section quick-links"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>Quick Links</h3>
          <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/AboutUs' >About Us</Link></li>
          <li><Link to='/Services'>Services</Link></li>
          <li><Link to='/Contact' >Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="footer-section gallery"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>Gallery</h3>
          <div className="gallery-images">
            <img src="./Residential.jpg" alt="Gallery 1" />
            <img src="./Commercial.webp" alt="Gallery 2" />
            <img src="./Interior.jpeg" alt="Gallery 3" />
            <img src="./Renovation.jpg" alt="Gallery 4" />
          </div>
        </motion.div>

        {/* Copyright & Developer Link */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SVMIRA Construction All rights reserved | Developed by{" "}
          <a href="https://www.leafcode.in" target="_blank" rel="noopener noreferrer">
            LeafCode Technology
          </a>
        </p>
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;
