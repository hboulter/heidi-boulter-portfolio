import React from "react";
// import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const activeStyles = {
    borderBottom: "0.0625rem solid #f5f5f5",
    color: "#f5f5f5",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <div className="nav-bar">
        <NavLink to="/" exact className={"button"} activeStyle={activeStyles}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          exact
          className={"button"}
          activeStyle={activeStyles}
        >
          About
        </NavLink>

        <NavLink
          to="/portfolio"
          exact
          className={"button"}
          activeStyle={activeStyles}
        >
          Portfolio
        </NavLink>

        {/* <NavLink
          to="/contact"
          exact
          className={"button"}
          activeStyle={activeStyles}
        >
          Contact
        </NavLink> */}

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="mailto:boulter.heidi@gmail.com"
        >
          Contact
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="../Huyen-Boulter-Resume.pdf"
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default NavBar;
