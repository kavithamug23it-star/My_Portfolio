require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- HOME ---------------- */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ---------------- MONGO CONNECT ---------------- */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("Mongo Error ❌", err));

/* ---------------- MODEL ---------------- */
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

/* ---------------- CONTACT API ---------------- */
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing fields"
    });
  }

  try {
    /* SAVE TO MONGODB */
    const newMessage = new Contact({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();

    /* SEND EMAIL */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject || "New Portfolio Message",
      text: `
New Message Received:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    console.log("Message saved + email sent ✅");

    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (err) {
    console.log("Error ❌", err);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});