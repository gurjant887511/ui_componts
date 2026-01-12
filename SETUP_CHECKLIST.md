# 📋 Gmail OTP Authentication - Setup Checklist

Complete this checklist to get your OTP authentication system up and running.

## Step 1: MongoDB Setup ✓

- [ ] MongoDB is installed and running locally
  - Windows: `mongod` command works
  - Or using MongoDB Atlas cloud connection

- [ ] Verify connection:
  ```bash
  mongosh
  use ui_componts
  db.users.find()
  ```

## Step 2: Gmail Configuration (REQUIRED for Email)

**Option A: Using Gmail (Recommended)**

- [ ] Create/use Gmail account at https://gmail.com
- [ ] Enable 2-Step Verification
  - Go to https://myaccount.google.com/security
  - Turn ON "2-Step Verification"
  
- [ ] Generate App Password
  - Same security page → "App passwords"
  - Select "Mail" and "Windows Computer"
  - Copy 16-character password
  
- [ ] Save credentials for backend .env

**Option B: Testing Without Email**

- [ ] OTP will print to server console during development
- [ ] Good for testing the UI without Gmail setup

## Step 3: Backend Setup

### 3.1 Install Dependencies
- [ ] Run in `backend/` folder:
  ```bash
  npm install
  ```
  Should install: jsonwebtoken, nodemailer, bcryptjs

### 3.2 Create .env File
- [ ] Create `backend/.env` file
- [ ] Copy from `backend/.env.example`:
  ```env
  MONGO_URI=mongodb://127.0.0.1:27017/ui_componts
  PORT=5000
  JWT_SECRET=dev-secret-key-change-in-production
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASSWORD=your-16-char-app-password
  FRONTEND_URL=http://localhost:5173
  ```

- [ ] Fill in your actual Gmail credentials
- [ ] **KEEP THIS FILE SECURE - Never commit to git**

### 3.3 Test Backend
- [ ] Run backend:
  ```bash
  npm run dev
  ```
- [ ] Should see:
  ```
  Connected to MongoDB successfully
  Server running on port 5000
  ```

- [ ] Keep terminal open

## Step 4: Google OAuth (Optional but Recommended)

### 4.1 Create Google OAuth Credentials
- [ ] Go to https://console.cloud.google.com/
- [ ] Create a new project or select existing
- [ ] Enable "Google+ API"
- [ ] Create OAuth 2.0 credentials (Web Application)
- [ ] Add authorized origins:
  - [ ] `http://localhost:5173`
  - [ ] `http://localhost:3000` (if testing)
- [ ] Copy Client ID

### 4.2 Frontend Configuration
- [ ] Create `frontend/.env.local` file
  ```env
  VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
  VITE_API_URL=http://localhost:5000/api
  ```

## Step 5: Frontend Setup

### 5.1 Install Dependencies
- [ ] Run in `frontend/` folder:
  ```bash
  npm install
  ```

### 5.2 Start Frontend
- [ ] Run:
  ```bash
  npm run dev
  ```

- [ ] Should see:
  ```
  ➜  Local:   http://localhost:5173/
  ```

- [ ] Open in browser: http://localhost:5173

## Step 6: Test the System

### 6.1 Sign Up with Email

- [ ] Click "Sign Up" button
- [ ] Fill in test data:
  - [ ] Full Name: `Test User`
  - [ ] Email: `your-email@gmail.com`
  - [ ] Password: `testpass123`
  - [ ] Confirm Password: `testpass123`
  - [ ] Check "I agree to Terms"
  - [ ] Click "Sign Up"

- [ ] OTP page should appear
- [ ] Get OTP from:
  - [ ] Email inbox (if Gmail configured)
  - [ ] Backend console (development testing)

- [ ] On OTP page:
  - [ ] Enter 6-digit OTP
  - [ ] Enter password again
  - [ ] Click "Verify & Create Account"

- [ ] Should see success message
- [ ] Should be logged in (check localStorage)

### 6.2 Test Google Sign Up (if configured)

- [ ] Click "Sign up with Google"
- [ ] Select your Google account
- [ ] OTP page appears
- [ ] Same OTP verification process
- [ ] Password must be set

### 6.3 Test Login

- [ ] Close/refresh application
- [ ] Click "Login"
- [ ] Enter test user credentials:
  - [ ] Email: `your-email@gmail.com`
  - [ ] Password: `testpass123`
- [ ] Should login successfully

### 6.4 Database Verification

- [ ] Open another terminal
- [ ] Run:
  ```bash
  mongosh
  use ui_componts
  db.users.find().pretty()
  ```

