import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHandshake, FaUsers, FaMoneyCheckAlt, FaFileSignature, FaPencilRuler, FaClipboardCheck, FaCubes, FaProjectDiagram } from "react-icons/fa";
import "./App.css"; // Using global CSS file

const ProcessStep = ({ icon: Icon, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="process-step"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <Icon className="process-icon" />
      <h3>{title}</h3>
    </motion.div>
  );
};

const OurProcess = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <motion.h2
          className="process-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our <span className="highlight">Process</span>
        </motion.h2>

        <motion.p
          className="process-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          A step-by-step approach to turning your vision into reality with efficiency and excellence.
        </motion.p>

        <div className="process-grid">
          <ProcessStep icon={FaHandshake} title="Initial Consultation" />
          <ProcessStep icon={FaUsers} title="Assemble Our Design Team" />
          <ProcessStep icon={FaMoneyCheckAlt} title="Identify Budget" />
          <ProcessStep icon={FaFileSignature} title="Project Proposal" />
          <ProcessStep icon={FaPencilRuler} title="Create Design" />
          <ProcessStep icon={FaClipboardCheck} title="Design Review" />
          <ProcessStep icon={FaCubes} title="Material Solution" />
          <ProcessStep icon={FaProjectDiagram} title="Planning & Permit" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
