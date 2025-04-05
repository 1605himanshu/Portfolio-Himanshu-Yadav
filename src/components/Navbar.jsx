import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items"> PORTFOLIO</div>
        <div className="right">
          <a href="#home" className="nav_items">
            HOME
          </a>
          <a href="#skills" className="nav_items">
            SKILLS
          </a>
          <a href="#projects" className="nav_items">
            PROJECTS
          </a>
          <a href="#contact" className="nav_items">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
