# Vercel Deployment Guide

## Step-by-Step Deployment Instructions

### 1. **Install Vercel CLI**
```bash
npm install -g vercel
```

### 2. **Authenticate with Vercel**
```bash
vercel login
```
This will open a browser to authenticate your Vercel account. If you don't have one, create it at https://vercel.com

### 3. **Deploy Your Project**

From the root directory of your project:
```bash
vercel
```

Follow the prompts:
- **Confirm project setup** - Press `y` when asked if you want to proceed
- **Project name** - Enter your project name (or use suggested default)
- **Project root** - Press `Enter` to use current directory
- **Build command** - Confirm the suggested build command
- **Output directory** - Should be `frontend/dist`

### 4. **Environment Variables** (if needed)

If your frontend needs to call the backend API:

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add your environment variables:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.vercel.app/api`)

Then update your frontend code to use these variables:

**In your React components:**
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

### 5. **Update API Calls**

In your code where you fetch from the backend, update to use the environment variable:

**Before:**
```javascript
const response = await fetch('http://localhost:5000/api/components');
```

**After:**
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const response = await fetch(`${API_URL}/components`);
```

### 6. **Verify Deployment**

After deployment:
- Your frontend will be available at: `https://your-project-name.vercel.app`
- Check the deployment logs in the Vercel dashboard
- Test all features work correctly

## Project Structure for Deployment

```
ui_componts-main/
├── frontend/                 # React app (deployed to Vercel)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js API (can be deployed separately or to Vercel)
│   ├── index.js
│   ├── package.json
│   └── models/
├── vercel.json              # Vercel config
└── .vercelignore            # Files to ignore
```

## Alternative: Deploy Backend Separately

If you want to deploy your backend to a different service:

### Using Railway or Render (recommended for Node.js backend)
1. Go to https://railway.app or https://render.com
2. Connect your GitHub repository
3. Select the `backend` folder as the project root
4. Add environment variables (MongoDB URI, etc.)
5. Deploy

Then update your `VITE_API_URL` to point to the deployed backend.

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally first
- Check the build logs in Vercel dashboard

### API calls fail after deployment
- Update `VITE_API_URL` environment variable in Vercel settings
- Ensure CORS is configured on your backend
- Check that backend is accessible from frontend

### Environment variables not loading
- Redeploy after adding environment variables
- Make sure you're using `import.meta.env.VITE_*` for Vite

## Useful Vercel Commands

```bash
# View project status
vercel status

# View logs
vercel logs

# Set environment variables
vercel env add VITE_API_URL

# Redeploy
vercel --prod

# Remove deployment
vercel remove
```

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- Railway Docs: https://railway.app/docs
- Render Docs: https://render.com/docs
