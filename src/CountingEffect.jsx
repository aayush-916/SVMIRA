import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaBuilding, FaSmile } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import "./App.css";

const CountingEffect = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div className="counting-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="count-card">
          <FaBuilding className="count-icon" />
          <h2 className="count-number">
            {startCounting && <CountUp start={0} end={20} duration={8} />}+
          </h2>
          <p className="count-text">Completed Projects</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="count-card">
          <FaSmile className="count-icon" />
          <h2 className="count-number">
            {startCounting && <CountUp start={0} end={50} duration={8} />}+
          </h2>
          <p className="count-text">Satisfied Clients</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="count-card">
          <IoIosConstruct className="count-icon" />
          <h2 className="count-number">
            {startCounting && <CountUp start={0} end={5} duration={6} />}+
          </h2>
          <p className="count-text">Under construction</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CountingEffect;
