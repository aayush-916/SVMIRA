import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // Add styles here

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence >
      {isOpen && (
        <>
          {/* Modal Overlay */}
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          ></motion.div>

          {/* Modal Container */}
          <div className="model-main">
          <motion.div
            className="modal-container"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <h3>Get a Quote</h3>
              <button className="close-btn" onClick={onClose}>
                &times;
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="modal-body">
              <form action="https://formsubmit.co/aayush91620@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Cab Booking Inquiry" />

                <label>Your Name*</label>
                <input type="text" className="form-control" name="name" required />

                <label>Email Address</label>
                <input type="email" className="form-control" name="email" />

                <label>Phone*</label>
                <input type="text" className="form-control" name="phone" required />

                <label>Message*</label>
                <textarea name="message" rows="4" placeholder="Your message here..." className="msg5" required></textarea>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
              
            </div>
            
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
