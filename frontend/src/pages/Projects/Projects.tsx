import React from "react";
import styles from "./Projects.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const projects = [
  {
    title: "Food waste reduction application",
    description:
      "TUI Java OOP application that administrates and documents a clients food inventory",
    image: "/src/assets/Mappevurdering.png",
    link: "https://github.com/NTNU-IDI/idatt1003-mappe-del-1-2024-TriTacLe",
  },
  {
    title: "This website",
    description: "A simple website made using react framework with typescript",
    image: "/src/assets/portfolio.png",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "/src/assets/placeholder.png",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "/src/assets/placeholder.png",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "/src/assets/placeholder.png",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "/src/assets/placeholder.png",
    link: "#",
  },
  {
    title: "Soon...",
    description: "Soon...",
    image: "/src/assets/placeholder.png",
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
                <a
                  href={project.link}
                  className={styles.cardButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
