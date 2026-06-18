# Suhaai Website

Professional, responsive website for Suhaai, an educational initiative in Village 21 Dadh, Sakrand, Sindh.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this project to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework setting as **Next.js**.
5. Click **Deploy**.

## Future Updates

The project is structured so later updates can add a blog, reports, language switch, donation records, attendance, dashboards, volunteer pages, CMS integration, or a full admin panel.

## Replacing Logo and Images

Place your real logo at:

```text
public/images/logo.webp
```

Place your hero image at:

```text
public/images/hero.jpg
```

The website currently uses optimized `.webp` image assets.

## Contact Form Email Setup

The contact form sends messages to `suhaaisindh@gmail.com` through SMTP.

For deployment, add these environment variables in Vercel:

```text
CONTACT_TO=suhaaisindh@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=suhaaisindh@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=suhaaisindh@gmail.com
```

Use a Gmail app password for `SMTP_PASS`, not the normal Gmail login password.
