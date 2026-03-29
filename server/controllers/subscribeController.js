const Subscriber = require('../models/Subscriber');
const validateEmail = require('../utils/validateEmail');
const { sendWelcomeEmail } = require('../services/emailService');

const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email || !validateEmail(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  try {
    const existing = await Subscriber.findOne({ email: email.toLowerCase().trim() });

    if (existing) {
      return res.status(409).json({ success: false, message: 'You\'re already subscribed.' });
    }

    await Subscriber.create({ email: email.toLowerCase().trim() });

    // Fire-and-forget welcome email — don't block the response
    sendWelcomeEmail(email.toLowerCase().trim());

    return res.status(201).json({ success: true, message: 'Subscribed successfully.' });
  } catch (error) {
    console.error('Subscribe error:', error.message);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
};

module.exports = { subscribe };
