# Performance Optimization Guide

This document outlines optimization strategies and best practices for the BARQAR landing page.

## Performance Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms
- **Lighthouse Score:** 90+ across all categories

## Current Optimizations

### 1. Code Splitting

Vite automatically handles code splitting:
- Components are lazy-loaded when needed
- Dynamic imports reduce initial bundle size
- Route-based splitting (if multi-page)

### 2. Asset Optimization

**Images:**
- Use WebP format for all images
- Provide fallbacks for older browsers
- Lazy load below-fold images
- Responsive images with srcset

**Fonts:**
- Google Fonts loaded with `display=swap`
- Preconnect to font origins
- Subset fonts if possible

### 3. CSS & JavaScript

**CSS:**
- Tailwind CSS purges unused styles
- Minified in production build
- Critical CSS inlined (Vite default)

**JavaScript:**
- Tree shaking removes unused code
- Minified and compressed
- ES modules for better caching

### 4. Caching Strategy

**Headers Configuration (`_headers`):**
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### 5. Cloudflare Optimizations

**Automatic:**
- Global CDN distribution
- HTTP/2 and HTTP/3 support
- Brotli compression
- Minification (Auto Minify)
- Image optimization (Polish)

**Manual Setup:**
- Enable "Auto Minify" in Cloudflare Dashboard
- Enable "Rocket Loader" for async JS loading
- Enable "Mirage" for image optimization
- Configure Page Rules for specific URLs

## Image Optimization Workflow

### Convert Images to WebP

```bash
# Install sharp-cli
npm install -g sharp-cli

# Convert images
sharp input.png -o output.webp --webp
```

### Optimize Existing Images

```bash
# Install imagemin
npm install -g imagemin-cli imagemin-webp

# Optimize
imagemin src/assets/*.{jpg,png} --out-dir=src/assets --plugin=webp
```

### Responsive Images

```jsx
<picture>
  <source 
    srcSet="/assets/hero-mobile.webp" 
    media="(max-width: 768px)" 
    type="image/webp" 
  />
  <source 
    srcSet="/assets/hero-desktop.webp" 
    media="(min-width: 769px)" 
    type="image/webp" 
  />
  <img 
    src="/assets/hero-desktop.jpg" 
    alt="Description" 
    loading="lazy"
  />
</picture>
```

## Performance Testing

### Run Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://your-site.com --view

# Or use Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Run audit
```

### Monitor Core Web Vitals

**Tools:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)
- [Web Vitals Chrome Extension](https://chrome.google.com/webstore/detail/web-vitals)

### Performance Budget

Set performance budgets in `package.json`:

```json
{
  "budget": {
    "js": "100kb",
    "css": "50kb",
    "images": "500kb",
    "fonts": "100kb"
  }
}
```

## Animation Performance

### Use CSS Transforms

Prefer `transform` and `opacity` for animations:

```css
/* Good - GPU accelerated */
.element {
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

/* Avoid - causes repaints */
.element {
  margin-top: 20px;
  transition: margin-top 0.3s;
}
```

### Framer Motion Optimization

```jsx
// Use layoutId for shared element transitions
<motion.div layoutId="unique-id">

// Reduce motion preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div animate={prefersReducedMotion ? {} : animation}>
```

## Form Performance

### Debounce Validation

```javascript
import { debounce } from 'lodash';

const validateField = debounce((value) => {
  // Validation logic
}, 300);
```

### Split Long Forms

- Use multi-step forms for better UX
- Show progress indicators
- Save form state in sessionStorage

## SEO Optimizations

### Meta Tags Checklist

- ✅ Title tag (55-60 characters)
- ✅ Meta description (150-160 characters)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Structured data (JSON-LD)

### Structured Data Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Strategic Marketing Blueprint",
  "provider": {
    "@type": "Organization",
    "name": "BARQAR",
    "url": "https://barqar.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "USD"
  }
}
</script>
```

## Accessibility Performance

### ARIA Labels

Add ARIA labels for screen readers:

```jsx
<button aria-label="Close modal" onClick={handleClose}>
  ×
</button>
```

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```jsx
<div 
  role="button" 
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  onClick={handleClick}
>
```

## Mobile Optimization

### Responsive Images

Use appropriate image sizes for mobile:

```jsx
<img
  src="/assets/hero.jpg"
  srcSet="
    /assets/hero-mobile.jpg 480w,
    /assets/hero-tablet.jpg 768w,
    /assets/hero-desktop.jpg 1200w
  "
  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
  alt="Hero"
/>
```

### Touch Targets

Ensure minimum touch target size of 44×44px:

```css
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}
```

## Monitoring & Analytics

### Real User Monitoring (RUM)

Implement RUM with Web Vitals:

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Cloudflare Analytics

Enable Web Analytics in Cloudflare:
1. Go to Analytics > Web Analytics
2. Add site
3. Copy tracking code to `index.html`

## Continuous Optimization

### Regular Audits

Schedule monthly audits:
- Lighthouse performance audit
- Accessibility audit (axe DevTools)
- Security audit (npm audit)
- Dependency updates (npm update)

### A/B Testing

Test performance impact of changes:
- Hero image variations
- Animation complexity
- Font loading strategies
- Third-party scripts

## Troubleshooting Common Issues

### Large Bundle Size

```bash
# Analyze bundle
npm run build
npx vite-bundle-visualizer

# Solutions:
# - Remove unused dependencies
# - Code split large components
# - Lazy load heavy libraries
```

### Slow Time to Interactive

```bash
# Check for:
# - Large JavaScript bundles
# - Blocking scripts
# - Heavy animations on page load
# - Third-party scripts
```

### Poor LCP Score

```bash
# Optimize:
# - Hero image size and format
# - Preload critical resources
# - Reduce render-blocking resources
# - Optimize server response time
```

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Cloudflare Optimization Guide](https://developers.cloudflare.com/fundamentals/speed/)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Framer Motion Performance](https://www.framer.com/motion/animation/#performance)

---

**Last Updated:** October 2025  
**Performance Target:** 90+ Lighthouse Score

