import React from "react";
import { Sparkles, Layers3, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/features.css";

const Features = () => {
 
  return (
    <section className="features-section" id="about">
      {/* =====================================
          BACKGROUND DECORATION
      ===================================== */}

      <div className="features-orb features-orb-one"></div>
      <div className="features-orb features-orb-two"></div>
      <div className="features-orb features-orb-three"></div>

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="features-header">
        <span className="section-label">WHAT WE DO</span>

        <h2>
          Everything you need to
          <span> build something great.</span>
        </h2>

        <p>
          We combine design, technology, and creativity to build digital
          experiences that make an impact.
        </p>
      </div>

      {/* =====================================
          FEATURES
      ===================================== */}

      <div className="features-grid">
        {/* =====================================
            FEATURE 01
        ===================================== */}

        <div className="feature-card feature-card-purple">
        

          <div className="feature-icon">
            <Sparkles size={27} />
          </div>

          <div className="feature-content">
            <h3>Beautiful Design</h3>

            <p>
              Create modern and engaging experiences with thoughtful design and attention to every detail
            </p>
          </div>

          <Link to="/design" className="feature-arrow">
            <ArrowUpRight size={20} />
          </Link>

          <div className="card-glow"></div>
        </div>

        {/* =====================================
            FEATURE 02
        ===================================== */}

        <div className="feature-card feature-card-blue">
      

          <div className="feature-icon">
            <Layers3 size={27} />
          </div>

          <div className="feature-content">
            <h3>Powerful Technology</h3>

            <p>
             Build scalable digital products using modern technologies designed for performance and flexibility. 
            </p>
          </div>

          <Link to="/technology" className = "feature-arrow">
                <ArrowUpRight size={20} />
          </Link>

          <div className="card-glow"></div>
        </div>

        {/* =====================================
            FEATURE 03
        ===================================== */}

        <div className="feature-card feature-card-orange">
     

          <div className="feature-icon">
            <Zap size={27} />
          </div>

          <div className="feature-content">
            <h3>Built for Innovation</h3>

            <p>
               Turn ambitious ideas into meaningful digital experiences that are ready for the future.- Innovation
            </p>
          </div>

          <Link to="/innovation" className = "feature-arrow">
                <ArrowUpRight size={20} />
          </Link>

          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
