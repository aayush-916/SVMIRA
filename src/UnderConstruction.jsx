import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Greenwood Residency",
    description: "A premium apartment complex offering modern amenities, lush green surroundings, and excellent connectivity to city hubs.",
    image: "./under1.jpg", 
  },
  {
    id: 2,
    title: "Royal Heights",
    description: "A luxurious high-rise apartment designed for comfortable and spacious living, featuring world-class facilities.",
    image: "under2.jpg", 
  },
  {
    id: 3,
    title: "Sunrise Apartments",
    description: "Affordable yet elegant residential apartments with a focus on sustainability and community living.",
    image: "under3.webp",
  },
];

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <h2 className="section-title4">
        Ongoing <span className="highlight">Construction Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" />
              ) : (
                <div className="project-placeholder">Image Here</div>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UnderConstruction;
