import { NextResponse } from 'next/server';

/**
 * GET /humans.txt
 * Returns human-readable information about the website
 * Following the humans.txt standard: https://humanstxt.org/
 */
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dafon.com';
  const currentYear = new Date().getFullYear();

  const humansTxt = `/* TEAM */
CEO: Daniel Fonseca da Silva
Company: Dafon
Website: ${siteUrl}
Twitter: @dafon
Location: São Paulo, Brazil; Lisboa, Portugal; Toronto, Canada; Asunción, Paraguay

/* THANKS */
Thanks to all our clients, partners, and team members who make Dafon possible.

/* SITE */
Standards: HTML5, CSS3, JavaScript (ES6+), TypeScript
Components: React 19, Next.js 16
Software: Node.js, npm
Doctype: HTML5
IDE: Visual Studio Code, Cursor
Last update: ${new Date().toISOString().split('T')[0]}

/* TECHNOLOGY STACK */
Frontend: React 19.2.0, Next.js 16.0.10, TypeScript 5
Styling: Tailwind CSS 4.1.17, PostCSS 8.5.6
UI Components: Radix UI, Framer Motion
Backend: Next.js API Routes, Node.js
Languages: TypeScript, JavaScript, Golang, Python, Java
Email Service: Resend
Security: Cloudflare Turnstile
Hosting: Vercel (recommended)

/* SERVICES */
- Business Solutions
- Software Development
- API Development
- SaaS Development
- Web Development
- Mobile Development
- Technology Consulting
- Digital Transformation
- Process Optimization

/* PROJECTS */
- Dafoncv: AI-powered CV creation platform (Golang, Next.js)
- Dafon PDF Extractor: PDF data extraction API (Python)

/* LOCATIONS */
- São Paulo, Brazil
- Lisboa, Portugal
- Toronto, Canada
- Asunción, Paraguay

/* CONTACT */
Email: dafondeveloper@gmail.com
LinkedIn: https://br.linkedin.com/company/dafon-sistemas
Facebook: https://www.facebook.com/dafonsistemas
Instagram: https://www.instagram.com/dafonsistema

/* COPYRIGHT */
Copyright (c) ${currentYear} Dafon. All rights reserved.

/* LICENSE */
Proprietary - All rights reserved by Dafon.

/* UPDATED */
Last update: ${new Date().toISOString()}
`;

  return new NextResponse(humansTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

