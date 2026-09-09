import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/design.css";

import design1 from "../images/image_1.jpg";
import design2 from "../images/design2.jpg";
import design3 from "../images/design3.jpg";

const Design = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="design-overlay">

      <div className="design-modal">

        {/* Close button */}
        <button
          className="design-close"
          onClick={() => navigate("/")}
        >
          ×
        </button>


        {/* Header */}
        <div className="design-header">

         

          <h2>
            Beautiful Design
          </h2>

          <p>
            We design intuitive, engaging digital experiences 
            that balance thoughtful aesthetics with seamless usability. 
            From user research and experience strategy to wireframes, UI design, prototyping, and design systems, 
            we create user-centered interfaces that are simple to navigate, visually compelling, 
            and built to drive meaningful engagement across web and mobile platforms
          </p>

        </div>


        {/* Image Showcase */}
        <div className="design-gallery">

          <div className="design-image-card large">

            <img
              src={design1}
              alt="Modern UI design"
            />

            <div className="image-overlay">
              <span>01</span>
              <h3>Modern Interfaces</h3>
            </div>

          </div>


          <div className="design-image-card">

            <img
              src={design2}
              alt="Creative visual design"
            />

            <div className="image-overlay">
              <span>02</span>
              <h3>Visual Systems</h3>
            </div>

          </div>


          <div className="design-image-card">

            <img
              src={design3}
              alt="UX design concept"
            />

            <div className="image-overlay">
              <span>03</span>
              <h3>User Experience</h3>
            </div>

          </div>

        </div>


        {/* Design Information */}
        {/* <div className="design-info">

          <div className="design-info-item">
            <span>✦</span>

            <div>
              <strong>12+</strong>
              <p>Projects Designed</p>
            </div>
          </div>


          <div className="design-info-item">
            <span>✦</span>

            <div>
              <strong>8+</strong>
              <p>Industries Served</p>
            </div>
          </div>


          <div className="design-info-item">
            <span>✦</span>

            <div>
              <strong>4</strong>
              <p>Design Principles</p>
            </div>
          </div>

        </div> */}


        {/* Design Principles */}
        <div className="design-principles">

          <span>OUR APPROACH</span>

          <div className="principle-list">

            <div>
              <span>01</span>
              <h3>Clarity</h3>
              <p>
                Every element has a clear purpose.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Simplicity</h3>
              <p>
                Clean interfaces without unnecessary complexity.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Consistency</h3>
              <p>
                A unified visual language across every screen.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Impact</h3>
              <p>
                Design that creates memorable experiences.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Design;