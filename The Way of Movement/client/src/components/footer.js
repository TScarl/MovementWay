import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Footer component displays the footer section at the bottom of the page
// It contains copyright text and social media links with corresponding icons

export function Footer() {
  return (
    <footer>
      {/* Footer container containing copyright text and social media links */}
      <div className="footer-container">
        {/* Copyright text */}
        <p className="footer-text">© 2023 The Way of Movement. All rights reserved.</p>
        {/* Social media links */}
        <div className="footer-links">
          {/* YouTube link */}
          <p>
            <span>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                {/* Render a FontAwesomeIcon component for the YouTube icon */}
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </span>
          </p>
          {/* Instagram link */}
          <p>
            <span>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                {/* Render a FontAwesomeIcon component for the Instagram icon */}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </span>
          </p>
          {/* Facebook link */}
          <p>
            <span>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                {/* Render a FontAwesomeIcon component for the Facebook icon */}
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}