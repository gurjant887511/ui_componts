# AI Coding Agent Instructions for UI Components Platform

## Project Overview
Full-stack UI component library and website builder with code preview capabilities:
- **Frontend**: React 18 + Vite + Zustand + Tailwind + Styled Components + Framer Motion
- **Backend**: Express.js + MongoDB + JWT auth + OTP verification + Google OAuth
- **Key Features**: Component catalog, website templates, live code editor with iframe preview, user auth

## Architecture Overview

### Monorepo Structure
```
backend/      # Express API (port 7000)
frontend/     # React app (port 5173 via Vite)
```

### Data Flow
1. **Components**: Stored in MongoDB `all_components` collection → fetched via `/api/components` → rendered in frontend galleries
2. **Websites**: Template websites stored in DB → loaded via `routes.jsx` → use `usePlaygroundStore` for real-time customization
3. **Code Execution**: User code in playground → transpiled via Babel → executed in iframe with React/Tailwind CDN
4. **Auth**: OAuth + email OTP verification → JWT tokens stored in localStorage → `verifyToken` middleware protects routes

### Critical Integration Points
- **CORS**: Backend allows localhost ports 5173-5176 (dev) - see [backend/index.js](backend/index.js#L23)
- **API Base URL**: Frontend reads `VITE_API_URL` env var, defaults to `http://localhost:7000/api`
- **State Management**: `usePlaygroundStore` (Zustand) centralizes website customization state
- **Iframe Preview**: App.jsx generates HTML with Babel transpilation - unsafe code execution risk, only use trusted components

## Developer Workflows

### Setup & Running
```bash
# Backend
cd backend && npm install && npm run dev    # Starts on :7000, seeds DB if first run

# Frontend  
cd frontend && npm install && npm run dev   # Starts on :5173
```

### Common Tasks
- **Add Component**: Seed in `backend/seed.js` with `name`, `code` (JSX string), `category` fields
- **Add Website**: Create React component in `frontend/src/components/` (e.g., StylishX.jsx), add route in `routes.jsx`, seed template data to DB
- **Test Auth Flow**: Use scripts in `backend/test-*.js` for login/OTP testing
- **Clean Database**: `npm run clean-components` or `clean-users` in backend

### Build Commands
- **Frontend**: `npm run build` → outputs to `dist/`
- **Backend**: No build step, uses ES modules directly

## Patterns & Conventions

### Component Code Format
Components are stored as **JSX function strings** in DB (raw code). Must:
1. Export as `function ComponentName() {}` - parser extracts function name via regex
2. Use inline styles or Tailwind classes (CDN loaded in iframe)
3. Handle React hooks (useState, useEffect available)
4. Avoid external imports - iframe only has React, React-DOM, Tailwind, Babel

Example from seed.js:
```javascript
{
  name: "Card Example",
  category: "Cards",
  code: `function ExampleCard() {
    const [isHovered, setIsHovered] = React.useState(false);
    return <div>...</div>
  }`
}
```

### Website Templates Pattern
Websites (StylishX, Nexus, Lumina, etc.) are:
1. Full React components managing their own state
2. Often use `usePlaygroundStore` for real-time customization
3. Contain multiple sections (Hero, Features, Pricing, etc.)
4. Export default as ready-to-render components

### Database Models
- **Component**: `{ name, code, category, subcategory, timestamps }`
- **Website**: `{ name, slug, description, sections: [...], code, createdAt, userId }`
- **User**: `{ name, email, password, googleId, isVerified, otp, otpExpiry }`
- **ImportComponent**: Shareable code snippets (different from catalog components)

### API Response Pattern
```javascript
// Successful endpoint
try {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database not connected' });
  }
  // ... logic
  res.json(result);
} catch (error) {
  console.error('Context:', error);
  res.status(500).json({ error: error.message });
}
```

## Critical Implementation Details

### Auth Flow
1. Signup → PendingSignup collection → OTP sent via Nodemailer
2. OTP verification → User created → JWT issued
3. Token verification via `verifyToken` middleware (see backend/index.js around line 810)
4. Google OAuth: Creates user if not exists

### Code Preview Architecture
1. User code stored as string
2. Babel transpiles JSX to ES5 in iframe context
3. Component function extracted and mounted to `#root`
4. **Security Note**: No sandbox isolation - only use with trusted code

### Styling Ecosystem
- **Tailwind**: CDN in iframe (for component previews)
- **Styled Components**: Frontend app uses for theme switching
- **PostCSS**: Configured for Tailwind + autoprefixer

## Environment Variables
**Backend `.env`:**
- `MONGO_URI`: MongoDB connection string
- `PORT`: API port (default 7000)
- `JWT_SECRET`: Token signing key
- `GMAIL_USER`, `GMAIL_PASSWORD`: OTP email sender
- `VITE_API_URL`: Frontend knows where to call API

## Debugging & Testing
- Health check: `GET /api/health`
- View last OTP (dev only): Check console in backend
- Test flow: `node test-api-flow.js` in backend
- Inspect DB: `npm run check-database`
- Reset user: `npm run clean-users` then re-seed

## File Reference Guide
- **Core Backend**: [backend/index.js](backend/index.js) - all routes
- **Auth Logic**: [backend/index.js#L355-L800](backend/index.js#L355-L800)
- **Frontend State**: [frontend/src/store/usePlaygroundStore.js](frontend/src/store/usePlaygroundStore.js)
- **Routes**: [frontend/src/routes.jsx](frontend/src/routes.jsx)
- **Component Seed Data**: [backend/seed.js](backend/seed.js) - 19,800 lines of component definitions
- **Models**: [backend/models/](backend/models/) - schema definitions
