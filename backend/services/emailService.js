import { resendClient } from "../config/email-service.js";

export const sendEmailNotification = async (req, res) => {
    try {
        const { email, totalAmount, thresholdAmount } = req.body;
        
        await resendClient.emails.send({
            from: 'englanmuca@gmail.com',
            to: email,
            subject: 'Budget Alert: Threshold Reached!',
            html: `
                <h2>Budget Threshold Alert</h2>
                <p>Your spending has reached the threshold!</p>
                <p><strong>Current Total:</strong> $${totalAmount.toFixed(2)}</p>
                <p><strong>Threshold:</strong> $${thresholdAmount.toFixed(2)}</p>
                <p>Please review your expenses.</p>
            `
        });
        
        res.status(200).json({ ok: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ ok: false, error: error.message });
    }
};