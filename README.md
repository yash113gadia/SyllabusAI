# Syllabus AI

An educational materials platform with AI-powered summarization.

## Project Structure

```
syllabus-ai/
├── client/          # React + TypeScript frontend (Vite)
├── server/          # Node.js + Express backend
└── The Plan.txt     # Development roadmap
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Database Setup

1. Install PostgreSQL
2. Create a database:
```sql
CREATE DATABASE syllabus_ai;
```

### Backend Setup

```bash
cd server
cp .env.example .env
# Edit .env with your database credentials
npm install
npm run dev
```

The API will be available at `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Health Check

- `GET /api/health` - API health check

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- Sequelize ORM
- JWT Authentication

## License

MIT
