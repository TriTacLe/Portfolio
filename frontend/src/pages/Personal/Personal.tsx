import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//import Login from "../../components/Login/Login";
//import Signup from "../../components/Login/Signup";

const Personal: React.FC = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

//<Router>
/*
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} /> {/* /personal */ //}
/*
        <Route path="/signup" element={<Signup />} /> {/* /personal/signup */ //}
/*  
        </Routes>
      <Footer />
    </>
    */
//</Router>

export default Personal;
