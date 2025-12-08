import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Component } from './models/ComponentModel.js';

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb://127.0.0.1:27017/ui_components';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Get all components
app.get('/api/components', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const components = await Component.find({});
    res.json(components);
  } catch (error) {
    console.error('Error fetching components:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add a component
app.post('/api/components', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const component = new Component(req.body);
    await component.save();
    res.status(201).json(component);
  } catch (error) {
    console.error('Error saving component:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
