# Bluport Logistics Website

A premium Next.js marketing website for Bluport Logistics, a veteran-owned mission-critical logistics company focused on specialized equipment transport, rapid response capacity, field operations, and future multimodal logistics.

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel-ready deployment

## Project Structure
- `src/app`: App Router pages, route-level metadata, and global layout.
- `src/components`: Shared UI building blocks and layout components.
- `src/components/sections`: Homepage and route-page content sections.
- `src/components/forms`: Request Capacity intake form components.
- `src/data`: Structured content sources for services, industries, and media guidance.
- `src/lib`: Utilities, constants, and future integration notes.
- `public/images`: Brand and photography asset folders.
- `public/video`: Video assets for hero and section motion content.

## Local Development
```bash
npm install
npm run dev
```

## Quality Checks
```bash
npm run lint
npm run build
```

## Deployment
This project is designed to deploy on Vercel. Connect the GitHub repository to Vercel and use default Next.js settings.

## Media Assets
Real Bluport photos and videos should be added to:
- `public/images/brand`
- `public/images/fleet`
- `public/images/loads`
- `public/images/jobsites`
- `public/images/team`
- `public/images/backgrounds`
- `public/video`

The current MediaReadiness section is a temporary production checklist and should be removed from the homepage after real assets are collected.

## Request Capacity Form
The current Request Capacity form is front-end only. Before production, connect it to HubSpot, Zoho, Resend, Supabase, or a custom API route.

## Request Capacity Email Notifications
- The form posts to `/api/request-capacity`.
- Resend sends the notification email to operations.
- Required environment variables:
	- `RESEND_API_KEY`
	- `OPERATIONS_EMAIL`
- These must be added in Vercel before production submissions will work.

## Future Integrations
- CRM integration
- Email notifications
- File uploads
- Analytics
- SEO refinement
- Real photography and video
- Customer portal later, but not now
