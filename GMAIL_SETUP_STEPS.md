# 🔧 Gmail Configuration - Step by Step

## Problem: "Failed to send OTP email"

Your backend is trying to send OTP emails but doesn't have Gmail credentials configured yet.

## Solution: Get Gmail App Password (2 Minutes)

### Step 1: Go to Gmail Security Settings

1. Open your browser: **https://myaccount.google.com/security**
2. Log in with your Gmail account
3. Look for **"2-Step Verification"** option on the left

### Step 2: Enable 2-Step Verification (if not already enabled)

If you see "2-Step Verification is on":
- ✅ Skip to Step 3

If you see "2-Step Verification is off":
- Click it
- Follow Google's instructions to enable it
- This is required to get App Password

### Step 3: Generate App Password

1. After 2-Step Verification is enabled, go back to Security settings
2. Look for **"App passwords"** option (should appear below 2-Step Verification)
3. Click **"App passwords"**
4. A popup will appear with:
   - Select app: **"Mail"**
   - Select device: **"Windows Computer"**
5. Click **Generate**
6. Google will show a **16-character password** like: `xxxx xxxx xxxx xxxx`
7. **Copy this password** (without spaces)

### Step 4: Update Your Backend .env File

Edit: `backend/.env`

Find these lines:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

Replace with:
```
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=xxxxxxxxxxxxxxxx
```

**Example:**
```
EMAIL_USER=gurjant@gmail.com
EMAIL_PASSWORD=abcd1234efgh5678
```

### Step 5: Restart Backend

```bash
# In backend folder terminal
npm run dev
```

## 🎯 Important Notes

- ✅ Use only the **16-character App Password** (not your Gmail password)
- ✅ Remove any spaces from the password
- ✅ This App Password is different from your Gmail password
- ✅ Keep it secure - never share it
- ✅ It only works for sending emails, not for login

## ✅ Verification

After updating `.env`:

1. Backend should show: `Server running on port 5000`
2. Try signing up again
3. Check your email for OTP code
4. If you still don't receive it:
   - Check spam/junk folder
   - Check backend console for error message
   - Verify EMAIL_USER matches your Gmail address

## 🆘 Troubleshooting

**"App passwords" not showing?**
- Make sure 2-Step Verification is fully enabled
- Wait a few minutes and refresh
- Try a different browser

**Still not receiving emails?**
- Double-check password has no spaces
- Double-check EMAIL_USER is correct Gmail address
- Check backend console for specific error
- Try generating a new App Password

**See error: "Invalid credentials"**
- App Password is incorrect or has spaces
- EMAIL_USER is not your Gmail address
- Wait 5 minutes after generating password and try again

## 📱 Gmail Account Required

If you don't have a Gmail account:
1. Go to https://accounts.google.com/signup
2. Create a new Gmail account
3. Follow steps above to get App Password
4. Use that Gmail in your .env file

---

Once configured, your OTP emails will work! ✅
