This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication & Postgres setup (this project)

This project includes a simple email/password login system backed by PostgreSQL using Prisma.

Steps to configure locally:

1. Copy `.env.example` to `.env.local` and fill in your DATABASE_URL and JWT_SECRET.

2. Install the new dependencies and generate Prisma client:

```bash
npm install
npx prisma generate
```

3. Create the database schema (if you control the DB) or push the schema without migrations:

```bash
# If you want migrations (recommended for apps you control):
npx prisma migrate dev --name init

# Or quickly push schema (useful for managed DBs or temporary dev):
npx prisma db push
```

4. Start the dev server and open http://localhost:3000

```bash
npm run dev
```

API routes created for auth (app/api/auth):
- POST /api/auth/register  — create a new user (sets an HTTP-only token cookie)
- POST /api/auth/login     — sign in, sets an HTTP-only token cookie
- POST /api/auth/logout    — clears the token cookie
- GET  /api/auth/me        — fetch the current user from cookie

Client pages added:
- /register — registration form
- /login    — sign in form

Security notes:
- Keep `.env.local` out of source control and rotate secrets if they leak.
- Prefer provider private networking (VPC peering or provider-managed connectors) to avoid exposing DB to the public internet and incurring egress costs.


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
