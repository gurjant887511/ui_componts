# 🔐 Gmail OTP Authentication - Complete Reference

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER BROWSER                               │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  SignupModal.jsx / OTPVerification.jsx                   │   │
│  │  - Beautiful gradient UI                                 │   │
│  │  - Form validation                                       │   │
│  │  - Error/success messages                                │   │
│  │  - Auto-focus OTP inputs                                 │   │
│  │  - Countdown timer                                       │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↕ (HTTP REST API)
┌─────────────────────────────────────────────────────────────────┐
│                    EXPRESS BACKEND                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Authentication Routes (index.js)                        │   │
│  │  - POST /api/auth/signup                                 │   │
│  │  - POST /api/auth/google-signup                          │   │
│  │  - POST /api/auth/verify-otp                             │   │
│  │  - POST /api/auth/resend-otp                             │   │
│  │  - POST /api/auth/login                                  │   │
│  │                                                          │   │
│  │  Helper Functions:                                       │   │
│  │  - generateOTP()      → 6 random digits                 │   │
│  │  - sendOTPEmail()     → Gmail SMTP + Nodemailer         │   │
│  │  - bcrypt.hash()      → Password hashing                │   │
│  │  - jwt.sign()         → Token generation                │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                    ↕                           ↕
            MongoDB Connection         Gmail SMTP Connection
                    ↓                           ↓
        ┌──────────────────────┐    ┌──────────────────────┐
        │   MongoDB Database   │    │    Gmail (SMTP)      │
        │   ┌──────────────┐   │    │                      │
        │   │ users        │   │    │ Sends OTP emails to  │
        │   │ ├─ _id       │   │    │ users' email address │
        │   │ ├─ name      │   │    │                      │
        │   │ ├─ email     │   │    │ Uses:                │
        │   │ ├─ password  │   │    │ nodemailer library   │
        │   │ ├─ googleId  │   │    │ with OAuth/App Pass  │
        │   │ ├─ otp       │   │    └──────────────────────┘
        │   │ ├─ otpExpiry │   │
        │   │ ├─ verified  │   │
        │   │ └─ timestamps│   │
        │   └──────────────┘   │
        └──────────────────────┘
```

## API Reference

### 1. Regular Signup

**Endpoint:** `POST /api/auth/signup`

**Request:**
```javascript
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword123",
  "confirmPassword": "mypassword123"
}
```

**Response (200 OK):**
```javascript
{
  "success": true,
  "message": "OTP sent to your email",
  "email": "john@example.com",
  "userId": "507f1f77bcf86cd799439011"
}
```

**Error (400):**
```javascript
{
  "message": "Email already registered"
  // or "All fields are required"
  // or "Passwords do not match"
}
```

**Process:**
1. Validates all fields
2. Checks if email already exists
3. Hashes password with bcryptjs
4. Creates user with `isVerified: false`
5. Generates OTP and sends email
6. Returns userId for frontend reference

---

### 2. Google Signup

**Endpoint:** `POST /api/auth/google-signup`

**Request:**
```javascript
{
  "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ..."
}
```

**Response (200 OK):**
```javascript
{
  "success": true,
  "message": "OTP sent to your email",
  "email": "user@gmail.com",
  "name": "User Name",
  "userId": "507f1f77bcf86cd799439011"
}
```

**Special Cases:**

If user already verified (returning user):
```javascript
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "name": "User Name",
    "email": "user@gmail.com",
    "isVerified": true
  },
  "message": "Welcome back!"
}
```

**Process:**
1. Decodes Google JWT token
2. Extracts email and name
3. Checks if user exists and is verified
4. If verified: generates JWT and auto-login
5. If new/unverified: generates OTP and sends email

---

### 3. Verify OTP

**Endpoint:** `POST /api/auth/verify-otp`

**Request:**
```javascript
{
  "email": "john@example.com",
  "otp": "123456",
  "password": "newpassword123"
}
```

**Response (200 OK):**
```javascript
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": true
  },
  "message": "Email verified successfully! You are now logged in."
}
```

**Errors:**
```javascript
// Invalid OTP
{ "message": "Invalid OTP" }

