import React from "react";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  )
};
