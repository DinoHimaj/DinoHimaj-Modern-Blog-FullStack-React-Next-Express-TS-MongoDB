# Modern Blog Project

A full-stack blog application built with Next.js and Express.

## Tech Stack

**Frontend**
- [Next.js 16](https://nextjs.org/) (Turbopack, TypeScript)
- React 18, Bootstrap 5, SASS
- SWR for data fetching, Axios for HTTP
- React Hook Form + Yup for form validation
- React Markdown for post rendering

**Backend**
- Express (TypeScript) running on Node.js
- MongoDB with Mongoose
- Passport.js (Local, GitHub OAuth, Google OAuth)
- Redis for session storage
- Multer + Sharp for image uploads
- Nodemailer for email

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
- [Redis](https://redis.io/) instance (local or cloud)
- Git

### 1. Clone the repo

```bash
git clone <repo-url>
cd modern-blog-project
```

### 2. Install all dependencies

From the **project root**, run:

```bash
npm run i
```

This installs dependencies for both `frontend/` and `backend/` in one command.

> To install them separately: `cd frontend && npm install` / `cd backend && npm install`

### 3. Configure environment variables

#### Backend — create `backend/.env`

```env
PORT=5000
MONGO_CONNECTION_STRING=mongodb://localhost:27017/modern-blog
```

The backend uses [`envalid`](https://github.com/af/envalid) — the server will refuse to start if any required variable is missing.

#### Frontend — create `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

> `.env` files are git-ignored and must be created manually after cloning.

### 4. Run the development servers

Open two terminals:

**Terminal 1 — Backend**
```bash
cd backend
npm run start
```

**Terminal 2 — Frontend**
```bash
cd frontend
npm run dev
```

Or use the root shortcuts:
```bash
npm run dev:backend   # starts the Express server
npm run dev:frontend  # starts the Next.js dev server
```

The frontend runs at **http://localhost:3000** and the backend at **http://localhost:5000** (or whichever `PORT` you set).

---

## Project Structure

```
modern-blog-project/
├── frontend/               # Next.js app
│   ├── src/
│   │   ├── models/         # TypeScript interfaces/types
│   │   ├── network/        # Axios instance and API calls
│   │   ├── pages/          # Next.js pages (routing)
│   │   └── styles/         # SCSS and CSS modules
│   ├── next.config.js
│   └── package.json
│
├── backend/                # Express API
│   ├── src/
│   │   ├── controllers/    # Route handler logic
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # Express routers
│   │   ├── app.ts          # Express app setup
│   │   ├── env.ts          # Environment variable validation
│   │   └── server.ts       # Entry point, DB connection
│   └── package.json
│
├── package.json            # Root scripts (install, dev shortcuts)
└── README.md
```

---

## Notes

- **TypeScript** is `^6.0.3` in both packages. Run `npx tsc --noEmit` inside either folder to type-check without building.
- **SASS + Bootstrap**: the frontend imports Bootstrap SCSS with variable overrides in `src/styles/custom-theme.scss`. The `next.config.js` includes `sassOptions.loadPaths` pointing to `node_modules` — don't remove this or Bootstrap's internal SCSS imports will break.
- **Backend `dist/`** is git-ignored. The dev server runs via `ts-node` through `nodemon` so no build step is needed for development.
