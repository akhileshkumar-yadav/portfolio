// Updated contact.js route
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

require('dotenv').config();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent and saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