- [ ] Should see your test user with:
  - [ ] `isVerified: true`
  - [ ] `password: (hashed, not plain text)`
  - [ ] `otp: null` (cleared after verification)

## Step 7: Security Check

- [ ] Backend .env file is in .gitignore
- [ ] Frontend .env.local is in .gitignore
- [ ] Never commit real credentials
- [ ] JWT_SECRET is strong (not "dev-secret-key")
- [ ] Passwords in database are hashed

## Step 8: Documentation

- [ ] Read `OTP_IMPLEMENTATION_SUMMARY.md` for overview
- [ ] Read `GMAIL_OTP_QUICKSTART.md` for quick reference
- [ ] Read `GMAIL_OTP_SETUP.md` for detailed documentation
- [ ] Read `backend/TESTING_GUIDE.md` for testing tips

## Troubleshooting Checklist

### Backend won't start
- [ ] MongoDB running? (mongod command)
- [ ] Port 5000 available?
- [ ] Check error message in console
- [ ] Try different PORT: `$env:PORT=5001; npm run dev`

### OTP not sending
- [ ] EMAIL_USER set correctly in .env?
- [ ] EMAIL_PASSWORD is 16-character app password?
- [ ] 2-Step Verification enabled on Gmail?
- [ ] Gmail account unlocked?
- [ ] Check backend console for errors

### Frontend can't reach backend
- [ ] Backend running on port 5000?
- [ ] VITE_API_URL set to `http://localhost:5000/api`?
- [ ] Check browser console (F12) for errors
- [ ] Check network tab for failed requests

### Google Sign-up not working
- [ ] VITE_GOOGLE_CLIENT_ID set in .env.local?
- [ ] Client ID is valid from Google Console?
- [ ] Check browser console for errors
- [ ] Refresh page after setting env

### Database connection failed
- [ ] MongoDB running?
- [ ] MONGO_URI correct in .env?
- [ ] MongoDB listening on port 27017?
- [ ] Check connection string syntax

## Files Structure Overview

```
✅ COMPLETED
├── backend/
│   ├── index.js (UPDATED - 5 new auth routes)
│   ├── models/
│   │   ├── UserModel.js (NEW)
│   │   └── (other models unchanged)
│   ├── package.json (UPDATED - 3 new dependencies)
│   ├── .env.example (NEW)
│   ├── TESTING_GUIDE.md (NEW)
│   └── node_modules/ (updated with new packages)
│
├── frontend/
│   ├── src/components/
│   │   ├── SignupModal.jsx (UPDATED - OTP flow)
│   │   ├── OTPVerification.jsx (NEW)
│   │   └── (other components unchanged)
│   ├── .env.local (NEW - optional, for Google)
│   └── (rest unchanged)
│
├── OTP_IMPLEMENTATION_SUMMARY.md (NEW)
├── GMAIL_OTP_SETUP.md (NEW)
├── GMAIL_OTP_QUICKSTART.md (NEW)
└── .gitignore (add .env and .env.local if not present)
```

## After Setup Complete

### Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 - MongoDB (if local):**
```bash
mongod
```

### Accessing Application
- Open: `http://localhost:5173` in browser

### Making Changes

**Backend Changes:**
- Edit files in `backend/` 
- Changes auto-reload (nodemon)
- Check terminal for errors

**Frontend Changes:**
- Edit files in `frontend/src/`
- Changes auto-reload (Vite)
- Check browser for errors

## Production Deployment

Before deploying to production:

- [ ] Change `JWT_SECRET` to strong random string
- [ ] Use MongoDB Atlas instead of local
- [ ] Use SendGrid or AWS SES for email (more reliable)
- [ ] Set `NODE_ENV=production`
- [ ] Configure CORS for production domains
- [ ] Enable HTTPS
- [ ] Use environment-specific .env files
- [ ] Enable rate limiting on auth endpoints
- [ ] Add logging and monitoring
- [ ] Test all flows thoroughly

## ✅ Final Verification

Run this complete flow one more time:

1. [ ] Backend running: `npm run dev` in backend/
2. [ ] Frontend running: `npm run dev` in frontend/
3. [ ] Open http://localhost:5173
4. [ ] Sign up with email
5. [ ] Verify OTP
6. [ ] Check localStorage for token
7. [ ] Check MongoDB for user record
8. [ ] Login again
9. [ ] All working! ✅

## 🎉 You're Ready!

Your Gmail OTP authentication system is complete and tested.

**Next Steps:**
- Customize UI as needed
- Add more features (password reset, 2FA, etc.)
- Deploy to production
- Monitor user feedback

**Questions?** Check the documentation files in the root directory.
