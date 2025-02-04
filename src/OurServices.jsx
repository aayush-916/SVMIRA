import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { useInView } from "react-intersection-observer";
import "./App.css"; // Using the same CSS file

const ServiceCard = ({ image, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <motion.button
          className="services-button open-modal-btn"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Inquiry
        </motion.button>
    </motion.div>
  );
};

const OurServices = () => {
  
  return (
    <section className="services-section">
      <div className="services-container">
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our <span className="highlight">Services</span>
        </motion.h2>

        <motion.p
          className="services-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We provide end-to-end construction services designed to bring your dream projects to life with precision, quality, and innovation. Whether it’s residential, commercial, or industrial infrastructure, our expert team ensures every structure is built to perfection, combining functionality, aesthetics, and durability
        </motion.p>

        <div className="services-grid">
          <ServiceCard
            image="./Residential.jpg"
            title="Residential Construction"
            description="Dream homes built with precision and care."
          />
          <ServiceCard
            image="./Commercial.webp"
            title="Commercial Projects"
            description="Offices, malls, and complexes designed for efficiency and aesthetics."
          />
          <ServiceCard
            image="./industrial.jpeg"
            title="Industrial Infrastructure"
            description="High-quality factories and warehouses with robust engineering."
          />
          <ServiceCard
            image="./Renovation.jpg"
            title="Renovation & Remodeling"
            description="Give your property a fresh, modern look with expert remodeling."
          />
          <ServiceCard
            image="./Interior.jpeg"
            title="Interior & Exterior Designing"
            description="Aesthetic and functional designs that reflect your vision."
          />
          <ServiceCard
            image="./Architectural.jpeg"
            title="Architectural services"
            description="Professional architectural planning and design to create aesthetically appealing, functional, and sustainable structures."
          />
        </div>

      </div>
    </section>
  );
};

export default OurServices;
