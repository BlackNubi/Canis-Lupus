# Canis-Lupus · Actriv Workforce

Actriv Workforce is a workforce-platform prototype with separate Admin, Employee, Manager, and Staffing Monitor experiences.

## Application stack

The application uses **Next.js 16 App Router**, **React**, and **TypeScript**. The `app/` directory owns the user-facing routes; shared React presentation belongs in `components/`, with shared business logic in `lib/`.

The current hubs are preserved under `public/prototypes/` as same-origin compatibility views while their existing browser interactions are migrated into React. These views still use the prototype's browser storage and sample data. They do not provide real authentication, shared server persistence, payroll processing, or access control. Original static snapshots remain in `outputs/` for reference.

## Routes

- `/` and `/admin/` — Admin Hub
- `/employee/` — Employee Hub; `?profile=manager` opens the manager's own sample profile context
- `/manager/` — Manager staffing hub
- `/staffing/` — Staffing Monitor; profile query context is preserved for manager/employee links

## Development

Requirements: Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Production commands:

```sh
npm run build
npm run start
```

Vercel builds this repository from its root. Pushes to `main` are the production source of truth.
