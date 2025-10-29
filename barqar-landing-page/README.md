# BARQAR Strategic Marketing Blueprint Landing Page

A modern, conversion-focused landing page built with React, Tailwind CSS, and Framer Motion for the BARQAR Strategic Marketing Blueprint service.

## 🚀 Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Deployment:** Cloudflare Pages

## 🎨 Brand Colors

- **BARQAR Blue:** `#00455B` - Primary brand color
- **BARQAR Green:** `#B7D436` - Accent and CTAs
- **BARQAR Black:** `#00000A` - Text
- **Dark Grey:** `#333333` - Secondary text
- **White:** `#FFFFFF` - Backgrounds

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   └── Section.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── PromoFlyIn.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── SolutionSection.jsx
│   │   ├── BlueprintSection.jsx
│   │   ├── AuthoritySection.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── forms/           # Form components
│   │   └── ContactForm.jsx
│   └── animations/      # Animation components
│       ├── FadeIn.jsx
│       ├── SlideIn.jsx
│       └── NumberCounter.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎯 Key Features

- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Smooth Animations:** Scroll-triggered animations with Framer Motion
- **Contact Form:** Full validation with React Hook Form
- **Promotional Banner:** Time-delayed fly-in with session storage
- **SEO Optimized:** Meta tags, semantic HTML, accessibility features
- **Performance Optimized:** Code splitting, lazy loading, optimized assets

## 🌐 Deployment

This project is configured for deployment on Cloudflare Pages.

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `barqar-landing-page`

## 📊 Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

## 🎨 Design Philosophy

Modern, tech-forward marketing aesthetic with:
- Clean, professional design
- Bold typography with Cabin font
- Micro-interactions and smooth animations
- Conversion-focused layout

## 🎨 Brand Assets

The BARQAR logo is included in the `public/` directory:
- `barqar-logo.png` - Full color logo with tagline

## 📝 License

© 2025 BARQAR. All rights reserved.

---

**BARQAR** - *"Don't be part of the herd. BE HEARD."*  
A Haley Marketing Brand
