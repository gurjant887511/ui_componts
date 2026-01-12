# Copilot instructions for ui_componts

Short, actionable guidance for AI coding agents working on this repo.

- **Big picture:** This is a two-part app: an Express/MongoDB backend and a Vite + React frontend. The backend exposes REST APIs for components, import-components, and websites (see [backend/index.js](backend/index.js#L1-L240)). The frontend is a component showcase/editor that fetches from `VITE_API_URL` (see [frontend/src/App.jsx](frontend/src/App.jsx#L1-L40)).

- **Where to look first:**
  - Backend entry & routes: [backend/index.js](backend/index.js#L1-L240)
  - DB models: [backend/models](backend/models)
  - Seeding scripts: [backend/seed.js](backend/seed.js#L1-L120) and package.json scripts in [backend/package.json](backend/package.json#L1-L50)
  - Frontend entry: [frontend/src/main.jsx](frontend/src/main.jsx#L1-L40)
  - App and component registry: [frontend/src/App.jsx](frontend/src/App.jsx#L1-L120)
  - Component examples / imports: [frontend/src/imports](frontend/src/imports)

- **Critical commands / workflows:**
  - Start backend (dev):

    cd backend
    npm install
    npm run dev

    - Uses `nodemon` (see [backend/package.json](backend/package.json#L1-L40)).
  - Seed database (examples present in `seed.js`):

    cd backend
    npm run seed

    - Additional seed targets: `seed:all`, `seed:websites`, `seed:imports`.
  - Start frontend (dev):

    cd frontend
    npm install
    npm run dev

    - Frontend uses Vite (see [frontend/package.json](frontend/package.json#L1-L40)).

- **Important environment variables / defaults:**
  - Backend expects `MONGO_URI` (fallback: `mongodb://127.0.0.1:27017/ui_componts`) and `PORT` (fallback 5000). See the connection logic in [backend/index.js](backend/index.js#L1-L40).
  - Frontend reads `VITE_API_URL`; App falls back to `http://localhost:5000/api` when not set (see [frontend/src/App.jsx](frontend/src/App.jsx#L1-L40)). Use `VITE_API_URL` for integration testing.

- **Project-specific conventions & patterns:**
  - ESM modules throughout (`"type": "module"` in package.json). Use import/export rather than require.
  - Component code is often stored as runnable strings (see the `components` array in [backend/seed.js](backend/seed.js#L1-L120) and `COMPONENTS_LIST` in [frontend/src/App.jsx](frontend/src/App.jsx#L40-L120)). When adding new demo components, add source in `frontend/src/imports` and register in `App.jsx` if you want it shown in the gallery.
  - API surface is simple REST endpoints under `/api/*` (e.g., `/api/components`, `/api/import-components`, `/api/websites`), so tests and mocks can hit those routes directly.
  - Styling uses Tailwind classes in JSX and `styled-components` in some places — follow existing file patterns when adding styles.

- **Integration points to be careful about:**
  - DB models (backend/models) ↔ seed scripts: seed data expects fields matching Mongoose schemas.
  - Frontend live-edit preview features (Sandpack, react-live) expect component code strings; ensure code string format is valid React (JSX) and includes React in scope when used.

- **Common quick tasks examples:**
  - Add a new importable component: add file to `frontend/src/imports`, export default, then include it in `COMPONENTS_LIST` in `App.jsx` (id/name/component/code pattern).
  - Debug API calls: confirm backend running on port 5000 and that `VITE_API_URL` matches `http://localhost:5000/api`.

- **When to ask the human:**
  - If a change requires DB migrations or altering seed data shapes, confirm whether to update existing seeded documents.
  - For adding major features that change the API shape, get approval before modifying public endpoints.

If anything here is unclear or you'd like more specific examples (tests, PR checklist, or codegen rules), tell me which area to expand. 
