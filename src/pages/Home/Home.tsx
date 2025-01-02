import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.home}>
          <h1 className={styles.homeH1}>Welcome to my website</h1>
          <p className={styles.homeText}>
            Welcome to my portfolio! This simple yet dynamic website, built
            using React and TypeScript, highlights my ability for creating
            responsive, functional, and visually engaging web applications.
            Here, you'll find examples of my work that showcase my skills. Take
            a look around and feel free to reach out. I'd love to connect and
            collaborate!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