// OTP expired
{ "message": "OTP has expired" }

// User not found
{ "message": "User not found" }
```

**Process:**
1. Finds user by email
2. Validates OTP matches
3. Checks OTP hasn't expired (10 min)
4. Sets `isVerified: true`
5. Clears OTP from database
6. Hashes password (overwrite temporary one from signup)
7. Generates JWT token
8. Returns token and user info

---

### 4. Resend OTP

**Endpoint:** `POST /api/auth/resend-otp`

**Request:**
```javascript
{
  "email": "john@example.com"
}
```

**Response (200 OK):**
```javascript
{
  "success": true,
  "message": "OTP resent to your email"
}
```

**Errors:**
```javascript
// User not found
{ "message": "User not found" }

// Already verified
{ "message": "User is already verified" }

// Email failed
{ "message": "Failed to send OTP email" }
```

**Process:**
1. Finds user by email
2. Checks user exists and not verified
3. Generates new OTP
4. Updates OTP expiry (new 10 minutes)
5. Sends email with new OTP

---

### 5. Login

**Endpoint:** `POST /api/auth/login`

**Request:**
```javascript
{
  "email": "john@example.com",
  "password": "mypassword123"
}
```

**Response (200 OK):**
```javascript
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": true
  },
  "message": "Login successful"
}
```

**Errors:**
```javascript
// User not found
{ "message": "User not found" }

// Not verified
{ "message": "Please verify your email first" }

// Wrong password
{ "message": "Invalid password" }
```

**Process:**
1. Finds user by email
2. Checks user is verified
3. Compares password with hash
4. Generates JWT token
5. Returns token and user info

---

## Frontend Flow

### SignupModal Component

**States:**
```javascript
formData         // Name, email, password, confirmPassword
loading          // API call in progress
error            // Error message to display
showOTPVerification  // Toggle to OTP page
pendingUser      // Store email during OTP process
```

**Functions:**
```javascript
handleChange()           // Update form field
handleSubmit()           // Call /api/auth/signup
handleGoogleSuccess()    // Call /api/auth/google-signup
handleOTPVerificationSuccess()  // After OTP verified
```

### OTPVerification Component

**States:**
```javascript
otp              // Array of 6 digits: ['1','2','3','4','5','6']
password         // Password for confirmation
loading          // API call in progress
error            // Error message
success          // Success message
timeLeft         // Countdown in seconds (600 = 10 min)
canResend        // Enable resend button after 10 min
```

**Features:**
- Auto-focus next OTP input
- Backspace moves to previous input
- Number only validation
- Countdown timer (10 minutes)
- Resend button (after timer expires)
- Password validation (min 6 chars)
- Success/error message display

---

## Database Schema

### User Document

```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  
  // Basic Info
  name: "John Doe",
  email: "john@example.com",
  
  // Password & Auth
  password: "$2a$10$N8X4j7...", // bcrypt hash
  googleId: "110169726798...",   // From Google, optional
  
  // OTP Verification
  otp: "123456",              // Temporary, cleared after verify
  otpExpiry: ISODate("2026-01-09T11:25:00Z"),  // 10 min from sent
  isVerified: true,           // Email verified
  
  // Timestamps
  createdAt: ISODate("2026-01-09T11:15:00Z"),
  updatedAt: ISODate("2026-01-09T11:25:30Z")
}
```

### Indexes Recommended

```javascript
// In production, create these indexes for performance:
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ googleId: 1 }, { sparse: true })
db.users.createIndex({ otpExpiry: 1 }, { expireAfterSeconds: 0 })
```

---

## Security Details

### Password Hashing

```javascript
// Using bcryptjs with 10 salt rounds
const hashed = await bcrypt.hash(password, 10);
// Result: $2a$10$N8X4j7...WvQv3nDQR3Oc8y (60 chars)

