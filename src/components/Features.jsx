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
              We design intuitive, engaging digital experiences that balance thoughtful aesthetics with seamless usability. 
              From user research and experience strategy to wireframes, UI design, prototyping, and design systems, 
              we create user-centered interfaces that are simple to navigate, visually compelling, 
              and built to drive meaningful engagement
               across web and mobile platforms.
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
              We combine modern technologies, cloud platforms, scalable architecture, AI, automation, and engineering expertise to build fast, secure, reliable, and future-ready digital products.

From custom software development and cloud solutions to AI-powered applications, intelligent automation, payment solutions, and quality engineering, we help businesses modernize technology, streamline operations, and turn ideas into scalable digital experiences.

Our technology expertise enables us to design, build, test, integrate, and continuously improve solutions that perform today and evolve with your business tomorrow.
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
                From idea to innovation, we help startups bring their vision to life. We combine technology, creativity, AI, and automation to build smart, scalable digital solutions that turn possibilities into real-world impact.
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
