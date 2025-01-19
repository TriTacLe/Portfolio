import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
//import Personal from "./pages/Personal/Personal";
import styles from "./App.module.css";
import ErrorBoundary from "./utils/ErrorBoundary";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;
