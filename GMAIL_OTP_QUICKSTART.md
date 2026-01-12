# Quick Start: Gmail OTP Authentication

## 5-Minute Setup

### 1. Backend Configuration (2 min)

```bash
cd backend
npm install
```

Create `.env`:
```env
MONGO_URI=mongodb://127.0.0.1:27017/ui_componts
PORT=5000
JWT_SECRET=dev-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:5173
```

**Get Gmail App Password:**
1. Go to [Gmail Security](https://myaccount.google.com/security)
2. Turn on 2-Step Verification (if needed)
3. Click "App passwords"
4. Select Mail + Windows Computer
5. Copy the 16-character password → paste in `.env`

### 2. Start Backend

```bash
npm run dev
```

Should see: `Server running on port 5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `frontend/.env.local` (optional, for Google signup):
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Frontend

```bash
npm run dev
```

Open: `http://localhost:5173`

## Testing Sign Up

1. Click **Sign Up**
2. Fill in:
   - Name: `Test User`
   - Email: `your-email@gmail.com`
   - Password: `testpass123`
3. Click **Sign Up** button
4. Check your email for OTP (or check backend terminal)
5. Enter OTP and password
6. Click **Verify & Create Account**
7. ✅ You're logged in!

## API Endpoints Quick Reference

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/signup` | Register with email |
| POST | `/api/auth/google-signup` | Register with Google |
| POST | `/api/auth/verify-otp` | Verify OTP & save password |
| POST | `/api/auth/resend-otp` | Resend OTP to email |
| POST | `/api/auth/login` | Login with email/password |

## Database Check

See stored users in MongoDB:
```bash
mongosh
use ui_componts
db.users.find().pretty()
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Email not sending | Check EMAIL_USER & EMAIL_PASSWORD in .env |
| Database not connected | Ensure MongoDB is running |
| Google signup not showing | Set VITE_GOOGLE_CLIENT_ID in .env.local |
| OTP expired | User has 10 minutes, can resend |

## File Structure

```
backend/
  ├── index.js (updated with auth routes)
  ├── models/
  │   └── UserModel.js (new)
  ├── .env.example (new)
  └── package.json (updated dependencies)

frontend/
  ├── src/components/
  │   ├── SignupModal.jsx (updated)
  │   └── OTPVerification.jsx (new)
  └── .env.local (optional)
```

## What Changed

### New Backend Routes
- `POST /api/auth/signup` - Email signup with OTP
- `POST /api/auth/google-signup` - Google signup with OTP  
- `POST /api/auth/verify-otp` - Verify OTP & set password
- `POST /api/auth/resend-otp` - Resend OTP
- `POST /api/auth/login` - Email/password login

### New User Model
- Stores: name, email, password (hashed), googleId, OTP, verification status

### New Components
- `OTPVerification.jsx` - Beautiful OTP input & password form

### Updated Components
- `SignupModal.jsx` - Now uses OTP flow for both regular & Google signup

## Next Steps

1. Deploy database (MongoDB Atlas)
2. Configure email service for production (SendGrid/AWS SES)
3. Setup Google OAuth in production
4. Add password reset functionality
5. Add user profile page
6. Add logout functionality

---

**Full documentation:** See [GMAIL_OTP_SETUP.md](./GMAIL_OTP_SETUP.md)
