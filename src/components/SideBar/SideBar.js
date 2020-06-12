import React from "react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const NavBar = () => {
  const activeStyles = {
    borderBottom: "0.0625rem solid #f5f5f5",
    color: "#f5f5f5",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <div className="header"></div>
      <div className="sidebar">
        <div className="img__shape">
          <NavLink to="/" exact>
            <img
              src="../images/1.jpg"
              alt="profile_img"
              className="profile__img"
            />
            <div className="profile__title">Heidi Boulter</div>
          </NavLink>
        </div>

        <div>
          <ul className="ul">
            <li className="li">
              <NavLink
                to="/about"
                exact
                className={"button"}
                activeStyle={activeStyles}
              >
                About
              </NavLink>
            </li>

            <li className="li">
              <NavLink
                to="/portfolio"
                exact
                className={"button"}
                activeStyle={activeStyles}
              >
                Portfolio
              </NavLink>
            </li>

            <li className="li">
              <NavLink
                to="/contact"
                exact
                className={"button"}
                activeStyle={activeStyles}
              >
                Contact
              </NavLink>
            </li>

            <li className="li">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                href="../Huyen-Boulter-Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar__footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NavBar;
