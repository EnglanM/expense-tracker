import dotenv from "dotenv";
import nodemailer from 'nodemailer';

dotenv.config();

export const emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

emailTransporter.verify((error) => {
    if (error) {
        console.error('Email service error:', error);
    } else {
        console.log('Email service ready');
    }
});