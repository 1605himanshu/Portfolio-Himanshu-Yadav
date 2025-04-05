import React from "react";


import { FaLinkedin } from "react-icons/fa";


import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a> */}
          
          
          <a href="https://www.linkedin.com/in/himanshu-yadav-2a564a241/" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/1605himanshu" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:imhimanshu1605@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
