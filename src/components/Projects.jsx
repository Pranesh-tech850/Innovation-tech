
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import togetherEvents from "../images/togather.png";


import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      {/* =====================================
          SECTION HEADER
      ===================================== */}

      <div className="projects-header">

        <div className="projects-badge">
          SELECTED WORK
        </div>


        <h2>
          Products we've
          <span> brought to life.</span>
        </h2>


        <p>
          A selection of digital products where ideas,
          design, and technology come together.
        </p>

      </div>


      {/* =====================================
          PROJECT 01
          IMAGE LEFT / CONTENT RIGHT
      ===================================== */}

      <article className="project-row project-row-one">

        {/* IMAGE */}

        <div className="project-image-section">

          {/* Ambient glow */}

          <div className="project-glow glow-purple"></div>


          {/* Decorative blobs */}

          <div className="project-orb orb-purple"></div>

          <div className="project-orb orb-pink"></div>


          {/* Project number */}

          <div className="project-number">
            01
          </div>


          {/* Image */}

          <div className="project-image-wrapper">

            <img
              src={togetherEvents}
              alt="ToGather Event App"
              className="project-image"
            />

          </div>


          {/* Floating label */}

          <div className="floating-project-label">
            EVENT
          </div>

        </div>


        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            EVENT PLATFORM
          </div>


          <h3>
            ToGather
            <span> Event App</span>
          </h3>


          <p>
            Together Event App is a modern platform designed to
            bring people together through meaningful events
            and experiences.
          </p>


          <p>
            Users can discover events, connect with communities,
            and create memorable moments in one simple platform.
          </p>


          {/* Technologies */}

          {/* <div className="project-technologies">

            <span>React</span>

            <span>Node.js</span>

            <span>MongoDB</span>

          </div> */}


          {/* Button */}

          <a
            href="https://togatherevent.com/"
            className="project-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product



          </a>

        </div>

      </article>


      {/* =====================================
          PROJECT 02
          CONTENT LEFT / IMAGE RIGHT
      ===================================== */}

    

    </section>
  );
};

export default Projects;
/* =========================================
   PROJECTS SECTION
========================================= */
