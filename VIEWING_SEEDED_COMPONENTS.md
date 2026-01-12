# How to View Seeded Components

## Quick Setup Guide

Follow these steps to view the components from `seed.js` in your component library:

### Step 1: Start MongoDB
```bash
# Open a new PowerShell terminal and run:
mongod
```
Wait for it to show "Waiting for connections on port 27017"

### Step 2: Seed the Database
```bash
# Open a new PowerShell terminal in the backend folder
cd backend
npm run seed
```
You should see:
```
✅ Connected to MongoDB
✅ Created: Button Examples
✅ Created: Card Example
✅ Created: Stylish Card
🎉 All components seeded/updated successfully!
```

### Step 3: Start Backend Server
```bash
# In backend folder (PowerShell)
npm run dev
```
You should see: `Server running on http://localhost:5000`

### Step 4: Start Frontend Server
```bash
# Open another PowerShell terminal in the frontend folder
cd frontend
npm run dev
```
You should see: `Local: http://localhost:5173`

### Step 5: View Components
1. Go to `http://localhost:5173` in your browser
2. Click on **"/components"** in the navbar
3. You'll see all seeded components:
   - ✨ Button Examples
   - ✨ Card Example
   - ✨ Stylish Card

## What Happens Behind the Scenes

1. **seed.js** → Creates 3 components in MongoDB
2. **backend/index.js** → Serves components via `/api/components` endpoint
3. **App.jsx** → Fetches components from API when it loads
4. **ComponentView.jsx** → Displays each component with Preview/Code toggle

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Components don't appear | Make sure you ran `npm run seed` |
| "Database not connected" | Make sure MongoDB is running with `mongod` |
| 404 error on API | Make sure backend is running on port 5000 |
| Blank page on frontend | Check browser console (F12) for errors |

## Adding New Components

Edit `backend/seed.js` and add to the `components` array:
```javascript
{
  name: "Your Component Name",
  code: `function YourComponent() {
    return (
      <div>Your JSX code here</div>
    );
  }`
}
```

Then run `npm run seed` again to update the database.
