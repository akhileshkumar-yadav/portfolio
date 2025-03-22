// contactController.js
import Contact from './models/contactModel.js';
import nodemailer from 'nodemailer';

export const createContact = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const contact = await Contact.create({ name, email, phone, subject, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
        });

        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
};
