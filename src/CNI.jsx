import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Separate CSS file for styles

const CNI = () => {
  return (
    <motion.section
      className="svm-contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="svm-contact-container">
        <motion.h2
          className="svm-contact-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </motion.h2>

        <p className="svm-ceo-message">
          "At SVMIRA Construction, we build with excellence and integrity. 
          Your vision is our priority, and we ensure every project is delivered with precision and trust."
          <br />- CEO, SVMIRA Construction
        </p>

        <div className="svm-contact-info">
          <p><strong>📞 Phone:</strong> <a href="tel:9709993000">+91 9709993000</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:sudhirshiv9525@gmail.com">sudhirshiv9525@gmail.com</a></p>
          <p><strong>🌐 Website:</strong> <a href="https://www.svmiraconstruction.in" target="_blank" rel="noopener noreferrer">www.svmiraconstruction.com</a></p>
          <p><strong>📜 CIN:</strong> U41001BR2025PTC072929</p>
        </div>
      </div>
    </motion.section>
  );
};

export default CNI;
