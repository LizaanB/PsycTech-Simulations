# PSYC Tech Simulators Website

Full-stack scaffold for the PSYC Tech Simulators website:
- Next.js 14+ (App Router) + TypeScript + Tailwind CSS frontend
- Node.js/Express backend API
- PostgreSQL schema setup
- Three.js interactive 3D container viewer
- Auth-ready client/admin route scaffolding

## Quick Start

```bash
npm install
npm run dev            # Next.js frontend on :3000
npm run dev:api        # Express backend on :4000
```

Or run both together:

```bash
npm run dev:all
```

## Environment

Copy `.env.example` to `.env` and set values:

- `DATABASE_URL`
- `JWT_SECRET`
- `API_PORT`

## Available Pages

- `/` Home
- `/simulators` Racing + Target Shooting simulator containers + 3D viewer
- `/gallery` Filterable gallery scaffold
- `/specifications` Technical requirements + brochure links
- `/industries` Industry use cases
- `/quote` Quote request form
- `/booking` Booking form
- `/dashboard` Client dashboard scaffold
- `/admin` Admin portal scaffold
- `/about` Company details
- `/contact` Contact options + form
- `/future-features` Product roadmap

## API Endpoints

### Next.js Route Handlers
- `POST /api/quote`
- `POST /api/booking`
- `POST /api/auth/login`
- `POST /api/auth/register`

### Express API
- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/quotes`
- `POST /api/bookings`

## Database

PostgreSQL schema is in:

- `/database/schema.sql`

Includes tables for:
- users
- quotes
- bookings
- projects
- media_items

## Validation

```bash
npm run lint
npm run test
npm run build
```
