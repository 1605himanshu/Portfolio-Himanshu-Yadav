import React from "react";

const Footer = () => {
  return (
    <>
     
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Himanshu Yadav</h3>
            <p>Mobile : +91 7309089753</p>
              <p>&copy; 2024 All rights reserved.</p>
          </div>
          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


