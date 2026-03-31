require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// ─── ENV VALIDATION ──────────────────────────────────────────────────────────
const REQUIRED_ENV = ['MONGO_URI', 'RESEND_API_KEY', 'FROM_EMAIL', 'ADMIN_API_KEY'];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.error('\n❌ Missing required environment variables:');
  missingEnv.forEach((key) => console.error(`   - ${key}`));
  console.error('\n👉 Please configure your .env file using .env.example as a reference.');
  console.error('   cp .env.example .env  →  then fill in the values.\n');
  process.exit(1);
}
// ─────────────────────────────────────────────────────────────────────────────

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'x-api-key'],
}));
app.use(express.json());

// Routes
app.use('/api/subscribe', require('./routes/subscribe'));
app.use('/api/notify', require('./routes/notify'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ FEAR backend running on port ${PORT}`);
  console.log(`   Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Client URL  : ${process.env.CLIENT_URL || 'http://localhost:3000'}`);
});
