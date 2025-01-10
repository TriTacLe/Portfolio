import React from "react";
import styles from "./About.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <p>About Page Content</p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
