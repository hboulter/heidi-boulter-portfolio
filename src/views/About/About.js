import React from "react";
import "./About.css";
// import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="intro">
      <div className="intro__shape">
        {/* <NavLink to="/contact" exact> */}
        <img src="../images/1.jpg" alt="profile_img" className="intro__img" />
        {/* <div className="intro__title">Contact</div> */}
        {/* </NavLink> */}
      </div>
      <div className="intro__text">
        'Hello world' my name is Huyen but I go by Heidi! I'm a recent graduate
        of the Software Engineering program at Flatiron School, and I have an
        undergraduate educational degree from The Ohio State University. I'm
        hoping to join a purpose driven team that is using technology in a novel
        way to change lives. My ideal role would be one that allows me to
        leverage and build on my immense technical skills in either sotware
        engineering or data analysis, but that also allows me to wear many hats
        and contribute to other business operations. Beyond my technical
        capabilities, I would bring drive, attention to detail, and an eye for
        aesthetically pleasing design and data visualization to the team. On a
        more personal note - I live in Austin, TX with my husband and my boston
        terrier named Zara. I love kayaking, hiking, playing volleyball and
        above all else, food. If you think I may have the skills your company is
        looking for, please feel free to reach out using my information on the
        contact page!
      </div>
    </div>
  );
};

export default About;
