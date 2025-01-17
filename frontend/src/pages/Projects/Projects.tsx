import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.projectContainer}>
        <h1>My Projects</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
