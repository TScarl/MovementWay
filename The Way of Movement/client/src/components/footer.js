import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
      <p className="footer-text">© 2023 The Way of Movement. All rights reserved.</p>
        <div className="footer-links">
          <p>
            <span><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} /></a></span>
          </p>
          <p>
            <span><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /></a></span>
          </p>
          <p>
            <span><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /></a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
