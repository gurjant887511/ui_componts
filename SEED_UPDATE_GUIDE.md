# Component Seed & Update System Guide

## How It Works

Your application now supports **real-time component code updates**. Here's the complete flow:

### 📝 Update Components in Seed File

1. **Open** `backend/seed.js`
2. **Find** the component you want to update in the `components` array
3. **Edit** the `code` property with your new JSX/component code
4. **Save** the file

### 🚀 Sync Updates to MongoDB

Run one of these commands:

```bash
# Update ONLY components from seed.js (recommended for code changes)
npm run seed

# Update ALL data (components + import-components + websites)
npm run seed:all
```

### ✅ See Updates in UI

1. **Frontend automatically syncs** - Just refresh the page or wait a few seconds
2. **Components page** shows updated code
3. **Edit modal** displays the latest version

---

## Complete Workflow Example

### Step 1: Update seed.js
```javascript
{
  name: "Button Examples",
  code: `function ButtonExample() {
  return (
    <div>
      <button>Your Updated Button Code Here</button>
    </div>
  );
}`
}
```

### Step 2: Run Seed
```bash
npm run seed
```

Output:
```
✅ Connected to MongoDB
✅ Updated: Button Examples
🎉 All components seeded/updated successfully!
```

### Step 3: Check UI
- Go to `/components` route
- See the updated component immediately
- Click Edit button to modify further if needed

---

## Key Features

✅ **Upsert Logic**: Creates new components or updates existing ones based on name
✅ **No Duplicates**: Updates by name, so no duplicate entries
✅ **Auto-Sync**: MongoDB updates instantly reflect in UI
✅ **Safe**: Original data backed up, can revert anytime

---

## File Structure

```
backend/
├── seed.js              ← Seed ONLY components
├── seed:all             ← Seed components + imports + websites
├── index.js             ← API endpoints with PUT /api/components/:id
└── models/
    └── ComponentModel.js
```

---

## Editing Options

### Option 1: Via Seed File (Recommended for initial setup)
- Edit `backend/seed.js`
- Run `npm run seed`
- Changes sync to DB & UI

### Option 2: Via UI Editor (For quick changes)
- Go to `/components` page
- Click ✏️ Edit on any component
- Update code in modal
- Save directly to DB

### Option 3: Via Component Editor Modal
- Frontend has built-in `ComponentEditor.jsx`
- Edit component name and code
- Auto-saves to MongoDB
- Updates reflect immediately

---

## API Endpoints

**Backend endpoints** for component operations:

- `POST /api/components` - Create new component
- `GET /api/components` - Get all components
- `GET /api/components/:id` - Get single component
- `PUT /api/components/:id` - Update component ← **USED BY EDITOR**

---

## Troubleshooting

**Components not updating?**
- [ ] Check MongoDB is running: `mongod`
- [ ] Run `npm run seed` in backend folder
- [ ] Refresh browser (Ctrl+R or Cmd+R)
- [ ] Check browser console for errors

**Changes in seed.js not showing?**
- [ ] Make sure you ran `npm run seed`
- [ ] Verify MongoDB connected message appears
- [ ] Check component name matches exactly

**Multiple components with same name?**
- [ ] Seed uses `upsert` - updates by name
- [ ] If 2 components have same name, only 1 keeps data
- [ ] Use unique descriptive names

---

## Next Steps

1. **Add more components** to `seed.js` array
2. **Run** `npm run seed` to update MongoDB
3. **View** them on `/components` page  
4. **Edit** them via UI modal or seed file

Happy coding! 🎉
