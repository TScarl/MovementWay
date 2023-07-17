import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-links">
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
