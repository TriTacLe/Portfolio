import React from "react";
import styles from "./Projects.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Food waste reduction application",
    description:
      "Java OOP application that administrates and documents a clients food inventory ",
    image: "path-to-image1",
    link: "#",
  },
  {
    title: "This website",
    description: "A simple website made using react framework with typescript",
    image: "path-to-image2",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "path-to-image3",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.projectsContainer}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDescription}>{project.description}</p>
                <a href={project.link} className={styles.cardButton}>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
