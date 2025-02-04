import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaTools, FaMoneyBillWave, FaClock, FaThumbsUp } from "react-icons/fa";
import "./App.css"; // Using global CSS file

const WhyChooseItem = ({ icon: Icon, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="choose-item"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <Icon className="choose-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="choose-container">
        <motion.h2
          className="choose-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Why <span className="highlight">Choose Us?</span>
        </motion.h2>

        <motion.p
          className="choose-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We are committed to delivering excellence with expertise, transparency, and quality craftsmanship.
        </motion.p>

        <div className="choose-grid">
          <WhyChooseItem icon={FaUsers} title="Experienced Professionals" description="Skilled architects, engineers, and craftsmen ensuring quality at every step." />
          <WhyChooseItem icon={FaTools} title="Quality Materials" description="We use only the finest, durable materials to ensure longevity and safety." />
          <WhyChooseItem icon={FaMoneyBillWave} title="Transparent Pricing" description="No hidden charges—just fair and honest pricing for every project." />
          <WhyChooseItem icon={FaClock} title="Timely Execution" description="We respect deadlines and ensure timely completion without compromising quality." />
          <WhyChooseItem icon={FaThumbsUp} title="Customer-Centric Approach" description="Your satisfaction is our priority—delivering results that exceed expectations." />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
