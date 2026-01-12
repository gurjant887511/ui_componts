# MongoDB Setup - Two Options

## 🚀 **Option 1: MongoDB Atlas (EASIEST - Recommended)**

### **Step 1: Create Free Account**
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up with email
3. Create Organization & Project

### **Step 2: Create Database Cluster**
1. Click "Create Deployment"
2. Choose **M0 Free Tier** (Free forever)
3. Select your region (closest to you)
4. Wait for cluster to be ready (5-10 minutes)

### **Step 3: Get Connection String**
1. Click "Connect" button
2. Choose "Drivers"
3. Select Node.js + version 4.1 or later
4. Copy connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/ui_componts
   ```

### **Step 4: Update Backend**
Edit `backend/.env`:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ui_componts
PORT=5000
```

Replace:
- `username` - your MongoDB username
- `password` - your MongoDB password
- `cluster` - your cluster name

### **Step 5: Install Dependencies & Run**
```bash
cd backend
npm install
npm run seed
npm run dev
```

---

## 💻 **Option 2: Local MongoDB (If Already Installed)**

### **On Windows:**

1. **Check MongoDB Installation:**
   ```bash
   mongod --version
   ```

2. **If Not Installed, Download From:**
   - https://www.mongodb.com/try/download/community
   - Choose "Windows (msi)" installer
   - Run installer and follow steps

3. **Start MongoDB (use absolute path if needed):**
   ```bash
   # Default location
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
   
   # Or if added to PATH:
   mongod
   ```

4. **Keep MongoDB Running** (leave terminal open)

5. **In New Terminal - Seed Database:**
   ```bash
   cd backend
   npm install
   npm run seed
   npm run dev
   ```

---

## ✅ **Verify Setup**

### **Check if MongoDB is Connected:**

```bash
# Terminal 1: MongoDB Running
mongod  # or full path

# Terminal 2: Run Seed
cd backend
npm run seed

# Expected Output:
# ✅ Connected to MongoDB
# ✅ Created: Modern Button Showcase
# ✅ Created: Card Example
# ✅ Created: Stylish Card
# 🎉 All components seeded/updated successfully!
```

---

## 🎯 **Recommended: Use MongoDB Atlas**

- ✅ No installation needed
- ✅ Free forever (M0 tier)
- ✅ Cloud hosted (accessible anywhere)
- ✅ Automatic backups
- ✅ Easy to scale later

---

## 🔗 **Connection Test**

After setup, run:
```bash
npm run seed
```

If you see green checkmarks ✅, you're good to go!

```bash
npm run dev
```

Then open: http://localhost:5173/components

