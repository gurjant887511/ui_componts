# Gmail OTP Authentication Setup Guide

This guide explains how to set up Gmail OTP authentication for your UI Components application.

## Overview

The system works as follows:
1. User signs up with email/password or Google account
2. An OTP (One-Time Password) is sent to their email
3. User enters the OTP and sets/confirms password
4. After verification, user is automatically logged in
5. User credentials are stored securely in MongoDB

## Prerequisites

- MongoDB running locally or remote connection
- Node.js and npm installed
- Gmail account (for sending OTPs)

## Backend Setup

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

New packages added:
- `jsonwebtoken` - For JWT token generation
- `nodemailer` - For sending emails
- `bcryptjs` - For password hashing
- `google-auth-library` - For Google OAuth

### Step 2: Configure Environment Variables

Create a `.env` file in the `backend` folder:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# MongoDB Connection
MONGO_URI=mongodb://127.0.0.1:27017/ui_componts

# Server Port
PORT=5000

# JWT Secret (change this to something secure in production)
JWT_SECRET=your-super-secret-key-12345

# Gmail SMTP Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### Step 3: Setup Gmail App Password

To send emails via Gmail, you need to create an App Password:

1. Go to [Google Account](https://myaccount.google.com/)
2. Click **Security** in the left sidebar
3. Scroll down and enable **2-Step Verification** (if not already enabled)
4. Then select **App passwords** → Select **Mail** and **Windows Computer** → Generate
5. Copy the 16-character password
6. Paste it in `.env` as `EMAIL_PASSWORD`

**Note:** Use only the 16-character password (without spaces)

### Step 4: Start Backend Server

```bash
npm run dev
```

You should see:
```
Connected to MongoDB successfully
Server running on port 5000
```

## Frontend Setup

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Configure Google OAuth (Optional but Recommended)

If you want to enable Google Sign-up:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web Application)
5. Add authorized JavaScript origins: `http://localhost:5173`
6. Copy your Client ID
7. Create/edit `frontend/.env.local`:

```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start Frontend

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

## API Endpoints

### 1. Regular Signup (Email/Password)

**POST** `/api/auth/signup`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP sent to your email",
  "email": "john@example.com",
  "userId": "user-id"
}
```

### 2. Google Signup

**POST** `/api/auth/google-signup`

Request:
```json
{
  "token": "google-jwt-token"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP sent to your email",
  "email": "user@gmail.com",
  "name": "User Name",
  "userId": "user-id"
}
```

### 3. Verify OTP

**POST** `/api/auth/verify-otp`

Request:
```json
{
  "email": "john@example.com",
  "otp": "123456",
  "password": "newpassword123"
}
```

Response:
```json
{
  "success": true,
  "message": "Email verified successfully! You are now logged in.",
  "token": "jwt-token",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": true
  }
}
```

### 4. Resend OTP

**POST** `/api/auth/resend-otp`

Request:
```json
{
  "email": "john@example.com"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP resent to your email"
}
```

### 5. Login

**POST** `/api/auth/login`

Request:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt-token",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": true
  }
}
```

## User Flow

### Signup Flow
1. User clicks "Sign Up"
2. Enters name, email, password
3. Clicks "Sign Up" button
4. OTP page appears
5. User checks email for OTP
6. Enters 6-digit OTP
7. Re-enters password for confirmation
8. Clicks "Verify & Create Account"
9. User is logged in and redirected

### Google Signup Flow
1. User clicks "Sign up with Google"
2. Google authentication modal appears
3. User selects their Google account
4. OTP is sent to their Gmail
5. Same OTP verification process as above
6. User must set a password (for password recovery, etc.)
7. After verification, user is logged in

### Login Flow
1. User clicks "Login"
2. Enters email and password
3. Clicks "Login"
4. If email not verified, shows error
5. If verified, generates JWT token
6. User is logged in

## Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (bcrypt hashed),
  googleId: String (optional),
  otp: String (temporary),
  otpExpiry: Date,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Notes

1. **Passwords**: All passwords are hashed using bcryptjs (10 rounds)
2. **OTP**: 6-digit OTP, expires in 10 minutes
3. **JWT Tokens**: Expire in 7 days
4. **Email**: Uses Gmail SMTP with app-specific passwords (not main account password)
5. **CORS**: Configure allowed origins in production

## Troubleshooting

### "Failed to send OTP email"

- Check `EMAIL_USER` and `EMAIL_PASSWORD` in `.env`
- Verify Gmail App Password is set correctly (without spaces)
- Ensure 2-Step Verification is enabled on Gmail account
- Check if "Less secure apps" is disabled (use App Password instead)

### "Database not connected"

- Ensure MongoDB is running: `mongod` or check connection string in `.env`
- Verify `MONGO_URI` is correct

### "Google Sign-up not showing"

- Check if `VITE_GOOGLE_CLIENT_ID` is set in `frontend/.env.local`
- Verify Client ID is valid from Google Cloud Console
- Check browser console for errors

### OTP expired

- User has 10 minutes to enter OTP
- Can click "Resend" to get a new OTP

### Password too short

- Password must be at least 6 characters
- Both signup and OTP verification screens validate this

## Testing the System

1. **Start MongoDB**: `mongod`
2. **Start Backend**: `cd backend && npm run dev`
3. **Start Frontend**: `cd frontend && npm run dev`
4. **Open Browser**: `http://localhost:5173`
5. **Click Sign Up**
6. **Enter test data**
7. **Check terminal for OTP** (logged in console)
8. **Or check email for OTP** (if Gmail configured)
9. **Enter OTP and password**
10. **Verify login in localStorage**

## Production Deployment

For production deployment:

1. Use strong `JWT_SECRET`
2. Set `NODE_ENV=production`
3. Configure proper MongoDB Atlas connection
4. Use environment-specific email service (SendGrid, AWS SES, etc.)
5. Enable HTTPS
6. Configure proper CORS origins
7. Add rate limiting for API endpoints
8. Use secure cookie settings for JWT

## Support

For issues or questions, check:
- Backend logs: `npm run dev` output
- Browser console: F12 → Console tab
- Network tab: F12 → Network tab to see API calls
- MongoDB: `db.users.find()` to see stored users
