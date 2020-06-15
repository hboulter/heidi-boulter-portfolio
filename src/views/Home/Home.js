import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__heading">
        <h1 className="home__heading--h1">
          Hello, I am <strong>Heidi Boulter</strong> <hr />
        </h1>
        <h2 className="home__heading--h2">
          I am a<strong> Software Engineer</strong> looking for opportunities in
          <strong> Austin, TX</strong>
        </h2>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={"button home__button"}
        href="mailto:boulter.heidi@gmail.com"
      >
        Contact
      </a>

      <NavLink to="/about" exact className={"button home__button"}>
        Learn More
      </NavLink>
    </div>
  );
};

export default Home;
