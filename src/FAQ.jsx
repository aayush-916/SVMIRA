import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <FaChevronDown className={`faq-icon ${isOpen ? "open" : ""}`} />
      </div>

      {/* ✅ Wrapping with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "What services do you offer?", answer: "We provide end-to-end construction solutions, including residential, commercial, and industrial projects." },
    { question: "How long does a project take?", answer: "Project duration varies depending on the scope, but we ensure timely delivery with the highest quality standards." },
    { question: "Do you offer customized designs?", answer: "Yes, we work closely with clients to create customized, innovative, and functional designs." },
    { question: "What materials do you use?", answer: "We use premium, durable, and high-quality materials to ensure long-lasting structures." },
    { question: "Are your prices transparent?", answer: "Yes, we believe in honest pricing with no hidden costs." },
    { question: "Do you handle legal permits and approvals?", answer: "Absolutely! We take care of all necessary permits and compliance for hassle-free project execution." },
    { question: "How do I get started with my project?", answer: "Simply contact us for an initial consultation, and we’ll guide you through the entire process." },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.h2
          className="faq-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Frequently Asked <span className="highlight">Questions</span>
        </motion.h2>

        <motion.p
          className="faq-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Find answers to the most common queries about our construction services.
        </motion.p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
