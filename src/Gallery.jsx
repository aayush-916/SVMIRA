import React, { useEffect } from "react";
import './App.css'
import { motion } from "framer-motion";

const images = [
  "./image/gl9.jpg",
  "./image/gl10.jpg",
  "./image/gl8.jpg",
  "./image/gl7.jpg",
  "./image/gl6.jpg",
  "./image/gl5.jpg",
  "./image/gl4.jpg",
  "./image/gl3.jpg",
  "./image/gl2.jpg",
  "./image/gl1.jpg",
];

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="gallery2">
      <motion.h2
        className="gallery2-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Our <span className="highlight">Gallery</span>
      </motion.h2>

      <motion.p
        className="gallery2-description"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Take a look at our recent construction projects, built with quality and precision.
      </motion.p>

      <div className="gallery2-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery2-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <img src={img} alt={`Project ${index + 1}`} className="gallery2-image" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
