import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";
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
          <p>123, MG Road, Delhi, India</p>
          <p>📞 <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p>📧 <a href="mailto:info@xyzconstructions.com">info@xyzconstructions.com</a></p>
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
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
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
