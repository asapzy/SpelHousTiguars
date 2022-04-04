import React from "react";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar--container">
        <ul className="nav--menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