// Verification
const isValid = await bcrypt.compare(inputPassword, hashed);
```

**Strength:** Over 100 bits of entropy

### OTP Generation

```javascript
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
// Returns: "123456" (100000-999999 range)
```

**Security:**
- 1 in 1,000,000 chance
- Expires in 10 minutes
- Can be resent

### JWT Token

```javascript
const token = jwt.sign(
  { email, userId },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);
// Token expires in 7 days
```

**Token Structure:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9  // Header
.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1MDdm...  // Payload
.3D_OkB1EqKo5Zk7F_J1K2L3M4N5O6P7Q8R9S0  // Signature
```

### Email Security

```javascript
// Uses Gmail SMTP with App Password
// Never store plain Gmail password
// OAuth2 based authentication
// TLS encryption for email transmission
```

---

## Error Codes

| Code | Message | Cause |
|------|---------|-------|
| 400 | Token is required | Missing token for Google signup |
| 400 | Invalid token | Invalid Google JWT |
| 400 | All fields required | Missing name, email, password |
| 400 | Passwords do not match | confirmPassword != password |
| 400 | Email already registered | User with email exists |
| 400 | Invalid OTP | OTP doesn't match |
| 400 | OTP has expired | More than 10 minutes passed |
| 400 | Please verify email first | isVerified is false |
| 400 | Invalid password | Password doesn't match hash |
| 404 | User not found | No user with that email |
| 500 | Failed to send email | Nodemailer/Gmail error |
| 503 | Database not connected | MongoDB connection failed |

---

## Environment Variables

```env
# Database
MONGO_URI=mongodb://127.0.0.1:27017/ui_componts
  → MongoDB connection string

# Server
PORT=5000
  → Server listening port

# Security
JWT_SECRET=your-secret-key-change-in-production
  → Secret for signing JWT tokens

# Email (Gmail)
EMAIL_USER=your-email@gmail.com
  → Gmail address sending OTPs

EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
  → Gmail App Password (16 chars, spaces removed)

# Frontend
FRONTEND_URL=http://localhost:5173
  → Used for CORS configuration
```

---

## Testing Scenarios

### Happy Path: Email Signup
1. ✅ User enters valid data
2. ✅ OTP sent successfully
3. ✅ User enters correct OTP
4. ✅ Password saved securely
5. ✅ User auto-logged in

### Happy Path: Google Signup
1. ✅ User authenticates with Google
2. ✅ OTP sent to Gmail
3. ✅ User enters OTP
4. ✅ Password set
5. ✅ User logged in

### Edge Cases
1. ❌ Invalid email format
2. ❌ Password too short
3. ❌ Passwords don't match
4. ❌ Email already exists
5. ❌ Wrong OTP entered
6. ❌ OTP expired
7. ❌ Resend OTP when verified
8. ❌ Database unavailable

---

## Performance Optimization

```javascript
// Current implementation is optimized for:
- Single database query per endpoint
- Bcrypt calculation (~100ms, acceptable)
- Email sending (async, doesn't block response)
- JWT verification (fast, < 1ms)

// Optional future optimizations:
- Rate limiting on OTP requests
- Cache verified users
- Use Redis for OTP storage (faster than DB)
- Email queue for bulk sending
- Database connection pooling
```

---

## Deployment Checklist

- [ ] Change JWT_SECRET to strong random string
- [ ] Configure production MongoDB URI
- [ ] Setup production email service (SendGrid, AWS SES)
- [ ] Enable HTTPS only
- [ ] Set proper CORS origins
- [ ] Add rate limiting
- [ ] Setup error logging
- [ ] Setup monitoring/alerts
- [ ] Test all flows in production
- [ ] Backup database regularly
- [ ] Monitor API performance
- [ ] Setup auto-scaling

---

## Support & Resources

- **Quick Start:** GMAIL_OTP_QUICKSTART.md
- **Full Setup:** GMAIL_OTP_SETUP.md
- **Implementation Summary:** OTP_IMPLEMENTATION_SUMMARY.md
- **Checklist:** SETUP_CHECKLIST.md
- **Backend Code:** backend/index.js
- **Frontend Component:** frontend/src/components/OTPVerification.jsx
- **User Model:** backend/models/UserModel.js
