# Copilot instructions for ui_componts

Short, actionable guidance for AI coding agents working on this repo.

## Big picture
Two-part full-stack app: Express/MongoDB backend + Vite/React frontend for building and showcasing UI components. The backend provides REST APIs for components, import-components, websites, and **user authentication** (signup/login with email OTP verification). The frontend fetches from `VITE_API_URL` and displays a component gallery with live preview.

**Key architectural pattern:** Component code is stored as strings in the database and rendered via iframe or live editors (Sandpack, react-live) in the frontend. User data (auth tokens, OTP) managed in MongoDB UserModel.

## Where to look first
- **Backend entry & routes:** [backend/index.js](backend/index.js) (~745 lines; includes auth endpoints, OTP logic, and CORS config)
- **DB models:** [backend/models](backend/models) — UserModel.js (new; tracks email, OTP, isVerified), ComponentModel.js, WebsiteModel.js, ImportComponentModel.js
- **Seeding scripts:** [backend/seed.js](backend/seed.js) and package.json tasks (seed:all, seed:websites, seed:imports)
- **Frontend entry:** [frontend/src/App.jsx](frontend/src/App.jsx) (~1490 lines; main gallery, component registry, live preview)
- **Auth components:** [frontend/src/components/LoginModal.jsx](frontend/src/components/LoginModal.jsx), SignupModal.jsx, OTPVerification.jsx

## Critical commands / workflows
- **Start full stack (one command):** `npm run dev` from root (uses concurrently to run backend + frontend)
  - Backend dev: `cd backend && npm run dev` (nodemon on port 5000)
  - Frontend dev: `cd frontend && npm run dev` (Vite on port 5173)
- **Seed database:** `npm run seed` from root or `cd backend && npm run seed`
  - Additional targets: `seed:all`, `seed:websites`, `seed:imports`
- **Environment setup:** Copy `.env` to backend folder with MONGO_URI, PORT, EMAIL_USER, EMAIL_PASSWORD

## Important environment variables
- **Backend (.env in backend/):**
  - `MONGO_URI` (default: mongodb://127.0.0.1:27017/ui_componts)
  - `PORT` (default: 5000)
  - `EMAIL_USER`, `EMAIL_PASSWORD` (Gmail SMTP for OTP emails)
  - `JWT_SECRET` (for token generation; if missing, auth will fail silently)
- **Frontend (.env.local in frontend/):**
  - `VITE_API_URL` (default: http://localhost:5000/api when not set)

## Authentication & OTP flow (recently added)
1. User signs up with email via SignupModal → calls `/api/auth/signup`
2. Backend generates 6-digit OTP, sends via Gmail SMTP, stores in UserModel (otp, otpExpiry)
3. Frontend shows OTPVerification modal for user to enter OTP
4. User submits OTP → calls `/api/auth/verify-otp`; backend validates expiry & OTP value
5. On success, isVerified = true, JWT token issued; user redirected to dashboard
6. **Debug endpoints (dev only):** `/api/auth/debug-otp/:email`, `/api/auth/test-set-otp/:email/:otp`, `/api/auth/test-reset/:email` for testing OTP without email

## Project-specific conventions & patterns
- **ESM modules:** All files use `"type": "module"` (import/export, no require)
- **Component code strings:** Stored in DB as JSX strings; rendered in iframe with Babel transpilation or live editors
  - Example: `const code = "export default function Button() { return <button>Click</button>; }"`
  - When adding components, export default from `frontend/src/imports/*.jsx`, then register in `App.jsx` COMPONENTS_LIST
- **API routes:** All under `/api/*` — `/api/components`, `/api/websites`, `/api/import-components`, `/api/auth/*`
- **Styling:** Tailwind classes in JSX + styled-components; follow existing patterns when adding new pages
- **User model fields:** email (unique, lowercase), password (optional, for future), googleId (for OAuth), otp, otpExpiry, isVerified

## Integration points to be careful about
- **DB schema ↔ seed data:** UserModel expects email/otp/otpExpiry fields; if altering schema, update seed scripts accordingly
- **Component code strings:** Must be valid JSX with React in scope; iframe preview uses Babel.transform to transpile
- **OTP email delivery:** Requires valid Gmail app-specific password in `.env` EMAIL_PASSWORD; test endpoints exist for dev
- **CORS:** Backend allows development ports (5173–5176, localhost:3000). In production, restrict to actual domain.

## Common quick tasks
- **Add new component to gallery:** Create file in `frontend/src/imports/MyComponent.jsx` (export default), then add to COMPONENTS_LIST in `App.jsx` with id/name/component/code
- **Debug OTP flow:** Check backend logs for "OTP sent" or email delivery errors; use `/api/auth/debug-otp/:email` to see stored OTP (dev only)
- **Test auth locally:** Use test endpoints in backend/index.js (lines ~420–490) to manually set/reset OTP without email
- **Fix API calls not reaching backend:** Confirm backend running on 5000, frontend VITE_API_URL matches, and CORS origin is whitelisted

## When to ask the human
- Before altering UserModel schema or adding new auth fields (affects existing seeded data)
- Before changing public API endpoints (other services may depend on them)
- If adding major features that require new DB collections or significant DB migrations
- When uncertain about email/OTP configuration or Gmail setup
