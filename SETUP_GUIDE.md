# Complete Setup Guide - Components from MongoDB

## Database Structure ✅
- **Database:** `ui_componts`
- **Collection:** `all_components`
- **Fields:** `name`, `code`, `timestamps`

## Step-by-Step Setup

### 1️⃣ Start MongoDB
```bash
mongod
```
Make sure MongoDB is running on `mongodb://127.0.0.1:27017`

### 2️⃣ Seed Database with Components
```bash
cd backend
npm run seed
```

Expected output:
```
✅ Connected to MongoDB
✅ Created/Updated: Modern Button Showcase
✅ Created/Updated: Card Example
✅ Created/Updated: Stylish Card
🎉 All components seeded/updated successfully!
```

### 3️⃣ Start Backend Server
```bash
npm run dev
```

Expected output:
```
Connected to MongoDB successfully
Server running on http://localhost:5000
```

### 4️⃣ Start Frontend Server (New Terminal)
```bash
cd frontend
npm run dev
```

Expected output:
```
Local: http://localhost:5173
```

### 5️⃣ View Components in Browser
Open: **http://localhost:5173/components**

## Data Flow

```
seed.js
  ↓ (Components data)
MongoDB Database (ui_componts > all_components)
  ↓ (GET /api/components)
Backend Express Server
  ↓ (fetch from API)
React Frontend (App.jsx)
  ↓ (ComponentView)
Live Preview + Code Display
```

## Files Modified

### Backend
- ✅ `backend/models/ComponentModel.js` - Collection name updated to `all_components`
- ✅ `backend/index.js` - Database URI updated to `ui_componts`
- ✅ `backend/seed.js` - Database URI updated to `ui_componts`

### Frontend
- ✅ Already fetches from `/api/components`
- ✅ Already displays with ComponentView toggle

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/components` | GET | Fetch all components |
| `/api/components` | POST | Add new component |
| `/api/components/:id` | PUT | Update component |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Make sure `mongod` is running |
| Components not appearing | Run `npm run seed` to populate database |
| Port already in use | Change PORT in `.env` or kill process on port |
| Components not updating | Clear browser cache and refresh |

## Environment Variables (if needed)

Create `.env` file in backend:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ui_componts
PORT=5000
```

## Next Steps

1. Add more components to `seed.js`
2. Update seed script to run it again
3. Refresh browser to see new components

Happy Coding! 🚀






 {
    name: "Header",
    category: "Header",
    code: `




    
  `
  },
 {
    name: "Cards",
    category: "Cards",
    code: `




    
  `
  },
