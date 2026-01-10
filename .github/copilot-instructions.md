# UI Components Codebase - Copilot Instructions

## Project Overview
A full-stack UI component library and showcase platform with a React + Vite frontend and Express + MongoDB backend. The project focuses on reusable, styled React components (cards, buttons, effects) with live preview and code execution capabilities.

**Key Purpose**: Build and showcase modern, reusable UI components with live editors and examples.

## Architecture

### Frontend (`/frontend`)
- **Framework**: React 18 + Vite (ES modules)
- **Styling**: Tailwind CSS (with postcss/autoprefixer) + styled-components + inline styles
- **Animation**: Framer Motion for transitions and interactive elements
- **Routing**: React Router v6 (SPA with routes in `src/routes.jsx`)
- **Live Code Execution**: 
  - CodeSandbox Sandpack (`@codesandbox/sandpack-react`) for embedded editor/preview
  - `react-live` for runtime component rendering
  - Custom `LivePreview.jsx` handles component wrapping and export detection
- **Dev Server**: `npm run dev` (Vite)
- **Build**: `npm run build` → outputs to `frontend/dist`

### Backend (`/backend`)
- **Framework**: Express.js (Node.js ES modules)
- **Database**: MongoDB (local at `mongodb://127.0.0.1:27017/ui_components`)
- **Main Model**: `Component` schema (name, code, timestamps)
- **API Endpoints**: 
  - `GET /api/components` - fetch all components
  - `POST /api/components` - save new component
- **Dev**: `npm run dev` (nodemon watches `index.js`)
- **Seed Data**: `npm run seed` loads initial components

### Communication
Frontend uses `API_URL` (env: `VITE_API_URL` or defaults to `http://localhost:5000/api`) to call backend.

## Directory Structure

```
frontend/src/
├── components/          # Reusable UI components
│  ├── Card.jsx         # Basic card template
│  ├── Button/          # Button variants
│  ├── LivePreview.jsx  # Code execution wrapper
│  ├── ComponentDemo.jsx # Demo container component
│  └── *Gallery.jsx     # Showcase pages (WebsiteGallery, etc)
├── imports/            # Self-contained component examples
│  ├── StylishComponents.jsx  # Multi-component file (GlassCard, NeonButton, etc)
│  ├── CyberGlowInfoCard.jsx  # Single component with CSS
│  └── *.jsx            # Individual component showcases
├── pages/              # Route pages (ButtonsPage, CardsPage, etc)
├── layouts/            # Layout wrappers
├── data/               # exampleComponents.js - hardcoded component snippets
├── styles/             # globals.css, StyledComponents.jsx
└── routes.jsx          # Route definitions
```

## Key Patterns & Conventions

### Component Code Structure
Components in `/imports` are meant to be **self-contained and copyable**. Each exports a default component:
```jsx
// Pattern: Component definition first, then explicit export
const MyComponent = () => { ... };
export default MyComponent;
// OR use named exports for utilities
export function GlassCard({ ... }) { ... }
```

### Styling Approaches (All Used in Project)
1. **Tailwind CSS** (primary): Classes directly in JSX (e.g., `className="px-4 py-2 bg-blue-500"`)
2. **Styled Components**: For dynamic theming and styled-wrapper components
3. **Inline Styles**: For calculated/dynamic styles (e.g., `style={{ boxShadow: ... }}`)
4. **Separate CSS Files**: For complex animations or scoped styles (e.g., `CyberGlowInfoCard.css`)

*Safelist in `tailwind.config.cjs` includes commonly used dynamic classes.*

### Live Preview Component Pattern
`LivePreview.jsx` intelligently handles JSX code strings:
- Strips trailing `export default` statements
- Auto-detects component names from code
- Wraps code in a provider for live rendering
- Used in demo/showcase pages to display component code + live preview side-by-side

### Component Demo Pattern
`ComponentDemo.jsx` wraps components with toggle-able code display:
```jsx
<ComponentDemo 
  name="Card" 
  description="..." 
  component={<MyCard />} 
  code={rawCodeString} 
/>
```

### API Integration Pattern
Components fetch from backend via `API_URL`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
// Then: fetch(`${API_URL}/components`)
```

## Development Workflows

### Running Locally
```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev
# MongoDB must be running on localhost:27017

# Terminal 2: Frontend
cd frontend && npm install && npm run dev
# Access at http://localhost:5173
```

### Adding a New Component
1. Create `.jsx` file in `frontend/src/imports/` (self-contained)
2. Use Tailwind CSS or inline styles
3. Export default component (no `export default` at end if using `react-live`)
4. Import in `App.jsx` and add to `COMPONENTS_LIST`
5. Optionally add a Page in `pages/` to display it with routing

### Building for Production
```bash
# Frontend
cd frontend && npm run build  # Creates dist/ folder

# Deploy via Vercel (see DEPLOYMENT.md)
vercel
# Set VITE_API_URL env var to point to deployed backend
```

## Critical Developer Notes

- **MongoDB Connection**: Backend fails silently if Mongo isn't running. Check connection state in error responses (`readyState !== 1`).
- **React-Live Limitations**: Can't import external npm packages in live code strings—only built-in React. Use Sandpack for more complex previews.
- **Tailwind Purging**: Dynamic class names not in templates must be added to `safelist` in `tailwind.config.cjs`.
- **CORS**: Backend has CORS enabled; frontend can call it from any origin.
- **Component Code Storage**: Backend stores raw JSX code strings. Ensure all imports used in code strings are available at runtime (React, Framer Motion, etc.).

## Key Files to Understand

- `frontend/src/App.jsx` - Main app, component definitions, theme provider
- `frontend/src/routes.jsx` - Routing setup
- `frontend/vite.config.js` - Build configuration
- `frontend/tailwind.config.cjs` - Tailwind customizations and safelist
- `backend/index.js` - Express server, CORS, MongoDB connection
- `backend/models/ComponentModel.js` - Component schema

## Import Statements to Know
- `framer-motion` - Animations and motion components
- `@codesandbox/sandpack-react` - Embedded code editor + preview
- `react-live` - Runtime JSX rendering
- `styled-components` - CSS-in-JS styling
- `lucide-react` - Icon library
