const express = require('express');
const cors = require('cors');
const db = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Asosiasi Stream API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Database test route
app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW() as time, version() as version');
    res.json({
      success: true,
      database: 'connected',
      serverTime: result.rows[0].time,
      postgresVersion: result.rows[0].version
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`💾 Database: ${process.env.DB_NAME}`);
});