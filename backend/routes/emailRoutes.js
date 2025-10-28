import express from 'express';
import { sendEmailNotification } from '../services/emailService.js';

const router = express.Router();
router.post('/', sendEmailNotification);

export default router;