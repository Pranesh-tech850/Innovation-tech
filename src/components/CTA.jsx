import React from "react";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";
import "../styles/cta.css";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section" id="cta">
      {/* =====================================
          BACKGROUND EFFECTS
      ===================================== */}

      <div className="cta-background"></div>

      <div className="cta-glow cta-glow-purple"></div>

      <div className="cta-glow cta-glow-pink"></div>

      <div className="cta-glow cta-glow-blue"></div>

      {/* Decorative floating elements */}

      <div className="cta-orb cta-orb-one"></div>

      <div className="cta-orb cta-orb-two"></div>

      <div className="cta-orb cta-orb-three"></div>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="cta-inner">
        {/* Badge */}

        <div className="cta-badge">
          <span className="cta-badge-icon">
            <Sparkles size={14} />
          </span>
          LET'S CREATE TOGETHER
        </div>

        {/* Heading */}

        <h2 className="cta-title">
          Have an idea?
          <span>Let's make it real.</span>
        </h2>

        {/* Description */}

        <p className="cta-description">
          Great products start with a simple conversation. Tell us what you're
          imagining and let's turn your idea into something extraordinary.
        </p>

        {/* Buttons */}

        <div className="cta-actions">
          {/* <a
            href="mailto:hello@example.com"
            className="cta-primary"
          > */}

          {/* <span>
              To Build a Product
            </span>

            <span className="cta-arrow">
              <ArrowUpRight size={19} />
            </span> */}

          <div className="cta-actions">
            <button
              className="cta-secondary"
              onClick={() => navigate("/contact ")}
            >
              <div className = "message-icon">  
                <MessageCircle size={20} /> 
              </div>
              <h5>Have a project in mind? Let’s talk.</h5>

            </button>
          </div>
        </div>

        {/* Small availability */}

        
      </div>

      {/* =====================================
          BOTTOM INFORMATION
      ===================================== */}

      <div className="cta-bottom">
        <span>Have a Project in Mind?Let’s connect and explore</span>

        <span>How Innovative Blossom can work with you to find the right solution.</span>
      </div>
    </section>
  );
};

export default CTA;
