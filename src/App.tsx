import React from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
