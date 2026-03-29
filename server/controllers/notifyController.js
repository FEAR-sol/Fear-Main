const Subscriber = require('../models/Subscriber');
const { sendNotificationEmails } = require('../services/emailService');

const sendNotification = async (req, res) => {
  const { title, description, slug, type } = req.body;

  // Validate required fields
  if (!title || !type) {
    return res.status(400).json({ success: false, message: 'title and type are required.' });
  }

  if (!['article', 'blog'].includes(type)) {
    return res.status(400).json({ success: false, message: 'type must be "article" or "blog".' });
  }

  try {
    // Fetch all active subscribers
    const subscribers = await Subscriber.find({ active: true }).select('email');

    if (subscribers.length === 0) {
      return res.status(200).json({ success: true, message: 'No active subscribers.', sent: 0 });
    }

    const { totalSent, errors } = await sendNotificationEmails({
      subscribers,
      title,
      description: description || '',
      slug: slug || '',
      type,
    });

    return res.status(200).json({
      success: true,
      message: `Notification sent to ${totalSent} subscriber(s).`,
      sent: totalSent,
      failed: errors.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Notify error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send notifications.' });
  }
};

const getSubscriberCount = async (req, res) => {
  try {
    const count = await Subscriber.countDocuments({ active: true });
    return res.status(200).json({ success: true, count });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch count.' });
  }
};

module.exports = { sendNotification, getSubscriberCount };
