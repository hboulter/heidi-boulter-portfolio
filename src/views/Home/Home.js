import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__heading">
        <h1 className="h1">
          Hello, I am <strong>Heidi Boulter</strong> <hr />
        </h1>
        <h2 className="h2">
          I am a<strong> Software Engineer</strong> looking for opportunies in
          <strong> Austin, TX</strong>
        </h2>
      </div>
      <NavLink to="/contact" exact className={"button home__button"}>
        Hire Me
      </NavLink>

      <NavLink to="/about" exact className={"button home__button"}>
        Learn More
      </NavLink>
    </div>
  );
};

export default Home;
