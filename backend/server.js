const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Create this file for user routes
const User = require('./models/User'); // Import User model
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use User Routes
app.use('/api/users', userRoutes); // Add user routes

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
