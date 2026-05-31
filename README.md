# Dafon Website

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Features](#features)
- [Objectives and Goals](#objectives-and-goals)
- [Diagrams](#diagrams)
- [Fundamentals and Principles](#fundamentals-and-principles)
- [Readability](#readability)
- [SEO (Search Engine Optimisation)](#seo-search-engine-optimisation)
- [Project Structure](#project-structure)
- [Installation and Execution](#installation-and-execution)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Implemented Best Practices](#implemented-best-practices)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Contribution](#contribution)
- [License](#license)

---

## 🎯 Overview

The **Dafon Website** is a modern and responsive web application developed to present Dafon company, its innovative solutions, projects, locations, and contact information. The site was built with a focus on performance, SEO, accessibility, and user experience.

### Main Characteristics

- **Single Page Application (SPA)** with anchor navigation
- **Modern Design** with visual effects and smooth animations
- **Fully Responsive** following a Mobile-First approach
- **SEO Optimised** with structured data and complete metadata
- **High Performance** with image optimisations and compression
- **Accessible** following WCAG standards

---

## 🛠 Technologies

### Core Framework

- **Next.js 16.0.1** - React framework for production
  - App Router (RSC - React Server Components)
  - Server Components and Client Components
  - Image Optimisation
  - Font Optimisation
  - Metadata API

### Languages and Tools

- **TypeScript 5** - Static typing for JavaScript
- **React 19.2.0** - Library for building interfaces
- **React DOM 19.2.0** - DOM rendering

### Styling

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processor
- **CSS Custom Properties** - CSS variables for themes

### UI Libraries and Components

- **Radix UI** - Accessible and unstyled components
  - `@radix-ui/react-label`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-select`
  - `@radix-ui/react-slot`

- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.552.0** - SVG icons
- **React Icons 5.5.0** - Additional icon set

### Forms and Validation

- **React Hook Form 7.66.0** - Form management
- **Zod 4.1.12** - TypeScript-first schema validation
- **@hookform/resolvers 5.2.2** - Resolvers for React Hook Form

### Utilities

- **clsx 2.1.1** - Conditional CSS class construction
- **tailwind-merge 3.3.1** - Tailwind class merging
- **class-variance-authority 0.7.1** - Component variants

### Carousel

- **Embla Carousel React 8.6.0** - Lightweight carousel library

### Email

- **Resend 6.4.1** - Email sending API

### Development

- **ESLint 9** - JavaScript/TypeScript linter
- **ESLint Config Next** - ESLint configuration for Next.js
- **Babel Plugin React Compiler 1.0.0** - React compiler
- **TypeScript Types** - Types for Node, React and React DOM

---

## 🏗 Architecture

### Next.js App Router Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐         ┌──────────────┐            │
│  │ Server       │         │ Client       │            │
│  │ Components   │◄────────►│ Components  │            │
│  │ (RSC)        │         │ (Interactive)│            │
│  └──────────────┘         └──────────────┘            │
│         │                        │                      │
│         ▼                        ▼                      │
│  ┌──────────────────────────────────────┐              │
│  │      Layout (app/layout.tsx)        │              │
│  │  - Metadata                          │              │
│  │  - Fonts                             │              │
│  │  - Structured Data                   │              │
│  └──────────────────────────────────────┘              │
│         │                                               │
│         ▼                                               │
│  ┌──────────────────────────────────────┐              │
│  │      Page (app/page.tsx)             │              │
│  │  - Client Component                   │              │
│  │  - State Management                   │              │
│  └──────────────────────────────────────┘              │
│         │                                               │
│         ▼                                               │
│  ┌──────────────────────────────────────┐              │
│  │      Components                    │              │
│  │  - Header                          │              │
│  │  - Welcome                         │              │
│  │  - About                           │              │
│  │  - Locations                       │              │
│  │  - Partners                        │              │
│  │  - Projects                        │              │
│  │  - Contact                         │              │
│  │  - Footer                          │              │
│  └──────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  Next.js Server │
│  (SSR/SSG)      │
└──────┬──────────┘
       │
       ├──► Metadata Generation
       ├──► Image Optimisation
       ├──► Font Optimisation
       └──► HTML Generation
            │
            ▼
┌─────────────────┐
│  React Hydration│
│  (Client)       │
└──────┬──────────┘
       │
       ├──► Interactive Components
       ├──► Animations (Framer Motion)
       └──► State Management
```

### Component Structure

```
components/
├── Header.tsx          # Main navigation (Client Component)
├── Welcome.tsx         # Hero section with CEO (Client Component)
├── About.tsx           # About the company (Client Component)
├── Locations.tsx       # Global locations (Client Component)
├── Partners.tsx         # Strategic partners (Client Component)
├── Projects.tsx         # Developed projects (Client Component)
├── Contact.tsx         # Contact form (Client Component)
├── Footer.tsx           # Footer (Client Component)
├── CompanyModal.tsx    # Modal with company information (Client Component)
├── StructuredData.tsx  # Structured data JSON-LD (Server Component)
└── ui/                 # Reusable components
    ├── button.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── form.tsx
    ├── label.tsx
    ├── navigation-menu.tsx
    ├── pulse-beams.tsx
    ├── select.tsx
    ├── skeleton.tsx
    └── textarea.tsx
```

### Architecture Pattern

The project follows **Clean Architecture** and **SOLID** principles:

1. **Separation of Concerns**: Components separated by responsibility
2. **Single Responsibility**: Each component has a single responsibility
3. **Reusability**: Reusable UI components in `components/ui/`
4. **Composition**: Composed components to create complex interfaces
5. **Server/Client Separation**: Proper use of Server and Client Components

---

## ⚙️ Features

### 1. Navigation

- **Fixed Header** with glassmorphism effect
- **Responsive Mobile Menu** with animations
- **Anchor Navigation** smooth between sections
- **Optimised Scroll Behaviour**

### 2. Welcome Section (Hero)

- **Company Presentation** with call-to-action
- **CEO Information** (Daniel Fonseca da Silva)
- **Action Buttons**: "Get Started" and "Learn More"
- **Entry Animations** with Framer Motion

### 3. About Section

- **Informative Cards** about the company
- **Image Gallery** of the office and team
- **Responsive Layout** in adaptive grid

### 4. Locations Section

- **Global Locations**:
  - São Paulo, Brazil
  - Lisbon, Portugal
  - Buenos Aires, Argentina
  - Santiago, Chile
- **Interactive Cards** with hover effects
- **Representative Images** of each location

### 5. Partners Section

- **Strategic Partners** in different countries
- **Grid Visualisation** responsive
- **Hover Effects** on images

### 6. Projects Section

- **Project Portfolio**:
  - **Dafoncv**: SaaS platform for creating CVs with AI
  - **Dafon PDF Extractor API**: Python API for extracting data from PDFs
- **External Links** to projects
- **Interactive Cards** with animations
- **Detailed Descriptions** of each project

### 7. Contact Section

- **Social Media Links**:
  - Email
  - LinkedIn
  - Facebook
  - Instagram
- **Interactive Icons** with animations
- **Consistent Glassmorphism Design**

### 8. Company Modal

- **Detailed Company Information**
- **History and Mission**
- **CEO Information**
- **Open/Close Animations**

### 9. Footer

- **Company Logo**
- **Dynamic Copyright**
- **Minimalist Design**

### 10. Visual Effects

- **Pulse Beams Background**: Animated wave effect in the background
- **Glassmorphism**: Frosted glass effect on cards and navigation
- **Gradients**: Purple gradients for highlights
- **Smooth Animations**: Transitions and animations with Framer Motion

---

## 🎯 Objectives and Goals

### Main Objectives

1. **Professional Presentation**
   - Show Dafon company in a modern and professional way
   - Highlight the company's expertise and innovation
   - Present the CEO and team

2. **Online Visibility**
   - Improve positioning in search engines
   - Increase digital presence
   - Facilitate contact with potential clients

3. **User Experience**
   - Provide intuitive and fluid navigation
   - Ensure responsiveness on all devices
   - Offer optimised performance

4. **Conversion**
   - Facilitate contact through multiple channels
   - Present projects and success cases
   - Generate qualified leads

### Technical Goals

1. **Performance**
   - Lighthouse Score > 90 in all metrics
   - First Contentful Paint (FCP) < 1.8s
   - Largest Contentful Paint (LCP) < 2.5s
   - Time to Interactive (TTI) < 3.8s

2. **SEO**
   - SEO Score > 95
   - Validated structured data
   - Sitemap and robots.txt configured
   - Complete metadata

3. **Accessibility**
   - WCAG 2.1 Level AA compliance
   - Functional keyboard navigation
   - Screen reader compatible
   - Adequate contrast

4. **Responsiveness**
   - Perfect operation on mobile, tablet and desktop
   - Well-defined breakpoints
   - Touch-friendly on mobile devices

---

## 📊 Diagrams

### Navigation Flow Diagram

```
                    ┌─────────────┐
                    │   Homepage   │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   ┌─────────┐       ┌──────────┐      ┌──────────┐
   │ Welcome │       │  About   │      │Locations │
   └────┬────┘       └────┬─────┘      └────┬─────┘
        │                 │                  │
        │                 ▼                  │
        │            ┌──────────┐            │
        │            │ Partners │            │
        │            └────┬─────┘            │
        │                 │                  │
        │                 ▼                  │
        │            ┌──────────┐            │
        │            │ Projects │            │
        │            └────┬─────┘            │
        │                 │                  │
        └─────────────────┼──────────────────┘
                          │
                          ▼
                   ┌──────────┐
                   │ Contact  │
                   └──────────┘
```

### Components and Props Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    app/page.tsx                         │
│  (Client Component - State: isModalOpen)               │
└──────────────────┬──────────────────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
    ▼              ▼              ▼
┌─────────┐  ┌──────────┐  ┌─────────────┐
│ Header  │  │ Welcome  │  │CompanyModal │
│         │  │          │  │             │
│ Props:  │  │ Props:   │  │ Props:      │
│ - none  │  │ -        │  │ - isOpen    │
│         │  │  onLearn │  │ - onClose   │
│         │  │  More    │  │             │
└─────────┘  └──────────┘  └─────────────┘
    │              │
    ▼              ▼
┌─────────┐  ┌──────────┐
│ About   │  │Locations │
└─────────┘  └──────────┘
    │              │
    ▼              ▼
┌─────────┐  ┌──────────┐
│Partners │  │ Projects │
└─────────┘  └──────────┘
    │              │
    └──────┬───────┘
           │
           ▼
    ┌──────────┐
    │ Contact  │
    └──────────┘
           │
           ▼
    ┌──────────┐
    │  Footer  │
    └──────────┘
```

### SEO and Metadata Diagram

```
┌─────────────────────────────────────────────────────────┐
│              app/layout.tsx (Server Component)          │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │            Metadata Configuration              │    │
│  │  - Title & Description                         │    │
│  │  - Keywords                                    │    │
│  │  - Open Graph                                  │    │
│  │  - Twitter Cards                               │    │
│  │  - Robots                                      │    │
│  │  - Icons                                       │    │
│  └────────────────────────────────────────────────┘    │
│                        │                                 │
│                        ▼                                 │
│  ┌────────────────────────────────────────────────┐    │
│  │         StructuredData Component               │    │
│  │  - Organization Schema                          │    │
│  │  - Person Schema                                │    │
│  │  - WebSite Schema                               │    │
│  │  - WebPage Schema                                 │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  sitemap.ts │  │ robots.ts   │  │ manifest.ts │
│             │  │             │  │             │
│  - URLs     │  │ - Rules     │  │ - PWA       │
│  - Priority │  │ - Sitemap   │  │ - Icons     │
│  - Frequency│  │   location  │  │ - Theme     │
└─────────────┘  └─────────────┘  └─────────────┘
```

### Performance and Optimisation Diagram

```
┌─────────────────────────────────────────────────────────┐
│              next.config.ts Configuration               │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         Image Optimisation                      │    │
│  │  - AVIF & WebP formats                         │    │
│  │  - Responsive sizes                             │    │
│  │  - Lazy loading                                 │    │
│  └────────────────────────────────────────────────┘    │
│                        │                                 │
│  ┌────────────────────────────────────────────────┐    │
│  │         Compression                            │    │
│  │  - Gzip/Brotli enabled                         │    │
│  └────────────────────────────────────────────────┘    │
│                        │                                 │
│  ┌────────────────────────────────────────────────┐    │
│  │         Headers                                 │    │
│  │  - Security headers                             │    │
│  │  - Cache headers                                │    │
│  │  - SEO headers                                  │    │
│  └────────────────────────────────────────────────┘    │
│                        │                                 │
│  ┌────────────────────────────────────────────────┐    │
│  │         Font Optimisation                      │    │
│  │  - display: swap                               │    │
│  │  - Preload critical fonts                      │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## 🎓 Fundamentals and Principles

### SOLID Principles

#### 1. Single Responsibility Principle (SRP)
Each component has a single responsibility:
- `Header.tsx`: Navigation only
- `Welcome.tsx`: Hero section only
- `Contact.tsx`: Contact information only

#### 2. Open/Closed Principle (OCP)
Components are open for extension, closed for modification:
- Reusable UI components in `components/ui/`
- Props allow customisation without modifying the component

#### 3. Liskov Substitution Principle (LSP)
Components can be substituted by their variants:
- Cards can be used in different contexts
- Buttons maintain consistent interface

#### 4. Interface Segregation Principle (ISP)
Specific interfaces instead of generic ones:
- Props typed with TypeScript
- Minimal necessary interfaces

#### 5. Dependency Inversion Principle (DIP)
Dependencies on abstractions, not implementations:
- Use of Radix UI components (abstractions)
- Separation between logic and presentation

### Object Calisthenics

1. **One level of indentation per method**: Well-structured components
2. **Don't use ELSE**: Use of early returns and ternaries
3. **Keep all entities small**: Focused components
4. **One line per point**: Clean and readable code
5. **Don't abbreviate**: Descriptive names (`isModalOpen` instead of `modal`)
6. **Keep all classes small**: Components with less than 200 lines
7. **No more than two instance variables**: Minimum necessary state
8. **First-class classes**: Components as first-class citizens
9. **Don't use getters/setters**: Direct props instead of getters

### Clean Code Principles

1. **Meaningful Names**
   ```typescript
   // ✅ Good
   const isModalOpen = useState(false);
   const toggleMobileMenu = () => { ... };
   
   // ❌ Bad
   const m = useState(false);
   const tgl = () => { ... };
   ```

2. **Small Functions**
   - Each function does one thing
   - Functions with less than 20 lines when possible

3. **Useful Comments**
   - Comments explain "why", not "what"
   - Self-explanatory code when possible

4. **Consistent Formatting**
   - ESLint ensures consistent formatting
   - Prettier (if configured) for automatic formatting

5. **Error Handling**
   - Environment variable validation
   - Clear error messages

### Design Patterns

1. **Component Pattern**
   - React components as reusable units
   - Composition instead of inheritance

2. **Container/Presentational Pattern**
   - Separation between logic (containers) and presentation (presentational)
   - Client Components for interactivity
   - Server Components for static data

3. **Custom Hooks Pattern**
   - Reusable logic in hooks (when necessary)

4. **Provider Pattern**
   - Context API for global state (if necessary)

---

## 📖 Readability

### Naming Conventions

#### Components
```typescript
// PascalCase for components
export const Welcome = () => { ... }
export const CompanyModal = () => { ... }
```

#### Variables and Functions
```typescript
// camelCase for variables and functions
const isModalOpen = useState(false);
const toggleMobileMenu = () => { ... };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

#### Constants
```typescript
// UPPER_SNAKE_CASE for global constants
const DEFAULT_TITLE = "Dafon - Innovative Solutions";
// camelCase for local constants
const defaultDescription = "Dafon delivers...";
```

#### Files
```
// PascalCase for components
Welcome.tsx
CompanyModal.tsx
Header.tsx

// camelCase for utilities
utils.ts
backgroundBeamsConfig.ts

// kebab-case for configurations
next.config.ts
tsconfig.json
```

### Code Structure

#### Import Order
```typescript
// 1. React and Next.js
import { useState } from "react";
import Image from "next/image";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

// 3. Local components
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";

// 4. Utilities and configurations
import { backgroundBeams } from "@/lib/backgroundBeamsConfig";
```

#### Component Structure
```typescript
// 1. Imports
import ...

// 2. Types/Interfaces
interface ComponentProps {
  ...
}

// 3. Constants
const CONSTANT_VALUE = ...;

// 4. Component
export const Component = ({ prop }: ComponentProps) => {
  // 4.1. Hooks
  const [state, setState] = useState(...);
  
  // 4.2. Helper functions
  const helperFunction = () => { ... };
  
  // 4.3. Render
  return (
    ...
  );
};
```

### Comments

```typescript
// ✅ Useful comments
// Mandatory validation of environment variable
if (!siteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
}

// ❌ Obvious comments (avoid)
// Set state to true
setState(true);
```

### Formatting

- **Indentation**: 2 spaces
- **Quotes**: Single for strings, double for JSX
- **Semicolon**: Always used
- **Blank lines**: Between logical sections
- **Maximum line**: 100 characters (when possible)

---

## 🔍 SEO (Search Engine Optimisation)

### Implemented SEO Strategy

#### 1. Complete Metadata

**Title and Description**
```typescript
title: {
  default: "Dafon - Innovative Solutions for Your Business",
  template: `%s | Dafon`, // For future pages
}
description: "Dafon delivers cutting-edge solutions..."
```

**Keywords**
- Relevant keywords included
- Focus on business, technology and location terms

**Metadata Base**
```typescript
metadataBase: new URL(siteUrl) // Absolute URLs
```

#### 2. Open Graph (OG) Tags

```typescript
openGraph: {
  type: "website",
  locale: "en_GB",
  url: siteUrl,
  siteName: "Dafon",
  title: defaultTitle,
  description: defaultDescription,
  images: [
    {
      url: `${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`,
      width: 1200,
      height: 630,
      alt: "Daniel Fonseca da Silva - CEO of Dafon",
    },
  ],
}
```

**Benefits:**
- Better sharing on social networks
- Rich previews on Facebook, LinkedIn, etc.
- Higher click-through rate

#### 3. Twitter Cards

```typescript
twitter: {
  card: "summary_large_image",
  title: defaultTitle,
  description: defaultDescription,
  images: [`${siteUrl}/company/daniel-fonseca-da-silva-ceo.jpg`],
  creator: "@dafon",
}
```

#### 4. Structured Data (JSON-LD)

**Implemented Schemas:**

1. **Organization Schema**
   ```json
   {
     "@type": "Organization",
     "name": "Dafon",
     "url": "https://www.dafon.online",
     "logo": {...},
     "description": "...",
     "foundingDate": "2020",
     "founder": {...},
     "address": [...],
     "sameAs": [...]
   }
   ```

2. **Person Schema**
   ```json
   {
     "@type": "Person",
     "name": "Daniel Fonseca da Silva",
     "jobTitle": "Chief Executive Officer",
     "worksFor": {...},
     "image": {...}
   }
   ```

3. **WebSite Schema**
   ```json
   {
     "@type": "WebSite",
     "url": "https://www.dafon.online",
     "name": "Dafon",
     "publisher": {...}
   }
   ```

4. **WebPage Schema**
   ```json
   {
     "@type": "WebPage",
     "url": "https://www.dafon.online",
     "name": "Dafon - Innovative Solutions...",
     "isPartOf": {...},
     "about": {...}
   }
   ```

**Benefits:**
- Rich snippets in search results
- Better content understanding by search engines
- Greater visibility in search results

#### 5. Sitemap.xml

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
```

**Characteristics:**
- Dynamic generation
- Automatic updates
- Canonical URLs

#### 6. Robots.txt

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

**Configuration:**
- Allows indexing of all pages
- Points to sitemap
- Cache headers configured

#### 7. Canonical URLs

```typescript
alternates: {
  canonical: siteUrl,
}
```

**Prevents:**
- Duplicate content
- Indexing problems
- Authority dilution

#### 8. Image Optimisation

**Next.js Image Component:**
- Automatic lazy loading
- Responsive images
- Modern formats (AVIF, WebP)
- Automatic optimisation

**Descriptive Alt Texts:**
```typescript
<Image
  src="/company/daniel-fonseca-da-silva-ceo.jpg"
  alt="Daniel Fonseca da Silva - CEO of Dafon"
  ...
/>
```

#### 9. Semantic HTML5 Structure

**Heading Hierarchy:**
```html
<h1>Welcome to Dafon</h1>
  <h2>About Dafon</h2>
    <h3>Daniel Fonseca da Silva</h3>
  <h2>Our Locations</h2>
  <h2>Our Projects</h2>
    <h3>DafonCV - Creation customized CV With AI</h3>
```

**Semantic Elements:**
- `<main>`: Main content
- `<section>`: Site sections
- `<article>`: Projects (independent content)
- `<nav>`: Navigation
- `<footer>`: Footer
- `<header>`: Header

#### 10. Performance and Core Web Vitals

**Optimisations:**
- Compression enabled
- Image optimisation
- Font optimisation (display: swap)
- Lazy loading
- Automatic code splitting

**Metrics:**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### 11. Mobile-First and Responsiveness

- Responsive design on all devices
- Viewport correctly configured
- Touch-friendly
- Performance optimised for mobile

#### 12. Security and SEO Headers

```typescript
headers: [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
]
```

### SEO Checklist

- [x] Optimised Title and Description
- [x] Relevant keywords
- [x] Complete Open Graph tags
- [x] Twitter Cards configured
- [x] Structured data (JSON-LD)
- [x] Dynamic sitemap.xml
- [x] Robots.txt configured
- [x] Canonical URLs
- [x] Alt texts on all images
- [x] Correct heading hierarchy
- [x] Semantic HTML5 structure
- [x] Friendly URLs
- [x] Optimised performance
- [x] Mobile-friendly
- [x] HTTPS (when in production)

### Validation Tools

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Validates structured data

2. **Schema.org Validator**
   - https://validator.schema.org/
   - Validates JSON-LD schemas

3. **Google Search Console**
   - Monitors indexing
   - Identifies problems
   - Submits sitemap

4. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Analyses performance
   - Core Web Vitals

5. **Lighthouse**
   - Complete audit tool
   - Performance, SEO, Accessibility, Best Practices

---

## 📁 Project Structure

```
dafon-site/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── icon.png                 # Favicon
│   ├── layout.tsx               # Root layout (Server Component)
│   ├── manifest.ts              # PWA Manifest
│   ├── page.tsx                 # Main page (Client Component)
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic sitemap.xml
│
├── components/                   # React components
│   ├── About.tsx                # About company section
│   ├── CompanyModal.tsx         # Modal with company information
│   ├── Contact.tsx              # Contact section
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Header and navigation
│   ├── Locations.tsx             # Locations section
│   ├── Partners.tsx              # Partners section
│   ├── Projects.tsx              # Projects section
│   ├── StructuredData.tsx        # Structured data JSON-LD
│   ├── Welcome.tsx               # Hero/welcome section
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── form.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── pulse-beams.tsx
│       ├── select.tsx
│       ├── skeleton.tsx
│       └── textarea.tsx
│
├── lib/                          # Utilities and configurations
│   ├── backgroundBeamsConfig.ts  # Pulse Beams effect configuration
│   └── utils.ts                 # Utility functions
│
├── public/                       # Static files
│   ├── company/                  # Company images
│   │   ├── buenos-aires.jpg
│   │   ├── daniel-fonseca-da-silva-ceo.jpg
│   │   ├── lisboa-portugal.jpg
│   │   ├── meeting-day.jpg
│   │   ├── office-dafon.jpg
│   │   ├── office-space.jpg
│   │   ├── santiago-chile.jpg
│   │   └── sao-paulo-center.jpg
│   ├── projects/                 # Project images
│   │   ├── dafon-pdf-extractor-api-banner.jpg
│   │   └── dafoncv-banner.png
│   ├── logo-dark.png
│   └── logo-white.png
│
├── .gitignore                   # Files ignored by Git
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # This file
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚀 Installation and Execution

### Prerequisites

- **Node.js** 18.17 or higher
- **npm** 9.0 or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dafon-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.dafon.online
   ```

### Execution

#### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Access: http://localhost:3000

#### Production

1. **Build**
   ```bash
   npm run build
   ```

2. **Start**
   ```bash
   npm run start
   ```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base site URL | Yes | `https://www.dafon.online` |

### Next.js Config

Main configurations in `next.config.ts`:

- **Compression**: Enabled
- **Image Optimisation**: AVIF and WebP
- **Security Headers**: Configured
- **Cache Headers**: For robots.txt and sitemap.xml

### TypeScript Config

- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` points to root
- **Target**: ES2017
- **Module Resolution**: Bundler

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Starts development server

# Build
npm run build        # Creates production build

# Production
npm run start        # Starts production server

# Linting
npm run lint         # Runs ESLint
```

---

## ✅ Implemented Best Practices

### 1. TypeScript
- Strict typing enabled
- Well-defined interfaces
- Type safety throughout the code

### 2. Componentisation
- Reusable components
- Separation of responsibilities
- Composition instead of inheritance

### 3. Performance
- Image lazy loading
- Automatic code splitting
- Font optimisation
- Compression enabled

### 4. Accessibility
- ARIA labels
- Keyboard navigation
- Adequate contrast
- Screen reader friendly

### 5. SEO
- Complete metadata
- Structured data
- Sitemap and robots.txt
- Canonical URLs

### 6. Responsiveness
- Mobile-first approach
- Well-defined breakpoints
- Touch-friendly
- Adaptive layout

### 7. Security
- Security headers
- Input validation
- Data sanitisation
- HTTPS in production

### 8. Maintainability
- Clean and readable code
- Useful comments
- Organised structure
- Consistent conventions

---

## ⚡ Performance

### Target Metrics

- **Lighthouse Performance**: > 90
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### Implemented Optimisations

1. **Image Optimisation**
   - Modern formats (AVIF, WebP)
   - Lazy loading
   - Responsive images
   - Sizes attribute

2. **Font Optimisation**
   - `display: swap`
   - Preload critical fonts
   - Character subset

3. **Code Splitting**
   - Automatic by Next.js
   - Lazy loading of components when possible

4. **Compression**
   - Gzip/Brotli enabled
   - Automatic minification

5. **Caching**
   - Cache headers configured
   - Static assets cached

---

## ♿ Accessibility

### Followed Standards

- **WCAG 2.1 Level AA** compliance
- **Semantic HTML5**
- **ARIA Labels** where necessary
- **Keyboard Navigation** functional
- **Screen Reader** compatible
- **Colour Contrast** adequate

### Implementations

1. **ARIA Labels**
   ```typescript
   <button
     aria-label="Toggle mobile menu"
     aria-expanded={isMobileMenuOpen}
   >
   ```

2. **Semantic HTML**
   ```html
   <nav>, <main>, <section>, <article>, <footer>
   ```

3. **Alt Texts**
   ```typescript
   <Image alt="Descriptive text" ... />
   ```

4. **Keyboard Navigation**
   - Logical tab order
   - Focus visible
   - Skip links (when necessary)

---

## 🤝 Contribution

### How to Contribute

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Follow SOLID principles
- Keep code clean and readable
- Add comments when necessary
- Write tests (when applicable)
- Update documentation

---

## 📄 License

This project is under the license specified in the `license` file in the repository root.

---

## 📞 Contact

**Dafon**
- Website: https://www.dafon.online
- Email: dafondeveloper@gmail.com
- LinkedIn: https://br.linkedin.com/company/dafon-sistemas
- Facebook: https://www.facebook.com/dafonsistemas
- Instagram: https://www.instagram.com/dafonsistema

**CEO**: Daniel Fonseca da Silva

---

## 🙏 Acknowledgements

- Next.js Team
- React Team
- Tailwind CSS
- Radix UI
- Framer Motion
- Open Source Community

---

**Developed with love by the Dafon team**

