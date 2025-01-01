import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <header className={styles.header}>
          <img
            className={styles.logoImg}
            src="src/assets/TriLogo.png"
            alt="Logo"
          />
          <h1 className={styles.h1}>Tracker</h1>
        </header>
      </div>
    </>
  );
};

export default Header;
