import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { jwtDecode } from 'jwt-decode';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { Component } from './models/ComponentModel.js';
import { Website } from './models/WebsiteModel.js';
import { ImportComponent } from './models/ImportComponentModel.js';
import { User } from './models/UserModel.js';

dotenv.config();

const app = express();

// Enhanced CORS configuration
// Development-friendly CORS: reflect the incoming origin (allows local dev ports)
// NOTE: In production, restrict the allowed origins to trusted hosts.
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like curl, or server-to-server)
    if (!origin) return callback(null, true);
    // permit development localhost ports (add more if needed)
    const allowed = [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175',
      'http://localhost:5176',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174',
      'http://127.0.0.1:5175',
      'http://127.0.0.1:5176',
      'http://localhost:3000',
      'http://localhost:5001'
    ];
    if (allowed.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    // otherwise, allow but you can change to `callback(new Error('Not allowed'))` to block
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept']
}));

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ui_componts';

// Log which host/db we'll connect to (mask credentials if present)
let mongoHostDisplay = MONGO_URI;
try {
  const url = new URL(MONGO_URI);
  mongoHostDisplay = `${url.protocol}//${url.hostname}${url.port ? ':' + url.port : ''}${url.pathname}`;
} catch (e) {
  // ignore parsing errors, keep raw string
}
console.log('Using MongoDB URI (masked):', mongoHostDisplay);

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

// ==================== EMAIL & OTP CONFIGURATION ====================

// Email transporter configuration (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP Email
const sendOTPEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Your OTP for Signup Verification',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Email Verification</h2>
          <p style="font-size: 16px; color: #555;">
            Welcome! To complete your signup, please use the OTP below:
          </p>
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <h1 style="color: #22c55e; font-size: 32px; letter-spacing: 5px; margin: 0;">
              ${otp}
            </h1>
          </div>
          <p style="font-size: 14px; color: #999;">
            This OTP will expire in 10 minutes.
          </p>
          <p style="font-size: 14px; color: #999;">
            If you didn't request this, please ignore this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);
    return true;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    return false;
  }
};

// ==================== AUTHENTICATION ROUTES ====================

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

// Update a component
app.put('/api/components/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const component = await Component.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json(component);
  } catch (error) {
    console.error('Error updating component:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all websites
app.get('/api/websites', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const websites = await Website.find({});
    res.json(websites);
  } catch (error) {
    console.error('Error fetching websites:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get a single website by url
app.get('/api/websites/:url', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const website = await Website.findOne({ url: req.params.url });
    if (!website) {
      return res.status(404).json({ error: 'Website not found' });
    }
    res.json(website);
  } catch (error) {
    console.error('Error fetching website:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add a website
app.post('/api/websites', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const website = new Website(req.body);
    await website.save();
    res.status(201).json(website);
  } catch (error) {
    console.error('Error saving website:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update a website
app.put('/api/websites/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const website = await Website.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!website) {
      return res.status(404).json({ error: 'Website not found' });
    }
    res.json(website);
  } catch (error) {
    console.error('Error updating website:', error);
    res.status(500).json({ error: error.message });
  }
});

// Import Components APIs
// Get all import components
app.get('/api/import-components', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const components = await ImportComponent.find();
    res.json(components);
  } catch (error) {
    console.error('Error fetching import components:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get import component by name
app.get('/api/import-components/:name', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const component = await ImportComponent.findOne({ name: req.params.name });
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json(component);
  } catch (error) {
    console.error('Error fetching import component:', error);
    res.status(500).json({ error: error.message });
  }
});

// Save import component
app.post('/api/import-components', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const { name, fileName, code, description, category } = req.body;
    
    const component = new ImportComponent({
      name,
      fileName,
      code,
      description,
      category
    });
    
    const saved = await component.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error saving import component:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update import component
app.put('/api/import-components/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const { name, code, description, category } = req.body;
    const component = await ImportComponent.findByIdAndUpdate(
      req.params.id,
      { name, code, description, category },
      { new: true }
    );
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json(component);
  } catch (error) {
    console.error('Error updating import component:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete import component
app.delete('/api/import-components/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }
    const component = await ImportComponent.findByIdAndDelete(req.params.id);
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    res.json({ message: 'Component deleted successfully' });
  } catch (error) {
    console.error('Error deleting import component:', error);
    res.status(500).json({ error: error.message });
  }
});

// Google Sign-up endpoint
app.post('/api/auth/google-signup', async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Decode the JWT token (without verifying signature - Google handles verification)
    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const { email, name } = decoded;

    if (!email || !name) {
      return res.status(400).json({ message: 'Email and name are required from Google' });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user && user.isVerified) {
      // User already verified, auto-login
      const userToken = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });
      return res.json({
        success: true,
        token: userToken,
        user: { name: user.name, email: user.email, isVerified: user.isVerified },
        message: 'Welcome back!'
      });
    }

    // New user or unverified - generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    if (user) {
      // Update existing unverified user
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      user.googleId = token;
      await user.save();
    } else {
      // Create new user
      user = new User({
        name,
        email,
        googleId: token,
        otp,
        otpExpiry,
        isVerified: false
      });
      await user.save();
    }

    // Send OTP to email
    const emailSent = await sendOTPEmail(email, otp);

    if (!emailSent) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    res.json({
      success: true,
      message: 'OTP sent to your email',
      email,
      name,
      userId: user._id
    });
  } catch (error) {
    console.error('Google signup error:', error);
    res.status(500).json({ 
      message: 'Error processing Google sign-up',
      error: error.message 
    });
  }
});

// Verify OTP endpoint
app.post('/api/auth/verify-otp', async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res.status(400).json({ message: 'Email, OTP, and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if OTP is valid and not expired
    if (user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (new Date() > user.otpExpiry) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Hash password and save
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        isVerified: user.isVerified
      },
      message: 'Email verified successfully! You are now logged in.'
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ 
      message: 'Error verifying OTP',
      error: error.message 
    });
  }
});

// Resend OTP endpoint
app.post('/api/auth/resend-otp', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'User is already verified' });
    }

    // Generate new OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP to email
    const emailSent = await sendOTPEmail(email, otp);

    if (!emailSent) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    res.json({
      success: true,
      message: 'OTP resent to your email'
    });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({ 
      message: 'Error resending OTP',
      error: error.message 
    });
  }
});

// Regular signup endpoint (without Google)
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // Create new user (password will be stored after OTP verification)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false
    });

    await user.save();

    // Send OTP to email
    const emailSent = await sendOTPEmail(email, otp);

    if (!emailSent) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    res.json({
      success: true,
      message: 'OTP sent to your email',
      email,
      userId: user._id
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: 'Error during signup',
      error: error.message 
    });
  }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: 'Please verify your email first' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        isVerified: user.isVerified
      },
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Error during login',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`Error: port ${PORT} is already in use. ` +
      `Either stop the process using that port or set a different PORT env var before starting the server.`);
    console.error('Example (PowerShell): $env:PORT=5002; npm run dev');
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});
