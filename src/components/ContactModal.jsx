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

    // =========================================
    // NAME VALIDATION
    // =========================================

    if (name === "name" && value.length > 20) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear email error when user starts typing again
    if (name === "email") {
      setError("");
    }
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

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    // =========================================
    // EMAIL VALIDATION
    // =========================================

    const email = formData.email.trim().toLowerCase();

    // Basic email structure validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Get domain after @
    const domain = email.split("@")[1];

    // Check allowed domain
    if (!allowedDomains.includes(domain)) {
      setError(
        "Please use a valid email provider such as Gmail, Yahoo, Outlook, Hotmail, or iCloud."
      );
      return;
    }

    // =========================================
    // MESSAGE VALIDATION
    // =========================================

    if (!formData.message.trim()) {
      setError("Please enter your message.");
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
          name: formData.name,
          email: email,
          message: formData.message,
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

                <small>
                  {formData.name.length}/20
                </small>

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
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {error && (
                  <p className="contact-error">
                    {error}
                  </p>
                )}

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