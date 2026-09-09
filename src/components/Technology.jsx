import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/technology.css";
import tech1 from "../images/tech1.jpg"
import tech2 from "../images/tech2.jpg"
import tech3 from "../images/tech3.jpg";

const Technology = () => {

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
    <div className="technology-overlay">

      <div className="technology-modal">

        {/* Close Button */}

        <button
          className="technology-close"
          onClick={() => navigate("/")}
        >
          ×
        </button>


        {/* Header */}

        <div className="technology-header">

          

          <h2>
            Powerful Technology
          </h2>

          <p>
            We combine modern technologies, cloud platforms, scalable architecture, AI, automation, and engineering expertise to build fast, secure, reliable, and future-ready digital products.

From custom software development and cloud solutions to AI-powered applications, intelligent automation, payment solutions, and quality engineering, we help businesses modernize technology, streamline operations, and turn ideas into scalable digital experiences.

Our technology expertise enables us to design, build, test, integrate, and continuously improve solutions that perform today and evolve with your business tomorrow.
          </p>

        </div>


        {/* Technology Showcase */}

        <div className="technology-gallery">

          <div className="technology-image-card large">

            <img
              src={tech3}
              alt="Modern technology workspace"
            />

            <div className="technology-image-overlay">

              <span>01</span>

              <h3>
                Modern Stack
              </h3>

            </div>

          </div>


          <div className="technology-image-card">

            <img
              src={tech2}
              alt="Software development"
            />

            <div className="technology-image-overlay">

              <span>02</span>

              <h3>
                Smart Development
              </h3>

            </div>

          </div>


          <div className="technology-image-card">

            <img
              src={tech1}
              alt="Cloud technology"
            />

            <div className="technology-image-overlay">

              <span>03</span>

              <h3>
                Cloud Solutions
              </h3>

            </div>

          </div>

        </div>


        {/* Technology Statistics */}

        {/* <div className="technology-info">

          <div className="technology-info-item">

            <span>✦</span>

            <div>
              <strong>15+</strong>
              <p>Technologies Used</p>
            </div>

          </div>


          <div className="technology-info-item">

            <span>✦</span>

            <div>
              <strong>20+</strong>
              <p>Projects Built</p>
            </div>

          </div>


          <div className="technology-info-item">

            <span>✦</span>

            <div>
              <strong>99%</strong>
              <p>Performance Focus</p>
            </div>

          </div>

        </div> */}


        {/* Technology Stack */}

        <div className="technology-stack">

          <span className="technology-section-label">
            OUR TECHNOLOGY STACK
          </span>


          <div className="technology-stack-list">

            <div className="technology-stack-item">

              <span>01</span>

              <div>
                <h3>Frontend</h3>

                <p>
                  React, JavaScript, HTML, CSS and modern UI systems.
                </p>
              </div>

            </div>


            <div className="technology-stack-item">

              <span>02</span>

              <div>
                <h3>Backend</h3>

                <p>
                  Node.js, APIs and scalable server-side architecture.
                </p>
              </div>

            </div>


            <div className="technology-stack-item">

              <span>03</span>

              <div>
                <h3>Database</h3>

                <p>
                  Reliable data systems designed for performance and scale.
                </p>
              </div>

            </div>


            <div className="technology-stack-item">

              <span>04</span>

              <div>
                <h3>Cloud</h3>

                <p>
                  Flexible infrastructure and deployment solutions.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Bottom Message */}

        <div className="technology-bottom">

          <span>BUILD • SCALE • INNOVATE</span>

          <p>
            Technology should not just solve today's problems.
            It should prepare your product for tomorrow.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Technology;