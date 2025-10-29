# Deployment Guide - BARQAR Landing Page

This guide covers deploying the BARQAR Strategic Marketing Blueprint landing page to Cloudflare Pages.

## Prerequisites

- GitHub account with repository access
- Cloudflare account
- Node.js 18+ installed locally

## Deployment Options

### Option 1: Automatic Deployment via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BARQAR landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Pages** > **Create a project**
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Production branch:** `main`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Root directory:** `/` (or `barqar-landing-page` if in subdirectory)

3. **Configure Environment Variables** (if needed)
   - In Cloudflare Pages dashboard, go to **Settings** > **Environment variables**
   - Add any required secrets (API keys, etc.)

4. **Deploy**
   - Cloudflare Pages will automatically deploy on every push to `main`
   - Pull requests will create preview deployments

### Option 2: Manual Deployment via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=barqar-landing-page
   ```

## GitHub Actions Setup

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployments.

### Required Secrets

Add these secrets to your GitHub repository (**Settings** > **Secrets and variables** > **Actions**):

1. `CLOUDFLARE_API_TOKEN`
   - Go to Cloudflare Dashboard > My Profile > API Tokens
   - Create token with "Cloudflare Pages" permissions

2. `CLOUDFLARE_ACCOUNT_ID`
   - Found in Cloudflare Dashboard URL or account settings

## Custom Domain Setup

1. **Add Custom Domain in Cloudflare Pages**
   - Go to your Pages project > **Custom domains**
   - Add your domain (e.g., `blueprint.barqar.com`)

2. **Configure DNS**
   - Cloudflare will provide DNS records
   - Add CNAME record pointing to your Pages project

3. **SSL Certificate**
   - Cloudflare automatically provisions SSL certificates
   - Enable "Always Use HTTPS" in SSL/TLS settings

## Form Submission Integration

### Email Service Setup

1. **Choose an email service** (SendGrid, Mailgun, etc.)
2. **Get API credentials**
3. **Add environment variables in Cloudflare Pages**
   - `SENDGRID_API_KEY` (or equivalent)
4. **Update** `/functions/api/contact.js` with your API integration

### CRM Integration

1. **Choose a CRM** (HubSpot, Salesforce, etc.)
2. **Get API credentials**
3. **Add environment variables in Cloudflare Pages**
   - `HUBSPOT_API_KEY` (or equivalent)
4. **Update** `/functions/api/contact.js` with your CRM integration

## Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create new GA4 property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Site**
   - Update `index.html` with GA4 script
   - Or use `src/utils/analytics.js` helper functions

### Google Tag Manager

1. **Create GTM Container**
   - Go to [Google Tag Manager](https://tagmanager.google.com)
   - Create new container
   - Get Container ID (GTM-XXXXXXX)

2. **Add to Site**
   - Update `index.html` with GTM scripts
   - Configure tags, triggers, and variables in GTM dashboard

## Performance Optimization Checklist

- ✅ Images optimized (WebP format)
- ✅ Code splitting enabled (Vite default)
- ✅ Lazy loading for below-fold content
- ✅ Minified CSS/JS
- ✅ HTTP/2 enabled (Cloudflare default)
- ✅ CDN distribution (Cloudflare)
- ✅ Cache headers configured (`_headers` file)

## Testing Before Deployment

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Monitoring & Maintenance

1. **Monitor Performance**
   - Use Cloudflare Analytics
   - Run Lighthouse audits regularly
   - Monitor Core Web Vitals

2. **Check Conversion Rates**
   - Track form submissions in GA4
   - Monitor CTA click-through rates
   - A/B test variations

3. **Keep Dependencies Updated**
   ```bash
   npm update
   npm audit fix
   ```

## Rollback Procedure

If issues occur after deployment:

1. **Via Cloudflare Dashboard**
   - Go to **Deployments**
   - Select previous successful deployment
   - Click **Rollback to this deployment**

2. **Via Git**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

## Support Contacts

- **Cloudflare Support:** [Cloudflare Community](https://community.cloudflare.com)
- **Project Issues:** Create an issue in GitHub repository

## Useful Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=barqar-landing-page
```

---

**Last Updated:** October 2025  
**Maintained by:** BARQAR Development Team

