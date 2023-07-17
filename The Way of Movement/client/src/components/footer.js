import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <p>
            <span><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} /></a></span>... doesn't exist yet
          </p>
          <p>
            <span><a href="https://github.com/TScarl" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /></a></span>My Github account
          </p>
        </div>
      </div>
    </footer>
  );
}
