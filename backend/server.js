import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Innovative Blossom Backend is running ");
});


// ==========================================
// SMTP TRANSPORTER
// ==========================================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ==========================================
// CHECK SMTP CONNECTION
// ==========================================

transporter.verify((error, success) => {

  if (error) {

    console.error("SMTP connection failed:");
    console.error(error);

  } else {

    console.log("SMTP server is ready");

  }

});


// ==========================================
// CONTACT FORM API
// ==========================================

app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      message,
    } = req.body;


    // ======================================
    // BASIC BACKEND VALIDATION
    // ======================================

    if (!name || !email) {

      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });

    }


    // ======================================
    // EMAIL
    // ======================================

    const mailOptions = {

      // Gmail account used for SMTP
      from: process.env.SMTP_USER,

      // Company email
      to: process.env.CONTACT_EMAIL,

      // Reply directly to the website visitor
      replyTo: email,

      subject: `New Contact Form Message - ${name}`,

      text: `
New Contact Form Submission
===========================

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Message:
${message || "No message provided"}

===========================
Sent from Innovative Blossom website.
      `,
    };


    // ======================================
    // SEND EMAIL
    // ======================================

    const info = await transporter.sendMail(mailOptions);


    console.log(" Email sent successfully");

    console.log("Message ID:", info.messageId);


    // ======================================
    // RESPONSE TO FRONTEND
    // ======================================

    return res.status(200).json({

      success: true,

      message: "Message sent successfully.",

    });


  } catch (error) {

    console.error("=================================");
    console.error("SMTP ERROR");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
    console.error("Response Code:", error.responseCode);
    console.error("=================================");


    return res.status(500).json({

      success: false,

      message: "Failed to send email.",

    });

  }

});


// ==========================================
// START SERVER
// ==========================================

const PORT = process.env.PORT || 9000;

app.get("/test-smtp", async (req, res) => {
  try {
    await transporter.verify();

    res.json({
      success: true,
      message: "SMTP connection works",
    });
  } catch (error) {
    console.error("SMTP TEST ERROR");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
      code: error.code,
      command: error.command,
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});