import React, { useState } from "react";
import "../styles/testimonial.css";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import testimonial from "../images/testimonial-man.png";

const testimonials = [
  {
    name: "Danielle Aspromatis",
    role: "Co Founder, ToGather Event App",
    text: "Hear directly from the founders, business leaders, and teams we’ve partnered with to turn ideas into impactful digital solutions",
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const testimonialData = testimonials[current];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">

      {/* Background Glow */}
      <div className="testimonial-glow glow-one"></div>
      <div className="testimonial-glow glow-two"></div>

      <div className="testimonial-container">

        {/* Badge */}
        <div className="testimonial-badge">
          <span>TESTIMONIALS</span>
        </div>

        {/* Heading */}
        <h1 className="testimonial-heading">
         Our Partners  {" "}

          <span>Love</span>
          <br />
          <span>working with us</span>
        </h1>

        {/* Description */}
        <p className="testimonial-description">
       Real experiences. Real partnerships. Real results.
        </p>

        {/* Testimonial Card */}
        <div className="testimonial-card">

          {/* Stars */}
          <div className="testimonial-stars">
            {[1, 2, 3, ,4,5].map((star) => (
              <Star
                key={star}
                size={19}
                fill="currentColor"
              />
            ))}
          </div>

          {/* Large Quote */}
          <Quote
            className="large-quote"
            size={64}
            fill="currentColor"
          />

          {/* Testimonial Text */}
          <p className="testimonial-text">
            "{testimonialData.text}"
          </p>

          {/* User */}
          <div className="testimonial-user">
          <p className="test-letter">
              {testimonialData.name.split(" ").map(word => word.charAt(0)).join("")}
           </p>
            {/* <img
              src={testimonialData.letter}
             
              className="testimonial-person"
            /> */}

            <div>
              <h3>{testimonialData.name}</h3>
              <p>{testimonialData.role}</p>
            </div>

          </div>

          {/* Pagination + Buttons */}
          <div className="testimonial-bottom">

            {/* Dots */}
            {/* <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    current === index ? "active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div> */}

          

            

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;