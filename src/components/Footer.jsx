
import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import {
  FiMail,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom"

import "../styles/footer.css";

const Footer = () => {
    const navigate = useNavigate();
  return (
  
    <footer className="footer">

      {/* =====================================
          TOP FOOTER
      ===================================== */}

      <div className="footer-top">

        {/* Brand */}

        <div className="footer-brand">

          <div className="footer-logo">

            <span className="logo-dot"></span>

            Innovative Blossom

          </div>


          <h2>
            Building digital
            <span> experiences.</span>
          </h2>


          <p>
            We design and develop modern digital products
            that turn ideas into meaningful experiences.
          </p>

        </div>


        {/* =====================================
            NAVIGATION
        ===================================== */}

        <div className="footer-column">

          <span className="footer-heading">
            EXPLORE
          </span>


          <a href="#home">
            Home
          </a>


          <a href="#projects">
            Products
          </a>


          <a href="#about">
            About
          </a>


          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            navigate("/contact")
          }}>
            Contact
          </a>

        </div>


        {/* =====================================
            SOCIAL
        ===================================== */}

        <div className="footer-column">

          <span className="footer-heading">
            CONNECT
          </span>


          <a
            href="https://www.linkedin.com/company/innovative-blossom-pvt-ltd/"
            target="_blank"
            className="footer-social"
          >

            <FaLinkedin size={16} />

            LinkedIn

          </a>


        


        

        </div>


        {/* =====================================
            CONTACT
        ===================================== */}

        <div className="footer-column footer-contact">

          <span className="footer-heading">
            HAVE A PROJECT?
          </span>


          <a
            href="mailto:admin@innovativeblossom.com"
            className="footer-email"
          >

            admin@innovativeblossom.com

            <FaArrowUpRightFromSquare size={14} />

          </a>


          {/* <a
            href="mailto:admin@innovativeblossom.com"
            className="footer-mail-button"
          >

            <FiMail size={17} />

            Let's talk

          </a> */}

        </div>

      </div>


      {/* =====================================
          BIG BRAND TEXT
      ===================================== */}

      <div className="footer-big-text">

        <span>
          CREATE.
        </span>

        <span>
          BUILD.
        </span>

    

      </div>


      {/* =====================================
          BOTTOM
      ===================================== */}

     

    </footer>
  );
};

export default Footer;
