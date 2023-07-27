import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navigation component displays the main navigation menu with links to different pages of the website
// It also handles the logic for displaying "Logout" or "Sign In" based on user authentication

export const Navigation = () => {
  // State to track user authentication status (whether user is logged in or not)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // Function to handle user logout
  const handleLogout = () => {
    // Remove the user token from localStorage
    localStorage.removeItem('token');
    // Update the isLoggedIn state to false
    setIsLoggedIn(false);
  };

  return (
    <nav>
      {/* Unordered list for navigation links */}
      <ul className="navigation-links">
        {/* Home link */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* About link */}
        <li>
          <Link to="/#aboutMe">About Tom</Link>
        </li>
        {/* Store link */}
        <li>
          <Link to="/store">Store</Link>
        </li>
        {/* Blog link */}
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        {/* Manage Posts link (visible only if user is logged in) */}
        {isLoggedIn && (
          <li>
            <Link to="/managePosts">Manage Posts</Link>
          </li>
        )}
        {/* Workshop link */}
        <li>
          <Link to="/workshop">Workshop</Link>
        </li>
        {/* Online Coaching link */}
        <li>
          <Link to="/online-coaching">Online Coaching</Link>
        </li>
        {/* Contact link */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Logout or Sign In link based on user authentication */}
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