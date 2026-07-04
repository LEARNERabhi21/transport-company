# TransLogix — Transportation & Logistics Company Website

A modern, responsive, and production-ready company profile website for **TransLogix**, a premium transportation and logistics company. Built with React 19, TypeScript, Vite, and Tailwind CSS.

![TransLogix](public/images/hero/hero-banner.png)

---

## ✨ Features

- **6 Fully Designed Pages** — Home, About, Services, Fleet, Gallery, Contact
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Centralized Image System** — All images configurable from a single file
- **Lazy-Loaded Routes** — Code-split pages for optimal performance
- **Animated UI** — Scroll-triggered animations with Framer Motion
- **Contact Form** — Client-side validation with success/error states
- **Gallery Lightbox** — Full-screen image viewer with navigation
- **Animated Counters** — Intersection Observer-based stat counters
- **Glassmorphism Navbar** — Sticky navbar with blur effect
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **TypeScript Strict** — Fully typed codebase with zero TS errors
- **Linted** — Zero ESLint errors

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| TypeScript | 6 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| React Router | 7 | Client-side routing |
| Lucide React | latest | Icon library |
| Framer Motion | latest | Animations |
| ESLint | 10 | Code linting |
| Prettier | latest | Code formatting |

---

## 📦 Installation

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Steps

```bash
# 1. Clone or navigate to the project
cd transport-company

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 📁 Folder Structure

```
transport-company/
├── public/
│   └── images/              # All website images (replaceable)
│       ├── hero/            # Hero banners for each page
│       ├── fleet/           # Vehicle images
│       ├── gallery/         # Gallery images
│       ├── services/        # Service category images
│       ├── testimonials/    # Client avatar images
│       └── company/         # Company photos (office, team)
│
├── src/
│   ├── assets/
│   │   └── icons/           # Custom SVG icons (if needed)
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Primary/secondary/ghost button
│   │   ├── Container.tsx    # Max-width wrapper
│   │   ├── ContactForm.tsx  # Form with validation
│   │   ├── CTABanner.tsx    # Call-to-action banner
│   │   ├── FeatureCard.tsx  # Icon + title + description card
│   │   ├── FleetCard.tsx    # Vehicle info card
│   │   ├── Footer.tsx       # Multi-column footer
│   │   ├── GalleryGrid.tsx  # Image grid with lightbox
│   │   ├── Hero.tsx         # Full-screen hero section
│   │   ├── Navbar.tsx       # Responsive navbar
│   │   ├── OptimizedImage.tsx # Lazy-load image with fallback
│   │   ├── SectionTitle.tsx # Section heading component
│   │   ├── ServiceCard.tsx  # Service info card
│   │   ├── StatCounter.tsx  # Animated number counter
│   │   └── TestimonialCard.tsx # Client testimonial card
│   │
│   ├── data/                # Centralized data & configuration
│   │   ├── company.ts       # Company info, services, fleet, testimonials
│   │   └── images.ts        # ⭐ Centralized image path configuration
│   │
│   ├── hooks/               # Custom React hooks
│   ├── layouts/
│   │   └── MainLayout.tsx   # Navbar + Page + Footer wrapper
│   │
│   ├── pages/               # Route-level page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Fleet.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   │
│   ├── routes/
│   │   └── index.tsx        # Router config with lazy loading
│   │
│   ├── styles/
│   │   └── index.css        # Global styles, Tailwind theme, utilities
│   │
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   │
│   ├── utils/
│   │   └── imageUtils.ts    # Image helpers (fallback, preload)
│   │
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── eslint.config.js
└── package.json
```

---

## 🖼 Image Replacement Guide

### How the Image System Works

All image paths are centralized in **`src/data/images.ts`**. Components never hardcode image paths — they always reference this configuration file.

### To Replace an Image

**Option A — Same filename (recommended):**
1. Drop your new image into the appropriate folder in `public/images/`
2. Keep the same filename (e.g., replace `public/images/hero/hero-banner.png`)
3. No code changes needed — the website automatically uses the new image

**Option B — Different filename:**
1. Add your new image to `public/images/`
2. Update the path in `src/data/images.ts`:

```ts
// Before
hero: {
  main: "/images/hero/hero-banner.png",
}

// After
hero: {
  main: "/images/hero/my-new-hero.jpg",
}
```

3. Save — Vite hot-reloads automatically

### Image Categories

| Folder | Purpose | Used In |
|--------|---------|---------|
| `hero/` | Page hero banners | Home, About, Services, Fleet, Gallery, Contact |
| `fleet/` | Vehicle photos | Fleet page, Home fleet preview |
| `gallery/` | Company operations photos | Gallery page |
| `services/` | Service category images | Services page |
| `testimonials/` | Client avatars | Testimonials section |
| `company/` | Office, team photos | About page, Home about preview |

### Fallback Behavior

If an image fails to load, the `OptimizedImage` component automatically shows a gray SVG placeholder. No broken image icons will appear.

---

## 🎨 Customization Guide

### Colors

Edit the `@theme` block in `src/styles/index.css`:

```css
@theme {
  --color-navy: #0F2B46;      /* Primary dark blue */
  --color-gold: #D4A843;      /* Accent gold */
  --color-teal: #2AA7A0;      /* Secondary accent */
}
```

### Company Information

Edit `src/data/company.ts` to update:
- Company name, tagline, description
- Phone, email, address
- Social media links
- Services (title, description, features)
- Fleet vehicles
- Testimonials
- Team members
- Statistics

### Typography

The site uses **Inter** from Google Fonts. To change:
1. Update the `@import url()` in `src/styles/index.css`
2. Update `--font-sans` in the `@theme` block
3. Update the `<link>` preconnect in `index.html`

---

## 🚀 Deployment Guide

### Build for Production

```bash
npm run build
```

The output is in the `dist/` folder — static HTML, CSS, and JS files ready for any hosting provider.

### Deploy to Popular Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
1. Add `base: '/repo-name/'` to `vite.config.ts`
2. Build and deploy the `dist/` folder

**Any Static Host:**
Upload the contents of `dist/` to your web server.

### Environment Notes
- No backend or API required
- No environment variables needed
- All data is static (in `src/data/`)
- Contact form logs to console (integrate your backend as needed)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🏗 Architecture

### Design Principles
- **Clean Architecture** — Separation of data, components, pages, and utilities
- **SOLID Principles** — Single responsibility components, interface-based typing
- **Centralized Configuration** — All data and images in `src/data/`
- **Reusable Components** — Every UI element is a standalone, prop-driven component
- **Code Splitting** — All pages are lazy-loaded with React.lazy + Suspense

### Component Hierarchy

```
App
└── RouterProvider
    └── MainLayout
        ├── Navbar
        ├── <Page> (lazy loaded)
        │   ├── Hero / PageHero
        │   ├── SectionTitle
        │   ├── ServiceCard / FleetCard / etc.
        │   ├── StatCounter
        │   ├── CTABanner
        │   └── ContactForm
        └── Footer
```

---

## 📝 License

This project is for demonstration and commercial use. Replace content and images with your own branding.
