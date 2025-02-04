import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import "./App.css"; // Import external CSS file

const Feature = ({ icon, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers again when scrolled back
    threshold: 0.2, // Animation triggers when 20% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      className="feature"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        <motion.h2
          className="heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Your <span className="highlight">Trusted Construction Partner</span>
        </motion.h2>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          With a legacy of excellence in the construction industry, we take pride in delivering high-quality, durable, and innovative structures that stand the test of time. Our team of skilled architects, engineers, and builders work with precision and dedication to bring your vision to life. From residential homes to large-scale commercial and industrial projects, we prioritize superior craftsmanship, cutting-edge technology, and premium materials to ensure long-lasting and aesthetically remarkable results.

At the core of our approach lies a commitment to safety, efficiency, and customer satisfaction. We meticulously plan and execute every project, adhering to the highest industry standards and ensuring timely completion without compromising on quality. Whether you're looking for a custom-built home, a modern office space, or a large-scale infrastructure project, our expert team is here to transform your ideas into reality with innovation, expertise, and reliability.
        </motion.p>

        <div className="features">
          <Feature
            icon={<Briefcase size={50} className="icon" />}
            title="Experienced Professionals"
            description="Our team comprises skilled engineers, architects, and builders."
          />
          <Feature
            icon={<ShieldCheck size={50} className="icon" />}
            title="Quality Assurance"
            description="We use premium materials and modern techniques for long-lasting structures."
          />
          <Feature
            icon={<Clock size={50} className="icon" />}
            title="On-Time Delivery"
            description="We value your time and ensure timely project completion."
          />
          <Feature
            icon={<CheckCircle size={50} className="icon" />}
            title="Customer Satisfaction"
            description="Your vision is our priority – we build with trust and excellence."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
