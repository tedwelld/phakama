# Phakama Women's Organization Website

A professional, responsive website for **Phakama Women's Organization** — built with the TWT architecture pattern, featuring smooth scroll, editorial typography, dark/light theme, and pink/purple branding.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router, `src/` directory)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/) + [Lenis](https://github.com/darkroomengineering/lenis) for animations
- [Nodemailer](https://nodemailer.com/) + [Zod](https://zod.dev/) for contact form email API

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About Us |
| `/breast-cancer-awareness` | Breast Cancer Awareness |
| `/womens-health` | Women's Health |
| `/programs` | Programs & Campaigns |
| `/get-involved` | Get Involved |
| `/contact` | Contact Us (with email form) |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

The contact form sends emails via SMTP. Configure credentials using environment variables or `appsettings.json`:

| Variable | Description |
|----------|-------------|
| `EMAIL_HOST` | SMTP host |
| `EMAIL_PORT` | SMTP port (default: 587) |
| `EMAIL_USERNAME` | SMTP username |
| `EMAIL_PASSWORD` | SMTP password |
| `ADMIN_EMAIL` | Admin recipient (default: admin@phakamawomens.org) |
| `EMAIL_SECURE` | Set to `true` for port 465 |

Example `.env.local`:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USERNAME=admin@phakamawomens.org
EMAIL_PASSWORD=your-password
ADMIN_EMAIL=admin@phakamawomens.org
```

## Build for Production

```bash
npm run build
npm start
```

## Contact Details

- **Email:** admin@phakamawomens.org
- **Phone:** +263 779 945 479
- **WhatsApp:** +263 779 945 479

## Project Structure

```
├── src/
│   ├── app/              # Next.js pages, API routes, globals.css
│   ├── components/       # Layout, home sections, shared UI, forms
│   ├── contexts/         # Theme provider (phakama-theme)
│   ├── data/             # Site config and content data
│   ├── hooks/            # useNavbarScroll, useMediaQuery
│   └── lib/              # Utilities, mailer
├── public/images/        # Placeholder SVG images
├── appsettings.json      # Email settings fallback
└── README.md
```

## Features

- Dark default theme with light mode toggle (stored in `localStorage` as `phakama-theme`)
- Centered-logo navbar with full-screen mobile drawer
- Lenis smooth scroll + GSAP hero animations
- Contact form with admin notification + auto-reply emails
- SEO: `robots.ts` and `sitemap.ts` for all 7 routes
- Floating WhatsApp button

## License

© 2026 Phakama Women's Organization. All rights reserved.
