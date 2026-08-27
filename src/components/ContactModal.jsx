import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import {
  X,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "../styles/contact-modal.css";

const ContactModal = ({ onClose }) => {
  const navigate = useNavigate();

  // =========================================
  // FORM STATE
  // =========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [range,setRange] = useState("");

  // =========================================
  // CLOSE MODAL
  // =========================================

  const closeModal = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  // =========================================
  // MODAL BEHAVIOUR
  // =========================================

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
  // SEND MESSAGE
  // =========================================

  const handleSendMessage = async (e) => {
    e.preventDefault();
   
     setRange("");
     setError("");
    // Extra email format validation
    if(formData.name.length > 20)
    {
      setRange("Character must be less than 20 characters");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

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

      console.log("Mail message:", response);

      // Show success screen
      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // UI
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

        {/* Close button */}
        <button type="button" className="contact-close" onClick={closeModal}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* =========================================
                HEADER
            ========================================= */}

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

            {/* =========================================
                FORM
            ========================================= */}

            <form className="contact-form" onSubmit={handleSendMessage}>
              {/* NAME */}
              <div className="contact-field">
                <label htmlFor="name">Your name</label>

                <div className="input-wrapper">
                  <User size={12} />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div>
                  {range && <p className="range-error">{range}</p>}
                </div>
              </div>

              {/* EMAIL */}
              <div className="contact-field">
                <label htmlFor="email">Email address</label>

                <div className="input-wrapper">
                  <Mail size={12} />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
             
                </div>
                    <div className="error-mg">
                  {error && <p className="contact-error">{error}</p>}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="contact-field">
                <label htmlFor="message">Tell us about your idea</label>

                <div className="input-wrapper textarea-wrapper">
                  <MessageSquare size={12} />

                  <textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to build..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </>
        ) : (
          /* =========================================
             SUCCESS SCREEN
          ========================================= */

          <div className="contact-success">
            <div className="success-icon">
              <CheckCircle2 size={45} />
            </div>

            <h2>Message sent!</h2>

            <p>
              Thanks for reaching out. Our team at Innovative Blossom will get
              back to you soon.
            </p>

            <button
              type="button"
              className="success-button"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
