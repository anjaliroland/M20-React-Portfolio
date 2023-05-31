import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item p-3">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}