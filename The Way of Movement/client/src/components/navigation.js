import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#AboutMe">About Tom</Link>
        </li>
        <li>
          <Link to="/Store">Store</Link>
        </li>
        <li>
          <Link to="/Blog/Movement101">Blog</Link>
        </li>
        <li>
          <Link to="/Workshop">Workshop</Link>
        </li>
        <li>
          <Link to="/Online-Coaching">Online Coaching</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
