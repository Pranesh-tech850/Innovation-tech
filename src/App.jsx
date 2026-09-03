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
import Testimonial from "./components/Testimonial";


const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Projects />
        <CTA />
        <Testimonial />
      </main>

      <Footer />
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <>
              <Home />
              <ContactModal />
            </>
          }
        />


        {/* DESIGN POPUP */}
        <Route
          path="/design"
          element={
            <>
              <Home />
              <Design />
            </>
          }
        />


        {/* TECHNOLOGY POPUP */}
        <Route
          path="/technology"
          element={
            <>
              <Home />
              <Technology />
            </>
          }
        />


        {/* INNOVATION POPUP */}
        <Route
          path="/innovation"
          element={
            <>
              <Home />
              <Innovation />
            </>
          }
        />

         
        

      </Routes>

    </BrowserRouter>
  );
};


export default App;