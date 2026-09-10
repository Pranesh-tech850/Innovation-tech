import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/innovation.css";
import inno1 from "../images/inno1.jpg";
import inno2 from "../images/inno2.jpg";
import inno3 from "../images/inno3.jpg";
const Innovation = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    // Prevent background page from scrolling
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);


  return (
    <div className="innovation-overlay">

  

        {/* Close Button */}

        <button
          className="innovation-close"
          onClick={() => navigate("/")}
        >
          ×
        </button>

<div className="innovation-modal">
        {/* Header */}

        <div className="innovation-header">

        

          <h2>
            Built for Innovation
          </h2>

          <p>
           From idea to innovation, we help startups bring their vision to life. We combine technology, creativity, AI, and automation to build smart, scalable digital solutions that turn possibilities into real-world impact.
          </p>

        </div>


        {/* Innovation Gallery */}

        <div className="innovation-gallery">

          <div className="innovation-image-card large">

            <img
              src={inno1}
              alt="Creative innovation"
            />

            <div className="innovation-image-overlay">

              <span>01</span>

              <h3>
                Creative Thinking
              </h3>

            </div>

          </div>


          <div className="innovation-image-card">

            <img
              src={inno2}
              alt="Future technology"
            />

            <div className="innovation-image-overlay">

              <span>02</span>

              <h3>
                Future Ready
              </h3>

            </div>

          </div>


          <div className="innovation-image-card">

            <img
              src={inno3}
              alt="Digital innovation"
            />

            <div className="innovation-image-overlay">

              <span>03</span>

              <h3>
                Digital Experiences
              </h3>

            </div>

          </div>

        </div>


        {/* Innovation Statistics */}

        {/* <div className="innovation-info">

          <div className="innovation-info-item">

            <span>✦</span>

            <div>
              <strong>10+</strong>
              <p>Ideas Transformed</p>
            </div>

          </div>


          <div className="innovation-info-item">

            <span>✦</span>

            <div>
              <strong>15+</strong>
              <p>Digital Solutions</p>
            </div>

          </div>


          <div className="innovation-info-item">

            <span>✦</span>

            <div>
              <strong>100%</strong>
              <p>Future Focused</p>
            </div>

          </div>

        </div> */}


        {/* Innovation Approach */}

        <div className="innovation-approach">

          <span className="innovation-section-label">
            HOW WE INNOVATE
          </span>


          <div className="innovation-approach-list">

            <div className="innovation-approach-item">

              <span>01</span>

              <div>
                <h3>
                  Explore
                </h3>

                <p>
                  We explore new ideas, emerging technologies and
                  opportunities to discover better possibilities.
                </p>
              </div>

            </div>


            <div className="innovation-approach-item">

              <span>02</span>

              <div>
                <h3>
                  Experiment
                </h3>

                <p>
                  We transform concepts into prototypes and test
                  different approaches before building the final product.
                </p>
              </div>

            </div>


            <div className="innovation-approach-item">

              <span>03</span>

              <div>
                <h3>
                  Create
                </h3>

                <p>
                  We combine creativity and technology to build
                  meaningful digital experiences.
                </p>
              </div>

            </div>


            <div className="innovation-approach-item">

              <span>04</span>

              <div>
                <h3>
                  Evolve
                </h3>

                <p>
                  We continuously improve products so they remain
                  relevant, scalable and ready for what's next.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Bottom Statement */}

        <div className="innovation-bottom">

          <span>
            IMAGINE • CREATE • EVOLVE
          </span>

          <p>
            Innovation is not just about creating something new.
            It's about creating something better.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Innovation;