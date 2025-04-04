// contactRoute.js
import express from 'express';
import { createContact } from '../contactController.js';

const router = express.Router();

router.post('/contact', createContact);

export default router;
