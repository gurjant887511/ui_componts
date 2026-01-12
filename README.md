# ui_componts-new

## Quick backend MongoDB setup

- Create or update `backend/.env` and set `MONGO_URI` to your local MongoDB, for example:

```
MONGO_URI=mongodb://127.0.0.1:27017/ui_componts
PORT=5000
NODE_ENV=development
```

- Start local MongoDB (e.g., using MongoDB Community service or Docker).
- In the `backend` folder run:

```bash
npm install
npm run dev
```

The backend now prefers `MONGO_URI` from environment and falls back to the local `ui_componts` database.
