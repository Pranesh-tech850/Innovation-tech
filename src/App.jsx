import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Design from "./components/Design";
import Technology from "./components/Technology";
import Innovation from "./components/Innovation";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Projects />
        <CTA />
      </main>

      <Footer />
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        {/* Home stays mounted underneath so this reads as a modal over
            the landing page instead of a full-page takeover */}

        <Route
          path="/contact"
          element={
            <>
              <Home />
              <ContactModal />
            </>
          }
        />

        <Route path="/design" element={<Design />} />
        <Route path="/technology" element={<Technology />}/>
           <Route path="/innovation" element={<Innovation />}/>

      </Routes>

    </BrowserRouter>
  );
};


export default App;