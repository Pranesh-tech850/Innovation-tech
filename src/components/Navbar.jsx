

import React, {useState} from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import "../styles/navbar.css";

import IB_LOGO from "../images/IB_LOGO.jpg";

import { Link,useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };



  return (

    <header
      className={`navbar ${
        menuOpen ? "navbar-menu-open" : ""
      }`}
    >

      <div className="navbar-container">


        {/* =====================================
            LOGO
        ===================================== */}

        <a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >

          <div className="logo-mark">

            <img
              src={IB_LOGO}
              alt="Innovative Blossom logo"
            />

          </div>

          <span>
            Innovative Blossom
          </span>

        </a>


        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <nav className="navbar-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#cta">
            Services
          </a>

          <a href="#projects">
            Products
          </a>

        </nav>


        {/* =====================================
            DESKTOP CONTACT
        ===================================== */}

        <a
          href="#contact"
          className="navbar-button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/contact")
          }}
        >

          Contact Us

   
        </a>


        {/* =====================================
            MOBILE MENU BUTTON
        ===================================== */}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}

        </button>

      </div>


      {/* =====================================
          MOBILE NAVIGATION

          Lives INSIDE the bar so the two form a single card: .navbar
          owns the background, border, radius and blur, and this panel
          just extends its height when open.
      ===================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <nav className="mobile-nav-links">

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#cta"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Products
          </a>

         
       <Link to="/contact">Contact us</Link>
      

        </nav>

      </div>

    </header>

  );

};


export default Navbar;