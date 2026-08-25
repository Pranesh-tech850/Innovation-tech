import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import {
  X,
  Send,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "../styles/contact-modal.css";

const ContactModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // =========================================
  // CLOSE
  // =========================================

  const closeModal = () => navigate("/");

  // =========================================
  // MODAL BEHAVIOUR
  // Home renders underneath now, so the page behind must not scroll
  // and Escape has to dismiss.
  // =========================================

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_xxrjjjn",
        "template_i9q1xj5",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "y6remiBz2oGBevixD",
      );

  
      console.log("Mail message :", response);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

    }
  };

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

  // =========================================
  // HANDLE INPUT
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // SUBMIT
  // =========================================



  return (
    <div className="contact-overlay">
      {/* Background particles */}

      <div className="contact-particle particle-one"></div>
      <div className="contact-particle particle-two"></div>
      <div className="contact-particle particle-three"></div>
      <div className="contact-particle particle-four"></div>

      {/* Modal */}

      <div className="contact-modal">
        {/* Glow */}

        <div className="contact-modal-glow"></div>

        {/* Close */}

        <button className="contact-close" onClick={closeModal}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}

            <div className="contact-header">
              <div className="contact-icon">
                <Sparkles size={22} />
              </div>

              <span className="contact-small-title">LET'S CONNECT</span>

              <h2>
                Let's build something
                <span> amazing.</span>
              </h2>

              <p>
                Have a project, idea, or just want to say hello? Drop us a
                message.
              </p>
            </div>

            {/* Form */}

            <form className="contact-form" onSubmit={handleSendMessage}>
              {/* NAME */}

              <div className="contact-field">
                <label>Your name</label>

                <div className="input-wrapper">
                  <User size={12} />

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label>Email address</label>

                <div className="input-wrapper">
                  <Mail size={12} />

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="contact-field">
                <label>Tell us about your idea</label>

                <div className="input-wrapper textarea-wrapper">
                  <MessageSquare size={12} />

                  <textarea
                    name="message"
                    placeholder="I'd like to build..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>
              </div>

              {/* SEND */}

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
               
              </button>

             
            </form>
          </>
        ) : (
          /* SUCCESS */

          <div className="contact-success">
            <div className="success-icon">
              <CheckCircle2 size={45} />
            </div>

            <h2>Message sent!</h2>

            <p>Thanks for reaching out. Our team innovative blossom will get  back to you soon.</p>

            <button className="success-button" onClick={closeModal}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
