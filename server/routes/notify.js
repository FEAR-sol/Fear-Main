const express = require('express');
const router = express.Router();
const { sendNotification, getSubscriberCount } = require('../controllers/notifyController');
const { requireApiKey } = require('../middleware/authMiddleware');

// POST /api/notify  — protected
router.post('/', requireApiKey, sendNotification);

// GET /api/notify/count  — protected
router.get('/count', requireApiKey, getSubscriberCount);

module.exports = router;
