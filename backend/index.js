import express from 'express';
import cors from 'cors';
import dbConnect from './dbConnect.js';
import dotenv from 'dotenv';  // ✅ Import dotenv

dotenv.config();  // ✅ Load .env variables

const app = express();

// ✅ Database Connection
dbConnect();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log('Received Data:', req.body);
    res.status(200).json({ success: true, message: "Message received successfully!" });
});

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
