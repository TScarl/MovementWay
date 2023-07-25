import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul className="navigation-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#aboutMe">About Tom</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/blog/:_id">Blog</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/managePosts">Manage Posts</Link>
          </li>
        )}
        <li>
          <Link to="/workshop">Workshop</Link>
        </li>
        <li>
          <Link to="/online-coaching">Online Coaching</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/logout" onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
