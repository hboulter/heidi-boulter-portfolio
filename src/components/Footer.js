import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/hboulter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="github" icon={faGithub} size="2x" />
      </a>
      <a
        href="https://medium.com/@boulter.heidi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="medium" icon={faMedium} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/heidiboulter/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default Footer;
