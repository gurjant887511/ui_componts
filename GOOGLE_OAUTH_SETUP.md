# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
4. Select **Web application**
5. Add authorized redirect URIs:
   - `http://localhost:5173` (for dev)
   - `http://localhost:5174`
   - Your production domain

## Step 2: Get Your Client ID

After creating the OAuth app, you'll get a **Client ID**. Copy it.

## Step 3: Update Frontend

In `frontend/src/main.jsx`, replace `YOUR_GOOGLE_CLIENT_ID` with your actual Client ID:

```jsx
<GoogleOAuthProvider clientId="YOUR_ACTUAL_CLIENT_ID_HERE">
```

## Step 4: Install Dependencies

Backend:
```bash
cd backend
npm install jwt-decode
```

Frontend (already done):
```bash
cd frontend
npm install @react-oauth/google
```

## Step 5: Start Your App

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## How It Works

1. **User clicks "Sign up with Google"** on the signup modal
2. **Google OAuth dialog appears** - user authenticates
3. **Frontend receives JWT token** from Google
4. **Frontend sends token to backend** at `/api/auth/google-signup`
5. **Backend decodes token** and extracts user info (name, email, picture)
6. **Backend returns user data + auth token** to frontend
7. **Frontend stores auth token** in localStorage
8. **User is logged in!** ✅

## Security Notes

⚠️ **Development Only**: The current implementation doesn't verify the Google signature.

For production, install and use:
```bash
npm install google-auth-library
```

Then verify the token properly:
```javascript
const ticket = await client.verifyIdToken({
  idToken: token,
  audience: process.env.GOOGLE_CLIENT_ID
});
const payload = ticket.getPayload();
```

## Troubleshooting

- **"Invalid Client ID"**: Make sure you copied the correct Client ID from Google Console
- **CORS errors**: Check that your frontend URL is in the OAuth authorized redirect URIs
- **Token expired**: Google tokens expire after ~1 hour, implement refresh logic if needed

## Environment Variables (Optional)

Create `.env` in backend:
```
GOOGLE_CLIENT_ID=your_client_id_here
MONGO_URI=mongodb://127.0.0.1:27017/ui_componts
PORT=5000
```
