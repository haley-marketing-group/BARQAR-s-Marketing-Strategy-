# Quick Start Guide - BARQAR Landing Page

Get up and running in 5 minutes! 🚀

## Step 1: Install Dependencies

```bash
cd barqar-landing-page
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Step 3: Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

## Step 4: Preview Production Build

```bash
npm run preview
```

## What's Included?

✅ **8 Page Sections**
- Hero with animated background
- Problem identification
- Solution framework
- Blueprint overview
- Authority/social proof
- Final CTA
- Footer
- Promotional fly-in banner

✅ **Fully Functional Contact Form**
- Validation
- Spam prevention
- Success/error states
- Modal interface

✅ **Smooth Animations**
- Scroll-triggered fade-ins
- Animated counters
- Hover effects
- Modal transitions

✅ **Mobile Responsive**
- Works on all devices
- Touch-optimized
- Responsive typography

✅ **Ready for Deployment**
- Cloudflare Pages configuration
- GitHub Actions CI/CD
- Security headers
- Performance optimized

## Next Steps

### Before Deploying

1. **Add Your Content**
   - Replace placeholder contact info in `src/components/sections/Footer.jsx`
   - Add real statistics in `src/components/sections/AuthoritySection.jsx`
   - Add BARQAR logo files to `public/` folder

2. **Configure Integrations**
   - Set up email service (see `functions/api/contact.js`)
   - Set up CRM integration (see `functions/api/contact.js`)
   - Add Google Analytics ID (see `index.html`)

3. **Test Everything**
   - Fill out the contact form
   - Test on mobile devices
   - Check all CTAs work
   - Verify responsive design

### Deploy to Cloudflare Pages

See `DEPLOYMENT.md` for complete instructions.

**Quick Deploy:**
1. Push to GitHub
2. Connect repo in Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## Need Help?

- **Full Documentation:** See `README.md`
- **Deployment Guide:** See `DEPLOYMENT.md`
- **Performance Tips:** See `OPTIMIZATION.md`
- **Project Summary:** See `PROJECT_SUMMARY.md`

## File Structure

```
src/
├── components/       # All React components
├── utils/           # Helper functions
├── App.jsx          # Main app component
└── index.css        # Global styles

functions/           # Cloudflare Pages Functions
├── api/
    └── contact.js   # Form submission handler

public/              # Static assets (add your images here)
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Tips

💡 **The dev server has hot reload** - changes appear instantly  
💡 **Use Chrome DevTools** - Right-click > Inspect for debugging  
💡 **Test mobile view** - DevTools > Toggle device toolbar (Cmd+Shift+M)  
💡 **Check console** - Look for any errors or warnings  

## Support

If you encounter issues:
1. Check `README.md` for detailed setup
2. Ensure Node.js 18+ is installed
3. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
4. Check browser console for errors

---

**Ready to launch?** 🎉

Your landing page is built with modern web technologies and follows best practices for performance, accessibility, and SEO. You're all set to deploy and start collecting leads!

**BARQAR** - *"Don't be part of the herd. BE HEARD."*

