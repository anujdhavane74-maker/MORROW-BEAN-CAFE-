# MORROW & BEAN — Specialty Café Website (Showcase Project 01)

> **Client Concept**: Fictional showcase project developed for **KILT STUDIO**, a digital creative agency.  
> **Brand**: MORROW & BEAN  
> **Brand Line**: *"Coffee, slow mornings & good company."*  
> **Target Demographic**: Modern neighbourhood specialty café in Pune, India (Koregaon Park concept).  

---

## 1. Project Overview & Disclosure

**MORROW & BEAN** is a standalone concept website created to showcase KILT STUDIO's high-end web design and frontend engineering capabilities.

> **Demonstration Notice:**  
> This project is a fictional brand concept. It contains no real customer data, fabricated testimonials, awards, or commercial payment integrations. All business details (address, hours, prices in INR ₹, contact endpoints) are illustrative concept placeholders designed to model a real-world digital brand experience.

---

## 2. Visual Direction & Design Tokens

The visual language follows an editorial design aesthetic combining tactile photography, confident serif typography, generous whitespace, and muted earthy tones:

| Token Name | Hex Value | Role in Design System |
|---|---|---|
| `--color-oat-cream` | `#F4EFE6` | Primary page background |
| `--color-espresso` | `#2A211C` | Primary text and dark atmospheric sections |
| `--color-terracotta` | `#B96545` | Primary brand accent & interactive CTAs |
| `--color-sage` | `#72765B` | Secondary accent & botanical indicators |
| `--color-warm-white` | `#FFFCF7` | Surface cards & illuminated modules |
| `--color-muted-taupe` | `#A89B8A` | Subtle dividers, borders & tertiary text |

### Typography
- **Editorial Headline Serif**: `Cormorant Garamond` (Google Fonts) with italic accents for emotional emphasis.
- **Modern Sans-Serif**: `Plus Jakarta Sans` (Google Fonts) for clear readability across navigation, menu details, and pricing.

---

## 3. Architecture & Key Components

This project is built using a lightweight, frontend-only architecture with **React 19 + TypeScript + Vite** and pure **CSS Design Tokens** (`src/index.css`), with zero third-party CSS utility bloat or database overhead. It is completely self-contained and ready to be embedded as a route or sub-app in the main KILT STUDIO portfolio.

### Key Components

- **`AnnouncementBar`** (`src/components/AnnouncementBar.tsx`):  
  Slim top bar communicating the KILT STUDIO showcase context and linking to the design specification modal.
- **`Navbar`** (`src/components/Navbar.tsx`):  
  Sticky navigation bar with the MORROW & BEAN wordmark, smooth scrolling navigation anchors, accessible mobile drawer toggle, escape key handling, and background scroll locking.
- **`Hero`** (`src/components/Hero.tsx`):  
  Asymmetric editorial layout pairing the headline *"A slower kind of everyday."*, supporting philosophy, primary/secondary action CTAs, and a high-resolution Unsplash photograph framed with warm oat borders.
- **`Story`** (`src/components/Story.tsx`):  
  Our Story section articulating the three core brand pillars:
  1. *A Slower Cadence* (Single-cup extraction & natural light)
  2. *Indian Terroir & Origin* (Chikmagalur & Western Ghats shade-grown estate beans)
  3. *The Baker’s Vigil* (Daily hand-laminated viennoiserie)
- **`MenuSection`** (`src/components/MenuSection.tsx`):  
  Interactive, filterable signature menu with categories (*Espresso & Hot Coffee*, *Iced Coffee*, *Matcha & Non-Coffee*, *Pastries & Light Brunch*), featuring prices in Indian Rupees (₹), flavor profiles, and a spotlight card on the morning roast.
- **`GallerySection`** (`src/components/GallerySection.tsx`):  
  Curated image-led gallery using varied aspect ratios and an accessible full-screen Lightbox with next/previous keyboard controls.
- **`VisitSection`** (`src/components/VisitSection.tsx`):  
  Information card with illustrative hours of service, a custom SVG minimalist cartographic illustration of Koregaon Park (Lane 7), and quick contact details.
- **`ContactModal`** (`src/components/ContactModal.tsx`):  
  Accessible interactive modal for table reservations, bean subscriptions, or agency inquiries with instant client-side feedback.
- **`ConceptInfoModal`** (`src/components/ConceptInfoModal.tsx`):  
  Case study modal explaining the project's background, design tokens, and technical choices.
- **`ImageWithFallback`** (`src/components/ImageWithFallback.tsx`):  
  Resilient image wrapper with loading skeleton shimmer and fallback state to prevent layout shifts.
- **`Footer`** (`src/components/Footer.tsx`):  
  Understated brand closing line, navigation links, copyright notice, case study modal trigger, and smooth back-to-top button.

---

## 4. Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; built with v22.23.3)
- npm (v10 or higher)

### Setup & Run Commands

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run Oxlint (0 warnings, 0 errors)
npm run lint

# Production build verification (TypeScript + Vite bundle)
npm run build

# Preview production build locally
npm run preview
```

The dev server will run locally at `http://localhost:5173/` or `http://127.0.0.1:5173/`.

---

## 5. Asset Attribution & Fallback Strategy

All photography is sourced via Unsplash CDN under the Unsplash License for creative showcase use:
- **Hero Coffee Table**: Photo by Unsplash (`photo-1501339847302-ac426a4a7cbb`)
- **Café Interior & Corner**: Photo by Unsplash (`photo-1554118811-1e0d58224f24`)
- **Pour & Latte Art**: Photo by Unsplash (`photo-1534778101976-62847782c213`)
- **Dawn Viennoiserie**: Photo by Unsplash (`photo-1555507036-ab1f4038808a`)
- **Ceramics & Beans**: Photo by Unsplash (`photo-1447933601403-0c6688de566e`)
- **Sourdough Brunch**: Photo by Unsplash (`photo-1525351484163-7529414344d8`)

Every image is wrapped with `ImageWithFallback`, providing an editorial textured placeholder if external networks are restricted.

---

## 6. Checklist of Placeholders to Replace for Real Client Deployment

When adapting this concept template for a live commercial client:

1. **Brand Details & Typography**:
   - Update `BRAND_INFO` in `src/data/cafeData.ts` with verified brand name, legal entity, and trademark information.
2. **Physical Address & Google Maps**:
   - Replace the illustrative address with the real street address and integrate Google Maps API / Embed iframe.
3. **Menu & Pricing**:
   - Update menu items, taxes (GST), and pricing to match live kitchen/bar operations.
4. **Interactive Inquiries & Bookings**:
   - Replace the simulated modal submission with a backend webhook (e.g., Resend, EmailJS, Supabase, or SevenRooms).
5. **Operating Hours**:
   - Configure real-time holiday schedules, seasonal timings, and live open/closed indicators.
6. **Local Asset Hosting**:
   - Replace Unsplash CDN URLs with self-hosted, optimized WebP / AVIF assets stored in `public/images/`.

---

## 7. Portfolio Integration Guide for KILT STUDIO

To embed MORROW & BEAN into the main agency website:
- **As a Route**: Copy the `components/`, `data/`, and `types/` directories into a Next.js / React Router route (e.g. `/work/morrow-and-bean`).
- **Styles**: The CSS tokens are namespaced in `index.css` and will not conflict with Tailwind or global agency stylesheets.
- **Zero External Dependencies**: Beyond `lucide-react`, the app has no heavyweight dependencies, keeping bundle size minimal (~86 kB gzipped).
