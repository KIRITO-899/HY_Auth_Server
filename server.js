require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// --- Middleware ---

// Add security headers
app.use(helmet());

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files (favicon, landing page)
app.use(express.static('public'));

// --- Routes ---
app.use('/api', authRoutes);

// API health check route
app.get('/api/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  };

  try {
    // Check database connection
    const dbState = require('mongoose').connection.readyState;
    health.database = {
      status: dbState === 1 ? 'connected' : 'disconnected',
      state: dbState
    };
    
    if (dbState !== 1) {
      health.status = 'unhealthy';
      return res.status(503).json(health);
    }
  } catch (error) {
    health.status = 'unhealthy';
    health.database = { status: 'error', error: error.message };
    return res.status(503).json(health);
  }

  res.json(health);
});

// --- Error Handling ---

// 404 handler for routes that don't exist
// This must be after all other routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Centralized error handling middleware
// This must be the last middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    message,
    // Only include the error stack in development for easier debugging
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
