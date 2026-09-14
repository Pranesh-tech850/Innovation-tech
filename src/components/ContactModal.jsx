import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  X,
  User,
  Mail,
  Phone,
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
    phone: "",
    countryCode: "+91",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // =========================================
  // INDIVIDUAL FIELD ERRORS
  // =========================================

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    // NAME - MAX 100 CHARACTERS
    // =========================================

    if (name === "name" && value.length > 100) {
      return;
    }

    // =========================================
    // EMAIL - MAX 50 CHARACTERS
    // =========================================

    if (name === "email" && value.length > 50) {
      return;
    }

    // =========================================
    // PHONE - OPTIONAL
    // =========================================

    if (name === "phone") {
      // Allow only numbers
      if (!/^\d*$/.test(value)) {
        return;
      }

      // Maximum 10 digits
      if (value.length > 10) {
        return;
      }
    }

    // =========================================
    // MESSAGE - LESS THAN 2000 CHARACTERS
    // =========================================

    if (name === "message" && value.length > 2000) {
      return;
    }

    // =========================================
    // UPDATE FORM DATA
    // =========================================

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // =========================================
    // CLEAR THAT FIELD'S ERROR
    // =========================================

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =========================================
  // EMAIL FORMAT VALIDATION
  // =========================================

  const validateEmailFormat = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.(com|org|net|edu|gov|in|ca|ca\.in)$/i;

    return emailRegex.test(email);
  };

  // =========================================
  // PHONE VALIDATION
  // =========================================

  const validatePhone = (phone) => {
    // Phone is optional
    if (!phone.trim()) {
      return true;
    }

    // Phone must contain exactly 10 digits
    return /^\d{10}$/.test(phone);
  };

  // =========================================
  // SEND MESSAGE
  // =========================================

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // =========================================
    // CLEAR ALL PREVIOUS ERRORS
    // =========================================

    setErrors({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    let hasError = false;

    // =========================================
    // GET FORM VALUES
    // =========================================

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const countryCode = formData.countryCode;
    const message = formData.message.trim();

    // =========================================
    // NAME VALIDATION - REQUIRED
    // =========================================

    if (!name) {
      setErrors((prev) => ({
        ...prev,
        name: "Please enter your name.",
      }));

      hasError = true;
    } else if (name.length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Name must be greater than 3 characters.",
      }));

      hasError = true;
    } else if (name.length > 100) {
      setErrors((prev) => ({
        ...prev,
        name: "Name must be less than 100 characters.",
      }));

      hasError = true;
    }

    // =========================================
    // EMAIL VALIDATION - REQUIRED
    // =========================================

    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter your email address.",
      }));

      hasError = true;
    }

    // =========================================
    // EMAIL LENGTH
    // =========================================
    else if (email.length > 50) {
      setErrors((prev) => ({
        ...prev,
        email: "Email must be less than 50 characters.",
      }));

      hasError = true;
    }

    // =========================================
    // EMAIL FORMAT
    // =========================================
    else if (!validateEmailFormat(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid domain(.com,.in,.gov,.edu,.org,.ca).",
      }));

      hasError = true;
    }

    // =========================================
    // PHONE VALIDATION - OPTIONAL
    // =========================================

    if (phone && !validatePhone(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit phone number.",
      }));

      hasError = true;
    }

    // =========================================
    // MESSAGE VALIDATION - OPTIONAL
    // =========================================

    if (message.length > 0 && message.length < 20) {
      setErrors((prev) => ({
        ...prev,
        message: "Message must be at least 20 characters.",
      }));

      hasError = true;
    } else if (message.length > 2000) {
      setErrors((prev) => ({
        ...prev,
        message: "Message must not exceed 2000 characters.",
      }));

      hasError = true;
    }

    // =========================================
    // STOP IF VALIDATION FAILED
    // =========================================

    if (hasError) {
      return;
    }

    // =========================================
    // SEND EMAIL USING SMTP BACKEND
    // =========================================

    try {
      setLoading(true);

      const fullPhone = phone ? `${countryCode} ${phone}` : "";

      // =========================================
      // SEND DATA TO EXPRESS BACKEND
      // =========================================

      const response = await fetch(
        "https://innovation-backend-zgt3.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone: fullPhone,
            message,
          }),
        },
      );

      const data = await response.json();
      console.log(data);

      // =========================================
      // CHECK BACKEND RESPONSE
      // =========================================

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      console.log("Mail sent:", data);

      // =========================================
      // SUCCESS
      // =========================================

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("SMTP Error:", error);

      setErrors((prev) => ({
        ...prev,
        message: "Unable to send your message. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // UI
  // =========================================

  return (
    <div className="contact-overlay">
      {/* BACKGROUND PARTICLES */}

      <div className="contact-particle particle-one"></div>
      <div className="contact-particle particle-two"></div>
      <div className="contact-particle particle-three"></div>
      <div className="contact-particle particle-four"></div>

      {/* MODAL */}

      <div className="contact-modal">
        {/* Glow */}

        <div className="contact-modal-glow"></div>

        {/* CLOSE BUTTON */}

        <button type="button" className="contact-close" onClick={closeModal}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* HEADER */}

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

            {/* FORM */}

            <form className="contact-form" onSubmit={handleSendMessage}>
              {/* NAME */}

              <div className="contact-field">
                <label htmlFor="name">
                  Your name <span className="required-star">*</span>
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
                    maxLength={100}
                    required
                  />
                </div>

                {/* NAME ERROR */}

                {errors.name && <p className="contact-error">{errors.name}</p>}
              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label htmlFor="email">
                  Email address <span className="required-star">*</span>
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

                {/* EMAIL ERROR */}

                {errors.email && (
                  <p className="contact-error">{errors.email}</p>
                )}
              </div>

              {/* PHONE - OPTIONAL */}

              <div className="contact-field">
                <label htmlFor="phone">
                  Phone number
                  <span className="optional-label"> (Optional)</span>
                </label>

                <div className="phone-input-wrapper">
                  {/* COUNTRY CODE */}

                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="country-select"
                    aria-label="Country code"
                  >
                    <option value="+91">+91</option>
                    <option value="+1-US">+1</option>
                  </select>

                  <div className="phone-divider"></div>

                  {/* PHONE NUMBER */}

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                  />
                </div>

                {/* PHONE ERROR */}

                {errors.phone && (
                  <p className="contact-error">{errors.phone}</p>
                )}
              </div>

              {/* MESSAGE - OPTIONAL */}

              <div className="contact-field">
                <label htmlFor="message">
                  Tell us about your idea
                  <span className="optional-label"> (Optional)</span>
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
                    maxLength={2000}
                  />
                </div>

                {/* MESSAGE ERROR */}

                {errors.message && (
                  <p className="contact-error">{errors.message}</p>
                )}
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
          /* SUCCESS SCREEN */

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
