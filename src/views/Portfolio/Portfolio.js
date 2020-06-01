import React from "react";
import projects from "./Projects";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <div>
      {projects.map((project) => (
        <div className="card">
          <div className="thumbnail">
            <img className="left" src={project.img} alt="project" />
          </div>
          <div className="right">
            <h1>{project.title}</h1>
            <div className="links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="gh" icon={faGithub} size="2x" />
              </a>
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="youtube"
                  icon={faYoutube}
                  size="2x"
                />
              </a>
            </div>
            <div className="separator"></div>
            <p className="description">{project.description}</p>
            <div className="tech">
              <span className="tech-title">Technologies Utilized: </span>
              <span>{project.techs}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
