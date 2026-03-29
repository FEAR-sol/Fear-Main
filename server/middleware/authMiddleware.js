const requireApiKey = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

module.exports = { requireApiKey };
