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

  // =========================================
  // ALLOWED EMAIL DOMAINS
  // =========================================

  const allowedDomains = [
    "gmail.com",
    "innovativeblossom.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
  ];

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

    // NAME LENGTH
    if (name === "name" && value.length > 20) {
      return;
    }

    // EMAIL LENGTH
    if (name === "email" && value.length > 50) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    if (name === "email") {
      setError("");
    }

    if (name === "message") {
      setError("");
    }
  };

  // =========================================
  // EMAIL VALIDATION
  // =========================================

  const validateEmail = (email) => {
    // Basic email structure
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    // Split email
    const parts = email.split("@");

    // Must contain exactly one @
    if (parts.length !== 2) {
      return false;
    }

    const username = parts[0];
    const domain = parts[1];

    // Username validation
    if (!username || username.length === 0) {
      return false;
    }

    // Domain validation
    if (!domain || domain.length === 0) {
      return false;
    }

    // Check allowed domain
    if (!allowedDomains.includes(domain)) {
      return false;
    }

    return true;
  };

  // =========================================
  // SEND MESSAGE
  // =========================================

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setError("");

    // =========================================
    // NAME VALIDATION
    // =========================================

    const name = formData.name.trim();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (name.length < 200 && name.length > 20) {
      setError("Name must be less than 200 characters.");
      return;
    }

    // =========================================
    // EMAIL VALIDATION
    // =========================================

    const email = formData.email.trim().toLowerCase();

    // Empty email
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Maximum email length
    if (email.length > 50) {
      setError("Email must be less than 50 characters.");
      return;
    }

    // Validate email + domain
    if (!validateEmail(email)) {
      setError(
        "Please enter a valid email using Gmail, Yahoo, Outlook, Hotmail, iCloud, or Innovative Blossom."
      );
      return;
    }

    // =========================================
    // MESSAGE VALIDATION
    // =========================================

    const message = formData.message.trim();

    if (!message) {
      setError("Please enter your message.");
      return;
    }

    if (message.length < 20) {
      setError("Please enter at least 20 characters in your message.");
      return;
    }

    // =========================================
    // SEND EMAIL
    // =========================================

    try {
      setLoading(true);

      const response = await emailjs.send(
        "service_xxrjjjn",
        "template_i9q1xj5",
        {
          name: name,
          email: email,
          message: message,
        },
        "y6remiBz2oGBevixD"
      );

      console.log("Mail message:", response);

      // =========================================
      // SUCCESS
      // =========================================

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setError(
        "We couldn't send your message. Please try again."
      );
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

        <button
          type="button"
          className="contact-close"
          onClick={closeModal}
        >
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

              <span className="contact-small-title">
                LET'S CONNECT
              </span>

              <h2>
                Let's build something
                <span> amazing.</span>
              </h2>

              <p>
                Have a project, idea, or just want to say hello?
                Drop us a message.
              </p>

            </div>

            {/* =========================================
                FORM
            ========================================= */}

            <form
              className="contact-form"
              onSubmit={handleSendMessage}
            >

              {/* NAME */}

              <div className="contact-field">

                <label htmlFor="name">
                  Your name
                </label>

                <div className="input-wrapper">

                  <User size={12} />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={20}
                    required
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="contact-field">

                <label htmlFor="email">
                  Email address
                </label>

                <div className="input-wrapper">

                  <Mail size={12} />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={50}
                    required
                  />

                </div>

              </div>

              {/* MESSAGE */}

              <div className="contact-field">

                <label htmlFor="message">
                  Tell us about your idea
                </label>

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

              {/* ERROR */}

              {error && (
                <p className="contact-error">
                  {error}
                </p>
              )}

              {/* SEND BUTTON */}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </span>
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

            <h2>
              Message sent!
            </h2>

            <p>
              Thanks for reaching out. Our team at
              Innovative Blossom will get back to you soon.
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