import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";
/*import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
