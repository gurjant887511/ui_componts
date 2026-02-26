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
import { PendingSignup } from './models/PendingSignupModel.js';

dotenv.config();

const app = express();

// Enhanced CORS configuration
// Development-friendly CORS: reflect the incoming origin (allows local dev ports)
// NOTE: In production, restrict the allowed origins to trusted hosts.
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like curl, or server-to-server)
    if (!origin) return callback(null, true);

    // Base allowed origins for local development
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

    // Add frontend URL from env (if provided) and server IP variants
    const envFrontend = process.env.FRONTEND_URL;
    if (envFrontend) {
      allowed.push(envFrontend);
      // also allow same host without port and with 0.0.0.0 style
      try {
        const parsed = new URL(envFrontend);
        allowed.push(`${parsed.protocol}//${parsed.hostname}`);
      } catch (e) {
        // ignore parse errors
      }
    }

    // Allow requests if origin is in allowed list
    if (allowed.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    // For convenience, allow but log unknown origins — change to block if desired
    console.warn('CORS: allowing request from unknown origin:', origin);
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept']
}));

app.use(express.json());

// OPTIONS handler for CORS preflight (MUST be before routes)
app.options('*', cors());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running', port: process.env.PORT || 7000 });
});

// Request logging middleware
app.use((req, res, next) => {
  if (req.path.includes('/api/')) {
    console.log(`\n📨 [${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
    console.log(`   Headers:`, { origin: req.get('origin'), contentType: req.get('content-type') });
  }
  next();
});

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

    // Prefer PendingSignup flow for Google signups: create/update a pending signup
    // This keeps behavior consistent with email signups (passwords saved only after OTP)
    const otp = String(generateOTP()).trim();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // If a verified user exists, auto-login
    let existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isVerified) {
      const userToken = jwt.sign({ email, userId: existingUser._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });
      return res.json({ success: true, token: userToken, user: { name: existingUser.name, email: existingUser.email, isVerified: existingUser.isVerified }, message: 'Welcome back!' });
    }

    // Update or create a PendingSignup
    let pending = await PendingSignup.findOne({ email });
    if (pending) {
      pending.name = name;
      pending.googleId = token;
      pending.otp = otp;
      pending.otpExpiry = otpExpiry;
      await pending.save();
    } else {
      // Create pending signup without a passwordHash (user may set during verify)
      pending = new PendingSignup({ name, email, googleId: token, otp, otpExpiry });
      await pending.save();
    }

    const emailSent = await sendOTPEmail(email, otp);
    if (!emailSent) return res.status(500).json({ message: 'Failed to send OTP email' });

    res.json({ success: true, message: 'OTP sent to your email', email, name, pendingId: pending._id });
  } catch (error) {
    console.error('Google signup error:', error);
    res.status(500).json({ 
      message: 'Error processing Google sign-up',
      error: error.message 
    });
  }
});

// Debug endpoint - check OTP for testing purposes (REMOVE IN PRODUCTION)
app.get('/api/auth/debug-otp/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const now = new Date();
    const isExpired = now > user.otpExpiry;
    const timeRemaining = isExpired ? 0 : Math.floor((user.otpExpiry - now) / 1000);

    res.json({
      email: user.email,
      otp: user.otp,
      otpExpiry: user.otpExpiry,
      isVerified: user.isVerified,
      currentTime: now,
      isExpired: isExpired,
      timeRemaining: timeRemaining + ' seconds'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint - clear user and resend OTP
app.post('/api/auth/test-reset/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const normalizedEmail = email.toLowerCase().trim();
    
    // Delete the user
    await User.deleteOne({ email: normalizedEmail });

    res.json({ 
      message: 'User deleted. Please sign up again.',
      email: normalizedEmail
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint - manually set OTP for testing
app.post('/api/auth/test-set-otp/:email/:otp', async (req, res) => {
  try {
    const { email, otp } = req.params;
    const normalizedEmail = email.toLowerCase().trim();
    
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set OTP to the provided value
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    res.json({ 
      message: 'OTP set for testing',
      email: user.email,
      otp: user.otp,
      otpExpiry: user.otpExpiry
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP endpoint
app.post('/api/auth/verify-otp', async (req, res) => {
  console.log('\n✅ [VERIFY-OTP] POST request received!');
  console.log('   Body:', req.body);
  
  try {
    const { email, otp, password } = req.body;

    console.log(`\n[VERIFY-OTP] Received request with email: ${email}, otp: ${otp}, passwordProvided: ${password ? `✓ (length: ${password.length})` : '✗'}`);

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // First check pending signup
    let pending = await PendingSignup.findOne({ email: normalizedEmail });
    if (!pending) {
      // Fallback: if no pending signup, check existing user and existing OTP flow
      const user = await User.findOne({ email: normalizedEmail });
      if (!user) {
        return res.status(404).json({ message: 'No pending signup or user found for this email' });
      }

      // existing user flow (legacy) - compare otp stored on user
      const dbOTP = String(user.otp || '').trim();
      const providedOTP = String(otp).trim();
      if (!dbOTP || dbOTP !== providedOTP) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
      if (new Date() > user.otpExpiry) return res.status(400).json({ message: 'OTP has expired' });

      // Save password if provided
      if (password && password.trim() !== '') {
        user.password = await bcrypt.hash(password, 10);
      }
      user.isVerified = true;
      user.otp = null;
      user.otpExpiry = null;
      await user.save();

      const token = jwt.sign({ email: normalizedEmail, userId: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });
      return res.json({ success: true, token, user: { name: user.name, email: user.email, isVerified: user.isVerified }, message: 'Email verified successfully' });
    }

    // Validate OTP for pending signup
    const dbOTP = String(pending.otp || '').trim();
    const providedOTP = String(otp).trim();
    console.log(`[VERIFY-OTP] OTP Validation - DB: ${dbOTP}, Provided: ${providedOTP}, Match: ${dbOTP === providedOTP}`);
    
    if (!dbOTP || dbOTP !== providedOTP) {
      return res.status(400).json({ message: 'Invalid OTP - please try again' });
    }
    if (new Date() > pending.otpExpiry) {
      return res.status(400).json({ message: 'OTP has expired - please request a new one' });
    }

    // Create final user record using pending data
    // Prefer a password supplied during verification; otherwise use pending.passwordHash
    let finalPasswordHash = pending.passwordHash || null;
    if (password && password.trim() !== '') {
      try {
        finalPasswordHash = await bcrypt.hash(password, 10);
        console.log('[VERIFY-OTP] Password re-hashed from verification:', { email: normalizedEmail, hashLength: finalPasswordHash.length });
      } catch (hashErr) {
        console.error('[VERIFY-OTP] Error hashing provided password:', hashErr);
        return res.status(500).json({ message: 'Error processing password' });
      }
    }

    // Ensure password is set before creating user
    if (!finalPasswordHash || finalPasswordHash.trim() === '') {
      console.error('[VERIFY-OTP] CRITICAL: No password hash available for user:', normalizedEmail);
      return res.status(400).json({ message: 'Password is required. Please provide a password to complete signup.' });
    }

    console.log('[VERIFY-OTP] Creating final user:', { email: normalizedEmail, hasPassword: !!finalPasswordHash, passwordHashLength: finalPasswordHash.length });

    const newUser = new User({
      name: pending.name || '',
      email: pending.email,
      password: finalPasswordHash,
      isVerified: true
    });

    await newUser.save();
    console.log('[VERIFY-OTP] User successfully saved to database:', { email: normalizedEmail });
    
    // Remove pending signup
    await PendingSignup.deleteOne({ _id: pending._id });

    const token = jwt.sign({ email: newUser.email, userId: newUser._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });

    res.json({ success: true, token, user: { name: newUser.name, email: newUser.email, isVerified: newUser.isVerified }, message: 'Email verified successfully! You are now logged in.' });
  } catch (error) {
    console.error('[VERIFY-OTP] Error:', error.message);
    console.error('[VERIFY-OTP] Stack:', error.stack);
    res.status(500).json({ 
      message: 'Error verifying OTP: ' + error.message,
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

    const normalizedEmail = email.toLowerCase().trim();

    // Prefer updating pending signup if present
    const pending = await PendingSignup.findOne({ email: normalizedEmail });
    if (pending) {
      if (new Date() < pending.otpExpiry) {
        // still valid OTP; we'll still generate a fresh one
      }
      const otp = String(generateOTP()).trim();
      const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
      pending.otp = otp;
      pending.otpExpiry = otpExpiry;
      await pending.save();
      const emailSent = await sendOTPEmail(normalizedEmail, otp);
      if (!emailSent) return res.status(500).json({ message: 'Failed to send OTP email' });
      return res.json({ success: true, message: 'OTP resent to your email' });
    }

    // Fallback: update existing user OTP if user exists and not verified
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.isVerified) return res.status(400).json({ message: 'User is already verified' });
    const otp = String(generateOTP()).trim();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();
    const emailSent = await sendOTPEmail(normalizedEmail, otp);
    if (!emailSent) return res.status(500).json({ message: 'Failed to send OTP email' });
    res.json({ success: true, message: 'OTP resent to your email' });
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

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase().trim();

    // Check if a confirmed user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Generate OTP and expiry
    const otp = String(generateOTP()).trim();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // Hash password and store in a PendingSignup document (do NOT create final User yet)
    let hashedPassword = null;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashErr) {
      console.error('[SIGNUP] Error hashing password:', hashErr);
      return res.status(500).json({ message: 'Error processing password' });
    }

    // If a pending signup exists, update it; otherwise create new pending signup
    let pending = await PendingSignup.findOne({ email: normalizedEmail });
    if (pending) {
      pending.name = name;
      pending.passwordHash = hashedPassword;
      pending.otp = otp;
      pending.otpExpiry = otpExpiry;
      await pending.save();
    } else {
      pending = new PendingSignup({
        name,
        email: normalizedEmail,
        passwordHash: hashedPassword,
        otp,
        otpExpiry
      });
      await pending.save();
    }

    console.log(`[SIGNUP] Pending signup created/updated for ${normalizedEmail}. OTP: ${otp}`);

    // Send OTP to email
    const emailSent = await sendOTPEmail(normalizedEmail, otp);
    if (!emailSent) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    res.json({
      success: true,
      message: 'OTP sent to your email',
      email: normalizedEmail,
      pendingId: pending._id
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

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: 'Please verify your email first' });
    }

    // Defensive logging to help debug login issues
    try {
      console.log(`[LOGIN] Attempt for ${normalizedEmail} - isVerified: ${user.isVerified}, passwordPresent: ${!!user.password}`);
      if (user.password) {
        console.log(`[LOGIN] Stored password hash length: ${user.password.length}`);
      } else {
        console.warn(`[LOGIN] ⚠️ NO PASSWORD HASH FOUND for user: ${normalizedEmail}`);
      }
    } catch (logErr) {
      console.warn('[LOGIN] Could not log password info:', logErr && logErr.message);
    }

    // Ensure password was actually set (should be saved during OTP verification)
    if (!user.password || typeof user.password !== 'string' || user.password.trim() === '') {
      console.error(`[LOGIN] BLOCKED: Password not set for ${normalizedEmail}. User needs to re-verify with valid password.`);
      return res.status(400).json({ message: 'Password not set. Please verify your email to set a password.' });
    }

    // Compare password
    console.log(`[LOGIN] Comparing password for ${normalizedEmail}. Password length: ${password ? password.length : 0}, Hash length: ${user.password.length}`);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(`[LOGIN] Password comparison result: ${isPasswordValid}`);

    if (!isPasswordValid) {
      console.log(`[LOGIN] ❌ Invalid password attempt for ${normalizedEmail}`);
      return res.status(401).json({ message: 'Invalid password' });
    }

    console.log(`[LOGIN] ✅ Password valid for ${normalizedEmail}`);

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

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.userId;
    req.email = decoded.email;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
};

// Update user profile (name)
app.put('/api/update-profile', verifyToken, async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Name is required' });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { name: name.trim() },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ 
      success: true, 
      user: { 
        name: user.name, 
        email: user.email 
      },
      message: 'Profile updated successfully'
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ 
      message: 'Error updating profile',
      error: error.message 
    });
  }
});

// Debug user info (dev only) - shows verification and password presence (DO NOT USE IN PRODUCTION)
app.get('/api/auth/debug-user/:email', async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) return res.status(400).json({ message: 'Email required' });
    const normalizedEmail = email.toLowerCase().trim();
    // Return either pending signup info or existing user info
    const pending = await PendingSignup.findOne({ email: normalizedEmail });
    if (pending) {
      return res.json({
        type: 'pending',
        email: pending.email,
        name: pending.name,
        passwordPresent: !!pending.passwordHash,
        otp: pending.otp || null,
        otpExpiry: pending.otpExpiry || null,
      });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      type: 'user',
      email: user.email,
      isVerified: !!user.isVerified,
      passwordPresent: !!user.password,
      passwordHashPreview: user.password ? user.password.substring(0, 6) + '...' : null,
      otp: user.otp || null,
      otpExpiry: user.otpExpiry || null,
    });
  } catch (err) {
    console.error('Debug user error:', err);
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
});

const PORT = process.env.PORT || 7000;
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`✅ Listening on http://0.0.0.0:${PORT}`);
  console.log(`✅ Accessible from http://localhost:${PORT}`);
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
