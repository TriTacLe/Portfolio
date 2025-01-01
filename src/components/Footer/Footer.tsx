import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:tritac.le@gmail.com">tritac.le@gmail.com</a>
          </p>
          <p>Phone: +4747686930</p>
        </div>

        <div className="footer-section navigation">
          <h4>SITE LINKS</h4>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Tri Tac Le. Built with React +
          TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
